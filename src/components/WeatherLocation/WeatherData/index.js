import React from 'react';
import WeatherIcons from 'react-weathericons';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const WeatherData = ({ data }) => {
    const {icon, temp, min, max, wind, pressure, humidity} = data;
    return <Grid container
        direction="row"
        className="weather-data">
        <Grid item
            xs={6}>
            <WeatherIcons name={icon} size="2x" />
            <h2>{temp}ºC</h2>
        </Grid>
        <Grid item
            xs={6}>
            <div>
                <h4>Min: {min}ºC</h4>
                <h4>Max: {max}ºC</h4>
            </div>
            <div>
                <h4>Wind: {wind}km/h</h4>
                <h4>Presión: {pressure}</h4>
                <h4>Humedad: {humidity}%</h4>
            </div>
        </Grid>
    </Grid>
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        temp: PropTypes.number.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        wind: PropTypes.number,
        pressure: PropTypes.number,
        humidity: PropTypes.number
    })
};

export default WeatherData;