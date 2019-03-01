import React from 'react';
import WeatherIcons from 'react-weathericons';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const WeatherData = ({ data }) => {
    const { icon, temp, min, max, wind, pressure, humidity } = data;
    return <Card>
        <CardContent>
            <Grid container
                direction="row"
                className="weather-data">
                <Grid item
                    xs={6}>
                    <WeatherIcons name={icon} size="2x" />
                    <Typography variant="h2">{temp}ºC</Typography>
                </Grid>
                <Grid item
                    xs={6}>
                    <div>
                        <Typography variant="h4">^ {min}ºC</Typography>
                        <Typography variant="h4">v {max}ºC</Typography>
                    </div>
                    <div>
                        <Typography variant="h4">Wind: {wind}km/h</Typography>
                        <Typography variant="h4">Presión: {pressure}</Typography>
                        <Typography variant="h4">Humedad: {humidity}%</Typography>
                    </div>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
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