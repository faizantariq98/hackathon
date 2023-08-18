"use client"
import Image from 'next/image'
import { useState,useEffect,useContext } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'
import { client } from "@/sanity/lib/client"
import { useParams} from 'next/navigation'
import { CartContext } from '@/app/store/MainStore'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'



type dataType ={
  _id:string
  image:any[],
  dressType:string,
  category:string,
  productName:string,
  price:number,
  description:string,
  size:string
}


const ProductItem =  () => {

    const {addToCart} = useContext(CartContext);
    const router = useRouter();

    const params = useParams();
    const [response,setResponse] = useState<dataType>();
    const [firstUrl,setFirstURL] = useState(''); 
    
    useEffect(()=>{
        const getData = async()=>{
          const data:dataType[] = await client.fetch(`*[_type=="product" && _id =="${params.productitem}" && category->name =="${params.product}"]{_id,
            dressType,image,category -> {name},productName,price,description
         }`)
          setResponse(data[0]);
          setFirstURL(urlForImage(data[0].image[0]).url())
          }
          getData()
    },[params.product,params.productitem])

      const [quantity,setQuantity] = useState<number>(1);
      const [ImageURL,setImageURL] = useState<string>('');
      const [size,setSize] = useState('M')

        
      return <>
      <div className='mt-8 mb-12 flex flex-col lg:flex-row lg:gap-4 justify-center gap-2 mx-4 border-b-4'>
       <div className='flex flex-row lg:flex-col gap-2 justify-center rounded m-4 px-4'>
         {
          response?.image.map((items:any)=>{
            return <Image src={urlForImage(items).url()} alt="product1" width={100} height={125} className='max-h-[125px] max-w-[100px] object-contain object-top' key={items._key} onClick={()=>{
              setImageURL(urlForImage(items).url())
            }}/>
          })
        }
        
       </div>

       <div className='rounded flex justify-center my-4 mx-2'>
        { firstUrl && <Image src={ImageURL ? ImageURL : firstUrl} alt="product main" width={315} height={450}className='max-h-[450px] h-auto max-w-full object-contain object-top'/>}

       </div>

       <div className='lg:my-4 lg:mx-2 flex flex-col lg:p-4 mx-auto' >
          <h1 className='text-xl font-semibold'>{response?.productName}</h1>
          <h4 className='text-lg font-bold text-gray-500'>{response?.dressType }</h4>
          <div className='mt-5 flex flex-col'>
              <h5 className='text-lg font-semibold'>SELECT SIZE</h5>
              <div className='text-lg my-1 space-x-8 py-1'>
                    <span className={`rounded border-2 inline font-bold p-2 ${size==`XL`&& `ring`}`} onClick={()=>{
                      setSize('XL')
                    }}>XL</span>
                    <span className={`rounded border-2 inline font-bold p-2 ${size==`L`&& `ring`}`} onClick={()=>{
                      setSize('L')
                    }}>L</span>
                    <span className={`rounded border-2 inline font-bold p-2 ${size==`M`&& `ring`}`} onClick={()=>{
                      setSize('M')
                    }}>M</span>
                    <span className={`rounded border-2 inline font-bold p-2 ${size==`SM`&& `ring`}`} onClick={()=>{
                      setSize('SM')
                    }}>S</span>
              </div>

              <div className='my-4 space-y-2'>
                  <label className='font-bold'>Quantity:</label>
                  <div className='flex flex-row gap-x-2 items-center'>
                        <Button className=' border-2 ' onClick={()=>{
                          if(quantity<=1)return;
                          setQuantity(quantity - 1 
                            )
                        }}>
                          -
                        </Button>
                        <h6 className='text-xl font-bold'>{quantity}</h6>
                        <Button className=' border-2 ' onClick={()=>{
                          setQuantity(quantity + 1 
                            )
                        }}>
                          +
                        </Button>

                        <h4 className='mx-10 text-2xl font-bold'>$ {response?.price ? (response.price * quantity):''}</h4>
                  </div>

                  <Button className='my-2' onClick={()=>{
                    addToCart({id:response?._id,
                      name:response?.productName,
                      type:response?.dressType,
                      quantity:quantity,
                      price:response?.price,
                      pic:firstUrl
                    })
                    toast.success('Item succsfully Added to Cart', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
                    router.push('/');
                  }}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add To Cart
                  </Button>
              </div>
          </div>
       </div>
    </div>
    
    <div className='mt-8 flex flex-col flex-wrap sm:max-w-[65%] gap-2 justify-center mx-auto mb-8'>
      <h1 className='text-2xl font-bold px-2'>Product Information</h1>
      <p className=' text-justify text-lg text-gray-500 px-2'>{response?.description}</p>
    </div>
  </>
    }

  
export default ProductItem