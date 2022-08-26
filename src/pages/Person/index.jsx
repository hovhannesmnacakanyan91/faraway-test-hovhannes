import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { globalOp, globalSel } from '../../store/global';

import { Box, Typography, CircularProgress, useTheme } from '@mui/material';

const Person = () => {
  const dispatch = useDispatch();
  const { personId } = useParams();
  const {
    palette: { text },
  } = useTheme();
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
  } = useSelector(globalSel.personSelector);

  useEffect(() => {
    dispatch(globalOp.getPerson(personId));
  }, [dispatch]);

  return name ? (
    <>
      <Typography variant='h4' display='flex' alignItems='center' gap={3}>
        Name:
        <Typography variant='h4' component='span' color={text[400]}>
          {name}
        </Typography>
      </Typography>
      <Box>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Gender:
          <Typography variant='h4' component='span' color={text[400]}>
            {gender}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Birth year:
          <Typography variant='h4' component='span' color={text[400]}>
            {birth_year}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Height:
          <Typography variant='h4' component='span' color={text[400]}>
            {height}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Mass:
          <Typography variant='h4' component='span' color={text[400]}>
            {mass}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Name:
          <Typography variant='h4' component='span' color={text[400]}>
            {name}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Hair color:
          <Typography variant='h4' component='span' color={text[400]}>
            {hair_color}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Eye color:
          <Typography variant='h4' component='span' color={text[400]}>
            {eye_color}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Skin color:
          <Typography variant='h4' component='span' color={text[400]}>
            {skin_color}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Home world:
          <Typography variant='h4' component='span' color={text[400]}>
            {homeworld}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Films:
          <Typography variant='h4' component='span' color={text[400]}>
            {films.length ? films.join(',\n') : 'n/a'}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Species:
          <Typography variant='h4' component='span' color={text[400]}>
            {species.length ? species.join(',\n') : 'n/a'}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Vehicles:
          <Typography variant='h4' component='span' color={text[400]}>
            {vehicles.length ? vehicles.join(',\n') : 'n/a'}
          </Typography>
        </Typography>
        <Typography variant='h4' display='flex' alignItems='center' gap={3}>
          Star ships:
          <Typography variant='h4' component='span' color={text[400]}>
            {starships.length ? starships.join(',\n') : 'n/a'}
          </Typography>
        </Typography>
      </Box>
    </>
  ) : (
    <Box height={1} width={1} display='flex' alignItems='center' justifyContent='center'>
      <CircularProgress size={100} />
    </Box>
  );
};

export default Person;
