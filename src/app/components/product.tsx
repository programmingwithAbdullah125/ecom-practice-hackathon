// "use client"
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// interface User {
//     name: string;
//     price: number;
//     image: string
//     id: number;
// }
// const productData = () => {
//     const [fruits, setFruits] = useState<User[]>([]);
//     useEffect(()=> {
//        const fetchData = async() => {
//         try{
//             const response = await fetch('https://677ef86d0476123f76a51846.mockapi.io/test')
//             const data = await response.json()
//             setFruits(data)
//         }
//         catch(error){
//             console.log("product data not found", error)
//         };
//        }
//        fetchData()
//     }, [])
//   return (
//     <>
// <div>
//     <div className="px-6 py-12 mt-16">
//         <h1 className="text-3xl font-bold mb-8">Our Products</h1>
//         <div className="grid grid-col-1 sm:grid-cols-3 lg: grid-cols-2 gap-6">
//     {fruits.map(fruit => (
//         <div
//         key={fruit.id}
//         className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//         >
//             <div className="relative">
//             <Image
//             src={fruit.image}
//             alt={fruit.name}
//             className="w-full h-64 object-cover"
//             width={500}
//             height={500}
//             unoptimized={true}
//             />
//             <div className=" absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
//                 <button className="text-gray-100 font-semibold text-lg">
//                     Shop Now
//                 </button>
//             </div>
//             <div className="p-4 flex justify-between items-center">
//                 <div>
//             <h2 className="text-xl font-semibold mb-4">{fruit.name}</h2>
//             <p className="text-gray-700 text-sm">${fruit.price}</p>
//             <button className="border rounded-lg">Add to cart</button>
//         </div>
//         </div>
//         </div>
//          </div>
//     ))}

//     </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default productData;

import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default async function Product() {
  const products: Product[] = await sanityFetch({ query: allProducts });

  return (
    <>
      <div>
        <div className="px-6 py-12 mt-16">
          <h1 className="text-3xl font-bold mb-8">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Section */}
                <div className="relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                    width={500}
                    height={500}
                    unoptimized={true} // For better local dev handling
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
                    <button className="text-gray-100 font-semibold text-lg">
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-4 flex flex-col justify-between items-start">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-700 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between w-full items-center">
                    <p className="text-gray-800 text-lg font-bold">
                      ${product.price}
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
