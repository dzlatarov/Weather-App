import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import weather from '../../apis/weather'
import forecast from '../../apis/forecast'
import Weather from '../Weather/Weather'
import Forecast from '../Forecast/Forecast'
import { addForecastData } from '../../state/weather/weatherSlice'


function App() {
  const [latitude, setLatitude] = useState('')
  const [longtitude, setLongtitute] = useState('')
  const [currentWeather, setCurrentWeather] = useState({})
  const [unit, setUnit] = useState('metric')
  const [forecastList, setForecastList] = useState([])
  const dispatch = useDispatch()
    
  const forecastListDDump = [
    {
            "dt": 1711638000,
            "main": {
                "temp": 20.82,
                "feels_like": 19.69,
                "temp_min": 17.62,
                "temp_max": 20.82,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 925,
                "humidity": 28,
                "temp_kf": 3.2
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
                "all": 20
            },
            "wind": {
                "speed": 4.97,
                "deg": 231,
                "gust": 7.73
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
                "temp": 18.07,
                "feels_like": 16.87,
                "temp_min": 12.57,
                "temp_max": 18.07,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 927,
                "humidity": 36,
                "temp_kf": 5.5
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
                "all": 29
            },
            "wind": {
                "speed": 2.25,
                "deg": 269,
                "gust": 3.76
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
                "temp": 14.35,
                "feels_like": 13.09,
                "temp_min": 11.11,
                "temp_max": 14.35,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 929,
                "humidity": 48,
                "temp_kf": 3.24
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
                "speed": 2.29,
                "deg": 292,
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
                "temp": 9.87,
                "feels_like": 9.87,
                "temp_min": 9.87,
                "temp_max": 9.87,
                "pressure": 1016,
                "sea_level": 1016,
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
                "all": 93
            },
            "wind": {
                "speed": 0.92,
                "deg": 276,
                "gust": 0.88
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
                "temp": 8.73,
                "feels_like": 8.73,
                "temp_min": 8.73,
                "temp_max": 8.73,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 930,
                "humidity": 64,
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
                "all": 45
            },
            "wind": {
                "speed": 1.07,
                "deg": 290,
                "gust": 1.03
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
                "temp": 11.32,
                "feels_like": 10,
                "temp_min": 11.32,
                "temp_max": 11.32,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 933,
                "humidity": 57,
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
                "all": 23
            },
            "wind": {
                "speed": 1.23,
                "deg": 257,
                "gust": 2.03
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
                "temp": 17.63,
                "feels_like": 16.55,
                "temp_min": 17.63,
                "temp_max": 17.63,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 933,
                "humidity": 42,
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
                "speed": 1.62,
                "deg": 292,
                "gust": 2.51
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
                "temp": 20.9,
                "feels_like": 19.91,
                "temp_min": 20.9,
                "temp_max": 20.9,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 932,
                "humidity": 33,
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
                "all": 1
            },
            "wind": {
                "speed": 1.71,
                "deg": 304,
                "gust": 2.51
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
                "temp": 20.72,
                "feels_like": 19.76,
                "temp_min": 20.72,
                "temp_max": 20.72,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 931,
                "humidity": 35,
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
                "all": 61
            },
            "wind": {
                "speed": 1.19,
                "deg": 22,
                "gust": 1.09
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
                "temp": 15.81,
                "feels_like": 14.7,
                "temp_min": 15.81,
                "temp_max": 15.81,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 932,
                "humidity": 48,
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
                "all": 81
            },
            "wind": {
                "speed": 1.3,
                "deg": 123,
                "gust": 1.4
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
                "temp": 13.84,
                "feels_like": 12.79,
                "temp_min": 13.84,
                "temp_max": 13.84,
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
                "all": 94
            },
            "wind": {
                "speed": 1.53,
                "deg": 116,
                "gust": 1.76
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
                "temp": 12.06,
                "feels_like": 11.04,
                "temp_min": 12.06,
                "temp_max": 12.06,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 932,
                "humidity": 66,
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
                "all": 73
            },
            "wind": {
                "speed": 0.43,
                "deg": 144,
                "gust": 0.99
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
                "temp": 10.83,
                "feels_like": 9.82,
                "temp_min": 10.83,
                "temp_max": 10.83,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 932,
                "humidity": 71,
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
                "all": 18
            },
            "wind": {
                "speed": 0.74,
                "deg": 122,
                "gust": 0.96
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
                "temp": 12.95,
                "feels_like": 12,
                "temp_min": 12.95,
                "temp_max": 12.95,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 933,
                "humidity": 65,
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
                "speed": 0.53,
                "deg": 107,
                "gust": 0.65
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
                "temp": 19.17,
                "feels_like": 18.27,
                "temp_min": 19.17,
                "temp_max": 19.17,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 932,
                "humidity": 43,
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
                "speed": 0.22,
                "deg": 210,
                "gust": 1.74
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
                "temp": 22.68,
                "feels_like": 21.71,
                "temp_min": 22.68,
                "temp_max": 22.68,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 931,
                "humidity": 27,
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
                "speed": 1.24,
                "deg": 252,
                "gust": 2.97
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
                "temp": 22.22,
                "feels_like": 21.25,
                "temp_min": 22.22,
                "temp_max": 22.22,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 930,
                "humidity": 29,
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
                "speed": 1.54,
                "deg": 232,
                "gust": 2.44
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
                "temp": 15.84,
                "feels_like": 14.89,
                "temp_min": 15.84,
                "temp_max": 15.84,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 931,
                "humidity": 54,
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
                "all": 3
            },
            "wind": {
                "speed": 0.79,
                "deg": 151,
                "gust": 1.27
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
                "temp": 13.85,
                "feels_like": 12.83,
                "temp_min": 13.85,
                "temp_max": 13.85,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 931,
                "humidity": 59,
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
                "speed": 0.45,
                "deg": 213,
                "gust": 0.93
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
                "temp": 12.3,
                "feels_like": 11.18,
                "temp_min": 12.3,
                "temp_max": 12.3,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 931,
                "humidity": 61,
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
                "all": 50
            },
            "wind": {
                "speed": 0.53,
                "deg": 245,
                "gust": 0.86
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
                "temp": 11.2,
                "feels_like": 10.13,
                "temp_min": 11.2,
                "temp_max": 11.2,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 931,
                "humidity": 67,
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
                "all": 2
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
            "dt_txt": "2024-03-31 03:00:00"
        },
        {
            "dt": 1711864800,
            "main": {
                "temp": 13.76,
                "feels_like": 12.78,
                "temp_min": 13.76,
                "temp_max": 13.76,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 932,
                "humidity": 61,
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
                "all": 1
            },
            "wind": {
                "speed": 0.55,
                "deg": 287,
                "gust": 0.84
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
                "temp": 19.81,
                "feels_like": 18.94,
                "temp_min": 19.81,
                "temp_max": 19.81,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 932,
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
                "all": 41
            },
            "wind": {
                "speed": 0.43,
                "deg": 285,
                "gust": 2
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
                "temp": 23.38,
                "feels_like": 22.61,
                "temp_min": 23.38,
                "temp_max": 23.38,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 931,
                "humidity": 32,
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
                "all": 71
            },
            "wind": {
                "speed": 2.58,
                "deg": 259,
                "gust": 4.36
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
                "temp": 22.94,
                "feels_like": 22.2,
                "temp_min": 22.94,
                "temp_max": 22.94,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 930,
                "humidity": 35,
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
                "speed": 1.9,
                "deg": 234,
                "gust": 4.4
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
                "feels_like": 16.18,
                "temp_min": 17.11,
                "temp_max": 17.11,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 931,
                "humidity": 50,
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
                "all": 58
            },
            "wind": {
                "speed": 0.95,
                "deg": 173,
                "gust": 1.39
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
                "temp": 14.88,
                "feels_like": 13.96,
                "temp_min": 14.88,
                "temp_max": 14.88,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 931,
                "humidity": 59,
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
                "all": 68
            },
            "wind": {
                "speed": 0.25,
                "deg": 138,
                "gust": 0.89
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
                "temp": 13.41,
                "feels_like": 12.37,
                "temp_min": 13.41,
                "temp_max": 13.41,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 930,
                "humidity": 60,
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
                "all": 81
            },
            "wind": {
                "speed": 0.28,
                "deg": 224,
                "gust": 0.65
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
                "temp": 12.18,
                "feels_like": 11.05,
                "temp_min": 12.18,
                "temp_max": 12.18,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 930,
                "humidity": 61,
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
                "speed": 0.34,
                "deg": 233,
                "gust": 0.64
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
                "temp": 14.91,
                "feels_like": 13.81,
                "temp_min": 14.91,
                "temp_max": 14.91,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 930,
                "humidity": 52,
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
                "all": 80
            },
            "wind": {
                "speed": 0.32,
                "deg": 338,
                "gust": 0.52
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
                "temp": 22.13,
                "feels_like": 21.23,
                "temp_min": 22.13,
                "temp_max": 22.13,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 929,
                "humidity": 32,
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
                "all": 71
            },
            "wind": {
                "speed": 0.27,
                "deg": 266,
                "gust": 2.81
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
                "temp": 26.11,
                "feels_like": 26.11,
                "temp_min": 26.11,
                "temp_max": 26.11,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 927,
                "humidity": 23,
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
                "all": 71
            },
            "wind": {
                "speed": 2.72,
                "deg": 242,
                "gust": 5.56
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
                "temp": 25.15,
                "feels_like": 24.4,
                "temp_min": 25.15,
                "temp_max": 25.15,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 925,
                "humidity": 26,
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
                "all": 1
            },
            "wind": {
                "speed": 3.9,
                "deg": 217,
                "gust": 7.54
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
                "temp": 17.77,
                "feels_like": 16.8,
                "temp_min": 17.77,
                "temp_max": 17.77,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 925,
                "humidity": 46,
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
                "all": 8
            },
            "wind": {
                "speed": 1.49,
                "deg": 137,
                "gust": 2.18
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
                "temp": 15.84,
                "feels_like": 14.71,
                "temp_min": 15.84,
                "temp_max": 15.84,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 923,
                "humidity": 47,
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
                "speed": 0.99,
                "deg": 141,
                "gust": 1.59
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
                "temp": 14.25,
                "feels_like": 13.04,
                "temp_min": 14.25,
                "temp_max": 14.25,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 922,
                "humidity": 50,
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
                "speed": 0.13,
                "deg": 148,
                "gust": 0
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
                "temp": 12.41,
                "feels_like": 11.48,
                "temp_min": 12.41,
                "temp_max": 12.41,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 923,
                "humidity": 68,
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
                "speed": 2.77,
                "deg": 297,
                "gust": 4.93
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
                "temp": 14.7,
                "feels_like": 13.64,
                "temp_min": 14.7,
                "temp_max": 14.7,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 924,
                "humidity": 54,
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
                "all": 43
            },
            "wind": {
                "speed": 3.31,
                "deg": 298,
                "gust": 6.56
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
                "temp": 17.37,
                "feels_like": 16.31,
                "temp_min": 17.37,
                "temp_max": 17.37,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 924,
                "humidity": 44,
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
                "speed": 4.28,
                "deg": 305,
                "gust": 5.39
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
                "temp": 19.28,
                "feels_like": 18.15,
                "temp_min": 19.28,
                "temp_max": 19.28,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 923,
                "humidity": 34,
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
                "speed": 4,
                "deg": 321,
                "gust": 5.55
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-04-02 12:00:00"
        }
  ]

  useEffect(() => {
    if (latitude === '' && longtitude === '') {
      getLocation()
    } else {
      callWeatherAPI()
      callForecastAPI()
    }
  }, [latitude, longtitude, unit])

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
    // if (latitude !== '' && longtitude !== '') {
    //   weather.get(`?lat=${latitude}&lon=${longtitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=${unit}`).then((response) => {
    //      console.log(response.data)
    //         setCurrentWeather(response.data)
    //   })
    // }
      setCurrentWeather({ "coord": {
        "lon": 23.36,
        "lat": 42.65
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 20.82,
        "feels_like": 19.69,
        "temp_min": 20.6,
        "temp_max": 21.46,
        "pressure": 1011,
        "humidity": 28
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.63,
        "deg": 210
    },
    "clouds": {
        "all": 20
    },
    "dt": 1711629903,
    "sys": {
        "type": 2,
        "id": 2033225,
        "country": "BG",
        "sunrise": 1711599320,
        "sunset": 1711644451
    },
    "timezone": 7200,
    "id": 731061,
    "name": "Sofia-Capital",
    "cod": 200})
  }



  const callForecastAPI = () => {
    // forecast.get(`?lat=${latitude}&lon=${longtitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=${unit}`).then((response) => {
    //     // setForecastList(response.data.list)
    //     dispatch(addForecastData(response.data.list))
    //   })
     dispatch(addForecastData(forecastListDDump))
    // setForecastList(forecastListDDump)
  }

    const savePreferences = (value) => {
      localStorage.setItem("unit", value)
      setUnit(value)
  }


  return (
      <>
          <div className='cardWrapper'>
            <div className='unitWrapper'>
                <button className='metricWrapper' onClick={() => savePreferences('metric')}>metric</button>
                <button className='imperialWrapper' onClick={() => savePreferences('imperial')}>imperial</button>
            </div>
              <Weather currentWeather={currentWeather} unit={unit}/>
              <Forecast unit={unit} />
        </div>
    </>
  )
}

export default App
