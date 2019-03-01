import convertIcon from './convertIcon';
import moment from 'moment';
import 'moment/locale/es';

const convertToForecastItem = (item) => {
    moment.locale('es');
    const momentDate = moment.unix(item.dt);
    
    return {
        date: momentDate.format('dddd Do, HH:mm'),
        temp: item.main.temp,
        max: item.main.temp_max,
        min: item.main.temp_min,
        icon: convertIcon(item.weather[0].main)
    }
};

export default convertToForecastItem;