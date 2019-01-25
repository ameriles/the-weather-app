import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="nav-bar-top">
          The Weather App
        </div>
        <div className="container">
          <WeatherLocation city="San Salvador de Jujuy"/>
        </div>
      </div>
    );
  }
}

export default App;