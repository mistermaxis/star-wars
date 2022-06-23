import React from 'react';
import { Autocomplete, Stack, TextField } from '@mui/material';
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
      <Autocomplete
      options={planets.map((planet) => planet.name)}
      renderInput={(params) => <TextField {...params} label='Planets' />}
      filterOptions={(x) => x}
      onChange={(e, value) => handleValueChange(e, value)}
      />
    </div>
  );
}

export default PlanetSearch;
