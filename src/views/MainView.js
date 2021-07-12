// Link to   strony views for

import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import mainView from './mainView.webp';
import rocketIcon from './rocketIcon.png';
import crewIcon from './crewIcon.png';
import landpadIcon from './landpadIcon.png';
import { motion } from 'framer-motion';

function MainView() {
  const CardVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px rgb(255,255,255)',
      boxShadow: '0px 0px 8px rgb(255,255,255)',
      transition: {
        duration: 0.5,
        yoyo: 10,
      },
    },
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 1.5 },
    },
    exit: {
      x: '-100vh',
      transition: { ease: 'easeInOut' },
    },
  };

  const useStyles = makeStyles({
    app: {
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${mainView})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      overflow: 'hidden',
    },
    glass: {
      background: 'rgba( 0, 0, 10, 0.55)',
      boxShadow: ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backdropFilter: 'blur( 4.0px )',
      borderRadius: '10px',
      border: '1px solid rgba( 255, 255, 255, 0.18 )',
    },
    primaryColor: {
      color: '#ffff',
      fontWeight: 'bold',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      height: '100%',
    },
    avatar: {
      height: '25',
    },
  });
  const classes = useStyles();

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className={classes.app}>
        <Container className={classes.container}>
          <Grid
            container
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            spacing={3}
          >
            {' '}
            <Grid item xs={12} md={6} lg={4}>
              <Link to='/rocket' style={{ textDecoration: 'none' }}>
                <motion.div variants={CardVariants} whileHover='hover'>
                  <Card className={classes.glass}>
                    <CardHeader
                      title={
                        <Typography
                          className={classes.primaryColor}
                          variant='h5'
                        >
                          Open Rocket Page
                        </Typography>
                      }
                      avatar={
                        <Avatar
                          className={classes.avatar}
                          alt='rocket'
                          src={rocketIcon}
                        ></Avatar>
                      }
                    ></CardHeader>
                    <CardContent>
                      <Typography
                        variant='subtitle2'
                        className={classes.primaryColor}
                      >
                        Check information about SpaceX rockets!
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Link to='/crew' style={{ textDecoration: 'none' }}>
                <motion.div variants={CardVariants} whileHover='hover'>
                  <Card className={classes.glass}>
                    <CardHeader
                      title={
                        <Typography
                          className={classes.primaryColor}
                          variant='h5'
                        >
                          Open Crew Page
                        </Typography>
                      }
                      avatar={
                        <Avatar
                          className={classes.avatar}
                          alt='Crew'
                          src={crewIcon}
                        ></Avatar>
                      }
                    ></CardHeader>
                    <CardContent>
                      <Typography
                        variant='subtitle2'
                        className={classes.primaryColor}
                      >
                        Check information about SpaceX astronauts!
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Link to='/landPads' style={{ textDecoration: 'none' }}>
                <motion.div variants={CardVariants} whileHover='hover'>
                  <Card className={classes.glass}>
                    <CardHeader
                      title={
                        <Typography
                          className={classes.primaryColor}
                          variant='h5'
                        >
                          Open Land Pads Page
                        </Typography>
                      }
                      avatar={
                        <Avatar
                          className={classes.avatar}
                          alt='landPad'
                          src={landpadIcon}
                        ></Avatar>
                      }
                    ></CardHeader>
                    <CardContent>
                      <Typography
                        variant='subtitle2'
                        className={classes.primaryColor}
                      >
                        Check information about SpaceX Land Pads!
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    </motion.div>
  );
}

export default MainView;
