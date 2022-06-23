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
    <Stack>
      <Autocomplete
      sx={{ width: 'max(50%, 20rem)' }}
      options={planets.map((planet) => planet.name)}
      renderInput={(params) => <TextField {...params} label='Planets' />}
      filterOptions={(x) => x}
      onChange={(e, value) => handleValueChange(e, value)}
      onInputChange={(e, value) => handleInputChange(e, value)}
      getOptionDisabled={(option) => selectedPlanets.some((planet) => planet.name === option)}
      />
    </Stack>
  );
}

export default PlanetSearch;
