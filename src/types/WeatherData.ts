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