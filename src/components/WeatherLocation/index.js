import React from 'react';
import WeatherIcons from 'react-weathericons';
import './style.css';

const WeatherLocation = () => (
    <div className="weather-location">
        <h1>San Salvador de Jujuy</h1>
        <div className="weather-data">
            <div className="weather-data-icon">
                <WeatherIcons name="day-sunny" size="2x" />
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
)

export default WeatherLocation;