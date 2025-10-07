export interface WeatherData {
    location: Record<string, unknown>, // TEMPORARILY PLACING, DEL IF UNUSED
    current: Record<string, unknown>,// TEMPORARILY PLACING, DEL IF UNUSED
    forecast: {
        forecastday: {
            date: string;
            date_epoch: number;
            day: object;
            hour: {
                temp_c: number;
                condition: {
                    code: number;
                    icon: string;
                    text: string;
                };
                time: string;
            }[];
        }[];
    };
}
// console.log("weatherData", weatherData?.forecast?.forecastday)
