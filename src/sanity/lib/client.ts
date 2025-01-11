// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'v265ox5g', // Replace with your Sanity project ID
  dataset: 'production', // Dataset name
  apiVersion: '2023-01-01', // Latest API version
  useCdn: true, // Enable CDN for faster response
});

export default client;
