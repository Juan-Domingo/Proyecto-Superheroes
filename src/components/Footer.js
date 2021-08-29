import React from 'react';

function Footer({ teamHeroes }) {
  return (
    <footer
      className={
        !teamHeroes.error && teamHeroes.length !== 0
          ? 'footer'
          : 'bottom footer'
      }
    >
      <div className='content has-text-centered has-text-white'>
        <p>
          <strong className='has-text-black'>Linkedin</strong> por{' '}
          <a
            rel='noreferrer'
            href='https://www.linkedin.com/in/juan-domingo-cerro-nieto-b91095210/'
            target='_blank'
          >
            Juan Domingo Cerro Nieto
          </a>{' '}
          © 2021.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
