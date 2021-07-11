import React, { useState, useEffect } from 'react';
import Rocket from '../components/Rocket';
import axios from 'axios';

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

  return (
    <div>
      {rockets.map((rocket) => {
        return (
          <Rocket
            image={rocket.flickr_images[0]}
            name={rocket.name}
            description={rocket.description}
            cost_per_launch={rocket.cost_per_launch}
          />
        );
      })}
    </div>
  );
}

export default RocketPage;
