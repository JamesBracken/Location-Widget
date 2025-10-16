import { useEffect, useState } from "react"
// make the function useEffect every 60 seconds and return time after

export const useWeatherTimer = () => {
    const [date, setDate] = useState<Date>(new Date)

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 60000)
        return () => clearInterval(interval)
    }, [])
    return date;
}