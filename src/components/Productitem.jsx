import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Productitem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link className=' cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
<img src={image[0]} alt="" className='hover:scale-110 transition ease-in-out'/>
      </div>
      <p className='pt-3 pb-1 text-sm text-[#180f07]'>{name}</p>
      <p className='text-sm font-bold text-[#614b36]'>{currency}{price}</p>
    </Link>
  )
}

export default Productitem
