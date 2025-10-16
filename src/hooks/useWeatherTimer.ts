import { useEffect, useState } from "react"

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