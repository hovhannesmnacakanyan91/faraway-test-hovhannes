import React from 'react';

import { useSelector } from 'react-redux';
import { globalSel } from '../../store/global';

import { Grid, Box, CircularProgress } from '@mui/material';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

const People = () => {
  const people = useSelector(globalSel.peopleSelector);

  return people && people.results && people.results.length ? (
    <Box display='flex' alignItems='center' flexDirection='column'>
      <Grid container spacing={3} mb={3}>
        {people.results.map(person => {
          return <Card data={person} type='people' key={person.name} />;
        })}
      </Grid>
      <Pagination count={people.count} />
    </Box>
  ) : (
    <Box height={1} width={1} display='flex' alignItems='center' justifyContent='center'>
      <CircularProgress size={100} />
    </Box>
  );
};

export default People;
