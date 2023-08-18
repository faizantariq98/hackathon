import React from 'react'
import { Facebook,Twitter,Instagram,Linkedin } from 'lucide-react';
import Link from "next/link";

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-100 rounded-sm mt-10 mb-4 '>
        <div>
            <h1 className='text-xl font-bold font-serif px-4 py-6'>Hackathon Market</h1>
            <p className='text-lg px-4 py-2 lg:text-justify'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
            
                <Facebook  className=' inline mx-2'/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Twitter   className=' inline mx-2'/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Instagram className=' inline mx-2'/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Linkedin  className=' inline mx-2'/>
         

        </div>

        <div>
            <h1 className='text-xl font-bold font-serif px-4 py-6'>Hackathon Market</h1>
            <ul className='flex flex-row md:flex-col'>
                <Link className='text-lg px-4 ' href="/male">male</Link>
                <Link className='text-lg px-4 ' href="/female">female</Link>
                <Link className='text-lg px-4 '  href="/kids">kids</Link>
                <Link className='text-lg px-4 '  href="/cart">cart</Link>
            </ul>
        </div>

        <div>
            <h1 className='text-xl font-bold font-serif px-4 py-6'>Hackathon Market</h1>
            <ul className='flex flex-row md:flex-col'>
            <Link className='text-lg px-4 ' href="/male">male</Link>
                <Link className='text-lg px-4 ' href="/female">female</Link>
                <Link className='text-lg px-4 '  href="/kids">kids</Link>
                <Link className='text-lg px-4 '  href="/cart">cart</Link>
            </ul>
        </div>

        <div>
            <h1 className='text-xl font-bold font-serif px-4 py-6'>Hackathon Market</h1>
            <ul className='flex flex-row md:flex-col'>
            <Link className='text-lg px-4 ' href="/male">male</Link>
                <Link className='text-lg px-4 ' href="/female">female</Link>
                <Link className='text-lg px-4 '  href="/kids">kids</Link>
                <Link className='text-lg px-4 '  href="/cart">cart</Link>
            </ul>
        </div>
    </div>
  )
}

export default Footer;