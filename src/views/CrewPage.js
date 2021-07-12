import React, { useState, useEffect } from 'react';
import Crew from '../components/Crew';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import iss from './iss.webp';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

function CrewPage() {
  const [crews, setCrews] = useState([]);

  const fetchData = () => {
    const crewUrl = 'https://api.spacexdata.com/v4/crew';

    axios
      .get(crewUrl)
      .then((response) => {
        const allDataCrew = response.data;
        setCrews(allDataCrew);
      })
      .catch((error) => console.error('error'));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(crews);

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
            {crews.map((crew) => (
              <Grid item xs={12} md={6} lg={6}>
                <Crew
                  image={crew.image}
                  name={crew.name}
                  wikipedia={crew.wikipedia}
                  agency={crew.agency}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </motion.div>
  );
}

export default CrewPage;
