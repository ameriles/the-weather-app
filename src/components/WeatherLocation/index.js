import React from 'react';
import WeatherData from './WeatherData/index.js';
import { Grid } from '@material-ui/core';
import './style.css';

class WeatherLocation extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            icon: "day-sunny",
            temp: 22,
            min: 18,
            max: 30,
            wind: 15,
            pressure: 1010,
            humidity: 20
        };
    }

    componentWillMount() {
        console.log("llamando a la api...");
        
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.props.city + "&appid=4e8471cf1925105f577ae112c003bd99&units=metric")
            .then(response => {
                return response.json();
            }).then(data => {
                console.log("me respondio la api...");
                this.setState({
                    temp: data.main.temp,
                    max: data.main.temp_max,
                    min: data.main.temp_min,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure
                });
            });
            

    }

    render() {
        return <Grid container
            className="weather-location">
            <h1>{this.props.city}</h1>
            <WeatherData 
                icon={this.state.icon}
                temp={this.state.temp}
                min={this.state.min}
                max={this.state.max}
                wind={this.state.wind}
                pressure={this.state.pressure}
                humidity={this.state.humidity}
                />
        </Grid>
    }
}


export default WeatherLocation;