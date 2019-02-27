import {api_key, api_url} from '../constants/api_forecast';

const getForecastUrlByLocation = city => {
    return `${api_url}?q=${city}&appid=${api_key}&units=metric`;
};

export default getForecastUrlByLocation;