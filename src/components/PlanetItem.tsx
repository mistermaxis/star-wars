/* eslint-disable no-console */
import { Planet, PlanetState, usePlanetContext } from '../context/PlanetContext';

interface props {
  planet: Planet;
}

function PlanetItem({ planet }: props) {
  const { toggleSelected } = usePlanetContext() as PlanetState;

  return (
    <div>
      <p>Name: { planet.name }</p>
      <p>Diameter: { planet.diameter }</p>
      <p>Climate: { planet.climate }</p>
      <p>Terrain: { planet.terrain }</p>
      <p>Population: { planet.population }</p>
      <button onClick={() => toggleSelected(planet.name)}>Deselect</button>
    </div>
  );
}

export default PlanetItem;
