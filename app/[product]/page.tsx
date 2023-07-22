import Error from "./error";
import ProductList from "./productList";
import { client } from "@/sanity/lib/client";
import { Image } from "sanity";

export interface resPonseType{
  price:number,
  _id:string,
  productName:string,
  image:Image,
  category:{name:string},
  dressType:string,
  parameter:string
}
 

const Product =async ({params}:{params:{product:string}}) => {

  const res:resPonseType[] = await client.fetch(`*[_type=="product" && category->name == '${params.product}']{
      price,
      _id,
      productName,
      image,
      dressType,
      category -> {
      name
    }
    }`)
      {
        if(params.product ==='female'|| params.product ==='male'|| params.product ==='kids'){
          {/*If condition is applied only to restrict users to these 3 pages only */}
          return <div className="grid md:grid-cols-[auto,auto] lg:grid-cols-[auto,auto,auto,auto] justify-center gap-8 mt-10">
                   {
                    res.map((items:resPonseType)=>{
                        return <>
                        <ProductList 
                        pic={items.image[0]} 
                        name={items.productName} 
                        price={items.price}
                        key={items._id}
                        dressType={items.dressType}
                        parameter={params.product}
                        ID={items._id}
                        />
                        </>
                    })
                   }         
          </div>
        
        }
        else
        {
          return <Error error={"Something Went Wrong Please Try Again"} reset={()=>{

          }}/>
        }
      }
}

export default Product;


