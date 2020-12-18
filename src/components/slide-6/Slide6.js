import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Slide6.scss';
import Logo from '../logo/Logo';
import '../buttons/Button.scss';
import ForceContainer from './ForceContainer';
import ButtonWhite from '../buttons/ButtonWhite';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Slide6 = () => {
  // Logos setup
  const logoStyle = {
    fontWeight: 'lighter',
  };
  const logoCopy = (
    <>
      Diagnostics<span style={logoStyle}>Tools</span>
    </>
  );
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

  console.log(data);

  return (
    data.length > 0 && (
      <div className="slide-6">
        <Logo
          position="top"
          headline={logoCopy}
          subline="Special Shape Forming Force Calculator"
        />
        <div className="force-container-wrapper">
          {[...data].map((el, index) => {
            return (
              <ForceContainer
                key={index}
                // circleIcon={el.icon}
                topPanelValue={el.force}
                bottomPannelValue={el.forceTotal}
                panelDescription={el.Description}
              />
            );
          })}
        </div>
        <Logo position="bottom" headline="Brand ltda." />
        <div className="buttons-container">
          <ButtonWhite label="Export" icon={faFilePdf} />
          <ButtonWhite label="Restart" icon={faSync} />
        </div>
      </div>
    )
  );
};

export default Slide6;
