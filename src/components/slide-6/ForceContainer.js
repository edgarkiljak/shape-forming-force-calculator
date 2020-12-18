import React from 'react';
import './Slide6.scss';

const ForceContainer = (props) => {
  const {
    circleIcon,
    topPanelLabel,
    bottomPanelLabel,
    topPanelValue,
    bottomPannelValue,
    panelDescription,
  } = props;
  return (
    <div className="force-container">
      <div className="circle-container">
        <div class="inner-circle">
          <div className="circle-icon">{circleIcon}</div>
        </div>
      </div>
      <div className="panel-container">
        <div className="top-panel">
          <div className="top-panel-label">Test</div>
          <div className="top-panel-value">Test</div>
          <div className="top-panel-unit">Test</div>
        </div>
        <div className="bottom-panel">
          <div className="bottom-panel-label">Test</div>
          <div className="bottom-panel-value">Test</div>
          <div className="bottom-panel-unit">Test</div>
          <div className="bottom-panel-description">Test Test Test Test</div>
        </div>
      </div>
    </div>
  );
};

export default ForceContainer;
