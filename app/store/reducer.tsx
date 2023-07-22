
import { useRouter } from "next/navigation";

import { initialType } from "./MainStore"
type actionType={
    type:string,
    payload:any
  }

  

export const reducer = (cartState:initialType,action:any|actionType)=>{
    if(action.type === 'addToCart'){

        const check = cartState.cartItems.every((item)=>{return item.id != action.payload.id})

        if (check){
            cartState.cartItems.push(action.payload)
            cartState.totalItems = cartState.cartItems.reduce((accumulator, object) => {
                return accumulator + object.quantity
              }, 0)
    
             cartState.totalAmount=cartState.cartItems.reduce((accumulator, object) => {
                return accumulator + (object.price*object.quantity)
                }, 0)  
                
            return {...cartState}    
        }else{
            alert("item is already added");
        }
    }
    else if(action.type === 'deleteFromCart'){
        cartState.cartItems=cartState.cartItems.filter((currentElement)=>{
            return currentElement.id != action.payload
            })
            cartState.totalAmount=cartState.cartItems.reduce((accumulator, object) => {
            return accumulator + (object.price * object.quantity)
            }, 0)
            cartState.totalItems=cartState.cartItems.reduce((accumulator, object) => {
              return accumulator + object.quantity
            }, 0)
      
           return {...cartState
            }
    }

    else if (action.type === 'increment'){
        cartState.cartItems.forEach((element)=>{
          if (element.id === action.payload){
            element.quantity++;
            cartState.totalItems++;
          }
          cartState.totalAmount=cartState.cartItems.reduce((accumulator, object) => {
            return accumulator + (object.price * object.quantity)
            }, 0)
        })
        return {...cartState}; 
    }

    if (action.type === 'decrement'){
        cartState.cartItems.forEach((element)=>{
          if (element.id === action.payload){
            element.quantity--;
            cartState.totalItems--;
            cartState.totalAmount= cartState.totalAmount-element.price;
          }
        })
       
        return {...cartState};
      }
    
    return {...cartState}
}
