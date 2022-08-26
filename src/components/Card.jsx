import React from 'react';
import PropTypes from 'prop-types';

import { Card as MUICard, CardActionArea, CardContent, Typography, Grid } from '@mui/material';

const Card = ({ data }) => {
  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <MUICard sx={{ width: 1 }}>
        <CardActionArea onClick={() => console.log(data)}>
          <CardContent>
            <Typography variant='h5' align='center'>
              {data.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MUICard>
    </Grid>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
