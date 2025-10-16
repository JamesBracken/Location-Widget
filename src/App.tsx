import Greeting from "./components/greeting/Greeting.tsx";
import HourlyWeather from './components/hourlyWeather/HourlyWeather.tsx';
import DynamicBackground from './components/dynamicBackground/DynamicBackground.tsx';
import { useWeather } from './hooks/useWeather.ts';
import { useWeatherTimer } from "./hooks/useWeatherTimer.ts";

import './styles/main.scss';

import type { WeatherData } from "./types/WeatherData.ts"

function App() {
  const currentDate: Date = useWeatherTimer();
  const weatherData = useWeather({ currentDate });
  const userDateTime: Date = new Date();
  const hourlyWeatherData = weatherData?.forecast?.forecastday?.[0]?.hour ?? [];
  const currentWeatherData: CurrentWeatherData = weatherData?.current ?? {
    condition: {
      text: "",
      icon: "",
    },
    heatindex_c: 0,
    is_day: 0,
    last_updated: ""
  };

  const currentLocationData = weatherData?.location ?? {
    name: ""
  };

  type CurrentWeatherData = WeatherData["current"];

  return (
    <>
      <div className="overlay">
        <Greeting userDateTime={userDateTime} />
        <p style={{ paddingBottom: 15, marginLeft: 10, marginRight: 10 }}>Here are our provided widgets using location services</p>
      </div>
      <div className="overlay">
        <HourlyWeather
          hourlyWeatherData={hourlyWeatherData}
          currentWeatherData={currentWeatherData}
          currentLocation={currentLocationData}
          userDateTime={userDateTime} />
      </div>
      <DynamicBackground
        currentCondition={currentWeatherData.condition.text}
        isDay={currentWeatherData.is_day} />
    </>
  );
};

export default App;