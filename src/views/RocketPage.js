import React, { useState, useEffect } from 'react';
import Rocket from '../components/Rocket';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import nasa from './nasa.jpg';
import { makeStyles } from '@material-ui/core/styles';

function RocketPage() {
  const [rockets, setRockets] = useState([]);

  const fetchData = () => {
    const rocketUrl = 'https://api.spacexdata.com/v4/rockets';

    axios
      .get(rocketUrl)
      .then((response) => {
        const allDataRocket = response.data;
        setRockets(allDataRocket);
      })
      .catch((error) => console.error('error'));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(rockets);

  const useStyles = makeStyles({
    app: {
      width: '100%',

      backgroundImage: `url(${nasa})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Container>
        <Grid container spacing={3}>
          {rockets.map((rocket) => (
            <Grid item xs={12} md={6} lg={6}>
              <Rocket
                image={rocket.flickr_images[0]}
                name={rocket.name}
                description={rocket.description}
                cost_per_launch={rocket.cost_per_launch}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default RocketPage;
