"use client";
import React, { ReactNode, useState } from 'react'
import Image, { StaticImageData } from 'next/image';
import { createContext,useReducer } from 'react'
import { reducer } from './reducer';

interface MyComponentProps {
    children: ReactNode;
  }

type cartItemsType = {
    id:string,
    name:string,
    type:string,
    price:number,
    quantity:number,
    pic:StaticImageData}[];
  
   export interface initialType{
      cartItems:cartItemsType,
      totalAmount:number,
      totalItems:number
    }
    
  const initialState:initialType = {
        cartItems:[],
        totalItems:0,
        totalAmount:0
 }

export const CartContext = createContext<any|null>({});

const MainStore:React.FC<MyComponentProps> = ({ children }) => {
  
  const[cartState,dispatch] = useReducer(reducer,initialState);

  const addToCart = (items:any)=>{
    return dispatch({
      type:"addToCart",
      payload:items
    })
  }

  const deleteFromCart =(item_id:string)=>{
    return dispatch({
      type:"deleteFromCart",
      payload:item_id
    })
  }

  const increment=(item_id:string)=>{
    return dispatch({
      type:"increment",
      payload:item_id
    })
  }

  const decrement=(item_id:string)=>{
    return dispatch({
      type:"decrement",
      payload:item_id
    })
  }
 
  return (
    <CartContext.Provider value={{cartState,addToCart,deleteFromCart,increment,decrement}}>
        {children}
    </CartContext.Provider>
  )
}

export default MainStore;