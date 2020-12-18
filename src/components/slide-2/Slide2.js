import React from 'react';
import Logo from '../logo/Logo';
import Box from './Box';
import './Slide2.scss';
import ButtonTransparent from '../buttons/ButtonTransparent';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Slide2 = (props) => {
  // Logos setup
  const logoStyle = {
    fontWeight: 'lighter',
  };
  const labelStyle = {
    color: 'black',
  };
  const handleClick = (index) => {
    props.onChange(index);
  };
  const logoCopy = (
    <>
      Diagnostics<span style={logoStyle}>Tools</span>
    </>
  );
  // Labels setup
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

  // Cards
  const boxes = [
    { label: label1 },
    { label: label2 },
    { label: label2 },
    { label: label2 },
    { label: label2 },
    { label: label2 },
    { label: label2 },
  ];
  return (
    <div className="slide-2">
      <Logo position="top" headline={logoCopy} />
      <div className="card-container">
        {boxes.map((boxItem, index) => (
          <Box
            key={index}
            isActive={index === props.selectedBoxIndex}
            label={boxItem.label}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <Logo position="bottom" headline="Brand ltda." />
      <ButtonTransparent label="Swipe left to see more" icon={faArrowRight} />
    </div>
  );
};
export default Slide2;
