import React, { useState, useEffect } from 'react';
import LandPads from '../components/LandPads';
import axios from 'axios';

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

  return (
    <div>
      {landPads.map((landPad) => {
        return (
          <LandPads
            image={landPad.images.large}
            name={landPad.name}
            wikipedia={landPad.wikipedia}
            details={landPad.details}
            attempts={landPad.landing_attempts}
            successes={landPad.landing_successes}
          />
        );
      })}
    </div>
  );
}

export default LandPadsPage;
