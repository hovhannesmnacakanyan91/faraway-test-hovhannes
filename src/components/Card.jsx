import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Card as MUICard, CardActionArea, CardContent, Typography, Grid } from '@mui/material';

const Card = ({ data, type }) => {
  const navigate = useNavigate();
  const { url } = data;

  const handleClick = () => navigate(`/${type}/${url.match(/\d+/g)}`);

  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <MUICard sx={{ width: 1 }}>
        <CardActionArea onClick={handleClick}>
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
  type: PropTypes.string.isRequired,
};

export default Card;
