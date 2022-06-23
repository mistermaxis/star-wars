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
  queryPlanets: () => void;
  // eslint-disable-next-line no-unused-vars
  addToList: (name: string) => void;
}

interface Props {
  children: ReactNode | ReactNode[]
}

const PlanetContext = createContext<PlanetState | null>(null);

export const PlanetProvider: FC<Props> = ({ children }) => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  async function queryPlanets() {
    const fetchPlanets = await fetch('https://swapi.dev/api/planets')
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

  return (
    <PlanetContext.Provider value={{ planets, queryPlanets, addToList }}>
      { children }
    </PlanetContext.Provider>
  );
};

export const usePlanetContext = () => useContext(PlanetContext);
