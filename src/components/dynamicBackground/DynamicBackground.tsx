import React, { useState, useEffect } from "react";


interface DynamicBackgroundProps {
    currentCondition: string,
    isDay: number
}

const DynamicBackground = ({ currentCondition, isDay }: DynamicBackgroundProps) => {
    const [backgroundImagePath, setBackgroundImagePath] = useState<string>("");

    const sunnyConditions = [
        "Sunny",
        "day",
    ];

    const cloudyConditions = [
        "Partly cloudy",
        "Cloudy",
        "Overcast",
        "Mist",
        "Fog",
        "Freezing fog",
    ];

    const rainyConditions = [
        "Patchy rain possible",
        "Patchy light drizzle",
        "Light drizzle",
        "Freezing drizzle",
        "Heavy freezing drizzle",
        "Patchy light rain",
        "Light rain",
        "Moderate rain at times",
        "Moderate rain",
        "Heavy rain at times",
        "Heavy rain",
        "Light freezing rain",
        "Moderate or heavy freezing rain",
    ];

    const snowConditions = [
        "Patchy snow possible",
        "Patchy sleet possible",
        "Patchy freezing drizzle possible",
        "Blowing snow",
        "Blizzard",
        "Light sleet",
        "Moderate or heavy sleet",
        "Patchy light snow",
        "Light snow",
        "Patchy moderate snow",
    ];

    const thunderConditions = [
        "Thundery outbreaks possible",
    ];

    useEffect(() => {
        if (isDay === 1) {

            if (sunnyConditions.includes(currentCondition)) {
                setBackgroundImagePath("./src/assets/images/sun.jpg")
            } else if (cloudyConditions.includes(currentCondition)) {
                setBackgroundImagePath("./src/assets/images/clouds.jpg")
            } else if (rainyConditions.includes(currentCondition)) {
                setBackgroundImagePath("./src/assets/images/rain.jpg")
            } else if (snowConditions.includes(currentCondition)) {
                setBackgroundImagePath("./src/assets/images/snow.jpg")
            } else if (thunderConditions.includes(currentCondition)) {
                setBackgroundImagePath("./src/assets/images/thunder.jpg")
            } else {
                setBackgroundImagePath("./src/assets/images/sun.jpg")
            }
        } else if (isDay === 0) {
            if (currentCondition === "Clear") {
                setBackgroundImagePath("./src/assets/images/clear-night.jpg")
            } else if (cloudyConditions.includes(currentCondition)) {
                setBackgroundImagePath("./src/assets/images/cloudy-night.jpg")
            } else if (rainyConditions.includes(currentCondition)) {
                setBackgroundImagePath("./src/assets/images/rainy-night.jpg")
            } else if (snowConditions.includes(currentCondition)) {
                setBackgroundImagePath("./src/assets/images/snow.jpg")
            } else if (thunderConditions.includes(currentCondition)) {
                setBackgroundImagePath("./src/assets/images/thunder.jpg")
            } else {
                setBackgroundImagePath("./src/assets/images/clear-night.jpg")
            }
        }
    }, [currentCondition, isDay])
    return (
        <div className="dynamicBackground">
            <img className="dynamicBackground__img" src={backgroundImagePath} alt="" />
        </div>
    )
}

export default DynamicBackground;