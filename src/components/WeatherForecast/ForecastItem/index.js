import React from 'react';
import WeatherIcons from 'react-weathericons';
import {Paper, Typography} from '@material-ui/core';

const ForecastItem = ({ itemData }) => (
    <Paper elevation={1} style={{margin: "5px"}}>
        <div className="forecast-item">
            <div className="forecast-item-row">
                <Typography variant="h5" component="h5">{itemData.date}</Typography>
            </div>
            <div className="forecast-item-row">
                <WeatherIcons name={itemData.icon} size="2x" className="forecast-item-icon" />
                <Typography variant="body1" component="span" className="forecast-item-temp">{itemData.temp}°C</Typography>
                <Typography variant="body1" component="span" className="forecast-item-max">Max: {itemData.max}°C</Typography>
                <Typography variant="body1" component="span" className="forecast-item-min">Min: {itemData.min}°C</Typography>
            </div>
        </div>
    </Paper>
);

export default ForecastItem;