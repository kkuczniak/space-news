// Link to   strony views for

import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { palette } from '@material-ui/system';

function MainView() {
  return (
    <div>
      <Box bgcolor='info.main' p={2}>
        <Link to='/rocket'>
          <Typography variant='h2' color='info.contrastText'>
            Open Rocket Page
          </Typography>
        </Link>
      </Box>
      <Link to='/crew'>
        <Typography variant='h2' color='primary'>
          Open Crew Page
        </Typography>
      </Link>
      <Link to='/landPads'>
        <Typography variant='h2' color='primary'>
          Open Land Pads Page
        </Typography>
      </Link>
    </div>
  );
}

export default MainView;
