import React from 'react';

import { CardActionArea, Card, CardContent, Typography, Grid } from '@mui/material';

const PersonCard = ({ person }) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card sx={{ width: 1 }}>
        <CardActionArea onClick={() => console.log(person)}>
          <CardContent>
            <Typography variant='h5' align='center'>
              {person.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default PersonCard;
