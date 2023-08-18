import {Stripe} from "stripe";
import { NextRequest, NextResponse } from "next/server";
//import { db } from "@vercel/postgres";
import {sql} from "@vercel/postgres"
import { and, asc, desc, eq, or } from 'drizzle-orm';
import { customerTable,orders,ordersTable,NewCustomers,NewOrders,NewProducts,productsTable,products,customers,db } from "@/lib/drizzle";


const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!
const key = process.env.STRIPE_SECRET_KEY ||"";

const stripe = new Stripe(key,{
    apiVersion:'2022-11-15'
})
 


  export async function POST(request:NextRequest,) {
        let sign:any;
        let event:Stripe.Event;

        const buf = await request.text()
        if(request.headers.get('stripe-signature')){
            sign = request.headers.get('stripe-signature');
        }
    try{
        event = stripe.webhooks.constructEvent(buf,sign ,webhookSecret);
        if(event.type === "checkout.session.completed"){
            const session:any = event.data.object;
        
            const line_items = await stripe.checkout.sessions.listLineItems(session.id)

            if(session && line_items){

                const customerRegistered = await db.select(
                {customer_id:customerTable.customer_id}
                ).from(customerTable).where(eq(customerTable.customer_mobile,session.customer_details.phone));


                const totalItems = line_items.data.reduce((accumulator:any, object:any) => {
                    return accumulator + object.quantity
                  }, 0)

                if(customerRegistered.length === 0){
                    const insertCustomer= await db.insert(customerTable).values
                    ({customer_email:session.customer_details.email,
                        customer_mobile:session.customer_details.phone,
                        customer_address:session.customer_details.address.line1 + ' ' + session.customer_details.address.line2 +' '+ session.customer_details.address.city + ' '+ session.customer_details.address.country,
                        customer_name:session.customer_details.name,

                      }).returning();

                      if(insertCustomer){
                        const NewCustomerRegistered = await db.select(
                        {customer_id:customerTable.customer_id}
                        ).from(customerTable).where(eq(customerTable.customer_mobile,session.customer_details.phone))

                        if(NewCustomerRegistered){
                            await db.insert(ordersTable).values({
                                        total_amount:session.amount_total,
                                        total_items:totalItems,
                                        pi_number:session.payment_intent,
                                        customer_id:NewCustomerRegistered[0].customer_id}).returning();
                        } 

                }             
                }else{
                    await db.insert(ordersTable).values({
                        total_amount:session.amount_total,
                        total_items:totalItems,
                        pi_number:session.payment_intent,
                        customer_id:customerRegistered[0].customer_id
                    }).returning()
                }
                
            }
                
        }    
        else {
            console.log(`Unhandled event type ${event.type}`);
        }
        console.log('✅ Success:', event.id);
    }catch(error : any){
        console.log(`❌ Error message: ${error.message}`)
        return NextResponse.json({ error: {message:`Webhook Error: ${error.message}`} }, { status: 400 })
    }

}
