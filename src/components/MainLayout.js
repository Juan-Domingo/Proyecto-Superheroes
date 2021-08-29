import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Search from './Search';

const SUPERHERO_URL = process.env.REACT_APP_API_URL;

function MainLayout({ setIsAuth }) {
  const currentLocation = useLocation();
  return (
    <>
      <Header setIsAuth={setIsAuth} />
      <h3 className='title has-text-white is-3 pt-6 mb-5 mt-5'>
        {currentLocation.pathname === '/' ? 'Mi Equipo' : 'Search character'}
      </h3>
      <Route exact path='/search'>
        <Search url={SUPERHERO_URL} />
      </Route>
      <Route exact path='/'>
        <Home url={SUPERHERO_URL} />
      </Route>
    </>
  );
}

export default MainLayout;
