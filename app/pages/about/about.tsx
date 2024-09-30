import { Link, Outlet } from '@remix-run/react';

const navs = [
  {
    path: '/about',
    label: 'My About',
  },
  {
    label: 'Quan 12',
    path: '/about/12',
  },

  {
    label: 'Quan 24',
    path: '/about/24',
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