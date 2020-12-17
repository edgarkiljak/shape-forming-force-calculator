import React, { useRef } from 'react';
import Logo from '../logo/Logo';
import Slider from './Slider';
import './Slide3.scss';
import ButtonTransparent from '../buttons/ButtonTransparent';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Slide3 = (props) => {
  const logoStyle = {
    fontWeight: 'lighter',
  };
  const logoCopy = (
    <>
      Diagnostics<span style={logoStyle}>Tools</span>
    </>
  );

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
      <Logo position="top" headline={logoCopy} />
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

      <Logo position="bottom" headline="Brand ltda." />
    </div>
  );
};

export default Slide3;
