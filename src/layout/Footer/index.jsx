import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const {
    palette: { black },
  } = useTheme();

  return (
    <Box component='footer' height={60} backgroundColor={black[500]} width={1} p={3} display='flex' alignItems='center'>
      <Typography variant='body1'>Copyright © 2022 all rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
