import React from "react";
import HourWeather from "./HourWeather";
import type { WeatherData } from "../../types/WeatherData";

type HourlyWeatherData = WeatherData["forecast"]["forecastday"][number]["hour"];
interface HourlyWeatherDataProps {
    hourlyWeatherData: HourlyWeatherData
}

const HourlyWeather = ({ hourlyWeatherData }: HourlyWeatherDataProps) => {
    console.log(hourlyWeatherData)
    return hourlyWeatherData.map((hourWeatherData, index) => <HourWeather key={index} hourWeatherData={hourWeatherData} />
    )
}

export default HourlyWeather;