import { render } from "@testing-library/react";
import { describe } from "vitest";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Forecast from './Forecast';


describe("Forecast renders correct data", () => {
    const initialStore = {
        weather: {
            value: [],
            forecast: [{
                    "dt": 1711724400,
                    "main": {
                        "temp": 21.43,
                        "feels_like": 20.52,
                        "temp_min": 21.08,
                        "temp_max": 21.43,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 931,
                        "humidity": 34,
                        "temp_kf": 0.35
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 3
                    },
                    "wind": {
                        "speed": 1.09,
                        "deg": 60,
                        "gust": 0.98
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-29 15:00:00"
                },
                {
                    "dt": 1711735200,
                    "main": {
                        "temp": 17.78,
                        "feels_like": 16.81,
                        "temp_min": 15.87,
                        "temp_max": 17.78,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 932,
                        "humidity": 46,
                        "temp_kf": 1.91
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 31
                    },
                    "wind": {
                        "speed": 1.6,
                        "deg": 122,
                        "gust": 1.74
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-03-29 18:00:00"
                },
                {
                    "dt": 1711746000,
                    "main": {
                        "temp": 14.19,
                        "feels_like": 13.23,
                        "temp_min": 14.19,
                        "temp_max": 14.19,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 932,
                        "humidity": 60,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 1.5,
                        "deg": 119,
                        "gust": 1.75
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-03-29 21:00:00"
                },
                {
                    "dt": 1711756800,
                    "main": {
                        "temp": 12.61,
                        "feels_like": 11.65,
                        "temp_min": 12.61,
                        "temp_max": 12.61,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 932,
                        "humidity": 66,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 98
                    },
                    "wind": {
                        "speed": 0.34,
                        "deg": 161,
                        "gust": 0.87
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-03-30 00:00:00"
                }]
        }
        
    }
    const mockStore = configureStore()
    let store
    // const data = {
    //     "cod": "200",
    //     "message": 0,
    //     "cnt": 40,
    //     "list": [
    //         {
    //             "dt": 1711724400,
    //             "main": {
    //                 "temp": 21.43,
    //                 "feels_like": 20.52,
    //                 "temp_min": 21.08,
    //                 "temp_max": 21.43,
    //                 "pressure": 1017,
    //                 "sea_level": 1017,
    //                 "grnd_level": 931,
    //                 "humidity": 34,
    //                 "temp_kf": 0.35
    //             },
    //             "weather": [
    //                 {
    //                     "id": 800,
    //                     "main": "Clear",
    //                     "description": "clear sky",
    //                     "icon": "01d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 3
    //             },
    //             "wind": {
    //                 "speed": 1.09,
    //                 "deg": 60,
    //                 "gust": 0.98
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-03-29 15:00:00"
    //         },
    //         {
    //             "dt": 1711735200,
    //             "main": {
    //                 "temp": 17.78,
    //                 "feels_like": 16.81,
    //                 "temp_min": 15.87,
    //                 "temp_max": 17.78,
    //                 "pressure": 1017,
    //                 "sea_level": 1017,
    //                 "grnd_level": 932,
    //                 "humidity": 46,
    //                 "temp_kf": 1.91
    //             },
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 31
    //             },
    //             "wind": {
    //                 "speed": 1.6,
    //                 "deg": 122,
    //                 "gust": 1.74
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-03-29 18:00:00"
    //         },
    //         {
    //             "dt": 1711746000,
    //             "main": {
    //                 "temp": 14.19,
    //                 "feels_like": 13.23,
    //                 "temp_min": 14.19,
    //                 "temp_max": 14.19,
    //                 "pressure": 1018,
    //                 "sea_level": 1018,
    //                 "grnd_level": 932,
    //                 "humidity": 60,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 99
    //             },
    //             "wind": {
    //                 "speed": 1.5,
    //                 "deg": 119,
    //                 "gust": 1.75
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-03-29 21:00:00"
    //         },
    //         {
    //             "dt": 1711756800,
    //             "main": {
    //                 "temp": 12.61,
    //                 "feels_like": 11.65,
    //                 "temp_min": 12.61,
    //                 "temp_max": 12.61,
    //                 "pressure": 1018,
    //                 "sea_level": 1018,
    //                 "grnd_level": 932,
    //                 "humidity": 66,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 98
    //             },
    //             "wind": {
    //                 "speed": 0.34,
    //                 "deg": 161,
    //                 "gust": 0.87
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-03-30 00:00:00"
    //         },
    //         {
    //             "dt": 1711767600,
    //             "main": {
    //                 "temp": 11.27,
    //                 "feels_like": 10.28,
    //                 "temp_min": 11.27,
    //                 "temp_max": 11.27,
    //                 "pressure": 1018,
    //                 "sea_level": 1018,
    //                 "grnd_level": 932,
    //                 "humidity": 70,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 84
    //             },
    //             "wind": {
    //                 "speed": 0.63,
    //                 "deg": 132,
    //                 "gust": 0.97
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-03-30 03:00:00"
    //         },
    //         {
    //             "dt": 1711778400,
    //             "main": {
    //                 "temp": 13.28,
    //                 "feels_like": 12.33,
    //                 "temp_min": 13.28,
    //                 "temp_max": 13.28,
    //                 "pressure": 1018,
    //                 "sea_level": 1018,
    //                 "grnd_level": 932,
    //                 "humidity": 64,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 92
    //             },
    //             "wind": {
    //                 "speed": 0.21,
    //                 "deg": 137,
    //                 "gust": 0.69
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-03-30 06:00:00"
    //         },
    //         {
    //             "dt": 1711789200,
    //             "main": {
    //                 "temp": 19.27,
    //                 "feels_like": 18.38,
    //                 "temp_min": 19.27,
    //                 "temp_max": 19.27,
    //                 "pressure": 1017,
    //                 "sea_level": 1017,
    //                 "grnd_level": 932,
    //                 "humidity": 43,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 91
    //             },
    //             "wind": {
    //                 "speed": 0.15,
    //                 "deg": 222,
    //                 "gust": 1.43
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-03-30 09:00:00"
    //         },
    //         {
    //             "dt": 1711800000,
    //             "main": {
    //                 "temp": 22.46,
    //                 "feels_like": 21.49,
    //                 "temp_min": 22.46,
    //                 "temp_max": 22.46,
    //                 "pressure": 1015,
    //                 "sea_level": 1015,
    //                 "grnd_level": 930,
    //                 "humidity": 28,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 52
    //             },
    //             "wind": {
    //                 "speed": 1.97,
    //                 "deg": 251,
    //                 "gust": 3.61
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-03-30 12:00:00"
    //         },
    //         {
    //             "dt": 1711810800,
    //             "main": {
    //                 "temp": 21.47,
    //                 "feels_like": 20.51,
    //                 "temp_min": 21.47,
    //                 "temp_max": 21.47,
    //                 "pressure": 1014,
    //                 "sea_level": 1014,
    //                 "grnd_level": 929,
    //                 "humidity": 32,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 800,
    //                     "main": "Clear",
    //                     "description": "clear sky",
    //                     "icon": "01d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 1
    //             },
    //             "wind": {
    //                 "speed": 2.96,
    //                 "deg": 247,
    //                 "gust": 4.22
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-03-30 15:00:00"
    //         },
    //         {
    //             "dt": 1711821600,
    //             "main": {
    //                 "temp": 15.96,
    //                 "feels_like": 14.89,
    //                 "temp_min": 15.96,
    //                 "temp_max": 15.96,
    //                 "pressure": 1015,
    //                 "sea_level": 1015,
    //                 "grnd_level": 930,
    //                 "humidity": 49,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 40
    //             },
    //             "wind": {
    //                 "speed": 1.32,
    //                 "deg": 247,
    //                 "gust": 2.08
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-03-30 18:00:00"
    //         },
    //         {
    //             "dt": 1711832400,
    //             "main": {
    //                 "temp": 13.94,
    //                 "feels_like": 12.83,
    //                 "temp_min": 13.94,
    //                 "temp_max": 13.94,
    //                 "pressure": 1016,
    //                 "sea_level": 1016,
    //                 "grnd_level": 931,
    //                 "humidity": 55,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 77
    //             },
    //             "wind": {
    //                 "speed": 0.73,
    //                 "deg": 255,
    //                 "gust": 1.1
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-03-30 21:00:00"
    //         },
    //         {
    //             "dt": 1711843200,
    //             "main": {
    //                 "temp": 12.33,
    //                 "feels_like": 11.19,
    //                 "temp_min": 12.33,
    //                 "temp_max": 12.33,
    //                 "pressure": 1016,
    //                 "sea_level": 1016,
    //                 "grnd_level": 930,
    //                 "humidity": 60,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 73
    //             },
    //             "wind": {
    //                 "speed": 0.42,
    //                 "deg": 260,
    //                 "gust": 0.73
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-03-31 00:00:00"
    //         },
    //         {
    //             "dt": 1711854000,
    //             "main": {
    //                 "temp": 11.32,
    //                 "feels_like": 10.2,
    //                 "temp_min": 11.32,
    //                 "temp_max": 11.32,
    //                 "pressure": 1017,
    //                 "sea_level": 1017,
    //                 "grnd_level": 931,
    //                 "humidity": 65,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 52
    //             },
    //             "wind": {
    //                 "speed": 0.86,
    //                 "deg": 276,
    //                 "gust": 0.84
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-03-31 03:00:00"
    //         },
    //         {
    //             "dt": 1711864800,
    //             "main": {
    //                 "temp": 13.83,
    //                 "feels_like": 12.78,
    //                 "temp_min": 13.83,
    //                 "temp_max": 13.83,
    //                 "pressure": 1017,
    //                 "sea_level": 1017,
    //                 "grnd_level": 931,
    //                 "humidity": 58,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 28
    //             },
    //             "wind": {
    //                 "speed": 0.45,
    //                 "deg": 274,
    //                 "gust": 1.04
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-03-31 06:00:00"
    //         },
    //         {
    //             "dt": 1711875600,
    //             "main": {
    //                 "temp": 19.47,
    //                 "feels_like": 18.52,
    //                 "temp_min": 19.47,
    //                 "temp_max": 19.47,
    //                 "pressure": 1015,
    //                 "sea_level": 1015,
    //                 "grnd_level": 930,
    //                 "humidity": 40,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 79
    //             },
    //             "wind": {
    //                 "speed": 0.52,
    //                 "deg": 234,
    //                 "gust": 2.8
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-03-31 09:00:00"
    //         },
    //         {
    //             "dt": 1711886400,
    //             "main": {
    //                 "temp": 24.33,
    //                 "feels_like": 23.5,
    //                 "temp_min": 24.33,
    //                 "temp_max": 24.33,
    //                 "pressure": 1014,
    //                 "sea_level": 1014,
    //                 "grnd_level": 929,
    //                 "humidity": 26,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 90
    //             },
    //             "wind": {
    //                 "speed": 4.54,
    //                 "deg": 230,
    //                 "gust": 8.92
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-03-31 12:00:00"
    //         },
    //         {
    //             "dt": 1711897200,
    //             "main": {
    //                 "temp": 22.65,
    //                 "feels_like": 21.81,
    //                 "temp_min": 22.65,
    //                 "temp_max": 22.65,
    //                 "pressure": 1013,
    //                 "sea_level": 1013,
    //                 "grnd_level": 929,
    //                 "humidity": 32,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 100
    //             },
    //             "wind": {
    //                 "speed": 4.56,
    //                 "deg": 224,
    //                 "gust": 9.54
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-03-31 15:00:00"
    //         },
    //         {
    //             "dt": 1711908000,
    //             "main": {
    //                 "temp": 16.89,
    //                 "feels_like": 15.89,
    //                 "temp_min": 16.89,
    //                 "temp_max": 16.89,
    //                 "pressure": 1015,
    //                 "sea_level": 1015,
    //                 "grnd_level": 930,
    //                 "humidity": 48,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 97
    //             },
    //             "wind": {
    //                 "speed": 1.32,
    //                 "deg": 238,
    //                 "gust": 2.41
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-03-31 18:00:00"
    //         },
    //         {
    //             "dt": 1711918800,
    //             "main": {
    //                 "temp": 14.95,
    //                 "feels_like": 13.83,
    //                 "temp_min": 14.95,
    //                 "temp_max": 14.95,
    //                 "pressure": 1016,
    //                 "sea_level": 1016,
    //                 "grnd_level": 930,
    //                 "humidity": 51,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 74
    //             },
    //             "wind": {
    //                 "speed": 0.71,
    //                 "deg": 248,
    //                 "gust": 2.19
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-03-31 21:00:00"
    //         },
    //         {
    //             "dt": 1711929600,
    //             "main": {
    //                 "temp": 13.48,
    //                 "feels_like": 12.5,
    //                 "temp_min": 13.48,
    //                 "temp_max": 13.48,
    //                 "pressure": 1016,
    //                 "sea_level": 1016,
    //                 "grnd_level": 930,
    //                 "humidity": 62,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 87
    //             },
    //             "wind": {
    //                 "speed": 1.09,
    //                 "deg": 282,
    //                 "gust": 0.92
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-04-01 00:00:00"
    //         },
    //         {
    //             "dt": 1711940400,
    //             "main": {
    //                 "temp": 11.98,
    //                 "feels_like": 11.04,
    //                 "temp_min": 11.98,
    //                 "temp_max": 11.98,
    //                 "pressure": 1016,
    //                 "sea_level": 1016,
    //                 "grnd_level": 930,
    //                 "humidity": 69,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 30
    //             },
    //             "wind": {
    //                 "speed": 0.93,
    //                 "deg": 293,
    //                 "gust": 0.71
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-04-01 03:00:00"
    //         },
    //         {
    //             "dt": 1711951200,
    //             "main": {
    //                 "temp": 14.93,
    //                 "feels_like": 13.91,
    //                 "temp_min": 14.93,
    //                 "temp_max": 14.93,
    //                 "pressure": 1016,
    //                 "sea_level": 1016,
    //                 "grnd_level": 930,
    //                 "humidity": 55,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 23
    //             },
    //             "wind": {
    //                 "speed": 0.23,
    //                 "deg": 313,
    //                 "gust": 0.68
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-04-01 06:00:00"
    //         },
    //         {
    //             "dt": 1711962000,
    //             "main": {
    //                 "temp": 22.85,
    //                 "feels_like": 21.95,
    //                 "temp_min": 22.85,
    //                 "temp_max": 22.85,
    //                 "pressure": 1014,
    //                 "sea_level": 1014,
    //                 "grnd_level": 929,
    //                 "humidity": 29,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 14
    //             },
    //             "wind": {
    //                 "speed": 1.04,
    //                 "deg": 233,
    //                 "gust": 4.74
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-04-01 09:00:00"
    //         },
    //         {
    //             "dt": 1711972800,
    //             "main": {
    //                 "temp": 25.44,
    //                 "feels_like": 24.59,
    //                 "temp_min": 25.44,
    //                 "temp_max": 25.44,
    //                 "pressure": 1012,
    //                 "sea_level": 1012,
    //                 "grnd_level": 928,
    //                 "humidity": 21,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 32
    //             },
    //             "wind": {
    //                 "speed": 5.69,
    //                 "deg": 225,
    //                 "gust": 10.17
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-04-01 12:00:00"
    //         },
    //         {
    //             "dt": 1711983600,
    //             "main": {
    //                 "temp": 23.4,
    //                 "feels_like": 22.55,
    //                 "temp_min": 23.4,
    //                 "temp_max": 23.4,
    //                 "pressure": 1011,
    //                 "sea_level": 1011,
    //                 "grnd_level": 927,
    //                 "humidity": 29,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 37
    //             },
    //             "wind": {
    //                 "speed": 4.9,
    //                 "deg": 220,
    //                 "gust": 10.14
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-04-01 15:00:00"
    //         },
    //         {
    //             "dt": 1711994400,
    //             "main": {
    //                 "temp": 18.27,
    //                 "feels_like": 17.09,
    //                 "temp_min": 18.27,
    //                 "temp_max": 18.27,
    //                 "pressure": 1010,
    //                 "sea_level": 1010,
    //                 "grnd_level": 926,
    //                 "humidity": 36,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 68
    //             },
    //             "wind": {
    //                 "speed": 1.93,
    //                 "deg": 187,
    //                 "gust": 4.28
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-04-01 18:00:00"
    //         },
    //         {
    //             "dt": 1712005200,
    //             "main": {
    //                 "temp": 16,
    //                 "feels_like": 14.73,
    //                 "temp_min": 16,
    //                 "temp_max": 16,
    //                 "pressure": 1009,
    //                 "sea_level": 1009,
    //                 "grnd_level": 924,
    //                 "humidity": 41,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 100
    //             },
    //             "wind": {
    //                 "speed": 1.35,
    //                 "deg": 145,
    //                 "gust": 1.53
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-04-01 21:00:00"
    //         },
    //         {
    //             "dt": 1712016000,
    //             "main": {
    //                 "temp": 13.79,
    //                 "feels_like": 12.48,
    //                 "temp_min": 13.79,
    //                 "temp_max": 13.79,
    //                 "pressure": 1007,
    //                 "sea_level": 1007,
    //                 "grnd_level": 922,
    //                 "humidity": 48,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 100
    //             },
    //             "wind": {
    //                 "speed": 0.92,
    //                 "deg": 90,
    //                 "gust": 0
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-04-02 00:00:00"
    //         },
    //         {
    //             "dt": 1712026800,
    //             "main": {
    //                 "temp": 14.08,
    //                 "feels_like": 12.77,
    //                 "temp_min": 14.08,
    //                 "temp_max": 14.08,
    //                 "pressure": 1005,
    //                 "sea_level": 1005,
    //                 "grnd_level": 920,
    //                 "humidity": 47,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 76
    //             },
    //             "wind": {
    //                 "speed": 3.16,
    //                 "deg": 221,
    //                 "gust": 9.18
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-04-02 03:00:00"
    //         },
    //         {
    //             "dt": 1712037600,
    //             "main": {
    //                 "temp": 15.44,
    //                 "feels_like": 14.35,
    //                 "temp_min": 15.44,
    //                 "temp_max": 15.44,
    //                 "pressure": 1007,
    //                 "sea_level": 1007,
    //                 "grnd_level": 922,
    //                 "humidity": 50,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 42
    //             },
    //             "wind": {
    //                 "speed": 5.14,
    //                 "deg": 255,
    //                 "gust": 10.5
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-04-02 06:00:00"
    //         },
    //         {
    //             "dt": 1712048400,
    //             "main": {
    //                 "temp": 18.3,
    //                 "feels_like": 17.28,
    //                 "temp_min": 18.3,
    //                 "temp_max": 18.3,
    //                 "pressure": 1008,
    //                 "sea_level": 1008,
    //                 "grnd_level": 923,
    //                 "humidity": 42,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 35
    //             },
    //             "wind": {
    //                 "speed": 5.94,
    //                 "deg": 266,
    //                 "gust": 10.08
    //             },
    //             "visibility": 10000,
    //             "pop": 0.33,
    //             "rain": {
    //                 "3h": 0.17
    //             },
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-04-02 09:00:00"
    //         },
    //         {
    //             "dt": 1712059200,
    //             "main": {
    //                 "temp": 16.18,
    //                 "feels_like": 15.05,
    //                 "temp_min": 16.18,
    //                 "temp_max": 16.18,
    //                 "pressure": 1009,
    //                 "sea_level": 1009,
    //                 "grnd_level": 924,
    //                 "humidity": 46,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 47
    //             },
    //             "wind": {
    //                 "speed": 7.24,
    //                 "deg": 310,
    //                 "gust": 9
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-04-02 12:00:00"
    //         },
    //         {
    //             "dt": 1712070000,
    //             "main": {
    //                 "temp": 15.35,
    //                 "feels_like": 14.12,
    //                 "temp_min": 15.35,
    //                 "temp_max": 15.35,
    //                 "pressure": 1009,
    //                 "sea_level": 1009,
    //                 "grnd_level": 924,
    //                 "humidity": 45,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 18
    //             },
    //             "wind": {
    //                 "speed": 4.13,
    //                 "deg": 320,
    //                 "gust": 5.74
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-04-02 15:00:00"
    //         },
    //         {
    //             "dt": 1712080800,
    //             "main": {
    //                 "temp": 12.06,
    //                 "feels_like": 10.91,
    //                 "temp_min": 12.06,
    //                 "temp_max": 12.06,
    //                 "pressure": 1011,
    //                 "sea_level": 1011,
    //                 "grnd_level": 925,
    //                 "humidity": 61,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 27
    //             },
    //             "wind": {
    //                 "speed": 3.25,
    //                 "deg": 298,
    //                 "gust": 5.78
    //             },
    //             "visibility": 10000,
    //             "pop": 0.2,
    //             "rain": {
    //                 "3h": 0.1
    //             },
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-04-02 18:00:00"
    //         },
    //         {
    //             "dt": 1712091600,
    //             "main": {
    //                 "temp": 9.83,
    //                 "feels_like": 9.05,
    //                 "temp_min": 9.83,
    //                 "temp_max": 9.83,
    //                 "pressure": 1013,
    //                 "sea_level": 1013,
    //                 "grnd_level": 927,
    //                 "humidity": 68,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 100
    //             },
    //             "wind": {
    //                 "speed": 1.93,
    //                 "deg": 267,
    //                 "gust": 4.32
    //             },
    //             "visibility": 10000,
    //             "pop": 0.45,
    //             "rain": {
    //                 "3h": 0.35
    //             },
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-04-02 21:00:00"
    //         },
    //         {
    //             "dt": 1712102400,
    //             "main": {
    //                 "temp": 8.52,
    //                 "feels_like": 7.03,
    //                 "temp_min": 8.52,
    //                 "temp_max": 8.52,
    //                 "pressure": 1014,
    //                 "sea_level": 1014,
    //                 "grnd_level": 927,
    //                 "humidity": 75,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 100
    //             },
    //             "wind": {
    //                 "speed": 2.56,
    //                 "deg": 299,
    //                 "gust": 5.2
    //             },
    //             "visibility": 10000,
    //             "pop": 0.22,
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-04-03 00:00:00"
    //         },
    //         {
    //             "dt": 1712113200,
    //             "main": {
    //                 "temp": 7.59,
    //                 "feels_like": 5.44,
    //                 "temp_min": 7.59,
    //                 "temp_max": 7.59,
    //                 "pressure": 1016,
    //                 "sea_level": 1016,
    //                 "grnd_level": 929,
    //                 "humidity": 85,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10n"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 100
    //             },
    //             "wind": {
    //                 "speed": 3.28,
    //                 "deg": 284,
    //                 "gust": 6.05
    //             },
    //             "visibility": 10000,
    //             "pop": 1,
    //             "rain": {
    //                 "3h": 0.81
    //             },
    //             "sys": {
    //                 "pod": "n"
    //             },
    //             "dt_txt": "2024-04-03 03:00:00"
    //         },
    //         {
    //             "dt": 1712124000,
    //             "main": {
    //                 "temp": 8.7,
    //                 "feels_like": 6.69,
    //                 "temp_min": 8.7,
    //                 "temp_max": 8.7,
    //                 "pressure": 1017,
    //                 "sea_level": 1017,
    //                 "grnd_level": 930,
    //                 "humidity": 73,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 99
    //             },
    //             "wind": {
    //                 "speed": 3.45,
    //                 "deg": 289,
    //                 "gust": 7.14
    //             },
    //             "visibility": 10000,
    //             "pop": 1,
    //             "rain": {
    //                 "3h": 0.24
    //             },
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-04-03 06:00:00"
    //         },
    //         {
    //             "dt": 1712134800,
    //             "main": {
    //                 "temp": 11.63,
    //                 "feels_like": 10.36,
    //                 "temp_min": 11.63,
    //                 "temp_max": 11.63,
    //                 "pressure": 1018,
    //                 "sea_level": 1018,
    //                 "grnd_level": 931,
    //                 "humidity": 58,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 82
    //             },
    //             "wind": {
    //                 "speed": 2.55,
    //                 "deg": 285,
    //                 "gust": 3.59
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-04-03 09:00:00"
    //         },
    //         {
    //             "dt": 1712145600,
    //             "main": {
    //                 "temp": 12.95,
    //                 "feels_like": 11.63,
    //                 "temp_min": 12.95,
    //                 "temp_max": 12.95,
    //                 "pressure": 1017,
    //                 "sea_level": 1017,
    //                 "grnd_level": 931,
    //                 "humidity": 51,
    //                 "temp_kf": 0
    //             },
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "clouds": {
    //                 "all": 93
    //             },
    //             "wind": {
    //                 "speed": 2.46,
    //                 "deg": 306,
    //                 "gust": 3.71
    //             },
    //             "visibility": 10000,
    //             "pop": 0,
    //             "sys": {
    //                 "pod": "d"
    //             },
    //             "dt_txt": "2024-04-03 12:00:00"
    //         }
    //     ],
    //     "city": {
    //         "id": 731061,
    //         "name": "Sofia-Capital",
    //         "coord": {
    //             "lat": 42.65,
    //             "lon": 23.36
    //         },
    //         "country": "BG",
    //         "population": 0,
    //         "timezone": 7200,
    //         "sunrise": 1711685614,
    //         "sunset": 1711730919
    //     }
    // }

    it('Should render correct date', () => {
        store = mockStore(initialStore)
        const { getByTestId } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Forecast />
                </BrowserRouter>
            </Provider>
        )

        const dateValue = getByTestId("nextDay").textContent;
        expect(dateValue).toEqual("Saturday");
    });
})
