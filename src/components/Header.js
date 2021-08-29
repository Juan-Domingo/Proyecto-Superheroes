import React, { useState } from 'react';
import logo from '../images/github.png';

function Header({ setIsAuth }) {
  const [isActive, setIsActive] = useState(false);
  function handleLogOut() {
    localStorage.clear();
    setIsAuth(false);
  }
  return (
    <nav
      className='navbar is-fixed-top is-link'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <a
          className='navbar-item'
          href='https://github.com/Juan-Domingo/'
        >
          <img src={logo} width='50'  alt='superhero logo' />
        </a>
        <div
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>
      </div>

      <div
        id='navbarBasicExample'
        className={`navbar-menu  ${
          isActive ? 'is-active has-background-grey-light' : ''
        }`}
      >
        <div className='navbar-start'>
          <a className='navbar-item has-text-white' href='/'>
            Principio
          </a>
          <a className='navbar-item has-text-white' href='/search'>
            Buscador de Heroes
          </a>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <button className='button' onClick={handleLogOut}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
