// // some changes in this file in store schema in variable

import { defineField } from "sanity";

const productSchema =  {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options : {
        source : "name",
        maxLength: 200,
      }
      }
    ),
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'price',
        type: 'string',
        title: 'Product Price',
      },
      // {
      //   name: 'discountPercentage',
      //   type: 'number',
      //   title: 'Discount Percentage',
      // },
      // {
      //   name: 'priceWithoutDiscount',
      //   type: 'number',
      //   title: 'Price Without Discount',
      //   description: 'Original price before discount'
      // },
      {
        name:'rating',
        type:'number',
        title:'Rating',
        description:'Rating of the product'
      },
      {
        name: 'ratingCount',
        type: 'number',
        title: 'Rating Count',
        description: 'Number of ratings'
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        },
        description: 'Add tags like "new arrival", "bestseller", etc.'
      },
      // {
      //   name: 'sizes',
      //   type: 'array',
      //   title: 'Sizes',
      //   of: [{ type: 'string' }],
      //   options: {
      //     layout: 'tags'
      //   },
      //   description: 'Add sizes like S , M , L , XL , XXL'
      // },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true // Enables cropping and focal point selection
        }
      }
    ]
  };

  export default productSchema
