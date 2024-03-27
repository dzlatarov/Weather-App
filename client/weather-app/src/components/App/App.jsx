import { useState, useEffect } from 'react'
import './App.css'
import weather from '../../apis/weather'
import forecast from '../../apis/forecast'
import Weather from '../Weather/Weather'
import Forecast from '../Forecast/Forecast'
import utcConverter from '../../util/utcConverter'


function App() {
  const [latitude, setLatitude] = useState('')
  const [longtitude, setLongtitute] = useState('')
  const [timeStamp, setTimeStamp] = useState(0)
  const [currentWeather, setCurrentWeather] = useState({})
  const [unit, setUnit] = useState('metric')
  const [forecastList, setForecastList] = useState([])
  const forecastListDDump = [
    {
            "dt": 1711530000,
            "main": {
                "temp": 10.15,
                "feels_like": 9.1,
                "temp_min": 10.15,
                "temp_max": 12.71,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 923,
                "humidity": 72,
                "temp_kf": -2.56
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
                "all": 40
            },
            "wind": {
                "speed": 1.62,
                "deg": 77,
                "gust": 2.29
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-27 09:00:00"
        },
        {
            "dt": 1711540800,
            "main": {
                "temp": 12.61,
                "feels_like": 11.62,
                "temp_min": 12.61,
                "temp_max": 17.53,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 922,
                "humidity": 65,
                "temp_kf": -4.92
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
                "all": 45
            },
            "wind": {
                "speed": 0.46,
                "deg": 109,
                "gust": 4.12
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-27 12:00:00"
        },
        {
            "dt": 1711551600,
            "main": {
                "temp": 14.74,
                "feels_like": 13.86,
                "temp_min": 14.74,
                "temp_max": 17.04,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 921,
                "humidity": 61,
                "temp_kf": -2.3
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
                "all": 71
            },
            "wind": {
                "speed": 2.36,
                "deg": 105,
                "gust": 3.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-27 15:00:00"
        },
        {
            "dt": 1711562400,
            "main": {
                "temp": 11.42,
                "feels_like": 10.71,
                "temp_min": 11.42,
                "temp_max": 11.42,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 921,
                "humidity": 80,
                "temp_kf": 0
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
                "all": 48
            },
            "wind": {
                "speed": 2.47,
                "deg": 100,
                "gust": 4.74
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-27 18:00:00"
        },
        {
            "dt": 1711573200,
            "main": {
                "temp": 10.36,
                "feels_like": 9.59,
                "temp_min": 10.36,
                "temp_max": 10.36,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 921,
                "humidity": 82,
                "temp_kf": 0
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
                "all": 43
            },
            "wind": {
                "speed": 1.81,
                "deg": 99,
                "gust": 1.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-27 21:00:00"
        },
        {
            "dt": 1711584000,
            "main": {
                "temp": 9.54,
                "feels_like": 8.72,
                "temp_min": 9.54,
                "temp_max": 9.54,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 919,
                "humidity": 84,
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
                "all": 74
            },
            "wind": {
                "speed": 1.92,
                "deg": 101,
                "gust": 2.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-28 00:00:00"
        },
        {
            "dt": 1711594800,
            "main": {
                "temp": 8.56,
                "feels_like": 7.52,
                "temp_min": 8.56,
                "temp_max": 8.56,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 917,
                "humidity": 89,
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
                "speed": 1.99,
                "deg": 94,
                "gust": 1.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-28 03:00:00"
        },
        {
            "dt": 1711605600,
            "main": {
                "temp": 10.75,
                "feels_like": 10.05,
                "temp_min": 10.75,
                "temp_max": 10.75,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 922,
                "humidity": 83,
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
                "all": 89
            },
            "wind": {
                "speed": 3.4,
                "deg": 274,
                "gust": 10.27
            },
            "visibility": 10000,
            "pop": 0.47,
            "rain": {
                "3h": 0.56
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-28 06:00:00"
        },
        {
            "dt": 1711616400,
            "main": {
                "temp": 15.76,
                "feels_like": 14.75,
                "temp_min": 15.76,
                "temp_max": 15.76,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 924,
                "humidity": 52,
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
                "all": 29
            },
            "wind": {
                "speed": 5.14,
                "deg": 247,
                "gust": 9.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-28 09:00:00"
        },
        {
            "dt": 1711627200,
            "main": {
                "temp": 17.5,
                "feels_like": 16.25,
                "temp_min": 17.5,
                "temp_max": 17.5,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 924,
                "humidity": 36,
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
                "all": 34
            },
            "wind": {
                "speed": 6.51,
                "deg": 235,
                "gust": 9.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-28 12:00:00"
        },
        {
            "dt": 1711638000,
            "main": {
                "temp": 16.73,
                "feels_like": 15.56,
                "temp_min": 16.73,
                "temp_max": 16.73,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 925,
                "humidity": 42,
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
                "all": 48
            },
            "wind": {
                "speed": 5.53,
                "deg": 227,
                "gust": 8.84
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-28 15:00:00"
        },
        {
            "dt": 1711648800,
            "main": {
                "temp": 12.49,
                "feels_like": 11.15,
                "temp_min": 12.49,
                "temp_max": 12.49,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 927,
                "humidity": 52,
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
                "all": 70
            },
            "wind": {
                "speed": 2.7,
                "deg": 250,
                "gust": 5.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-28 18:00:00"
        },
        {
            "dt": 1711659600,
            "main": {
                "temp": 10.72,
                "feels_like": 9.47,
                "temp_min": 10.72,
                "temp_max": 10.72,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 929,
                "humidity": 62,
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
                "speed": 2.09,
                "deg": 294,
                "gust": 2.76
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-28 21:00:00"
        },
        {
            "dt": 1711670400,
            "main": {
                "temp": 9.31,
                "feels_like": 8.59,
                "temp_min": 9.31,
                "temp_max": 9.31,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 929,
                "humidity": 69,
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
                "speed": 1.77,
                "deg": 280,
                "gust": 1.72
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-29 00:00:00"
        },
        {
            "dt": 1711681200,
            "main": {
                "temp": 8.42,
                "feels_like": 8.42,
                "temp_min": 8.42,
                "temp_max": 8.42,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 930,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 21
            },
            "wind": {
                "speed": 1.07,
                "deg": 269,
                "gust": 1.02
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-29 03:00:00"
        },
        {
            "dt": 1711692000,
            "main": {
                "temp": 10.93,
                "feels_like": 9.67,
                "temp_min": 10.93,
                "temp_max": 10.93,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 932,
                "humidity": 61,
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
                "all": 14
            },
            "wind": {
                "speed": 1.19,
                "deg": 277,
                "gust": 1.59
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-29 06:00:00"
        },
        {
            "dt": 1711702800,
            "main": {
                "temp": 17.08,
                "feels_like": 15.99,
                "temp_min": 17.08,
                "temp_max": 17.08,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 933,
                "humidity": 44,
                "temp_kf": 0
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
                "all": 2
            },
            "wind": {
                "speed": 2.39,
                "deg": 290,
                "gust": 3.49
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-29 09:00:00"
        },
        {
            "dt": 1711713600,
            "main": {
                "temp": 20.13,
                "feels_like": 19.14,
                "temp_min": 20.13,
                "temp_max": 20.13,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 932,
                "humidity": 36,
                "temp_kf": 0
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
                "all": 2
            },
            "wind": {
                "speed": 2.26,
                "deg": 282,
                "gust": 2.75
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-29 12:00:00"
        },
        {
            "dt": 1711724400,
            "main": {
                "temp": 20.13,
                "feels_like": 19.14,
                "temp_min": 20.13,
                "temp_max": 20.13,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 932,
                "humidity": 36,
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
                "all": 11
            },
            "wind": {
                "speed": 1.15,
                "deg": 306,
                "gust": 1.94
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
                "temp": 14.65,
                "feels_like": 13.61,
                "temp_min": 14.65,
                "temp_max": 14.65,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 933,
                "humidity": 55,
                "temp_kf": 0
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
                "all": 32
            },
            "wind": {
                "speed": 0.57,
                "deg": 137,
                "gust": 0.91
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
                "temp": 13.57,
                "feels_like": 12.44,
                "temp_min": 13.57,
                "temp_max": 13.57,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 933,
                "humidity": 56,
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
                "speed": 0.45,
                "deg": 140,
                "gust": 0.84
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
                "temp": 12.31,
                "feels_like": 11.11,
                "temp_min": 12.31,
                "temp_max": 12.31,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 932,
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
                "all": 100
            },
            "wind": {
                "speed": 0.48,
                "deg": 140,
                "gust": 0.87
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-30 00:00:00"
        },
        {
            "dt": 1711767600,
            "main": {
                "temp": 11.3,
                "feels_like": 10.21,
                "temp_min": 11.3,
                "temp_max": 11.3,
                "pressure": 1019,
                "sea_level": 1019,
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
                "all": 100
            },
            "wind": {
                "speed": 0.33,
                "deg": 151,
                "gust": 0.76
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-30 03:00:00"
        },
        {
            "dt": 1711778400,
            "main": {
                "temp": 13.02,
                "feels_like": 12,
                "temp_min": 13.02,
                "temp_max": 13.02,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 933,
                "humidity": 62,
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
                "speed": 0.47,
                "deg": 118,
                "gust": 0.91
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-30 06:00:00"
        },
        {
            "dt": 1711789200,
            "main": {
                "temp": 19.35,
                "feels_like": 18.41,
                "temp_min": 19.35,
                "temp_max": 19.35,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 932,
                "humidity": 41,
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
                "all": 50
            },
            "wind": {
                "speed": 0.11,
                "deg": 117,
                "gust": 1.86
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-30 09:00:00"
        },
        {
            "dt": 1711800000,
            "main": {
                "temp": 22.57,
                "feels_like": 21.74,
                "temp_min": 22.57,
                "temp_max": 22.57,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 930,
                "humidity": 33,
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
                "all": 27
            },
            "wind": {
                "speed": 1.74,
                "deg": 254,
                "gust": 3.54
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
                "temp": 22.17,
                "feels_like": 21.36,
                "temp_min": 22.17,
                "temp_max": 22.17,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 929,
                "humidity": 35,
                "temp_kf": 0
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
                "all": 0
            },
            "wind": {
                "speed": 1.95,
                "deg": 236,
                "gust": 3.11
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
                "temp": 16.14,
                "feels_like": 15.27,
                "temp_min": 16.14,
                "temp_max": 16.14,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 930,
                "humidity": 56,
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
                "speed": 0.76,
                "deg": 194,
                "gust": 1.52
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
                "temp": 14.01,
                "feels_like": 13.11,
                "temp_min": 14.01,
                "temp_max": 14.01,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 930,
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
                "speed": 0.39,
                "deg": 239,
                "gust": 0.98
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
                "temp": 12.49,
                "feels_like": 11.52,
                "temp_min": 12.49,
                "temp_max": 12.49,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 930,
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
                "all": 87
            },
            "wind": {
                "speed": 0.57,
                "deg": 255,
                "gust": 0.8
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
                "temp": 11.58,
                "feels_like": 10.62,
                "temp_min": 11.58,
                "temp_max": 11.58,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 930,
                "humidity": 70,
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
                "speed": 0.99,
                "deg": 276,
                "gust": 0.91
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
                "temp": 13.98,
                "feels_like": 13.08,
                "temp_min": 13.98,
                "temp_max": 13.98,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 931,
                "humidity": 63,
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
                "all": 57
            },
            "wind": {
                "speed": 1.06,
                "deg": 273,
                "gust": 1.63
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
                "temp": 20.58,
                "feels_like": 19.76,
                "temp_min": 20.58,
                "temp_max": 20.58,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 931,
                "humidity": 41,
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
                "all": 22
            },
            "wind": {
                "speed": 1.45,
                "deg": 268,
                "gust": 3.22
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
                "temp": 24.19,
                "feels_like": 23.42,
                "temp_min": 24.19,
                "temp_max": 24.19,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 929,
                "humidity": 29,
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
                "all": 46
            },
            "wind": {
                "speed": 3.22,
                "deg": 258,
                "gust": 4.63
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
                "temp": 23.64,
                "feels_like": 22.92,
                "temp_min": 23.64,
                "temp_max": 23.64,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 929,
                "humidity": 33,
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
                "speed": 3.46,
                "deg": 237,
                "gust": 6.21
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
                "temp": 17.19,
                "feels_like": 16.32,
                "temp_min": 17.19,
                "temp_max": 17.19,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 929,
                "humidity": 52,
                "temp_kf": 0
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
                "all": 36
            },
            "wind": {
                "speed": 0.44,
                "deg": 237,
                "gust": 1.11
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
                "temp": 15.26,
                "feels_like": 14.33,
                "temp_min": 15.26,
                "temp_max": 15.26,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 930,
                "humidity": 57,
                "temp_kf": 0
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
                "all": 40
            },
            "wind": {
                "speed": 0.59,
                "deg": 135,
                "gust": 1.26
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
                "temp": 14.48,
                "feels_like": 13.5,
                "temp_min": 14.48,
                "temp_max": 14.48,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 929,
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
                "all": 70
            },
            "wind": {
                "speed": 0.3,
                "deg": 176,
                "gust": 0.91
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
                "temp": 12.92,
                "feels_like": 11.83,
                "temp_min": 12.92,
                "temp_max": 12.92,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 928,
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
                "all": 90
            },
            "wind": {
                "speed": 0.35,
                "deg": 241,
                "gust": 0.72
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
                "temp": 15.54,
                "feels_like": 14.48,
                "temp_min": 15.54,
                "temp_max": 15.54,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 927,
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
                "all": 47
            },
            "wind": {
                "speed": 0.08,
                "deg": 346,
                "gust": 0.55
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-04-01 06:00:00"
        }
  ]

  useEffect(() => {
    if (latitude === '' && longtitude === '') {
      getLocation()
      convert()
    } else {
      callWeatherAPI()
      callForecastAPI()
    }
  }, [latitude, longtitude])

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position != undefined) {
          getCurrentPosition(position)
        }
      })
    } else {
      console.error('The browser is not supporting Geolocation')
    }
  }

    const getCurrentPosition = (position) => {
    setLatitude(position.coords.latitude.toFixed(2))
    setLongtitute(position.coords.longitude.toFixed(2))

    console.log(`Latitude1 is ${position.coords.latitude.toFixed(2)}`)
    console.log(`Longitude1 is ${position.coords.longitude.toFixed(2)}`)
  }

  const callWeatherAPI = () => {
    console.log(`latitude ${latitude}`)
    console.log(`longtitude ${longtitude}`)
    setUnit('metric')

    // if (latitude !== '' && longtitude !== '') {
    //   const response = weather.get(`?lat=${latitude}&lon=${longtitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=${unit}`).then((response) => {
    //     setCurrentWeather({ dt: response.data.dt, weather: response.data.weather[0], temperature: response.data.main.temp})
    //     console.log(response.data.main.temp)
    //   })
    // }
    setCurrentWeather({ dt: 1711524828, weather: {id: 802, description: 'scattered clouds', icon: '03d'}, temperature: 11.01, unit: 'metric'})
  }



  const callForecastAPI = () => {
    // const response = forecast.get(`?lat=${latitude}&lon=${longtitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`).then((response) => {
    //     setForecastList(response.data.list)
    // })
    setForecastList(forecastListDDump)
  }

  const convert = () => {
    let date = '2024-03-26 18:00:00'
    let convertedDate = utcConverter(date)
    console.log(`converted date ${convertedDate}`)
  }


  return (
    <>
      <div className='cardWrapper'>
        <Weather currentWeather={currentWeather} />
        <Forecast forecast={forecastList} />
      </div>
    </>
  )
}

export default App
