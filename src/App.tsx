import PlanetList from './components/PlanetList';
import PlanetSearch from './components/PlanetSearch';
import { PlanetProvider } from './context/PlanetContext';
import './public/assets/style/App.css';

function App() {
  return (
      <div>
        <PlanetProvider>
          <PlanetSearch />
          <PlanetList />
        </PlanetProvider>
      </div>
  );
}

export default App;
