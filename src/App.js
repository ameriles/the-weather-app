import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation/index.js';
import WeatherForecast from './components/WeatherForecast/index.js';
import { Grid, SwipeableDrawer, AppBar, Toolbar, Typography, IconButton, MenuItem, Select, List, ListItem, ListItemText, ListItemIcon, FormControl, FormHelperText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
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
      toggleLabel: "Ver Extendido",
      isDrawerOpen: false,
      city: "San Salvador de Jujuy,AR"
    };
  }

  toggleComponent = () => {
    var isWheaterForecast = this.state.containerComponent === "WeatherForecast";
    this.setState({
      containerComponent: isWheaterForecast ? "WeatherLocation" : "WeatherForecast",
      toggleLabel: isWheaterForecast ? "Ver Extendido" : "Volver al Home",
      isDrawerOpen: false
    });
  }

  toggleDrawer = (isDrawerOpen) => () => {
    this.setState({
      isDrawerOpen: isDrawerOpen
    });
  }

  cityChanged = (event) => {
    console.log(event.target.value);
    this.setState({
      city: event.target.value,
      isDrawerOpen: false
    });
  }

  render() {
    let containerElement = null;
    switch (this.state.containerComponent) {
      case "WeatherLocation":
        containerElement = <WeatherLocation city={this.state.city} />;
        break;
      case "WeatherForecast":
        containerElement = <WeatherForecast city={this.state.city} />;
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
            <AppBar position="static">
              <Toolbar>
                <IconButton color="inherit" onClick={this.toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                  The Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item className="app-container">
            {containerElement}
          </Grid>
        </Grid>

        <SwipeableDrawer open={this.state.isDrawerOpen}
          onOpen={this.toggleDrawer(true)}
          onClose={this.toggleDrawer(false)}
          anchor="left">
          <FormControl>
            <Select
              value={this.state.city}
              onChange={this.cityChanged}>
              <MenuItem value="San Salvador de Jujuy,AR">
                San Salvador de Jujuy
            </MenuItem>
              <MenuItem value="Salta,AR">
                Salta
            </MenuItem>
            </Select>
            <FormHelperText>Seleccione la ciudad</FormHelperText>
          </FormControl>

          <List>
            <ListItem button onClick={this.toggleComponent}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={this.state.toggleLabel} />
            </ListItem>
          </List>
        </SwipeableDrawer>

      </MuiThemeProvider>
    );
  }
}

export default App;