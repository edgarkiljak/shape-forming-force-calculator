import React, { useState } from 'react';
import Slide2 from './components/slide-2/Slide2';
import Slide3 from './components/slide-3/Slide3';
import './App.scss';
const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideTwoState, setSlideTwoState] = useState({ selectedBox: 0 });
  const handleSlideTwoChange = (selectedBoxIndex) => {
    setSlideTwoState({ selectedBox: selectedBoxIndex });
    setCurrentSlide(1);
  };
  return (
    <div className="App">
      <Slide2
        selectedBoxIndex={slideTwoState.selectedBox}
        onChange={handleSlideTwoChange}
      />
      <Slide3 isInView={currentSlide === 1} />
    </div>
  );
};
export default App;
