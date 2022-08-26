import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const {
    palette: { black, text },
  } = useTheme();

  const linkList = [
    {
      name: 'people',
    },
    {
      name: 'films',
    },
  ];

  return (
    <Box
      component='header'
      position='sticky'
      top={0}
      height={60}
      backgroundColor={black[500]}
      width={1}
      zIndex={100}
      display='flex'
      alignItems='center'
      p={2}>
      <Link to={'/'}>
        <Box
          component='img'
          height={50}
          alt='logo'
          src='https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png'
        />
      </Link>
      <Box display='flex' gap={3} ml={3}>
        {linkList.map(link => (
          <Typography color={text[600]} variant='body1' key={link.name} fontWeight='bold'>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? '#ffffff' : '',
                };
              }}
              to={`/${link.name}`}>
              {link.name.toUpperCase()}
            </NavLink>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
