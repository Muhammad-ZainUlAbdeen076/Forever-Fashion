import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title.jsx'
import Productitem from '../components/Productitem.jsx'

const RelatedProducts = ({category,subCategory}) => {

const {products } = useContext(ShopContext);
const [related, setrelated] = useState([]);


useEffect(()=>{
   if(products.length > 0){
     let productcopy = products.slice();
     productcopy = productcopy.filter((item)=>category === item.category);
     productcopy = productcopy.filter((item)=>subCategory === item.subCategory);
     setrelated(productcopy.slice(0,5));
     
    }
},[products])


  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
         <Title Text1={'RELATED'} Text2={'PRODUCTS'}/>
      </div>


      <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {
          related.map((item,index)=>(
              <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))

        }
      </div>


    </div>
  )
}

export default RelatedProducts
