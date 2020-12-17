import React, { useState, useEffect, useRef } from 'react';

const Slider = (props) => {
  const { name, id, min, max, step, defaultValue } = props;
  const [value, setValue] = useState(0);

  useEffect(() => {}, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // // Deal with range slider left/right colours
  // const slider = useRef();
  // const min = slider.min;
  // const max = slider.max;
  // const value = slider.value;

  // if (slider.current) {
  //   // loaded
  //   slider.current.style.background = `linear-gradient(to right, red 0%, red ${
  //     ((value - min) / (max - min)) * 100
  //   }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;

  //   slider.current.oninput = function () {
  //     slider.current.style.background = `linear-gradient(to right, red 0%, red ${
  //       ((value - min) / (max - min)) * 100
  //     }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;
  //   };
  // }

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
        // refs={slider}
      />
      <label>{value}</label>
    </div>
  );
};

export default Slider;
