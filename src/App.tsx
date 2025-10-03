import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/main.scss'

function App() {
  const [count, setCount] = useState(0)

  // Note: I understand this API key will be exposed in the bundle,
  // I am doing this as the project does not have a backend  
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const WEATHER_API_URL = "http://api.weatherapi.com/v1/forecast.json?aqi=no&alerts=no"
  // const userLongitude = `key=${}`
  // const userLatitude = 
  // const userLocation =  `q=${userLatitude},${userLongitude}`//q=51.5171,-0.1062
  const daysRequest = `days=5`//TEMPORARY
  console.log(apiKey)
    return(
      <>
        <h1>Still in testing</h1>
      </>
    )
}

export default App
