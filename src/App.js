import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [rockets, setRockets] = useState([]);
  const [crews, setCrews] = useState([]);
  const [landPads, setLandPads] = useState([]);

  const fetchData = () => {
    const rocketUrl = 'https://api.spacexdata.com/v4/rockets';
    const crewUrl = 'https://api.spacexdata.com/v4/crew';
    const landPadUrl = 'https://api.spacexdata.com/v4/landpads';

    const getRocket = axios.get(rocketUrl);
    const getCrew = axios.get(crewUrl);
    const getLandPads = axios.get(landPadUrl);

    axios.all([getRocket, getCrew, getLandPads]).then(
      axios.spread((...allData) => {
        const allDataRocket = allData[0].data;
        const allDateCrew = allData[1].data;
        const allDataLandPads = allData[2].data;

        setRockets(allDataRocket);
        setCrews(allDateCrew);
        setLandPads(allDataLandPads);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(rockets);
  console.log(crews);
  console.log(landPads);
  return <div></div>;
}

export default App;
