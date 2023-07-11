import React from 'react'
import { initialType } from './page';

type actionType={
  type:string,
  payload:string
}
export const reducer = (state:initialType ,action:actionType) => {
  
  if(action.type === "Delete" ){
      state.cartItems=state.cartItems.filter((currentElement)=>{
      return currentElement.id != action.payload
      })
      state.totalAmount=state.cartItems.reduce((accumulator, object) => {
      return accumulator + (object.price * object.quantity)
      }, 0)
      state.totalItems=state.cartItems.reduce((accumulator, object) => {
        return accumulator + object.quantity
      }, 0)

     return {...state
      }

  }
   
  if (action.type === 'increment'){
      state.cartItems.forEach((element)=>{
        if (element.id === action.payload){
          element.quantity++;
          state.totalItems++;
        }
        state.totalAmount=state.cartItems.reduce((accumulator, object) => {
          return accumulator + (object.price * object.quantity)
          }, 0)
      })
     
      
      return {...state};
      
  }

  if (action.type === 'decrement'){
    state.cartItems.forEach((element)=>{
      if (element.id === action.payload){
        element.quantity--;
        state.totalItems--;
        state.totalAmount= state.totalAmount-element.price;
      }
    })
   
    return {...state};
  }

  return {...state};
}

