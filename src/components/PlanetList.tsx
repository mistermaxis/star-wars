import { PlanetState, usePlanetContext } from '../context/PlanetContext';
import PlanetItem from './PlanetItem';

function PlanetList() {
  const { planets, queryPlanets } = usePlanetContext() as PlanetState;

  return (
    <div>{planets.filter((planet) => planet.selected === true)
      .map((planet) => <PlanetItem key={ planet.name } planet={ planet } />)}</div>
  );
}

export default PlanetList;
