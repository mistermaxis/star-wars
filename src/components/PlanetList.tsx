import { PlanetState, usePlanetContext } from '../context/PlanetContext';
import PlanetItem from './PlanetItem';

function PlanetList() {
  const { selectedPlanets } = usePlanetContext() as PlanetState;

  return (
    <div>{
      selectedPlanets.map((planet) => <PlanetItem key={ planet.name } planet={ planet } />)
      }</div>
  );
}

export default PlanetList;
