import React from 'react';
import WeatherData from './WeatherData/index.js';
import { Grid, CircularProgress } from '@material-ui/core';
import getApiUrlByLocation from '../../services/getApiUrlByLocation';
import './style.css';

class WeatherLocation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: "day-sunny",
            temp: 0,
            min: 0,
            max: 0,
            wind: 0,
            pressure: 0,
            humidity: 0,

            errorMessage: null,
            isLoading: false
        };
    }

    componentWillMount() {

        this.setState({
            isLoading: true
        });

        const url = getApiUrlByLocation(this.props.city);
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
                    temp: data.main.temp,
                    max: data.main.temp_max,
                    min: data.main.temp_min,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
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
                    ? <WeatherData
                            icon={this.state.icon}
                            temp={this.state.temp}
                            min={this.state.min}
                            max={this.state.max}
                            wind={this.state.wind}
                            pressure={this.state.pressure}
                            humidity={this.state.humidity}
                        />
                    : <CircularProgress variant="indeterminate" size={80} color="primary" />
            }
        </Grid>
    }
}


export default WeatherLocation;