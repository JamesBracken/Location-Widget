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
    return (
        <>
            {hourWeatherData.time}
            {hourWeatherData.temp_c}
            {hourWeatherData.condition.text}
            <img src={hourWeatherData.condition.icon} />
            {hourWeatherData.condition.code}
            <hr />
        </>
    )
}

export default HourWeather; 