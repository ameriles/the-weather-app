import React from 'react';
import ForecastItem from './ForecastItem';
import getForecastUrlByLocation from '../../services/getForecastUrlByLocation';
import convertToForecastItem from '../../services/convertToForecastItem';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import './style.css';

class WeatherForecast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentWillMount() {
        fetch(getForecastUrlByLocation(this.props.city))
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error('No se encontró pronóstico extendido');
                }
            })
            .then(data => {
                const items = data.list.map(x => convertToForecastItem(x));
                console.log(items);
                this.setState({
                    items: items
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return <Grid container direction="column" className="forecast">
            <Grid item>
                <h2>Pronóstico Extendido</h2>
                <div className="forecast-list">
                    {this.state.items.map((x, i) => <ForecastItem itemData={x} key={i} />)}
                </div>
            </Grid>
        </Grid>
    }
}

WeatherForecast.propTypes = {
    city: PropTypes.string.isRequired
}

export default WeatherForecast;