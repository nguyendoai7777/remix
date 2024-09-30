import { NavLink, Outlet } from '@remix-run/react';

export default function HomeLayout() {
  return <>
    <nav className="flex gap-4 px-4 py-2">
      <NavLink className={({ isActive }) => isActive ? 'text-pink-600' : ''} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'text-pink-600' : ''} to="/about">About</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'text-pink-600' : ''} to="/product">Product</NavLink>
    </nav>
    <Outlet/>
  </>;
}