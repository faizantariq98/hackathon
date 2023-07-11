"use client"
import React from 'react'
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type Props={
    pic:any,
    name:string,
    price:number,
    dressType:string,
    parameter:string,
    ID:string
}

const ProductList:React.FC<Props> = ({pic,name,price,dressType,parameter,ID}) => {
      const route = useRouter();

      function Hello(e:any){
        e.preventDefault()
         route.push(`/${parameter}/${ID}`)
      }
      
  return (
    <div className='flex flex-col rounded ring-1'>
        <Image src={urlForImage(pic).url()} alt="Product Pic" width={220}height={300} className='rounded h-full object-cover object-top'/>
        <div className='flex flex-col p-2 rounded-l rounded-b rounded-r'>
            <h4 className='text-lg font-semibold mt-1'>{name}</h4>
            <h2 className='text-lg font-semibold text-gray-400'>{dressType}</h2>
            <h1 className='text-xl font-bold my-2'>PKR {price}</h1>
            <Button onClick={Hello}>Buy Now</Button>
        </div>
    </div>
  )
}

export default ProductList;