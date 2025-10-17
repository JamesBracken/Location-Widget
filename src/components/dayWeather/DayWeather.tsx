
import type { WeatherData } from "../../types/WeatherData";

type WeatherDayForecastData = WeatherData["forecast"]["forecastday"][number];

interface weatherDayDataProps {
    weatherDayData: WeatherDayForecastData
}

const DayWeather = ({ weatherDayData }: weatherDayDataProps) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(weatherDayData)
    console.log("Date: ", weekday[new Date(weatherDayData.date).getDay()].substring(0, 3))
    const day = weekday[new Date(weatherDayData.date).getDay()].substring(0, 3);
    return (
        <div>
            <p>{day}</p>
            <img src={weatherDayData.day.condition.icon} />
            <p>{weatherDayData.day.mintemp_c}</p>
            <p>{weatherDayData.day.maxtemp_c}</p>
        </div>
    )
}

export default DayWeather;

// MAYBE

// daily_chance_of_rain
//
// 