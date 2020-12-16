import React from 'react';
import './Logo.scss';

const Logo = (props) => {
  const { position, headline, subline } = props;
  return (
    <div className={`logo ${position}`}>
      <div className="headline">{headline}</div>
      <div className="subline">{subline}</div>
    </div>
  );
};

export default Logo;
