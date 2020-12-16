import React from 'react';
import Box from './Box';
import './Slide2.scss';
const Slide2 = (props) => {
  const { label } = props;
  const labelStyle = {
    color: 'black',
  };
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
      <div className="card-container">
        {' '}
        <Box className="active" label={label1} />
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
    </div>
  );
};

export default Slide2;
