import React, { useEffect, useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title.jsx';
import Productitem from './Productitem.jsx';

const LatestCollection = () => {

const { products } = useContext(ShopContext);
const [latestproducts, setlatestproducts] = useState([]);

useEffect(() => {
  // Guard: products may be undefined initially
  if (Array.isArray(products) && products.length > 0) {
    setlatestproducts(products.slice(0, 10));
  } else {
    setlatestproducts([]);
  }
}, [products]);

console.log('LatestCollection products:', products);

  return (
    <div className='my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='text-center py-8 text-3xl'> 
        <Title Text1={'Latest'} Text2={'Collection'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-[#180f07]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae itaque obcaecati voluptates facilis repellendus  recusanda nesciunt.</p>
      </div>

{/* ----Rending Product---- */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
  // latestproducts is always an array (initially []). Safe to map.
  latestproducts.map((item, index) => (
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

export default LatestCollection
