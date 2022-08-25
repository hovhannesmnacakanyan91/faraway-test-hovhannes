import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { globalOp, globalSel } from '../../store/global';

import { Grid, Button, Box, CircularProgress, Typography } from '@mui/material';
import PersonCard from './components/PersonCard';

const People = () => {
  const dispatch = useDispatch();
  const { results, next, previous, count } = useSelector(globalSel.peopleSelector);

  const handleClick = url => dispatch(globalOp.getPeople(url));

  return results && results.length ? (
    <Box display='flex' alignItems='center' flexDirection='column'>
      <Grid container spacing={3} mb={2} p={2}>
        {results.map(person => {
          return <PersonCard person={person} key={person.name} />;
        })}
      </Grid>
      <Box display='flex' gap={3} alignItems='center'>
        <Button
          onClick={() => handleClick(previous)}
          disabled={!previous}
          variant='contained'
          size='large'
          sx={{ width: 150 }}>
          Previous
        </Button>
        <Typography variant='h6'>
          {results.length}/{count}
        </Typography>
        <Button onClick={() => handleClick(next)} disabled={!next} variant='contained' size='large' sx={{ width: 150 }}>
          Next
        </Button>
      </Box>
    </Box>
  ) : (
    <Box position='absolute' height={1} width={1} display='flex' alignItems='center' justifyContent='center'>
      <CircularProgress size={100} />
    </Box>
  );
};

export default People;
