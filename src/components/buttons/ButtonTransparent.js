import React from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonTransparent = (props) => {
  const { label, icon } = props;
  return (
    <div className="button transparent-button">
      <div className="transparent-button-label">{label}</div>
      <div className="transparent-button-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};

export default ButtonTransparent;
