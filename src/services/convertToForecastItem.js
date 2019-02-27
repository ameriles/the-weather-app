import convertIcon from './convertIcon';

const convertToForecastItem = (item) => {
    return {
        date: 'Domingo 23, 18:00',
        temp: item.main.temp,
        max: item.main.temp_max,
        min: item.main.temp_min,
        icon: convertIcon(item.weather[0].main)
    }
};

export default convertToForecastItem;