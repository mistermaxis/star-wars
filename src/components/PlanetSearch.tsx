import { PlanetState, usePlanetContext } from '../context/PlanetContext';

function PlanetSearch() {
  const {
    planets,
    selectedPlanets,
    queryPlanets,
    addToList,
  } = usePlanetContext() as PlanetState;

  function handleValueChange(e: React.SyntheticEvent<Element, Event>, value: string | null) {
    if (value) {
      addToList(value);
    }
  }

  function handleInputChange(e: React.SyntheticEvent<Element, Event>, value: string) {
    queryPlanets(value);
  }

  return (
    <div>
    </div>
  );
}

export default PlanetSearch;
