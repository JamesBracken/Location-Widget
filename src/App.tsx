import { useEffect, useState } from 'react'
import './styles/main.scss'

function App() {
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const [weatherData, setWeatherData] = useState("");
  // Note: I understand this API key will be exposed in the bundle,
  // Done on purpose as the project does not have a backend  
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const WEATHER_API_URL = "https://api.weatherapi.com/v1/forecast.json?"
  const daysRequest: number = 5;//TEMPORARY
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        })
      }, (exception) => {
        // IN FUTURE addition of graceful handling via modal or sweetalert
        console.log("Exception: ", exception.message)
      })
    } else {
      // IN FUTURE addition of graceful handling via modal or sweetalert
      console.log("Geolocation is unavailable on this browser")
    }
  }, []);
  useEffect(() => {
    if (location != null) {
      try {
        fetch(`${WEATHER_API_URL}key=${apiKey}&q=${location.latitude},${location.longitude}&days=${daysRequest}&aqi=no&alerts=no`)
          .then(res => res.json())
          .then(data => setWeatherData(data))
      } catch (e) {
        console.log(e)
      }
    }
  }, ([location]))
  console.log("weatherData: ", weatherData)
  return (
    <>
      <h1>Still in testing</h1>
    </>
  )
}

export default App