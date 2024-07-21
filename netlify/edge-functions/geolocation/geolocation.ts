import { Context } from 'https://edge.netlify.com'

export default async (request: Request, context: Context) => {
  // Here's what's available on context.geo

  // context: {
  //   geo: {
  //     city?: string;
  //     country?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     subdivision?: {
  //       code?: string;
  //       name?: string;
  //     },
  //   }
  // }

  console.log(`Request from ${context.geo.city}, ${context.geo.subdivision.code}, ${context.geo.country.code}`);

  return Response.json({
    geo: context.geo,
    header: request.headers.get('x-nf-geo'),
  })
}
