import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation/index.js';
import { Grid } from '@material-ui/core';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid container
        direction="column"
        className="app">
        <Grid item className="nav-bar-top">
          The Weather App
        </Grid>
        <Grid item className="app-container">
          <WeatherLocation city="Paris,FR" />
        </Grid>
      </Grid>
    );
  }
}

export default App;