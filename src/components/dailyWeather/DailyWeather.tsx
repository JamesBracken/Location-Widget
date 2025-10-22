import DayWeather from "../dayWeather/DayWeather";

import type { WeatherData } from "../../types/WeatherData";

type CurrentWeatherData = WeatherData["current"];
type CurrentLocationData = WeatherData["location"];
type WeatherForecastData = WeatherData["forecast"]["forecastday"];

interface DailyWeatherProps {
    currentWeatherData: CurrentWeatherData,
    currentLocation: CurrentLocationData,
    weatherForecastData: WeatherForecastData
}

const DailyWeather = ({ currentWeatherData, currentLocation, weatherForecastData }: DailyWeatherProps) => {
    const currentTemp: string = JSON.stringify(currentWeatherData.heatindex_c).slice(0, 2)

    return (
        <div className="dailyWeather">
            <div className="dailyWeather__innerContainer">
                <div className="dailyWeather__leftHeader">
                    <p className="dailyWeather__currentTemp">{currentTemp}°</p>
                    <p className="dailyWeather__currentLocation">{currentLocation.name}</p>
                </div>
                <div className="dailyWeather__rightHeader">
                    < img className="dailyWeather__conditionIcon" src={currentWeatherData.condition.icon} />
                    < p className="dailyWeather__conditionText" > {currentWeatherData.condition.text}</p >
                </div>
            </div>
            {weatherForecastData.map((weatherDayData, index) => {
                return (<DayWeather
                    key={index}
                    weatherDayData={weatherDayData}
                />)
            })}

        </div>
    )
}

export default DailyWeather;