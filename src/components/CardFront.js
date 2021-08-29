import React from 'react';

function CardFront({ name, image, powerstats, id, isFlipped, setDisplayTeam }) {
  function colorStat(stat) {
    return stat > 49 ? 'tag is-success' : 'tag is-danger';
  }

  function deleteCharacter() {
    const team = JSON.parse(localStorage.getItem('myTeam'));
    const newTeam = team.filter((obj) => obj.id !== id);
    setDisplayTeam(false);
    localStorage.setItem('myTeam', JSON.stringify(newTeam));
  }

  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-3by2'>
          <img src={image.url} alt={name} />
        </figure>
      </div>
      <div className='card-content mx-3 p-0 pt-2'>
        <div className='content is-small'>
          <div className='subtitle is-5 mb-3 is-uppercase has-text-weight-semibold '>
            {name}
          </div>
          <table className='table is-narrow'>
            <tbody>
              <tr>
                <th>Inteligencia</th>
                <td>
                  <span className={colorStat(powerstats.intelligence)}>
                    {powerstats.intelligence}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Poder</th>
                <td>
                  <span className={colorStat(powerstats.power)}>
                    {powerstats.power}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Combate</th>
                <td>
                  <span className={colorStat(powerstats.combat)}>
                    {powerstats.combat}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Velocidad</th>
                <td>
                  <span className={colorStat(powerstats.speed)}>
                    {powerstats.speed}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Fuerza</th>
                <td>
                  <span className={colorStat(powerstats.strength)}>
                    {powerstats.strength}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Resistencia</th>
                <td>
                  <span className={colorStat(powerstats.durability)}>
                    {powerstats.durability}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer className='card-footer'>
        <button
          onClick={() => isFlipped(false)}
          className='card-footer-item button is-light is-link '
        >
          Detalles
        </button>
        <button
          onClick={deleteCharacter}
          className='card-footer-item button is-light is-link '
        >
          Eliminar
        </button>
      </footer>
    </div>
  );
}
export default CardFront;
