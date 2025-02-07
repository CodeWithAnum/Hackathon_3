"use client";

import React, { useEffect, useState } from 'react'
import { product } from '../../../types/products'
import { getCartItem, removeFromCart, updateCategoryQuantity } from '../actions/actions'
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';

const CartPage = () => {

    const [cartItems, setCartItems] = useState<product[]>([])

    useEffect(() => {
        setCartItems(getCartItem());
    }, []);
    
    const handleRemove = (id : string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3045d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if(result.isConfirmed) {
                removeFromCart(id)
                setCartItems(getCartItem())
                Swal.fire("Removed!", "Item has been removed.", "success");
            }
        })
    } 
  
 const handleQuantityChange = (id : string, quantity : number) => {
    updateCategoryQuantity(id, quantity);
    setCartItems(getCartItem())
 }

 const handleIncrement = (id : string) => {
    const product = cartItems.find((item) => item._id === id);
    if(product)
        handleQuantityChange(id, product.inventory + 1)
 }

 const handledecrement = (id : string) => {
    const product = cartItems.find((item) => item._id === id);
    if(product && product.inventory > 1)
        handleQuantityChange(id, product.inventory - 1)
 }

 const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory,0)
 }

 const router = useRouter();

 const handledProceed = () => {
    Swal.fire({
        title: "Proceed to Checkout?",
        text: "Please review your cart before checkout",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3045d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Proceed!"
    }).then((result) => {
        if(result.isConfirmed){
            Swal.fire("Success" , "Your Order has been successfully processed,", "success");
            router.push("/checkout")
            setCartItems([]);
        }
    })
 }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handledecrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold text-gray-800">
              ${calculatedTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handledProceed}
            className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

