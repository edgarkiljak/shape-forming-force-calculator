import React, { useState } from 'react';
import Slide2 from './components/slide-2/Slide2';
// import Slide3 from './components/slide-3/Slide3';
import './App.scss';

const App = () => {
  const [slideTwoState, setSlideTwoState] = useState({ selectedBox: 0 });
  const handleSlideTwoChange = (selectedBoxIndex) => {
    setSlideTwoState({ selectedBox: selectedBoxIndex });
  };
  return (
    <div className="App">
      <Slide2
        selectedBoxIndex={slideTwoState.selectedBox}
        onChange={handleSlideTwoChange}
      />
    </div>
  );
};

export default App;
