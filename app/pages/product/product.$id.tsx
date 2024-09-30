import { useLoaderData, useParams } from '@remix-run/react';
import { json, LoaderFunctionArgs } from '@remix-run/node';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  return json({
    id: params.id
  });
};

export default function ProductDetail() {
  const data = useLoaderData<() => { id: string }>();
  const param = useParams<{ id: string }>();
  return <div>
    <div>This is product Client: {param.id} </div>
    <div>This is product Server: {data.id} </div>
  </div>;
}