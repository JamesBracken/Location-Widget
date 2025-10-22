import type { WeatherData } from "../../types/WeatherData";

import HourWeather from "../hourWeather/HourWeather";

type HourlyWeatherData = WeatherData["forecast"]["forecastday"][number]["hour"];
type CurrentWeatherData = WeatherData["current"];
type CurrentLocationData = WeatherData["location"];

interface HourlyWeatherDataProps {
    hourlyWeatherData: HourlyWeatherData,
    currentWeatherData: CurrentWeatherData,
    currentLocation: CurrentLocationData,
    userDateTime: Date
}

const HourlyWeather = ({ hourlyWeatherData, currentWeatherData, currentLocation, userDateTime }: HourlyWeatherDataProps) => {
    const currentTemp: string = JSON.stringify(currentWeatherData.heatindex_c).slice(0, 2)
    const filteredData: HourlyWeatherData = hourlyWeatherData.filter(item => {
        const itemDateTime = new Date(item.time);
        if (itemDateTime.getDate > userDateTime.getDate) return true; 
        return itemDateTime.getHours() >= userDateTime.getHours()
    })
    return (
        <div className="hourlyWeather">
            <div className="hourlyWeather__innerContainer">
                <div className="hourlyWeather__leftHeader">
                    <p className="hourlyWeather__currentTemp">{currentTemp}°</p>
                    <p className="hourlyWeather__currentLocation">{currentLocation.name}</p>
                </div>
                <div className="hourlyWeather__rightHeader">
                    < img className="hourlyWeather__conditionIcon" src={currentWeatherData.condition.icon} />
                    < p className="hourlyWeather__conditionText" > {currentWeatherData.condition.text}</p >
                </div>
            </div>
            <div className="hourlyWeather__innerContainer hourlyWeather__innerContainer--scrollable">
                {filteredData.map((hourWeatherData, index) => <HourWeather key={index} hourWeatherData={hourWeatherData} />)}
            </div>
        </div>
    )
}

export default HourlyWeather;