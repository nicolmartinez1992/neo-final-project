import React from 'react';
import { Outlet } from 'react-router-dom';

import TopBar from '../TopBar/index';

const routesArray = [
  { label: 'All Movies', route: '/all-movies' },
  { label: 'Favorites', route: '/favorites' },
];

const Layout = () => (
  <>
    <TopBar
      logo="https://media.istockphoto.com/id/1352268224/es/vector/claqueta-de-pel%C3%ADcula-aislada-sobre-fondo-blanco-pel%C3%ADcula-en-blanco-claqueta-cine-ilustraci%C3%B3n.jpg?s=170667a&w=0&k=20&c=3kEeJxgZt822b0bF82TGSRHWKGNCJJ1Pi-p0vGXyYlc="
      routes={routesArray}
    />
    <Outlet />
  </>
);

export default Layout;
