"use client"

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { createContext,useReducer } from 'react'
import grid_image from '../../public/assets/showcase_image2.jpg'
import grid_image2 from '../../public/assets/product_image.jpg'
import grid_image3 from '../../public/assets/showcase_image3.jpg'
import {reducer} from './reducer'
import ContextCart from './ContextCart'
import ProductList from '../[product]/productList'
import { productList } from '../page'


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
  

const cartItems:cartItemsType = [
  {
    id:'c1',
    name:'Cameryn Sash Tie Dress',
    type:'Dress',
    price:500.00,
    quantity:3,
    pic:grid_image
  },
  {
    id:'c2',
    name:'Cameryn Sash Tie Dress',
    type:'Dress',
    quantity:1,
    price:450.00,
    pic:grid_image2
  },
  {
    id:'c3',
    name:'Cameryn Sash Tie Dress',
    type:'Dress',
    quantity:2,
    price:545.00,
    pic:grid_image3
  },
  
]


const initialState:initialType = {
  cartItems:cartItems,
  totalItems:cartItems.reduce((accumulator, object) => {
                return accumulator + object.quantity
              }, 0),
  totalAmount:cartItems.reduce((accumulator, object) => {
              return accumulator + (object.price*object.quantity)
              }, 0)
}

export const CartContext = createContext<initialType | null>(initialState);

const Cart = () => {
    const[state,dispatch] = useReducer(reducer,initialState)

    const removeItems=(id:string)=>{
      return dispatch({
        type:"Delete",
        payload:id
      })
    }

    const increment=(id:string)=>{
      return dispatch({
        type:"increment",
        payload:id
      })
    }

    const decrement=(id:string)=>{
      return dispatch({
        type:"decrement",
        payload:id
      })
    }
   
  return (
    <CartContext.Provider value={{...state}}>
        <ContextCart 
         removeItems={removeItems}
         increment={increment} 
         decrement={decrement}/>
    </CartContext.Provider>
  )
}

export default Cart;


{/*  */}