import React from 'react';

import { Box } from '@mui/material';
import Router from '../../Router';

const Main = () => {
  return (
    <Box
      component='main'
      minHeight='calc(100vh - 120px)'
      p={5}
      sx={{
        background:
          'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%) ,url(https://wallpaperaccess.com/full/695130.jpg)',
      }}>
      <Router />
    </Box>
  );
};

export default Main;
