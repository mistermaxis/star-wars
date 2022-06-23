import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from '@mui/material';
import { Planet, PlanetState, usePlanetContext } from '../context/PlanetContext';

interface props {
  planet: Planet;
}

function PlanetItem({ planet }: props) {
  const { removeFromList } = usePlanetContext() as PlanetState;

  return (
    <Card>
      <CardContent>
        <CardHeader title={ planet.name } />
        <Typography>
          <span>{ planet.name } has a population of { planet.population }</span>
          <span> and a diameter of { planet.diameter }.</span>
          <span> Its terrain is { planet.terrain }</span>
          <span> and its climate is { planet.climate }</span>
        </Typography>
      </CardContent>
      <Button onClick={() => removeFromList(planet.name)}>Deselect</Button>
    </Card>
  );
}

export default PlanetItem;
