import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherData = () => (
    <div className="weather-data">
        <div className="weather-data-icon">
            <WeatherIcons name="day-sunny" size="2x" />
        </div>
        <div className="weather-data-temperature">
            <h2>25ºC</h2>
            <div>
                <h4>Min: 10ºC</h4>
                <h4>Max: 30ºC</h4>
            </div>
        </div>
        <div className="weather-data-extra">
            <div>
                <h4>Wind: 10km/h</h4>
                <h4>Presión: 1010</h4>
                <h4>Humedad: 45%</h4>
            </div>
        </div>
    </div>
);

export default WeatherData;