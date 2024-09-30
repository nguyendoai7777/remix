import { Link, Outlet } from '@remix-run/react';

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

export default function ProductLayout() {
  return <nav>
    {
      navs.map(nav => (
        <Link to={nav.path} key={nav.path}>{nav.label}</Link>
      ))
    }
    <Outlet />
  </nav>;
}