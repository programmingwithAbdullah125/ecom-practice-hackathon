// export const apiVersion = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION,
//   '2025-01-13'
// )
// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   // 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
//   "production"
// )

// export const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   // 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
//  "v265ox5g"
// )

// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage)
//   }

//   return v
// }
export const apiVersion = assertValue(
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-13', // Default API version
  'Missing environment variable: NEXT_PUBLIC_SANITY_API_VERSION'
);

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Default dataset
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'v265ox5g', // Default project ID
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    throw new Error(errorMessage); // Throws an error if the value is undefined
  }
  return v;
}
