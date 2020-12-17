import React, { useState } from 'react';
import Slide2 from './components/slide-2/Slide2';
import Slide3 from './components/slide-3/Slide3';
import Slide4 from './components/slide-4/Slide4';
import './App.scss';
const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideTwoState, setSlideTwoState] = useState({ selectedBox: 0 });
  const handleSlideTwoChange = (selectedBoxIndex) => {
    setSlideTwoState({ selectedBox: selectedBoxIndex });
    setCurrentSlide(1);
  };
  const handleSlideThreeChange = (...params) => {
    // slide 3 code;
    setCurrentSlide(2);
  };

  const handleSlideFourChange = (...params) => {
    // slide 4 code;
    setCurrentSlide(3);
  };

  const handleSlideFiveChange = (...params) => {
    // slide 5code;
    setCurrentSlide(4);
  };
  return (
    <div className="App">
      <Slide2
        selectedBoxIndex={slideTwoState.selectedBox}
        onChange={handleSlideTwoChange}
      />
      <Slide3 isInView={currentSlide === 1} />
      <Slide4 isInView={currentSlide === 1} />
    </div>
  );
};
export default App;
