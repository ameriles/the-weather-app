import React from 'react';
import WeatherIcons from 'react-weathericons';

const ForecastItem = ({itemData}) => (
    <div className="forecast-item">
        <div className="forecast-item-row">
            <h5>{itemData.date}</h5>
        </div>
        <div className="forecast-item-row">
            <WeatherIcons name={itemData.icon} size="2x" className="forecast-item-icon" />
            <span className="forecast-item-temp">{itemData.temp}°C</span>
            <span className="forecast-item-max">Max: {itemData.max}°C</span>
            <span className="forecast-item-min">Min: {itemData.min}°C</span>
        </div>
    </div>
);

export default ForecastItem;