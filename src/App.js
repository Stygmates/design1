
import luxury from './images/icon-luxury.svg';
import sedan from './images/icon-sedans.svg';
import suv from './images/icon-suvs.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap" rel="stylesheet"/>        <div id="general">
        <div id="sedan" class="section">
          <img src={sedan} class="image"/>
          <h1>SEDANS</h1>
          Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
          <button class="button">Learn more</button>
        </div>
        <div id="suv" class="section">
        <img src={suv} class="image"/>
        <h1>SUVS</h1>
          Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.
          <button class="button">Learn more</button>
          </div>
        <div id="cruise" class="section">
        <img src={luxury} class="image"/>
        <h1>LUXURY</h1>
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
          <button class="button">Learn more</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
 