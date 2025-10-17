
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
    const minTemp = Math.floor(weatherDayData.day.mintemp_c);
    const maxTemp = Math.floor(weatherDayData.day.maxtemp_c);
    console.log("minTemp: ", minTemp)
    return (
        <div className="dayWeather">
            <p className="dayWeather__day">{day}</p>
            <img src={weatherDayData.day.condition.icon} className="dayWeather__icon"/>
            <p className="dayWeather__minTemp"><span className="dayWeather__minTempLabel">L:</span>{minTemp}°</p>
            <p className="dayWeather__maxTemp"><span className="dayWeather__maxTempLabel">H:</span>{maxTemp}°</p>
            <p className="dayWeather__precipitation"><i className="fa-solid fa-droplet dayWeather__droplet"></i>{weatherDayData.day.daily_chance_of_rain}<span className="dayWeather__precipitationPercentageSign"></span>%</p>
        </div>
    )
}

export default DayWeather;

// MAYBE

// daily_chance_of_rain
//
// 