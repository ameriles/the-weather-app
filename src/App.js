import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="nav-bar-top">
          Mi Ciudad
        </div>
        <div className="container">
          <div className="weather-location">
            <div className="weather-data">
              <div className="weather-data-icon">
                Icono
              </div>
              <div className="weather-data-info">
                <h2>25ºC</h2>
                <div>
                  <h4>Min: 10ºC</h4>
                  <h4>Max: 30ºC</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
