import { useEffect, useState } from 'react';
import './styles/main.scss';
import Swal from 'sweetalert2';

function App() {
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const [weatherData, setWeatherData] = useState<string>("");

  // Note: I understand this API key will be exposed in the bundle,
  // Done on purpose as the project does not have a backend  
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
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
        console.log("Exception: ", exception.message)
      })
    } else {
      Swal.fire({ // Sweetalert2 for graceful user feedback
        title: 'Error',
        text: 'Unfortunately this browser does not support user location tools. This may affect application functionality',
        icon: 'error',
        confirmButtonText: 'I understand'
      })
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