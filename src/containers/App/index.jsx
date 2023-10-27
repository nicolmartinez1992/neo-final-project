import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ROUTES } from 'Data/constants';
import './index.scss';
import Home from 'Containers/Home';
import Login from 'Components/Login';
import Layout from 'Components/Layout';
import Filters from 'Components/Filters';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route path={ROUTES.home} element={<Filters />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
      <Route path={ROUTES.login} element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
