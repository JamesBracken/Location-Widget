import { useState, useEffect } from "react";

import weatherCategories from "./dynamicBackground.json"

interface DynamicBackgroundProps {
    currentCondition: string,
    isDay: number
}

const DynamicBackground = ({ currentCondition, isDay }: DynamicBackgroundProps) => {
    const [backgroundImagePath, setBackgroundImagePath] = useState<string>("");
    useEffect(() => {
        if (isDay === 1) {

            if (weatherCategories.sunnyConditions.includes(currentCondition)) {
                setBackgroundImagePath("/images/sun.jpg")
            } else if (weatherCategories.cloudyConditions.includes(currentCondition)) {
                setBackgroundImagePath("/images/clouds.jpg")
            } else if (weatherCategories.rainyConditions.includes(currentCondition)) {
                setBackgroundImagePath("/images/rain.jpg")
            } else if (weatherCategories.snowConditions.includes(currentCondition)) {
                setBackgroundImagePath("/images/snow.jpg")
            } else if (weatherCategories.thunderConditions.includes(currentCondition)) {
                setBackgroundImagePath("/images/thunder.jpg")
            } else {
                setBackgroundImagePath("/images/sun.jpg")
            }
        } else if (isDay === 0) {
            if (currentCondition === "Clear") {
                setBackgroundImagePath("/images/clear-night.jpg")
            } else if (weatherCategories.cloudyConditions.includes(currentCondition)) {
                setBackgroundImagePath("/images/cloudy-night.jpg")
            } else if (weatherCategories.rainyConditions.includes(currentCondition)) {
                setBackgroundImagePath("/images/rainy-night.jpg")
            } else if (weatherCategories.snowConditions.includes(currentCondition)) {
                setBackgroundImagePath("/images/snow.jpg")
            } else if (weatherCategories.thunderConditions.includes(currentCondition)) {
                setBackgroundImagePath("/images/thunder.jpg")
            } else {
                setBackgroundImagePath("/images/clear-night.jpg")
            }
        }
    }, [currentCondition, isDay])
    return (
        <div className="dynamicBackground">
            <img className="dynamicBackground__img" src={backgroundImagePath} alt={`${currentCondition} weather condition`} />
        </div>
    )
}

export default DynamicBackground;