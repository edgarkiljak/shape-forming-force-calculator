import React, { useState, useEffect } from 'react';

const Slider = (props) => {
  const { name, id, min, max, step, defaultValue } = props;
  const [value, setValue] = useState(0);

  useEffect(() => {}, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider">
      <div className="slider-label">{name}</div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        step={step}
      />
      <label>{value}</label>
    </div>
  );
};

export default Slider;
