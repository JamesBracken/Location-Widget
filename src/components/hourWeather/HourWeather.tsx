import type { WeatherData } from "../../types/WeatherData";

type HourWeatherData = WeatherData["forecast"]["forecastday"][number]["hour"][number];
interface HourWeatherDataProps {
    hourWeatherData: HourWeatherData
}

const HourWeather = ({ hourWeatherData }: HourWeatherDataProps) => {
    const time = hourWeatherData.time.slice(11, 13);
    const temperature = Math.floor(hourWeatherData.temp_c)
    return (
        <div className="hourWeather">
            <p className="hourWeather__time">{time}</p>
            <img className="hourWeather__image" src={hourWeatherData.condition.icon} />
            <p className="hourWeather__temp">{temperature}°</p>
        </div>
    )
}

export default HourWeather;