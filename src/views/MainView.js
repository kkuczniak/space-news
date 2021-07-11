// Link to   strony views for

import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function MainView() {
  return (
    <div className='container'>
      <Link to='/rocket'>
        <Typography variant='h2' color='primary'>
          Open Rocket Page
        </Typography>
      </Link>
      <Link to='/crew'>
        <Typography variant='h2' color='primary'>
          Open Crew Page
        </Typography>
      </Link>
    </div>
  );
}

export default MainView;
