import React from 'react';

const Logo = (props) => {
  const { headline, subline } = props;
  return (
    <div className="logo">
      <div className="headline">{headline}</div>
      <div className="subline">{subline}</div>
    </div>
  );
};

export default Logo;
