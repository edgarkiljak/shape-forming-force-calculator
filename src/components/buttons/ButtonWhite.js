import React from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonWhite = (props) => {
  const { label, icon } = props;

  return (
    <div onClick={() => props.onClick()} className="button white-button">
      <div className="white-button-label">{label}</div>
      <div className="white-button-icon">
        {' '}
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};

export default ButtonWhite;
