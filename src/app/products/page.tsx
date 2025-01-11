// additional file 

import client from '@/sanity/lib/client';
import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, ReactPortal, Key } from 'react';
import Image from 'next/image';
const Products = async () => {
  const products = await client.fetch(`
    *[_type == "product"] {
      name,
      price,
      description,
      "image": image.asset->url
    }
  `);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; price: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; image: string | undefined; }, index: Key | null | undefined) => (
          <li key={index}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Image
            src="/product.image"
             alt="/product.name"
             height={100}
             width={50}
              />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
