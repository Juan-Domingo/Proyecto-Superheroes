import React, { useState } from 'react';
import Footer from './Footer';
import Spinner from './Spinner';
import Results from './Results';

function Search({ url }) {
  const [searchInfo, setSearchInfo] = useState(null);
  const [displayResult, setDisplayResult] = useState(null);
  const [result, setResult] = useState([]);

  async function getSearchResult() {
    const response = await fetch(`${url}search/${searchInfo}`).catch(
      (err) => err
    );
    if (response.ok) {
      return response.json();
    }
  }

  async function handleSearch(e) {
    e.preventDefault();
    setDisplayResult(false);
    setResult(await getSearchResult());
    setDisplayResult(true);
  }

  return (
    <>
      <form className='field has-addons' onSubmit={handleSearch}>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Find a hero'
            onChange={(e) => setSearchInfo(e.target.value)}
          />
        </div>
        <div className='control'>
          <button className='button is-link'>Buscar</button>
        </div>
      </form>
      {displayResult ? (
        result.response === 'success' ? (
          <div className='columns is-desktop is-multiline p-4'>
            {result.results.map((character, i) => {
              return (
                <div className='column is-3' key={i}>
                  <Results
                    name={character.name}
                    image={character.image.url}
                    id={character.id}
                    biography={character.biography}
                    url={url}
                  />
                </div>
              );
            })}
            <Footer teamHeroes={result.results} />
          </div>
        ) : (
          <p className='has-text-danger-dark'>{result.error}</p>
        )
      ) : displayResult !== null ? (
        <Spinner />
      ) : null}
      {result.response === 'success' ? null : <Footer teamHeroes={result} />}
    </>
  );
}
export default Search;
