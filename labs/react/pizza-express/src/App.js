import React, { Component } from 'react';
import Navbar from './components/Navbar';
import FullWidthImage from './components/FullWidthImage';
import Description from './components/Description';
import Menu from './components/Menu';
import Locations from './components/Locations';
import StoreHours from './components/StoreHours';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FullWidthImage />
        <Description />
        <Menu />
        <Locations />
        <Contact />
      </div>
    );
  }
}

export default App;