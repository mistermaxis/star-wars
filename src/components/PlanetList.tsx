import Stack from '@mui/material/Stack';
import { PlanetState, usePlanetContext } from '../context/PlanetContext';
import PlanetItem from './PlanetItem';

function PlanetList() {
  const { selectedPlanets } = usePlanetContext() as PlanetState;

  return (
    <Stack spacing={2}>{
      selectedPlanets.map((planet) => <PlanetItem key={ planet.name } planet={ planet } />)
      }</Stack>
  );
}

export default PlanetList;
