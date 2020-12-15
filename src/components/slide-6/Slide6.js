import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Slide6.scss';

const Slide6 = () => {
  // Set state
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get('/data.json').then((response) => {
      const data = response;
      setData(data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className="data-list">test</div>;
};

export default Slide6;
