import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Rocket() {
  const [rockets, setRockets] = useState([]);
  const url = 'https://api.spacexdata.com/v4/rockets';

  useEffect(() => {
    getAllRockets();
  }, []);

  const getAllRockets = () => {
    axios.get(`${url}`).then((response) => console.log(response));
  };

  return <div></div>;
}

