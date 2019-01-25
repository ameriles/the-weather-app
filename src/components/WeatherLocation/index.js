import React from 'react';
import WeatherData from './WeatherData/index.js';
import './style.css';

const WeatherLocation = ({city}) => (
    <div className="weather-location">
        <h1>{city}</h1>
        <WeatherData />
    </div>
)

export default WeatherLocation;