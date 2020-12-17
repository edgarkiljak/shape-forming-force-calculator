import React from 'react';
import './Button.scss';

const ButtonToggle = (props) => {
  const { label } = props;
  return (
    <div
      className={`button toggle-button ${props.side} ${
        props.isActive && 'active'
      }`}
    >
      <div className="toggle-button-label">{label}</div>
    </div>
  );
};

export default ButtonToggle;
