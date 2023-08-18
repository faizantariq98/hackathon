import Image from "next/image"
import {ShoppingCart}  from "lucide-react"

import {Button} from "@/components/ui/button"
import heroImage from "../../public/assets/hero_image.jpg"
import Link from "next/link";

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-end items-center my-10 pr-2 gap-2'>
        <div className='flex-1 justify-start items-start flex-wrap'>
            <span className='rounded p-2 mx-5 my-4 text-blue-900 text-lg font-semibold'>Best Prices</span>
            <h1 className='p-1 text-4xl font-bold mx-4 my-5'>The Late Summer Sale Upto 50% OFF!!!</h1>
            <h3 className='p-1 pr-2 text-xl font-bold m-4 text-gray-600'>Anyone can beat you but No one can beat you as long as you wear Our outfits </h3>
            <Link href="/female" passHref>
            <Button className='h-16 m-5'>
               <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
            </Button>
            </Link>
        </div>

        <div className=' flex flex-1 justify-center px-2'>
            <Image src={heroImage} alt="Hero Image" />
        </div>

    </div>
  )
}

export default Hero