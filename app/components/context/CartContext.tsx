'use client'
import { createContext, useContext, useState } from "react";

interface CartContextType {
    addToCart: (item: any[]) => void;
    cantItems: number;
  }

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext=()=>useContext(CartContext)


export const CartProvider= ({children})=>{
    const[cart, setCart]= useState([])
    console.log(cart)

    const addToCart=(item)=>{
        setCart([...cart,...item])       
    }    

    let cantItems=cart.length

    return(
        <CartContext.Provider value={{addToCart,cantItems}}>
            {children}
        </CartContext.Provider>
    )   
}

