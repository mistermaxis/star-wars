import { Stack } from '@mui/material';
import PlanetList from './components/PlanetList';
import PlanetSearch from './components/PlanetSearch';
import { PlanetProvider } from './context/PlanetContext';
import './public/assets/style/App.css';

function App() {
  return (
      <Stack spacing={2} width='40rem'>
        <PlanetProvider>
          <PlanetSearch />
          <PlanetList />
        </PlanetProvider>
      </Stack>
  );
}

export default App;
