import React, { Component } from 'react';
import './index.css';
import Contact from './components/Contact.jsx';
import Location from './components/Location.jsx';
// import Description from './components/Description';
import './locationData.js';
import LocationList from './components/LocationList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contact />
          <Location />
            <LocationList />
      </div>
    );
  }
}

export default App;
