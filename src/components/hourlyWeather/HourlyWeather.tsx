import React from "react";
import HourWeather from "../hourWeather/HourWeather";
import type { WeatherData } from "../../types/WeatherData";

type HourlyWeatherData = WeatherData["forecast"]["forecastday"][number]["hour"];
type CurrentWeatherData = WeatherData["current"];

interface HourlyWeatherDataProps {
    hourlyWeatherData: HourlyWeatherData,
    currentWeatherData: CurrentWeatherData
}

const HourlyWeather = ({ hourlyWeatherData, currentWeatherData }: HourlyWeatherDataProps) => {
    const currentTemp = JSON.stringify(currentWeatherData.heatindex_c).slice(0, 2)
    // console.log(hourlyWeatherData)
    //Structure header like this
    // LEFT SIDE
    // City
    // Current temperature
    // 
    // RIGHT SIDE
    // Current weather icon
    // Current weather description
    // Todays high and low
    // 
    console.log(currentWeatherData)
    return (
        <div className="hourlyWeather">
            <div className="hourlyWeather__innerContainer">
                <div className="hourlyWeather__leftHeader">
                    <p className="hourlyWeather__currentTemp">{currentTemp}</p>
                </div>
                <div className="hourlyWeather__rightHeader">
                    < img className="hourlyWeather__conditionIcon" src={currentWeatherData.condition.icon} />
                    < p className="hourlyWeather__conditionText"> {currentWeatherData.condition.text}</p >
                </div>
            </div>
            <div className="hourlyWeather__innerContainer hourlyWeather__innerContainer--scrollable">
                {hourlyWeatherData.map((hourWeatherData, index) => <HourWeather key={index} hourWeatherData={hourWeatherData} />)}
            </div>
        </div>
    )
}

export default HourlyWeather;

// NOTES ---------------------------------------
//
//
//
//
//
//
// STYLING
// Create a background
//
//
//
//
// Dynamically change the background according to current weather conditions