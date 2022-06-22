import PlanetList from './components/PlanetList';
import { PlanetProvider } from './context/PlanetContext';
import './public/assets/style/App.css';

function App() {
  return (
      <div>
        <h1>Planets</h1>
        <PlanetProvider>
          <PlanetList />
        </PlanetProvider>
      </div>
  );
}

export default App;
