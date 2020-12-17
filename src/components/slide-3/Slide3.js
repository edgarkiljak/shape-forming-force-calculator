import React, { useRef } from 'react';
import Logo from '../logo/Logo';
import Slider from './Slider';
import './Slide3.scss';
import ButtonToggle from '../buttons/ButtonToggle';
import ButtonWhite from '../buttons/ButtonWhite';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Slide3 = (props) => {
  // Logos setup
  const logoStyle = {
    fontWeight: 'lighter',
  };
  const logoCopy = (
    <>
      Diagnostics<span style={logoStyle}>Tools</span>
    </>
  );

  // Deal with range slider left/right colours
  const slider = useRef();

  const min = slider.min;
  const max = slider.max;
  const value = slider.value;

  if (slider.current) {
    // loaded
    slider.current.style.background = `linear-gradient(to right, red 0%, red ${
      ((value - min) / (max - min)) * 100
    }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;

    slider.current.oninput = function () {
      slider.current.style.background = `linear-gradient(to right, red 0%, red ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 100%)`;
    };
  }

  return (
    <div className="slide-3">
      <Logo
        position="top"
        headline={logoCopy}
        subline="Special Shape Forming Force Calculator"
        xPos={-16}
      />
      <div className="sliders-container">
        {' '}
        <Slider
          name="Thickness"
          id="thickness-slider"
          min={0.01}
          max={0.1}
          step={0.01}
          refs={slider}
        />
        <Slider name="Length" id="length-slider" min={120} max={150} step={1} />
      </div>
      <div className="toggle-buttons-container">
        {' '}
        <ButtonToggle label="Inch" side="left" />
        <ButtonToggle label="cm" side="right" isActive="true" />
      </div>
      <Logo position="bottom" headline="Brand ltda." />
      <ButtonWhite label="Next Step" icon={faArrowRight} />
    </div>
  );
};

export default Slide3;
