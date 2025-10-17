export interface WeatherData {
    location: {
        name : string;
    },
    current: {
        condition : {
            text: string;
            icon : string;
        },
        heatindex_c : number;
        is_day: number;
        last_updated : string;
    };
    forecast: {
        forecastday: {
            date: string;
            date_epoch: number;
            day: {
                mintemp_c: number;
                maxtemp_c: number;
                daily_chance_of_rain: number;
                condition: {
                    icon: string;
                }
            };
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