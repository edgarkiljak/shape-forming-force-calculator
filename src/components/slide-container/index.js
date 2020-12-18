import React from 'react';
import './index.scss';

const SliderContainer = ({ children, isInView }) => {
  return (
    <div
      className='slider-container'
      style={{
        transform: `translateY(${isInView ? '0%' : '100%'})`,
      }}
    >
      {children}
    </div>
  );
};
export default SliderContainer;
