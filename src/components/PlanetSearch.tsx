import { PlanetState, usePlanetContext } from '../context/PlanetContext';

function PlanetSearch() {
  const {
    planets,
    selectedPlanets,
    queryPlanets,
    addToList,
  } = usePlanetContext() as PlanetState;

  return (
    <div>
    </div>
  );
}

export default PlanetSearch;
