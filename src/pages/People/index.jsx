import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { globalOp, globalSel } from '../../store/global';

import { Grid, Button, Box, CircularProgress, Typography } from '@mui/material';
import Card from '../../components/Card';

const People = () => {
  const dispatch = useDispatch();
  const { results, next, previous, count } = useSelector(globalSel.peopleSelector);
  const [itemsCount, setItemCounts] = useState(10);

  const handleClick = url => dispatch(globalOp.getPeople(url));

  return results && results.length ? (
    <Box display='flex' alignItems='center' flexDirection='column'>
      <Grid container spacing={3} mb={3}>
        {results.map(person => {
          return <Card data={person} type='people' key={person.name} />;
        })}
      </Grid>
      <Box display='flex' gap={3} alignItems='center'>
        <Button
          onClick={() => {
            handleClick(previous);
            setItemCounts(prev => prev - 10);
          }}
          disabled={!previous}
          variant='contained'
          size='large'
          sx={{ width: 150 }}>
          Previous
        </Button>
        <Typography variant='h6'>
          {itemsCount}/{count}
        </Typography>
        <Button
          onClick={() => {
            handleClick(next);
            setItemCounts(prev => prev + 10);
          }}
          disabled={!next}
          variant='contained'
          size='large'
          sx={{ width: 150 }}>
          Next
        </Button>
      </Box>
    </Box>
  ) : (
    <Box height={1} width={1} display='flex' alignItems='center' justifyContent='center'>
      <CircularProgress size={100} />
    </Box>
  );
};

export default People;
