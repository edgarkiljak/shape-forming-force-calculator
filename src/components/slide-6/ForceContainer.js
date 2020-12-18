import React from 'react';
import './Slide6.scss';

const ForceContainer = () => {
  return (
    <div className="force-container">
      <div className="circle-container">
        <div class="inner-circle">
          <div className="circle-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1123"
              height="794"
              stroke="#e52922"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#fff"
              fill-rule="evenodd"
            >
              <path fill="none" d="M399.5 199.5l100 100 100-100" />
            </svg>
          </div>
        </div>
      </div>
      <div className="panel-container">
        <div className="top-panel"></div>
        <div className="bottom-panel"></div>
      </div>
    </div>
  );
};

export default ForceContainer;
