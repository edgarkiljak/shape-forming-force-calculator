import React, { useState, useEffect } from 'react';
import Logo from '../logo/Logo';
import Slider from './Slider';
import './Slide3.scss';
import '../buttons/Button.scss';
import ButtonToggle from '../buttons/ButtonToggle';
import ButtonWhite from '../buttons/ButtonWhite';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Slide3 = (props) => {
  // Switch toggle active class
  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnClick = (index) => setActiveIndex(index);
  useEffect(() => {}, [activeIndex]);
  const toggleButtons = [
    {
      label: 'Inch',
      side: 'left',
    },
    {
      label: 'cm',
      side: 'right',
    },
  ];

  const toggleButton = toggleButtons.map((el, index) => {
    return (
      <ButtonToggle
        key={index}
        id={index}
        onClick={() => handleOnClick(index)}
        isActive={activeIndex === index}
        label={el.label}
        side={el.side}
      />
    );
  });
  // Logos setup
  const logoStyle = {
    fontWeight: 'lighter',
  };
  const logoCopy = (
    <>
      Diagnostics<span style={logoStyle}>Tools</span>
    </>
  );

  return (
    <div
      className="slide-3"
      style={{ transform: `translateY(${props.isInView ? '0%' : '100%'})` }}
    >
      <Logo
        position="top"
        headline={logoCopy}
        subline="Special Shape Forming Force Calculator"
      />
      <div className="sliders-container">
        {' '}
        <Slider
          name="Thickness"
          id="thickness-slider"
          min={0.01}
          max={0.1}
          step={0.01}
        />
        <Slider name="Length" id="length-slider" min={120} max={150} step={1} />
      </div>
      <div className="toggle-buttons-container">{toggleButton}</div>
      <Logo position="bottom" headline="Brand ltda." />
      <ButtonWhite label="Next Step" icon={faArrowRight} />
    </div>
  );
};
export default Slide3;
