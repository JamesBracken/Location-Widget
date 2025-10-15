import { useEffect, useState } from 'react';
import './styles/main.scss';
import Greeting from "./components/greeting/Greeting.tsx";
import type { WeatherData } from "./types/WeatherData.ts"
import HourlyWeather from './components/hourlyWeather/HourlyWeather.tsx';
import DynamicBackground from './components/dynamicBackground/DynamicBackground.tsx';

import Swal from 'sweetalert2';

function App() {
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const userDateTime: Date = new Date();
  // Note: I understand this API key will be exposed in the bundle, done on purpose as the project does not have a backend
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const WEATHER_API_URL: string = "https://api.weatherapi.com/v1/forecast.json?"
  const daysRequest: number = 3;// Weather API free plan has a limit of 3 days data 
  const hourlyWeatherData = weatherData?.forecast?.forecastday?.[0]?.hour ?? [];
  const currentWeatherData: CurrentWeatherData = weatherData?.current ?? {
    condition: {
      text: "",
      icon: "",
    },
    heatindex_c: 0,
    is_day: 0,
    last_updated: "",
  };

  type CurrentWeatherData = WeatherData["current"];
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
      try { // Weather API free plan has a limit of 3 days data 
        fetch(`${WEATHER_API_URL}key=${API_KEY}&q=${location.latitude},${location.longitude}&days=${daysRequest}&aqi=no&alerts=no`)
          .then(res => res.json())
          .then(data => setWeatherData(data))
      } catch (e) {
        console.error(e)
      }
    }
  }, ([location]))

  // console.log("weatherData", weatherData?.forecast?.forecastday[0].hour)
  //console.log("currentWeatherData", currentWeatherData)
  // console.log("weatherData", weatherData)
  const currentLocationData = weatherData?.location ?? {
    name: ""
  }
  return (
    <>
      <div className="overlay">
        <Greeting userDateTime={userDateTime} />
        <p style={{paddingBottom: 15}}>Here are our provided widgets using location services</p>
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
  )
}

export default App