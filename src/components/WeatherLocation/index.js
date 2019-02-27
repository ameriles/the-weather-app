import React from 'react';
import WeatherData from './WeatherData/index.js';
import { Grid, CircularProgress } from '@material-ui/core';
import getWeatherUrlByLocation from '../../services/getWeatherUrlByLocation';
import convertIcon from '../../services/convertIcon';
import './style.css';

class WeatherLocation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherData: {
                icon: "day-sunny",
                temp: 0,
                min: 0,
                max: 0,
                wind: 0,
                pressure: 0,
                humidity: 0,
            },
            errorMessage: null,
            isLoading: false
        };
    }

    componentWillMount() {

        this.setState({
            isLoading: true
        });

        const url = getWeatherUrlByLocation(this.props.city);
        fetch(url)
            .then(response => {
                this.setState({
                    isLoading: false
                })

                if (response.ok) {
                    return response.json();
                } else {
                    throw Error("No se encontró la ciudad");
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    weatherData: {
                        icon: convertIcon(data.weather[0].main),
                        temp: data.main.temp,
                        max: data.main.temp_max,
                        min: data.main.temp_min,
                        humidity: data.main.humidity,
                        pressure: data.main.pressure,
                    },
                    errorMessage: null
                });
            }).catch(error => {
                this.setState({
                    errorMessage: error.message,
                    isLoading: false
                })
            });
    }

    render() {
        return <Grid container
            className="weather-location">

            <div className="alert-error"
                style={{ display: this.state.errorMessage !== null ? "block" : "none" }}>
                <p><strong>Error: </strong>{this.state.errorMessage}</p>
            </div>

            <h1>{this.props.city}</h1>

            {
                (!this.state.isLoading) 
                    ? <WeatherData data={this.state.weatherData} />
                    : <CircularProgress variant="indeterminate" size={80} color="primary" />
            }
        </Grid>
    }
}


export default WeatherLocation;