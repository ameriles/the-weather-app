import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation/index.js';
import WeatherForecast from './components/WeatherForecast/index.js';
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
  constructor(props) {
    super(props);

    this.state = {
      containerComponent: "WeatherLocation",
      toggleLabel: "Ver Extendido"
    };
  }

  toggleComponent = () => {
    var isWheaterForecast = this.state.containerComponent === "WeatherForecast";
    this.setState({
      containerComponent: isWheaterForecast ? "WeatherLocation" : "WeatherForecast",
      toggleLabel: isWheaterForecast ? "Ver Extendido" : "Volver al Home",
    });
  }

  render() {
    let containerElement = null;
    switch (this.state.containerComponent) {
      case "WeatherLocation":
        containerElement = <WeatherLocation city="Ushuaia,AR" />;
        break;
      case "WeatherForecast":
        containerElement = <WeatherForecast city="Ushuaia,AR"/>;
        break;
      default:
        containerElement = null;
        break;
    }

    return (
      <MuiThemeProvider theme={theme}>
        <Grid container
          direction="column"
          className="app">
          <Grid item className="nav-bar-top">
            The Weather App
              <button onClick={this.toggleComponent}>
                {this.state.toggleLabel}
              </button>
          </Grid>
          <Grid item className="app-container">
            {containerElement}
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;