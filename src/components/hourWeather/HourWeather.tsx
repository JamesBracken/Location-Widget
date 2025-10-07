import React from "react";
import type { WeatherData } from "../../types/WeatherData";

type HourWeatherData = WeatherData["forecast"]["forecastday"][number]["hour"][number];
interface HourWeatherDataProps {
    hourWeatherData: HourWeatherData
}

const HourWeather = ({ hourWeatherData }: HourWeatherDataProps) => {

    //Display data in this format
    //Hour
    //Weather img icon
    //Temperature
    const time = hourWeatherData.time.slice(11, 13);
    return (
        <div className="hourWeather">
            <p className="hourWeather__time">{time}</p>
            <img className="hourWeather__image" src={hourWeatherData.condition.icon} />
            <p className="hourWeather__temp">{hourWeatherData.temp_c}</p>
        </div>
    )
}


export default HourWeather;

// NOTES ---------------------
// Clean up the time and display only the hour FINISHED
// Display content vertically FINISHED
// Reduce weather img sizes FINISHED
//
//
// Further refine the data passed as props, curently passing large packages of excess data
// STYLING
// Add f-weight temperature and time FINISHED
// Adjust P-M in background and all content FINISHED
//
//
//