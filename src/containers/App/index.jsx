import './index.scss';
import Layout from 'Components/Layout';
import Home from 'Containers/Home';
import { ROUTES } from 'Data/constants';
import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
