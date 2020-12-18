import React from 'react';
import Logo from '../logo/Logo';
import './Slide4.scss';
import '../buttons/Button.scss';
import SliderContainer from '../slide-container';
import Arc from './Arc';
import ButtonWhite from '../buttons/ButtonWhite';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <SliderContainer isInView={props.isInView || props.isStepDone}>
      <Logo
        position='top'
        headline={logoCopy}
        subline='Special Shape Forming Force Calculator'
      />
      <div className='arc-headline'>Tensile Strength</div>
      <div className='arc-container'>{props.isInView && <Arc />}</div>
      <Logo position='bottom' headline='Brand ltda.' />
      <ButtonWhite
        label='Next Step'
        icon={faArrowRight}
        onClick={() => props.onChange()}
      />
    </SliderContainer>
  );
};
export default Slide4;
