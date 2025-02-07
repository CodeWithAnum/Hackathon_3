"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { ShirtsProductsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart } from "../actions/actions";
import Link from "next/link";

const Shirt = () => {
    const [product, setProduct] = useState<product[]>([])
    useEffect(() => {
        async function fetchproduct() {
            const fetchedProduct : product [] = await client.fetch(ShirtsProductsQuery)
            setProduct(fetchedProduct)
        }
        fetchproduct()
    }, [])

     const handleAddToCart = (e: React.MouseEvent, product: product) => {
                  e.preventDefault()
                  Swal.fire({
                    position : "top-right",
                    icon : "success",
                    title : `${product.name} added to cart`,
                    showConfirmButton : false,
                    timer : 1000
                  })
                  addToCart(product)
                }   
    

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 ">
            <h1 className="text-2xl font-bold mb-6 text-center">Shirts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.map((product) => (
                <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                   {product.slug?.current && (
                     <Link href={`/product/${product.slug.current}`} >
                    {product.image && (
                        <Image src={urlFor(product.image).url()} alt="image" width={200} height={200} className="w-full h-48 object-cover rounded-md"/>
                    )}
                    <h1 className="text-lg font-semibold mt-4">{product.name}</h1>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-[#FFAD33]' : 'text-yellow-400'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p>{product.discountPercent}% discount</p>
                    <p className="text-gray-500 mt-2">{product.price ? `$${product.price}` : "Price not available"}</p>
                    <button className="bg-black text-white font-semibold py-2 px-16 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                    onClick={(e) => handleAddToCart(e, product)} >Buy Now
                    </button>  
                    </Link>
                   )}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Shirt;