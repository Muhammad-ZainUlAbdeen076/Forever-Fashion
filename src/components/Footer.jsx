import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' py-1'>
      <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  text-sm px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
         <div>
            <img src={assets.logo} alt="logo" className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta debitis suscipit error dolorum eos? Totam aperiam hic veniam dicta dolor ullam possimus tenetur, officia 
            </p>
         </div>

         <div>
              <p className='text-xl font-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Delivery</li>
                  <li>Pivacy policy</li>
              </ul>
         </div>

         <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212456-7898-45</li>
                <li>contact@forver.com</li>
            </ul>
         </div>

      </div>

<div>
    <hr />
    <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved.</p>
</div>

    </div>
  )
}

export default Footer
