import React from "react";
import HourWeather from "../hourWeather/HourWeather";
import type { WeatherData } from "../../types/WeatherData";

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
    //console.log("hourlyWeatherData: ", hourlyWeatherData)
    const currentTemp: string = JSON.stringify(currentWeatherData.heatindex_c).slice(0, 2)
    const filteredData = hourlyWeatherData.filter(item => {
        const itemDateTime = new Date(item.time);
        if (itemDateTime.getDate > userDateTime.getDate) return true; // Check if the date item date is greater than the current date 
        return itemDateTime.getHours() >= userDateTime.getHours()
    })
    // console.log(hourlyWeatherData)
    // console.log(currentWeatherData)
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

// NOTES ---------------------------------------
// Add logic to display only hourly data from current time instead of 0
//
//
//
//
// STYLING
// Create a background
//
//
//
// Make component responsive
// Dynamically change the background according to current weather conditions

// EXTENSION
// Add date selection to view hourly for different dates
// For first time display Now instead