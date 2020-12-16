import React from 'react';
import Logo from '../logo/Logo';
import Box from './Box';
import './Slide2.scss';
import ButtonTransparent from '../buttons/ButtonTransparent';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Slide2 = (props) => {
  const { label } = props;
  const logoStyle = {
    fontWeight: 'lighter',
  };
  const labelStyle = {
    color: 'black',
  };
  const logoCopy = (
    <>
      Diagnostics<span style={logoStyle}>Tools</span>
    </>
  );
  const label1 = (
    <>
      <span style={labelStyle}>S</span>pecial
      <br />
      <span style={labelStyle}>S</span>hape
      <br />
      <span style={labelStyle}>C</span>alculator
    </>
  );
  const label2 = (
    <>
      Lorem
      <br />
      ipsum
      <br />
      dolor sit
      <br />
      amet
    </>
  );
  return (
    <div className="slide-2">
      <Logo position="top" headline={logoCopy} />
      <div className="card-container">
        {' '}
        <Box isActive="true" label={label1} />
        <Box label={label2} />
        <Box label={label2} />
        <Box label={label2} />
        <Box label={label2} />
        <Box label={label2} />
        <Box label={label2} />
        <Box label={label2} />
        <Box label={label2} />
        <Box label={label2} />
      </div>
      <Logo position="bottom" headline="Brand ltda." />
      <ButtonTransparent label="Swipe left to see more" icon={faArrowRight} />
    </div>
  );
};

export default Slide2;
