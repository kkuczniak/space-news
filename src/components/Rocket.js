import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    height: 151,
  },
  primaryColor: {
    color: '#ffff',
  },
  media: {
    height: 0,
    paddingTop: '90%',
  },
  textmedia: {
    height: 150,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
    color: '#ffff',
  },
  content: {
    marginLeft: 25,
    marginTop: 10,
    color: '#ffff',
  },
  glass: {
    background: 'rgba( 0, 0, 10, 0.55)',
    boxShadow: ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 4.0px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
  },
});

function Rocket({ name, description, cost_per_launch, image }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.glass}>
        <CardHeader
          className={classes.primaryColor}
          variant='h3'
          title={name}
        />
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent className={classes.root}>
          <Typography
            className={(classes.textmedia, classes.primaryColor)}
            variant='subtitle2'
          >
            {description}
          </Typography>
          <Typography
            className={(classes.content, classes.primaryColor)}
            variant='subtitle2'
          >
            Cost pre launch: ${cost_per_launch}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Rocket;
