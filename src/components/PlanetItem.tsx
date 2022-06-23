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
    <Card sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <CardContent sx={{ padding: 0, maxWidth: 'min(60%, 20rem)' }}>
        <CardHeader sx={{ padding: 0 }} title={ planet.name } />
        <Typography>
          <span>{ planet.name } has a population of { planet.population }</span>
          <span> and a diameter of { planet.diameter }.</span>
          <span> Its terrain is { planet.terrain }</span>
          <span> and its climate is { planet.climate }</span>
        </Typography>
      </CardContent>
      <Button
    sx={{ backgroundColor: 'black', alignSelf: 'end' }}
    variant='contained' onClick={() => removeFromList(planet.name)}>Delete</Button>
    </Card>
  );
}

export default PlanetItem;
