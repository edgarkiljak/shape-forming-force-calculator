import React, { useState } from 'react';
import Logo from '../logo/Logo';
import './Slide4.scss';
import '../buttons/Button.scss';
import ButtonWhite from '../buttons/ButtonWhite';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CircleSlider } from 'react-circle-slider';
const Slide4 = (props) => {
  // Logos setup
  const logoStyle = {
    fontWeight: 'lighter',
  };
  const logoCopy = (
    <>
      Diagnostics<span style={logoStyle}>Tools</span>
    </>
  );

  // const handleChange = (value) => {
  //   console.log(`Changed value ${value}`);
  //   this.setState({ value });
  // };

  // const handleChangeRange = (event) => {
  //   this.setState({
  //     value: event.target.valueAsNumber,
  //   });
  // };
  return (
    <div
      className="slide-4"
      style={{
        transform: `translateY(${props.isInView === 2 ? '0%' : '100%'})`,
      }}
    >
      <Logo
        position="top"
        headline={logoCopy}
        subline="Special Shape Forming Force Calculator"
        xPos={8}
      />
      <div className="arc-container">
        {' '}
        <CircleSlider
          size={300}
          progressColor="yellow"
          value={10}
          showTooltip="true"
          tooltipColor="#ffffff"
        />
      </div>

      <Logo position="bottom" headline="Brand ltda." />
      <ButtonWhite label="Next Step" icon={faArrowRight} />
    </div>
  );
};
export default Slide4;
