import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

function LandPads({ name, image, wikipedia, details, attempts, successes }) {
  return (
    <div>
      <Grid container direction='row' justify='center' alignItems='flex-end'>
        <div className='card_image'>
          <img src={image} alt='' />
        </div>
        <div className='card_description'>
          <h2 className='name'>{name}</h2>
          <Typography variant='body2' color='primary' gutterBottom>
            {wikipedia}
          </Typography>
          <p className='details'>{details}</p>
          <p className='attempts'>{attempts}</p>
          <p className='successes'>{successes}</p>
        </div>
      </Grid>
    </div>
  );
}

export default LandPads;
