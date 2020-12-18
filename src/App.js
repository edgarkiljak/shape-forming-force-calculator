import React, { useState } from 'react';
import Slide2 from './components/slide-2/Slide2';
import Slide3 from './components/slide-3/Slide3';
import Slide4 from './components/slide-4/Slide4';
import Slide5 from './components/slide-5/Slide5';
import Slide6 from './components/slide-6/Slide6';

import './App.scss';
const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideTwoState, setSlideTwoState] = useState({
    selectedBox: 0,
  });
  const [slideThreeState, setSlideThreeState] = useState({
    thickness: 0,
    length: 0,
    selectedUnit: 'cm',
  });

  const handleSlideTwoChange = (selectedBoxIndex) => {
    setSlideTwoState({ selectedBox: selectedBoxIndex });
    setCurrentSlide(1);
  };

  const handleSlideThreeChange = (values) => {
    setSlideThreeState({ ...values });
    setCurrentSlide(2);
  };

  const handleSlideFourChange = () => {
    setCurrentSlide(3);
  };

  const handleSlideFiveChange = () => {
    setCurrentSlide(4);
  };

  const handleReset = () => {
    setSlideTwoState({ selectedBox: 0 });
    setSlideThreeState({ thickness: 0, length: 0, selectedUnit: 'cm' });
    setCurrentSlide(0);
  };

  return (
    <div className="App">
      <Slide2
        selectedBoxIndex={slideTwoState.selectedBox}
        onChange={handleSlideTwoChange}
        isStepDone
      />
      <Slide3
        onChange={handleSlideThreeChange}
        thickness={slideThreeState.thickness}
        length={slideThreeState.length}
        selectedUnit={slideThreeState.selectedUnit}
        isInView={currentSlide === 1}
        isStepDone={currentSlide > 1}
      />
      <Slide4
        onChange={handleSlideFourChange}
        isInView={currentSlide === 2}
        isStepDone={currentSlide > 2}
      />
      <Slide5
        onChange={handleSlideFiveChange}
        isInView={currentSlide === 3}
        isStepDone={currentSlide > 3}
      />
      <Slide6
        isInView={currentSlide === 4}
        isStepDone={currentSlide > 4}
        reset={handleReset}
      />
    </div>
  );
};
export default App;
