import React from 'react';

import { useSelector } from 'react-redux';
import { globalSel } from '../../store/global';

import { Grid, Box, CircularProgress } from '@mui/material';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

const People = () => {
  const { results, count } = useSelector(globalSel.peopleSelector);

  return results && results.length ? (
    <Box display='flex' alignItems='center' flexDirection='column'>
      <Grid container spacing={3} mb={3}>
        {results.map(person => {
          return <Card data={person} type='people' key={person.name} />;
        })}
      </Grid>
      <Pagination count={count} />
    </Box>
  ) : (
    <Box height={1} width={1} display='flex' alignItems='center' justifyContent='center'>
      <CircularProgress size={100} />
    </Box>
  );
};

export default People;
