import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ROUTES } from 'Data/constants';
import './index.scss';
import Home from 'Containers/Home';
import Login from 'Components/Login';
import Layout from 'Components/Layout';
import Filters from 'Components/Filters';
import ProductDetails from 'Components/ProductDetails';
import Profile from 'Components/Profile';
import Cart from 'Components/Cart';
import Gift from 'Components/Gift';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route path={ROUTES.home} element={<Filters />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.product} element={<ProductDetails />} />
          <Route path={ROUTES.category} element={<Home />} />
        </Route>
        <Route path={ROUTES.profile} element={<Profile />} />
        <Route path={ROUTES.cart} element={<Cart />} />
        <Route path={ROUTES.gift} element={<Gift />} />
      </Route>
      <Route path={ROUTES.login} element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
