import React from 'react';
import './App.css';
import Slider from './components/Slider/Slider';
import slides from './json/slides.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Slider
          slides={slides}
          loop
          navs
          pags
          auto
          stopMouseHover
          delay={5}></Slider>
      </header>
    </div>
  );
}

export default App;
