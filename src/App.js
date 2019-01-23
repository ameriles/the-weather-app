import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="nav-bar-top">
          Mi Ciudad
        </div>
        <div className="container">
          <WeatherLocation />
        </div>
      </div>
    );
  }
}

export default App;