import React from 'react';
import './Slide2.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const Box = (props) => {
  const { label } = props;
  return (
    <div
      className={`card ${props.isActive && 'active-card'}`}
      onClick={() => props.onClick()}
    >
      <div className="card-label">{label}</div>
      <div className="card-icon">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
};
export default Box;
