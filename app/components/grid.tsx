import React from 'react'
import Image from "next/image"
import grid_image from '../../public/assets/grid_image.jpg'
import grid_image2 from '../../public/assets/grid_image2.jpg'

const Grid = () => {
  return (
    <div className='flex flex-col flex-wrap '>
        <span className=" text-lg font-bold text-blue-500 mt-4 mx-auto">Promotions</span>
        <h3 className='my-4 text-2xl font-bold mx-auto'>Our Promotions Event</h3>

        <div className='mt-2 mx-auto flex flex-col xl:flex-row w-2/3 gap-4 mb-2 justify-center'>
            <div className='flex flex-col gap-4'>
    
                <div className='flex bg-[#373c40] items-center justify-center lg:justify-normal flex-wrap rounded'>
                    <Image src={grid_image} alt='' width={150} height={200} className='max-w-full h-auto md:rounded-l'/>
                    <div className='p-6 text-white text-center'>
                        <h2 className='text-2xl font-bold'>Get Up To</h2>
                        <h3 className='text-3xl font-bold my-3'>60%</h3>
                        <p className='text-xl'>For The Summer Season</p>
                    </div>      
                </div>

                <div className='flex flex-col bg-black rounded'>
                    <h1 className='text-3xl font-bold my-6 mx-auto text-white'>Get 30% OFF </h1>
                    <p className='text-white mx-auto text-lg font font-semibold'>USE PROMO CODE</p>
                    <span className='text-black px-3 mx-auto mt-1 mb-6 bg-slate-400 rounded text-xl'>Open Weekend Sale</span>
                </div>

            </div>

            <div className='bg-black flex flex-col rounded text-white justify-center items-center'>
                <h1 className=' px-4 text-sm font-semibold text-center mb-1'>FLEX SWEATSHIRT</h1>
                <div className='flex flex-row text-lg px-4 justify-center'>
                    <span className='line-through'>$100.00 </span>
                    &nbsp;
                    <span className=''>$75.00</span>
                </div>
                    <Image src={grid_image2} alt="Grid_Image_2"  className='mt-2 max-w-full h-auto rounded' width={215}/>    
            </div>

            <div className='bg-black flex flex-col rounded text-white justify-center items-center'>
                <h1 className=' px-4 text-sm font-semibold text-center mb-1'>FLEX SWEATSHIRT</h1>
                <div className='flex flex-row text-lg px-4 justify-center'>
                    <span className='line-through'>$100.00 </span>
                    &nbsp;
                    <span className=''>$75.00</span>
                </div>
                    <Image src={grid_image2} alt="Grid_Image_2"  className='mt-2 max-w-full h-auto rounded' width={215}/>    
            </div>

            

        </div>
    </div>
  )
}

export default Grid