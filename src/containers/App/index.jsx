import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';

import { ROUTES } from 'Data/constants';

// import Home from 'Containers/Home';

import './index.scss';
import Home from 'Containers/Home';
import Login from 'Components/login';

// const BrowserRouter = createBrowserRouter([
//   {
//     element: <Home />,
//     path: ROUTES.home,
//   },
// ]);

// const App = () => (<RouterProvider router={BrowserRouter} />);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.login} element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
