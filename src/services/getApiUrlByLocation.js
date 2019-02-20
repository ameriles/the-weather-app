import {api_key, api_url} from '../constants/api_weather';

const getApiUrlByLocation = city => {
    return `${api_url}?q=${city}&appid=${api_key}&units=metric`;
};

export default getApiUrlByLocation;