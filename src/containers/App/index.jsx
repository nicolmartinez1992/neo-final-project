import './styles.scss';
import Layout from 'Components/Layout';
import ErrorPage from 'Containers/ErrorPage';
import Favorites from 'Containers/Favorites';
import Home from 'Containers/Home';
import MovieView from 'Containers/MovieView';
import { ROUTES } from 'Data/constants';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.movie} element={<MovieView />} />
        <Route path={ROUTES.favorites} element={<Favorites />} />

        {/* 404 not found route */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
