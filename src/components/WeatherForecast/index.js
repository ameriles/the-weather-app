import React from 'react';
import ForecastItem from './ForecastItem';
import getForecastUrlByLocation from '../../services/getForecastUrlByLocation';
import convertToForecastItem from '../../services/convertToForecastItem';
import PropTypes from 'prop-types';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import './style.css';

class WeatherForecast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoading: false
        };
    }

    componentWillMount() {
        this.setState({
            isLoading: true
        });

        fetch(getForecastUrlByLocation(this.props.city))
            .then(response => {
                if (response.ok) {
                    this.setState({
                        isLoading: false
                    });
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
                this.setState({
                    isLoading: false
                });
            });
    }

    render() {
        return <Grid container direction="column" className="forecast">
            <Grid item>
                <Typography variant="h5" component="h5">Pronóstico Extendido</Typography>

                {
                    (!this.state.isLoading) 
                        ? <div className="forecast-list">
                            {this.state.items.map((x, i) => <ForecastItem itemData={x} key={i} />)}
                          </div>
                        : <CircularProgress variant="indeterminate" size={80} color="primary" />
                }

            </Grid>
        </Grid>
    }
}

WeatherForecast.propTypes = {
    city: PropTypes.string.isRequired
}

export default WeatherForecast;