import React from "react";
import HourWeather from "../hourWeather/HourWeather";
import type { WeatherData } from "../../types/WeatherData";

type HourlyWeatherData = WeatherData["forecast"]["forecastday"][number]["hour"];
interface HourlyWeatherDataProps {
    hourlyWeatherData: HourlyWeatherData
}

const HourlyWeather = ({ hourlyWeatherData }: HourlyWeatherDataProps) => {
    console.log(hourlyWeatherData)
    return (
        <div className="HourlyWeather">
            <div className="HourlyWeather__innerContainer HourlyWeather__innerContainer--scrollable">
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