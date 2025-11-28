import { useState, useEffect } from "react";

import Swal from "sweetalert2";

import type { WeatherData } from "../types/WeatherData";

interface useWeatherProps {
    currentDate: Date
}
interface IpData {
    ip : string
}

export function useWeather({ currentDate }: useWeatherProps) {

    const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const API_KEY: string = import.meta.env.VITE_WEATHER_API_KEY;
    const WEATHER_API_URL: string = "https://api.weatherapi.com/v1/forecast.json?"
    const daysRequest: number = 3;// Weather API free plan has a limit of 3 days data

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
                    text: 'The website may not function as accurately without location permissions',
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
        const fetchWeather = async (): Promise<void> => {
            if (location !== null) {
                const currentHour: number = currentDate.getHours();
                if (!weatherData || new Date(weatherData.current.last_updated).getHours() != currentHour) {
                    try {
                        const response: Response = await fetch(`${WEATHER_API_URL}key=${API_KEY}&q=${location.latitude},${location.longitude}&days=${daysRequest}&aqi=no&alerts=no`);
                        const data: WeatherData = await response.json()
                        setWeatherData(data);
                    } catch (e) {
                        console.error(e)
                    }
                }
            } else if (location === null) {
                const currentHour: number = currentDate.getHours();
                let userIpAddress: string = "";
                if (!weatherData || new Date(weatherData.current.last_updated).getHours() !== currentHour) {
                    try {
                        const ipResponse: Response = await fetch("https://api.ipify.org/?format=json");
                        const ipData: IpData = await ipResponse.json();
                        userIpAddress = ipData.ip

                        const weatherReponse: Response = await fetch(`${WEATHER_API_URL}key=${API_KEY}&q=${userIpAddress}&days=${daysRequest}&aqi=no&alerts=no`);
                        const weatherData: WeatherData = await weatherReponse.json();
                        setWeatherData(weatherData);
                    } catch {
                        console.error("Error fetching user IP address and / or weather data")
                    }
                }
            }
        }
        fetchWeather();
    }, ([location, currentDate]))
    return weatherData;
}