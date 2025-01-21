"use client"
import Image from "next/image"
import React,  { useEffect, useState } from "react"
import { Product } from "../../../types/products"
import client from "@/sanity/lib/client"
import { allProducts, four } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
const Products = () => {
    const [product, setProduct] = useState<Product[]>([])
    useEffect(() => {
        async function fetchproduct() {
            const fetchedProduct : Product[] = await client.fetch(allProducts)
            setProduct(fetchedProduct)
        }
        fetchproduct()
    },[])

  return (
    <div className="max-x-6xl mx-auto px-4 py-8">
        <h1 className=" text-2xl font-bold mb-6 text-center">Our Latest Product</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {product.map((product) => (
            <div
             key={product._id}
             className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
             >
                {product.image && (
                    <Image
                        src={urlFor(product.image).url()}
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover rounded-md"
                        alt="image"/>

                )}
                <h2 className="text-lg font-semibold mt-4">{product.name } </h2>
               <p className="text-gray-500 mt-2">
                 {product.price ? `${product.price}` : "price not available"}
               </p>
            </div>

        ))}
            </div>
        </div>
      
  )
}

export default Products
