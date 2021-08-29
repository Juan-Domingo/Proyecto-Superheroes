import React, { useState } from 'react';
import axios from 'axios';
import heroesfaces from '../images/heroes-faces.PNG';
import '../styles/Login.css';

const URL = process.env.REACT_APP_AUTH_URL;

function Login({ setIsAuth }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const config = {
      url: URL,
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ email: email, password: password }),
    };
    const response = await axios(config).catch((err) => err);
    if (response.data.error) {
      alert(response.data.error);
    } else {
      localStorage.setItem('token', response.token);
      setIsAuth(true);
    }
  }

  return (
    <form className='box login p-5' onSubmit={handleSubmit}>
      <figure className='image is-3by1'>
        <img src={heroesfaces} alt='principal DC hero faces' />
      </figure>
      <p className='title is-3 is-spaced control pt-3'>
      Cuantos más superhéroes, mejor.
      </p>
      <div className='field py-3'>
        <p className='control'>
          <input
            className='input'
            type='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
      </div>
      <div className='field py-3'>
        <p className='control'>
          <input
            className='input'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
      </div>
      <div className='field py-3'>
        <p className='control'>
          <button type='submit' className='button is-link is-fullwidth'>
            Login
          </button>
        </p>
      </div>
    </form>
  );
}
export default Login;
