import React, { useState, useEffect } from 'react';
import LandPads from '../components/LandPads';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import iss from './iss.webp';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

function LandPadsPage() {
  const [landPads, setLandPads] = useState([]);

  const fetchData = () => {
    const landPadsUrl = 'https://api.spacexdata.com/v4/landpads';

    axios
      .get(landPadsUrl)
      .then((response) => {
        const allDataLandPads = response.data;
        setLandPads(allDataLandPads);
      })
      .catch((error) => console.error('error'));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(landPads);

  const useStyles = makeStyles({
    app: {
      width: '100%',
      backgroundImage: `url(${iss})`,
      backgroundSize: 'cover',
      backgroundPosition: 'fixed',
      backgroundAttachment: 'scroll',
      backgroundRepeat: 'no-repeat',
    },
  });
  const classes = useStyles();

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', delay: 0.5 },
    },
    exit: {
      x: '100vh',
      transition: { ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className={classes.app}>
        <Container>
          <Grid container spacing={3}>
            {landPads.map((landPad) => (
              <Grid item xs={12} md={6} lg={6}>
                <LandPads
                  image={landPad.images.large}
                  name={landPad.name}
                  wikipedia={landPad.wikipedia}
                  details={landPad.details}
                  attempts={landPad.landing_attempts}
                  successes={landPad.landing_successes}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </motion.div>
  );
}

export default LandPadsPage;
