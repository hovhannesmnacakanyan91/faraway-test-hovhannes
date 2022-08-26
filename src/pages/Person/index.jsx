import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { globalOp, globalSel } from '../../store/global';

import { Box, CircularProgress } from '@mui/material';

const Person = () => {
  const dispatch = useDispatch();
  const { personId } = useParams();
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
    created,
    edited,
    url,
  } = useSelector(globalSel.personSelector);

  useEffect(() => {
    dispatch(globalOp.getPerson(personId));
  }, [dispatch]);

  return name ? (
    <div>
      {name +
        ' ' +
        height +
        ' ' +
        mass +
        ' ' +
        hair_color +
        ' ' +
        skin_color +
        ' ' +
        eye_color +
        ' ' +
        birth_year +
        ' ' +
        gender +
        ' ' +
        homeworld +
        ' ' +
        films +
        ' ' +
        species +
        ' ' +
        vehicles +
        ' ' +
        starships +
        ' ' +
        created +
        ' ' +
        edited +
        ' ' +
        url}
    </div>
  ) : (
    <Box position='absolute' height={1} width={1} display='flex' alignItems='center' justifyContent='center'>
      <CircularProgress size={100} />
    </Box>
  );
};

export default Person;
