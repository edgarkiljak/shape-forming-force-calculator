import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.scss';

const ButtonWhite = (props) => {
  const { label, icon } = props;

  return (
    <div
      onClick={() => props.onClick && props.onClick()}
      className='button white-button'
    >
      <div className='white-button-label'>{label}</div>
      <div className='white-button-icon'>
        {' '}
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};

export default ButtonWhite;
