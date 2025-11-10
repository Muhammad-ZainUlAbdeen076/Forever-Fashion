import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryCharge = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setshowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
 const navigate = useNavigate();

  const AddtoCart = async (productId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[productId]) {
      if (cartData[productId][size]) {
        cartData[productId][size] += 1;
      } else {
        cartData[productId][size] = 1;
      }
    } else {
      cartData[productId] = {};
      cartData[productId][size] = 1;
    }

    setCartItems(cartData);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getCartCount = () => {
    let totalcount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item]) {
            totalcount += cartItems[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalcount;
  };


const updateQuantity = async (itemId,size,quantity) => {

let cartData = structuredClone(cartItems);
  cartData[itemId][size] = quantity;

  setCartItems(cartData);

}


const getCartAmount =  () => {
  let totalAmount = 0;
  for(const items in cartItems){
    let itemInfo = products.find((products)=> products._id === items);
    for(const item in cartItems[items]){
      try {
        if(cartItems[items][item] > 0){
         totalAmount += itemInfo.price * cartItems[items][item];
        }
      } catch (error) {
        
      }
    }
  }
  return totalAmount;
}

  
  const value = {
    products,
    currency,
    deliveryCharge,
    search,
    setSearch,
    showSearch,
    setshowSearch,
    cartItems,
    setCartItems,
    AddtoCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
