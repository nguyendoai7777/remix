import { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  {
    title: 'All Product',
  },
  {
    name: 'description',
    content: 'For all'
  }
];

export default function ProductListPage() {
  return <>
    <div>Product List</div>
  </>;
}