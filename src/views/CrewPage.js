import React, { useState, useEffect } from 'react';
import Crew from '../components/Crew';
import axios from 'axios';

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

  return (
    <div>
      {crews.map((crew) => {
        return (
          <Crew
            image={crew.image}
            name={crew.name}
            wikipedia={crew.wikipedia}
            agency={crew.agency}
          />
        );
      })}
    </div>
  );
}

export default CrewPage;
