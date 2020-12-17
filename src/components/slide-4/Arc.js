import React, { useState, useEffect } from 'react';
import './Slide4.scss';

const Arc = (props) => {
  const { label } = props;
  const [value, setValue] = useState(0);
  useEffect(() => {
    let interval;
    if (value < 65) {
      interval = setInterval(() => {
        setValue(value + 1);
      }, 55);
    }
    return () => {
      clearInterval(interval);
    };
  }, [value]);
  return (
    <div className="arc">
      <div className="label">{label}</div>
      <div class="div1">
        <div class="rotater animate"></div>

        <div class="div2">
          <div class="inside">
            <div class="innerredcircle"></div>
          </div>
        </div>
      </div>
      <div className="kpsi-value">{value} kpsi</div>
      <div class="div3"></div>
      <div className="minLabel">Min</div>
      <div className="maxLabel">Max</div>
    </div>
  );
};
export default Arc;
