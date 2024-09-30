import { NavLink, Outlet } from '@remix-run/react';
import { LoaderFunctionArgs, MetaFunction, redirect } from '@remix-run/node';

export const meta: MetaFunction = () => [
  {
    title: 'TDA Product',
  },
  {
    name: 'description',
    content: 'For all'
  }
];

const navs = [
  {
    path: '/product',
    label: 'Product List',
  },
  {
    label: 'Quan 12',
    path: '/product/12',
  },

  {
    label: 'Quan 24',
    path: '/product/24',
  }
];

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const cookie = request.headers.get('Cookie');
  if (!cookie) {
    return redirect('/login', {
    });
  }
  return {};
};

export default function ProductLayout() {
  return <nav>
    {
      navs.map(nav => (
        <NavLink to={nav.path} key={nav.path}>{nav.label}</NavLink>
      ))
    }
    <Outlet/>
  </nav>;
}