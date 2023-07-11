import React from 'react'
import Image from 'next/image';
import showcase_image1 from '../../public/assets/showcase_image1.jpg'
import showcase_image2 from '../../public/assets/showcase_image2.jpg'
import showcase_image3 from '../../public/assets/showcase_image3.jpg'
const Showcase = () => {
  return (
    <div className='flex flex-col mt-4 md:mb-44 lg:mb-24'>
        <span className=" text-xl font-bold text-blue-500 mt-4 mx-auto">Products</span>
        <h3 className='my-4 text-3xl font-bold mx-auto'>Check What We Have</h3>

        <div className='my-5 w-2/3 flex flex-col lg:flex-row mx-auto rounded items-center lg:items-stretch gap-2 lg:gap-0 md:mb-24'>
                <div className=' md:w-1/2 lg:w-1/3 transition ease-in-out hover:scale-105'>
                    <Image src={showcase_image1} alt="pic1" 
                    className='h-full rounded object-cover max-w-full'/>
                    <div className='rounded-b rounded-l rounded-r border'>
                        <h4 className='text-xl font-semibold p-4'>BRUSHED RAGLAN SWEAT SHIRT</h4>
                        <h4 className='text-xl font-semibold px-4 py-2'>$ 195</h4>
                    </div>
                </div>
                <div className='md:w-1/2 lg:w-1/3 hover:scale-105 ease-in-out delay-100'>
                    <Image src={showcase_image2} alt="pic2 " className=' h-full object-cover rounded max-w-full'/>
                    <div className='rounded-b rounded-l rounded-r border'>
                        <h4 className='text-xl font-semibold p-4'>BRUSHED RAGLAN SWEAT SHIRT</h4>
                        <h4 className='text-xl font-semibold px-4 py-2'>$ 195</h4>
                    </div>
                </div>
                <div className=' md:w-1/2 lg:w-1/3 hover:scale-105 ease-in-out delay-100'>
                    <Image src={showcase_image3} alt="pic3" className=' h-full rounded object-cover max-w-full'/>
                    <div className='rounded-b rounded-l rounded-r border'>
                        <h4 className='text-xl font-semibold p-4'>BRUSHED RAGLAN SWEAT SHIRT</h4>
                        <h4 className='text-xl font-semibold px-4 py-2'>$ 195</h4>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Showcase;

