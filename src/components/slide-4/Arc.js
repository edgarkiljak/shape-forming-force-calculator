import React, { useState, useEffect } from 'react';
import './Slide4.scss';

const Arc = (props) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let interval;
    const maxVal = 65;
    const stepTime = 55;
    if (value < maxVal) {
      interval = setInterval(() => {
        setValue(value + 1);
      }, stepTime);
    }
    return () => {
      clearInterval(interval);
    };
  }, [value]);
  return (
    <div className='arc'>
      <div className='div1'>
        <div className='rotater animate'></div>
        <div className='div2'>
          <div className='inside'>
            <div className='innerredcircle'></div>
          </div>
        </div>
      </div>
      <div className='kpsi-value'>{value} kpsi</div>
      <div className='div3'></div>
      <div className='minLabel'>Min</div>
      <div className='maxLabel'>Max</div>
    </div>
  );
};
export default Arc;
