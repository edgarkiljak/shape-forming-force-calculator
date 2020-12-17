import React from 'react';
import './Slide4.scss';

const Arc = (props) => {
  return (
    <div className="arc">
      <div class="div1">
        <div class="rotater animate"></div>

        <div class="div2">
          <div class="inside">
            <div class="innerredcircle"></div>
          </div>
        </div>
      </div>
      <div class="div3"></div>
    </div>
  );
};
export default Arc;
