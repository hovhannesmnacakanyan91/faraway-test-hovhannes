import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { globalOp, globalSel } from '../../store/global';

import { Box, Typography, CircularProgress, useTheme, Divider, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { hexToRgba } from './../../helpers/index';

const Person = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { personId } = useParams();
  const {
    palette: { text, black },
  } = useTheme();
  const person = useSelector(globalSel.personSelector);
  const handleClick = () => navigate(`/people`);

  useEffect(() => {
    dispatch(globalOp.getPerson(personId));
  }, [dispatch]);

  return person ? (
    <Box
      p={5}
      backgroundColor={hexToRgba(text[400], 0.5)}
      borderRadius='10px'
      display='flex'
      flexDirection='column'
      gap={2}>
      <Box>
        <IconButton onClick={handleClick}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Typography variant='h5' color={text[400]}>
        Name
      </Typography>
      <Typography variant='h4' color={black[500]}>
        {person.name}
      </Typography>
      <Divider />
      <Typography variant='h5' color={text[400]}>
        Gender
      </Typography>
      <Typography variant='h4' color={black[500]}>
        {person.gender}
      </Typography>
      <Divider />
      <Typography variant='h5' color={text[400]}>
        Birth year
      </Typography>
      <Typography variant='h4' color={black[500]}>
        {person.birth_year}
      </Typography>
      <Divider />
      <Typography variant='h5' color={text[400]}>
        Height
      </Typography>
      <Typography variant='h4' color={black[500]}>
        {person.height}
      </Typography>
      <Divider />
      <Typography variant='h5' color={text[400]}>
        Mass
      </Typography>
      <Typography variant='h4' color={black[500]}>
        {person.mass}
      </Typography>
      <Divider />
      <Typography variant='h5' color={text[400]}>
        Hair color
      </Typography>
      <Typography variant='h4' color={black[500]}>
        {person.hair_color}
      </Typography>
      <Divider />
      <Typography variant='h5' color={text[400]}>
        Eye color
      </Typography>
      <Typography variant='h4' color={black[500]}>
        {person.eye_color}
      </Typography>
      <Divider />
      <Typography variant='h5' color={text[400]}>
        Skin color
      </Typography>
      <Typography variant='h4' color={black[500]}>
        {person.skin_color}
      </Typography>
      <Divider />
    </Box>
  ) : (
    <Box height={1} width={1} display='flex' alignItems='center' justifyContent='center'>
      <CircularProgress size={100} />
    </Box>
  );
};

export default Person;
