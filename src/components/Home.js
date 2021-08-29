import React, { useState, useEffect } from 'react';
import Card from './Card';
import Spinner from './Spinner';
import Footer from './Footer';
import AverageSummary from './AverageSummary';

function Home({ url }) {
  const [teamHeroes, setTeamHeroes] = useState([]);
  const [displayTeam, setDisplayTeam] = useState(false);

  function deleteCharacter(index) {
    const team = JSON.parse(localStorage.getItem('myTeam'));
    team.splice(index, 1);
    setDisplayTeam(false);
    localStorage.setItem('myTeam', JSON.stringify(team));
  }

  useEffect(() => {
    function getTeam() {
      const team = JSON.parse(localStorage.getItem('myTeam')) || [];
      setTeamHeroes(team);
      setDisplayTeam(true);
    }
    getTeam();
    // eslint-disable-next-line
  }, [displayTeam]);

  return (
    <>
      <div className='columns is-desktop is-multiline '>
        <div className='column is-full'>
          <AverageSummary teamHeroes={teamHeroes} />
        </div>
        {displayTeam ? (
          teamHeroes.map((character, i) => {
            if (character.response === 'error') {
              return (
                <div className='column is-3 ' key={i}>
                  <div className='notification is-danger'>
                    <button
                      onClick={() => deleteCharacter(i)}
                      className='delete'
                    ></button>
                    Hubo un error. El personaje ya existe {character.error}
                  </div>
                </div>
              );
            }
            return (
              <div className='column is-3 ' key={i}>
                <Card character={character} setDisplayTeam={setDisplayTeam} />
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
        <Footer teamHeroes={teamHeroes} />
      </div>
    </>
  );
}

export default Home;
