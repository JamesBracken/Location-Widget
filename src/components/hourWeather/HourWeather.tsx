import type { WeatherData } from "../../types/WeatherData";

type HourWeatherData = WeatherData["forecast"]["forecastday"][number]["hour"][number];
interface HourWeatherDataProps {
    hourWeatherData: HourWeatherData
}

const HourWeather = ({ hourWeatherData }: HourWeatherDataProps) => {
    const time = hourWeatherData.time.slice(11, 13);
    return (
        <div className="hourWeather">
            <p className="hourWeather__time">{time}</p>
            <img className="hourWeather__image" src={hourWeatherData.condition.icon} />
            <p className="hourWeather__temp">{hourWeatherData.temp_c}°</p>
        </div>
    )
}

export default HourWeather;