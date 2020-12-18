import React, { useEffect, useState } from 'react';
import './ProgressBar.scss';

const ProgressBar = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let interval;
    if (value < 100) {
      interval = setInterval(() => {
        setValue(value + 1);
      }, 50);
    }
    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <div className='progress-main-bar-container'>
      <div className='progress-bar-container'>
        <div style={{ width: `${value}%` }} />
      </div>
      <div className='progress-count'>{value}%</div>
    </div>
  );
};

export default ProgressBar;
