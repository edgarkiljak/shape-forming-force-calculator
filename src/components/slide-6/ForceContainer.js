import React from 'react';
import './Slide6.scss';

const ForceContainer = (props) => {
  const {
    circleIcon,
    topPanelValue,
    bottomPannelValue,
    panelDescription,
  } = props;
  return (
    <div className="force-container">
      <div className="circle-container">
        <div className="inner-circle">
          <div className="circle-icon">{circleIcon}</div>
        </div>
      </div>
      <div className="panel-container">
        <div className="top-panel">
          <div className="top-panel-label">Force</div>
          <div className="top-panel-value">{topPanelValue}</div>
          <div className="top-panel-unit">tpf</div>
        </div>
        <div className="bottom-panel">
          <div className="bottom-panel-label">Force Total</div>
          <div className="bottom-panel-value">{bottomPannelValue}</div>
          <div className="bottom-panel-unit">us tons</div>
          <div className="bottom-panel-description">{panelDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default ForceContainer;
