// import { createClient } from "next-sanity";

// const client = createClient({
//     projectId:"v265ox5g",
//     dataset: "production",
//     useCdn: true,
//     apiVersion: "2025-01-13"
// }
// )

// export async  function sanityFetch ({ query, params = {}}: {query: string, params?:any}){
//     return await client.fetch(query, params)
// }

import { createClient } from "next-sanity";

const client = createClient({
  projectId: "v265ox5g",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
});

export async function sanityFetch({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, unknown>; // Replaces `any` with a stricter type
}) {
  return await client.fetch(query, params);
}
