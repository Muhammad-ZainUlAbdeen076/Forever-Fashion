import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { useState } from 'react'
import { assets } from '../assets/assets.js'
import Title from '../components/Title.jsx'
import Productitem from '../components/Productitem.jsx'



const Collection = () => {

const {products, search, showSearch} = useContext(ShopContext);
const [showfilter, setshowfilter] = useState(false);
const [filterproducts, setFilterproducts] = useState([]);
const [category,setCategory] = useState([]);
const [subcategory,setSubcategory] = useState([]);
const [sorttype,setSorttype] = useState('relavent');

 
const togglecategory = (e)=>{

  if(category.includes(e.target.value)) {
    setCategory(prev=> prev.filter(item => item !== e.target.value));
  }
  else{
    setCategory(prev => [...prev, e.target.value]);
  }

}



const toggleSubcategory = (e)=>{

  if(subcategory.includes(e.target.value)) {
    setSubcategory(prev=> prev.filter(item => item !== e.target.value));
  }
  else{
    setSubcategory(prev => [...prev, e.target.value]);
  }

}


const applyFilter = () => {
  let productscopy = products.slice();

if(showSearch && search){
  productscopy = productscopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
}


if(category.length > 0){
  productscopy = productscopy.filter(item => category.includes(item.category));
}

if(subcategory.length > 0){
  productscopy = productscopy.filter(item => subcategory.includes(item.subCategory));
}


setFilterproducts(productscopy);

}



const sortproducts = () => {

let fpCopy = filterproducts.slice();
switch(sorttype){
    case 'low-high':
      setFilterproducts(fpCopy.sort((a,b)=> a.price - b.price));
      break;
    case 'high-low':
      setFilterproducts(fpCopy.sort((a,b)=> b.price - a.price));
    break;
    default:
      applyFilter();
      
}

}


useEffect(()=>{
   applyFilter();
},[category,subcategory,search,showSearch])

   
useEffect(()=>{
sortproducts();
},[sorttype])




  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
     {/* -----left side----  */}
{/* ---Filter Options--- */}
<div className='min-w-60'>
<p onClick={()=>setshowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer  gap-2'>FILTERS
  <img className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="dropdown" />
</p>
{/* -----Subcategory filter--- */}
   <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
       <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
     <p className='flex gap-2'>
      <input className='w-3' type="checkbox" value={'Men'} onChange={togglecategory}/>Men
     </p>
     <p className='flex gap-2'>
      <input className='w-3' type="checkbox" value={'Women'} onChange={togglecategory}/>Women
     </p>
    <p className='flex gap-2'>
    <input className='w-3' type="checkbox" value={'Kids'} onChange={togglecategory}/>Kids
    </p>
       </div>
     </div>
 <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '' : 'hidden'} sm:block`}>
    <p className='mb-3 text-sm font-medium'>TYPE</p>
       <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
     <p className='flex gap-2'>
      <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubcategory}/>Topwear
     </p>
     <p className='flex gap-2'>
      <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubcategory}/>Bottomwear
     </p>
    <p className='flex gap-2'>
    <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubcategory}/>Winterwear
    </p>
       </div>
     </div>
</div>



{/* right side */}
<div className='flex-1'>
   <div className='flex justify-between text-base sm:text-2xl mb-4'>
         <Title Text1={'ALL'} Text2={'COLLECTIONS'}/>
          {/* product sort */}
          <select onChange={(e)=>setSorttype(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
   </div>

{/* ----Map Product--- */}
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
{
filterproducts.map((item, index)=>(
     <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>

))

}
</div>
</div>


    </div>
  )
}
export default Collection
