import { useLoaderData } from '@remix-run/react';
import { LoaderFunctionArgs, json } from '@remix-run/node';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const routeData = json({
    id: params.id
  });
  return routeData;
};

export default function ProductDetail() {
  const data = useLoaderData<typeof loader>();
  return <div>
    <div>This is product: {data.id} </div>
  </div>;
}