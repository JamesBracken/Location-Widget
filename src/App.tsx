import { useEffect, useState } from 'react';
import './styles/main.scss';
import Greeting from "./components/greeting/Greeting.tsx";
import type { WeatherData } from "./types/WeatherData.ts"

import Swal from 'sweetalert2';
import HourlyWeather from './components/hourlyWeather/HourlyWeather.tsx';

function App() {
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const userTimeInHour: number = new Date().getHours();
  // Note: I understand this API key will be exposed in the bundle,
  // Done on purpose as the project does not have a backend
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const WEATHER_API_URL: string = "https://api.weatherapi.com/v1/forecast.json?"
  const daysRequest: number = 5;//TEMPORARY
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        })
      }, (exception) => {
        Swal.fire({ // Sweetalert2 for graceful user feedback
          title: 'Location permissions denied',
          text: 'The website may not function as intended without location permissions',
          icon: 'error',
          confirmButtonText: 'I understand'
        })
        console.error("Exception: ", exception.message)
      })
    } else {
      Swal.fire({ // Sweetalert2 for graceful user feedback
        title: 'Error',
        text: 'Unfortunately this browser does not support user location tools. This may affect application functionality',
        icon: 'error',
        confirmButtonText: 'I understand'
      })
      console.error("Geolocation is unavailable on this browser")
    }
  }, []);
  useEffect(() => {
    if (location != null) {
      try {
        fetch(`${WEATHER_API_URL}key=${API_KEY}&q=${location.latitude},${location.longitude}&days=${daysRequest}&aqi=no&alerts=no`)
          .then(res => res.json())
          .then(data => setWeatherData(data))
      } catch (e) {
        console.error(e)
      }
    }
  }, ([location]))
  // console.log("weatherData", weatherData?.forecast?.forecastday[0].hour)
  console.log("weatherData", weatherData)
  type CurrentWeatherData = WeatherData["current"];
  const currentWeatherData: CurrentWeatherData = weatherData?.current ?? {
    condition: {
      text: "",
      icon: "",
    },
    heatindex_c: 0,
    is_day: 0,
    last_updated: "",
  };
  const hourlyWeatherData = weatherData?.forecast?.forecastday?.[0]?.hour ?? [];
  return (
    <>
      <Greeting userTimeInHour={userTimeInHour} />
      <HourlyWeather
        hourlyWeatherData={hourlyWeatherData}
        currentWeatherData={currentWeatherData} />
    </>
  )
}

export default App