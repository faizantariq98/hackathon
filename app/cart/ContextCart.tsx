"use client";
import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { CartContext } from "../store/MainStore";
import { CircleOff } from "lucide-react";
import getStripePromise from "@/lib/stripe";

const ContextCart = () => {
  const {cartState,deleteFromCart,increment,decrement} = useContext(CartContext);


  const handleCheckout = async ()=>{
    
    const stripePromise=await getStripePromise();
    const response = await fetch("/api/",{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      cache:'no-cache',
      body:JSON.stringify(cartState.cartItems)
    });
    const data = await response.json();
    if(data.session){
      stripePromise?.redirectToCheckout({sessionId : data.session.id})
    }
  }

  
  if (cartState?.cartItems.length === 0) {
    return (
      <div className="px-2 py-10 flex flex-col bg-red-500 justify-center items-center">
        <div className="flex flex-row gap-4">
          <CircleOff className="w-12 h-12" />
          <p className="text-4xl"> No Items in Cart</p>
        </div>
        <div className="flex flex-row gap-4">
          <p className="text-4xl">
            {" "}
            Please Return back and add products in your cart
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-2 my-10 mb-5">
        <h1 className="text-2xl font-bold px-2 my-4">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row sm:max-w-[85%] mx-auto  gap-4 my-10">
          <div className="flex flex-col flex-1 gap-4">
            {cartState?.cartItems.map((items:any) => {
              return (
                <div
                  className="flex flex-col md:flex-row flex-1 border-2 rounded"
                  key={items.id}
                >
                  <Image
                    src={items.pic}
                    alt="yolo"
                    width={180}
                    height={320}
                    className="max-h-[280px] h-auto max-w-full object-fill object-top rounded mx-auto md:mx-0 "
                  />
                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between p-4 gap-x-4">
                      <h3 className="text-2xl font-bold">{items.name}</h3>
                      <Button onClick={() => {
                        deleteFromCart(items.id)
                      }}>
                        <Trash2 />
                      </Button>
                    </div>
                    <h4 className="text-xl font-bold text-gray-500 px-4">
                      {items.type}
                    </h4>
                    <h2 className="text-2xl font-semibold my-2 px-4">
                      Delivery Estimation
                    </h2>
                    <p className="text-xl font-semibold text-yellow-400 mb-6 px-4">
                      5 working days
                    </p>
                    <div className="flex justify-between p-4">
                      <span className="text-2xl font-bold">
                        $ {items.price * items.quantity}
                      </span>
                      <div className="flex gap-x-2 items-center">
                        <Button
                          className=" border-2 "
                          onClick={() => {
                             if(items.quantity<=1)return;
                              decrement(items.id)
                          }}
                        >
                          -
                        </Button>
                        <h6 className="text-xl font-bold">{items.quantity}</h6>
                        <Button
                          className=" border-2 "
                          onClick={() => {
                             increment(items.id)
                          }}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 flex flex-col rounded border-2 lg:self-start lg:sticky lg:top-24">
            <h1 className="text-2xl font-bold">Order Summary</h1>
            <div className="flex justify-between gap-4 my-4">
              <h4 className="text-xl font-bold">Quantity</h4>
              <h2 className="text-xl font font-semibold">
                {cartState?.totalItems}{" "}
              </h2>
            </div>
            <div className="flex justify-between gap-4 my-4">
              <h4 className="text-xl font-bold">SubTotal</h4>
              <h2 className="text-xl font font-bold">
                $ {cartState?.totalAmount}
              </h2>
            </div>
            <Button className="mt-12" onClick={handleCheckout}>Place Order</Button>
          </div>
        </div>
      </div>
    );
  }
};

export default ContextCart;
