import React from 'react';
import Logo from '../logo/Logo';
import './Slide5.scss';
import SliderContainer from '../slide-container';
import '../buttons/Button.scss';
import ButtonWhite from '../buttons/ButtonWhite';
import ProgressBar from './ProgressBar';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Slide5 = (props) => {
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
      <div className='analysing-headline'>Analysing input, please wait</div>
      {props.isInView && <ProgressBar />}

      <Logo position='bottom' headline='Brand ltda.' />
      <ButtonWhite
        label='See Results'
        icon={faCheck}
        onClick={() => props.onChange()}
      />
    </SliderContainer>
  );
};
export default Slide5;
