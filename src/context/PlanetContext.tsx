import {
  createContext, FC, ReactNode, useContext, useState,
} from 'react';

export interface Planet {
  name: string;
  diameter: number,
  climate: string,
  terrain: string,
  population: number,
}

export type PlanetState = {
  planets: Planet[];
  selectedPlanets: Planet[];
  // eslint-disable-next-line no-unused-vars
  queryPlanets: (query: string) => void;
  // eslint-disable-next-line no-unused-vars
  addToList: (name: string) => void;
  // eslint-disable-next-line no-unused-vars
  removeFromList: (name: string) => void;
}

interface Props {
  children: ReactNode | ReactNode[]
}

const PlanetContext = createContext<PlanetState | null>(null);

export const PlanetProvider: FC<Props> = ({ children }) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [selectedPlanets, setSelectedPlanets] = useState<Planet[]>([]);

  async function queryPlanets(query: string) {
    if (query === '') { setPlanets([]); return; }

    const fetchPlanets = await fetch(`https://swapi.dev/api/planets?search=${query}`)
      .then((response) => response.json())
      .then((result) => result.results);

    const planetsArray: Planet[] = [];

    fetchPlanets.forEach(((planet: Planet) => {
      const newPlanet: Planet = {
        name: planet.name,
        diameter: planet.diameter,
        climate: planet.climate,
        terrain: planet.terrain,
        population: planet.population,
      };
      planetsArray.push(newPlanet);
    }));

    setPlanets(planetsArray);
  }

  function addToList(name: string) {
    const newPlanetIndex: number = planets.findIndex((planet) => planet.name === name);
    setSelectedPlanets([...selectedPlanets, planets[newPlanetIndex]]);
  }

  function removeFromList(name: string) {
    const newPlanetList = selectedPlanets.filter((planet) => planet.name !== name);
    setSelectedPlanets([...newPlanetList]);
  }

  return (
    <PlanetContext.Provider value={{
      planets,
      selectedPlanets,
      queryPlanets,
      addToList,
      removeFromList,
    }}>
      { children }
    </PlanetContext.Provider>
  );
};

export const usePlanetContext = () => useContext(PlanetContext);
