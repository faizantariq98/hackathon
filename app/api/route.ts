import { NextResponse,NextRequest } from "next/server";
import {Stripe} from 'stripe'

const key = process.env.STRIPE_SECRET_KEY ||"";

const stripe = new Stripe(key,{
    apiVersion:'2022-11-15'
})


export async function POST(request:NextRequest){
    const body =await request.json();
    console.log(body);
    try {
        // Create Checkout Sessions from body params.
        if(body.length >0){
            const session = await stripe.checkout.sessions.create({
                submit_type:'pay',
                mode: 'payment',
                payment_method_types:['card'],
                billing_address_collection:'auto',
                shipping_options:[{shipping_rate:'shr_1NVrFdIn7FdR6yMZMs9op5J1'}],
                line_items:body.map((items:any)=>{
                    return {
                        price_data:{
                            currency:'pkr',
                            product_data:{
                                name:items.name,
                            },
                            unit_amount:items.price * 100,
                        },
                        quantity:items.quantity

                    }
                }),
                phone_number_collection:{enabled:true},
                shipping_address_collection:{ 'allowed_countries':['PK','US']
                },
                success_url: `${request.headers.get("origin")}/?success=true`,
                cancel_url: `${request.headers.get("origin")}/?canceled=true`,
              });
              return NextResponse.json({session})
        }else{
            return NextResponse.json({message:"No Data Found"});
        }
       
      } catch (err:any) {
        console.log(err);
        return NextResponse.json(err.message)
      }
}