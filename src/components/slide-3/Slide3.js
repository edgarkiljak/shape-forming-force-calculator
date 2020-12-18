import React, { useState } from 'react';
import Logo from '../logo/Logo';
import Slider from './Slider';
import './Slide3.scss';
import '../buttons/Button.scss';
import SliderContainer from '../slide-container';
import ButtonToggle from '../buttons/ButtonToggle';
import ButtonWhite from '../buttons/ButtonWhite';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Slide3 = (props) => {
  const [selectedUnit, setSelectedUnit] = useState(props.selectedUnit);
  const [thickness, setTickness] = useState(props.thickness);
  const [length, setLenth] = useState(props.length);

  const handleClick = () => {
    props.onChange({ thickness, length, selectedUnit });
  };

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

  const toggleButton = toggleButtons.map((buttonItem, index) => {
    return (
      <ButtonToggle
        key={index}
        id={index}
        onClick={() => setSelectedUnit(buttonItem.label)}
        isActive={buttonItem.label === selectedUnit}
        label={buttonItem.label}
        side={buttonItem.side}
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
    <SliderContainer isInView={props.isInView || props.isStepDone}>
      <Logo
        position='top'
        headline={logoCopy}
        subline='Special Shape Forming Force Calculator'
      />
      <div className='sliders-container'>
        <Slider
          name='Thickness'
          id='thickness-slider'
          min={0.01}
          max={0.1}
          step={0.01}
          onChange={(value) => setTickness(value)}
        />
        <Slider
          name='Length'
          id='length-slider'
          min={120}
          max={150}
          step={1}
          onChange={(value) => setLenth(value)}
        />
      </div>
      <div className='toggle-buttons-container'>{toggleButton}</div>
      <Logo position='bottom' headline='Brand ltda.' />
      <ButtonWhite
        label='Next Step'
        icon={faArrowRight}
        onClick={handleClick}
      />
    </SliderContainer>
  );
};
export default Slide3;
