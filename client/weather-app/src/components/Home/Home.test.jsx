import { render } from "@testing-library/react";
import { describe } from "vitest";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';


describe("Forecast renders correct data", () => {
    const initialStore = {
        weather: {
            value: [{"coord": {
                "lon": 25.62,
                "lat": 43.08
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 27.08,
                "feels_like": 26.26,
                "temp_min": 27.08,
                "temp_max": 27.08,
                "pressure": 1014,
                "humidity": 24
            },
            "visibility": 10000,
            "wind": {
                "speed": 3.6,
                "deg": 130
            },
            "clouds": {
                "all": 100
            },
            "dt": 1711797074,
            "sys": {
                "type": 1,
                "id": 6361,
                "country": "BG",
                "sunrise": 1711771352,
                "sunset": 1711816859
            }}],
            forecast: [ {
                "dt": 1711800000,
                "main": {
                    "temp": 27.08,
                    "feels_like": 26.26,
                    "temp_min": 24.38,
                    "temp_max": 27.08,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 986,
                    "humidity": 24,
                    "temp_kf": 2.7
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.86,
                    "deg": 184,
                    "gust": 5.67
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-30 12:00:00"
            },
            {
                "dt": 1711810800,
                "main": {
                    "temp": 25.54,
                    "feels_like": 24.96,
                    "temp_min": 22.46,
                    "temp_max": 25.54,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 985,
                    "humidity": 31,
                    "temp_kf": 3.08
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 70
                },
                "wind": {
                    "speed": 4.78,
                    "deg": 179,
                    "gust": 9.83
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-30 15:00:00"
            },
            {
                "dt": 1711821600,
                "main": {
                    "temp": 19.95,
                    "feels_like": 19.15,
                    "temp_min": 16.38,
                    "temp_max": 19.95,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 985,
                    "humidity": 44,
                    "temp_kf": 3.57
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
                    "all": 38
                },
                "wind": {
                    "speed": 2.57,
                    "deg": 180,
                    "gust": 3.24
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-30 18:00:00"
            },
            {
                "dt": 1711832400,
                "main": {
                    "temp": 14.07,
                    "feels_like": 13.15,
                    "temp_min": 14.07,
                    "temp_max": 14.07,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 986,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 6
                },
                "wind": {
                    "speed": 2.39,
                    "deg": 182,
                    "gust": 2.49
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-30 21:00:00"
            },
            {
                "dt": 1711843200,
                "main": {
                    "temp": 13.44,
                    "feels_like": 12.46,
                    "temp_min": 13.44,
                    "temp_max": 13.44,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 986,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 9
                },
                "wind": {
                    "speed": 2.17,
                    "deg": 180,
                    "gust": 2.1
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-31 00:00:00"
            },
            {
                "dt": 1711854000,
                "main": {
                    "temp": 13.08,
                    "feels_like": 12.09,
                    "temp_min": 13.08,
                    "temp_max": 13.08,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 986,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 54
                },
                "wind": {
                    "speed": 2.02,
                    "deg": 175,
                    "gust": 1.82
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-31 03:00:00"
            },
            {
                "dt": 1711864800,
                "main": {
                    "temp": 16.69,
                    "feels_like": 15.93,
                    "temp_min": 16.69,
                    "temp_max": 16.69,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 986,
                    "humidity": 58,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 75
                },
                "wind": {
                    "speed": 1.51,
                    "deg": 165,
                    "gust": 2.06
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-31 06:00:00"
            },
            {
                "dt": 1711875600,
                "main": {
                    "temp": 24.15,
                    "feels_like": 23.51,
                    "temp_min": 24.15,
                    "temp_max": 24.15,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 986,
                    "humidity": 34,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.97,
                    "deg": 162,
                    "gust": 3.03
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-31 09:00:00"
            },
            {
                "dt": 1711886400,
                "main": {
                    "temp": 27.55,
                    "feels_like": 26.56,
                    "temp_min": 27.55,
                    "temp_max": 27.55,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 985,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 79
                },
                "wind": {
                    "speed": 2.94,
                    "deg": 176,
                    "gust": 3.24
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-31 12:00:00"
            },
            {
                "dt": 1711897200,
                "main": {
                    "temp": 24.57,
                    "feels_like": 24.13,
                    "temp_min": 24.57,
                    "temp_max": 24.57,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 984,
                    "humidity": 40,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 67
                },
                "wind": {
                    "speed": 3.58,
                    "deg": 170,
                    "gust": 6.9
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-31 15:00:00"
            },
            {
                "dt": 1711908000,
                "main": {
                    "temp": 17.11,
                    "feels_like": 16.39,
                    "temp_min": 17.11,
                    "temp_max": 17.11,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 985,
                    "humidity": 58,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 63
                },
                "wind": {
                    "speed": 2.95,
                    "deg": 175,
                    "gust": 3.27
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-31 18:00:00"
            },
            {
                "dt": 1711918800,
                "main": {
                    "temp": 15.69,
                    "feels_like": 14.96,
                    "temp_min": 15.69,
                    "temp_max": 15.69,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 985,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 2.39,
                    "deg": 179,
                    "gust": 2.62
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-31 21:00:00"
            },
            {
                "dt": 1711929600,
                "main": {
                    "temp": 14.9,
                    "feels_like": 14.14,
                    "temp_min": 14.9,
                    "temp_max": 14.9,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 985,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 79
                },
                "wind": {
                    "speed": 2.24,
                    "deg": 177,
                    "gust": 2.38
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-01 00:00:00"
            },
            {
                "dt": 1711940400,
                "main": {
                    "temp": 14.19,
                    "feels_like": 13.31,
                    "temp_min": 14.19,
                    "temp_max": 14.19,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 985,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 10
                },
                "wind": {
                    "speed": 1.96,
                    "deg": 182,
                    "gust": 1.76
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-01 03:00:00"
            },
            {
                "dt": 1711951200,
                "main": {
                    "temp": 18.38,
                    "feels_like": 17.66,
                    "temp_min": 18.38,
                    "temp_max": 18.38,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 985,
                    "humidity": 53,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 15
                },
                "wind": {
                    "speed": 1.2,
                    "deg": 170,
                    "gust": 1.65
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-01 06:00:00"
            },
            {
                "dt": 1711962000,
                "main": {
                    "temp": 26.49,
                    "feels_like": 26.49,
                    "temp_min": 26.49,
                    "temp_max": 26.49,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 984,
                    "humidity": 28,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 66
                },
                "wind": {
                    "speed": 1.68,
                    "deg": 139,
                    "gust": 2.61
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-01 09:00:00"
            },
            {
                "dt": 1711972800,
                "main": {
                    "temp": 28.97,
                    "feels_like": 27.49,
                    "temp_min": 28.97,
                    "temp_max": 28.97,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 982,
                    "humidity": 22,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 84
                },
                "wind": {
                    "speed": 3.02,
                    "deg": 179,
                    "gust": 3.57
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-01 12:00:00"
            },
            {
                "dt": 1711983600,
                "main": {
                    "temp": 25.4,
                    "feels_like": 25.01,
                    "temp_min": 25.4,
                    "temp_max": 25.4,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 981,
                    "humidity": 39,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 70
                },
                "wind": {
                    "speed": 3.96,
                    "deg": 166,
                    "gust": 7.98
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-01 15:00:00"
            },
            {
                "dt": 1711994400,
                "main": {
                    "temp": 18.07,
                    "feels_like": 17.45,
                    "temp_min": 18.07,
                    "temp_max": 18.07,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 980,
                    "humidity": 58,
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
                    "all": 85
                },
                "wind": {
                    "speed": 3.13,
                    "deg": 175,
                    "gust": 4.14
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-01 18:00:00"
            },
            {
                "dt": 1712005200,
                "main": {
                    "temp": 16.07,
                    "feels_like": 15.35,
                    "temp_min": 16.07,
                    "temp_max": 16.07,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 979,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 59
                },
                "wind": {
                    "speed": 2.68,
                    "deg": 170,
                    "gust": 3.11
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-01 21:00:00"
            },
            {
                "dt": 1712016000,
                "main": {
                    "temp": 15.91,
                    "feels_like": 15.07,
                    "temp_min": 15.91,
                    "temp_max": 15.91,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 977,
                    "humidity": 58,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 2.9,
                    "deg": 176,
                    "gust": 5.73
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-02 00:00:00"
            },
            {
                "dt": 1712026800,
                "main": {
                    "temp": 18.68,
                    "feels_like": 17.6,
                    "temp_min": 18.68,
                    "temp_max": 18.68,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 976,
                    "humidity": 38,
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
                    "all": 100
                },
                "wind": {
                    "speed": 4.38,
                    "deg": 190,
                    "gust": 12.24
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-02 03:00:00"
            },
            {
                "dt": 1712037600,
                "main": {
                    "temp": 13.47,
                    "feels_like": 12.65,
                    "temp_min": 13.47,
                    "temp_max": 13.47,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 982,
                    "humidity": 68,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.04,
                    "deg": 293,
                    "gust": 9.24
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-02 06:00:00"
            },
            {
                "dt": 1712048400,
                "main": {
                    "temp": 16.47,
                    "feels_like": 15.5,
                    "temp_min": 16.47,
                    "temp_max": 16.47,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 982,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.15,
                    "deg": 292,
                    "gust": 8.58
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-02 09:00:00"
            },
            {
                "dt": 1712059200,
                "main": {
                    "temp": 19.3,
                    "feels_like": 18.3,
                    "temp_min": 19.3,
                    "temp_max": 19.3,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 981,
                    "humidity": 39,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.75,
                    "deg": 307,
                    "gust": 7.79
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-02 12:00:00"
            },
            {
                "dt": 1712070000,
                "main": {
                    "temp": 17.37,
                    "feels_like": 16.39,
                    "temp_min": 17.37,
                    "temp_max": 17.37,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 981,
                    "humidity": 47,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.55,
                    "deg": 342,
                    "gust": 1.48
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-02 15:00:00"
            },
            {
                "dt": 1712080800,
                "main": {
                    "temp": 13.59,
                    "feels_like": 12.36,
                    "temp_min": 13.59,
                    "temp_max": 13.59,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 981,
                    "humidity": 52,
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
                    "all": 92
                },
                "wind": {
                    "speed": 0.87,
                    "deg": 302,
                    "gust": 0.92
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-02 18:00:00"
            },
            {
                "dt": 1712091600,
                "main": {
                    "temp": 11.35,
                    "feels_like": 10.29,
                    "temp_min": 11.35,
                    "temp_max": 11.35,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 982,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 2.29,
                    "deg": 240,
                    "gust": 1.6
                },
                "visibility": 10000,
                "pop": 0.2,
                "rain": {
                    "3h": 0.11
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-02 21:00:00"
            },
            {
                "dt": 1712102400,
                "main": {
                    "temp": 9.95,
                    "feels_like": 8.46,
                    "temp_min": 9.95,
                    "temp_max": 9.95,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 983,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 57
                },
                "wind": {
                    "speed": 2.98,
                    "deg": 205,
                    "gust": 6.72
                },
                "visibility": 3873,
                "pop": 1,
                "rain": {
                    "3h": 4.97
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-03 00:00:00"
            },
            {
                "dt": 1712113200,
                "main": {
                    "temp": 9.53,
                    "feels_like": 6.86,
                    "temp_min": 9.53,
                    "temp_max": 9.53,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 984,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 96
                },
                "wind": {
                    "speed": 5.37,
                    "deg": 280,
                    "gust": 10.44
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 1.3
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-03 03:00:00"
            },
            {
                "dt": 1712124000,
                "main": {
                    "temp": 11.82,
                    "feels_like": 10.91,
                    "temp_min": 11.82,
                    "temp_max": 11.82,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 986,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 84
                },
                "wind": {
                    "speed": 5.23,
                    "deg": 279,
                    "gust": 11.96
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 0.22
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-03 06:00:00"
            },
            {
                "dt": 1712134800,
                "main": {
                    "temp": 15.63,
                    "feels_like": 14.58,
                    "temp_min": 15.63,
                    "temp_max": 15.63,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 987,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 31
                },
                "wind": {
                    "speed": 7.89,
                    "deg": 291,
                    "gust": 9.75
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-03 09:00:00"
            },
            {
                "dt": 1712145600,
                "main": {
                    "temp": 17.87,
                    "feels_like": 16.68,
                    "temp_min": 17.87,
                    "temp_max": 17.87,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 987,
                    "humidity": 37,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 17
                },
                "wind": {
                    "speed": 7.01,
                    "deg": 296,
                    "gust": 9.12
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-03 12:00:00"
            },
            {
                "dt": 1712156400,
                "main": {
                    "temp": 17.17,
                    "feels_like": 16.07,
                    "temp_min": 17.17,
                    "temp_max": 17.17,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 987,
                    "humidity": 43,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 25
                },
                "wind": {
                    "speed": 4.3,
                    "deg": 292,
                    "gust": 6.91
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-03 15:00:00"
            },
            {
                "dt": 1712167200,
                "main": {
                    "temp": 12.28,
                    "feels_like": 11.03,
                    "temp_min": 12.28,
                    "temp_max": 12.28,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 988,
                    "humidity": 56,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 54
                },
                "wind": {
                    "speed": 1.95,
                    "deg": 206,
                    "gust": 1.74
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-03 18:00:00"
            },
            {
                "dt": 1712178000,
                "main": {
                    "temp": 10.87,
                    "feels_like": 9.53,
                    "temp_min": 10.87,
                    "temp_max": 10.87,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 989,
                    "humidity": 58,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 65
                },
                "wind": {
                    "speed": 2.26,
                    "deg": 188,
                    "gust": 1.96
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-03 21:00:00"
            },
            {
                "dt": 1712188800,
                "main": {
                    "temp": 10.8,
                    "feels_like": 9.4,
                    "temp_min": 10.8,
                    "temp_max": 10.8,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 988,
                    "humidity": 56,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 1.84,
                    "deg": 184,
                    "gust": 1.71
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-04 00:00:00"
            },
            {
                "dt": 1712199600,
                "main": {
                    "temp": 10.86,
                    "feels_like": 9.44,
                    "temp_min": 10.86,
                    "temp_max": 10.86,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 988,
                    "humidity": 55,
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
                    "all": 100
                },
                "wind": {
                    "speed": 1.43,
                    "deg": 184,
                    "gust": 1.39
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-04-04 03:00:00"
            },
            {
                "dt": 1712210400,
                "main": {
                    "temp": 13.34,
                    "feels_like": 12.14,
                    "temp_min": 13.34,
                    "temp_max": 13.34,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 989,
                    "humidity": 54,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.23,
                    "deg": 175,
                    "gust": 0.42
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-04 06:00:00"
            },
            {
                "dt": 1712221200,
                "main": {
                    "temp": 18.4,
                    "feels_like": 17.37,
                    "temp_min": 18.4,
                    "temp_max": 18.4,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 989,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 1.67,
                    "deg": 11,
                    "gust": 1.04
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-04-04 09:00:00"
            }]
        }
    }
    const mockStore = configureStore()
    let store

    it('Should display weather for 4 different days', () => {
        store = mockStore(initialStore)
        const { container  } = render(<Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>)

        expect(container.getElementsByClassName('col').length).toEqual(4);
    })
})