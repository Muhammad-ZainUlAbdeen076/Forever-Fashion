import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestseller,setBestSeller] = useState([]);

useEffect(()=>{
    const bestsellers = products.filter((item)=>(item.bestseller === true));
    setBestSeller(bestsellers.slice(0,5));
},[])

  return (
    <div className='my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='text-center text-3xl py-8'>
<Title Text1={'BEST'} Text2={'SELLERS'}/>
<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a consectetur, qua.</p>
      </div>


{/* ----Rending Product---- */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
  // latestproducts is always an array (initially []). Safe to map.
  bestseller.map((item, index) => (
    <Productitem
      key={item._id ?? index}
      id={item._id ?? item.id}
      image={item.image}
      name={item.name}
      price={item.price}
    />
  ))
}
</div>

    </div>
  )
}

export default BestSeller
