import React from 'react';
import WeatherData from './WeatherData/index.js';
import { Grid } from '@material-ui/core';
import './style.css';

const WeatherLocation = ({ city }) => (
    <Grid container
        className="weather-location">
        <h1>{city}</h1>
        <WeatherData 
            icon="day-sunny"
            temp={25}
            min={18}
            max={35}
            wind={10}
            pressure={1010}
            humidity={20}
            />
    </Grid>
)

export default WeatherLocation;