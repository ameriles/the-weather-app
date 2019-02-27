const convertIcon = (apiIcon) => {
    switch (apiIcon) {
        case "Clouds":
        return "cloudy";
        
        case "Clear":
        return "day-sunny";
        
        case "Drizzle":
        return "showers";
        
        case "Rain":
        return "rain";

        default:
        return "na";
    }
}

export default convertIcon;