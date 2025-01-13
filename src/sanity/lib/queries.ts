import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(`
    *[_type == "product"]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    priceWithoutDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageUrl": image.asset->url
    }
    `)