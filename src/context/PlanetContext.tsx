/* eslint-disable no-console */
import {
  createContext, FC, ReactNode, useContext, useState,
} from 'react';

export interface Planet {
  name: string;
  diameter: number,
  climate: string,
  terrain: string,
  population: number,
  selected: boolean,
}

export type PlanetState = {
  planets: Planet[];
  queryPlanets: () => void;
  // eslint-disable-next-line no-unused-vars
  toggleSelected: (name: string) => void;
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
        selected: false,
      };
      planetsArray.push(newPlanet);
    }));
    setPlanets(planetsArray);
  }

  function toggleSelected(name: string) {
    const tempPlanets = [...planets];
    const planetIndex = planets.findIndex((p) => p.name === name);
    tempPlanets[planetIndex] = {
      ...tempPlanets[planetIndex],
      selected: !tempPlanets[planetIndex].selected,
    };
    setPlanets(tempPlanets);
  }

  return (
    <PlanetContext.Provider value={{ planets, queryPlanets, toggleSelected }}>
      { children }
    </PlanetContext.Provider>
  );
};

export const usePlanetContext = () => useContext(PlanetContext);
