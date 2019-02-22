import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation/index.js';
import { Grid } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, pink } from '@material-ui/core/colors';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: pink,
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <Grid container
            direction="column"
            className="app">
            <Grid item className="nav-bar-top">
              The Weather App
          </Grid>
          <Grid item className="app-container">
            <WeatherLocation city="San Pedro,Jujuy,AR" />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;