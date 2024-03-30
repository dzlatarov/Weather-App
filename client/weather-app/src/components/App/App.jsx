import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import weather from '../../apis/weather'
import forecast from '../../apis/forecast'
import Weather from '../Weather/Weather'
import Forecast from '../Forecast/Forecast'
import { addForecastData } from '../../state/weather/weatherSlice'
import { METRIC_UNIT, IMPERIAL_UNIT } from '../../constants'


function App() {
  const [latitude, setLatitude] = useState('')
  const [longtitude, setLongtitute] = useState('')
  const [currentWeather, setCurrentWeather] = useState({})
  const [unit, setUnit] = useState('metric')
  const dispatch = useDispatch()
  

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
  }

  const callWeatherAPI = () => {
    if (latitude !== '' && longtitude !== '') {
      weather.get(`?lat=${latitude}&lon=${longtitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=${unit}`).then((response) => {
            setCurrentWeather(response.data)
            setPreferences(unit)
      })
    }
  }


  const callForecastAPI = () => {
    forecast.get(`?lat=${latitude}&lon=${longtitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=${unit}`).then((response) => {
        dispatch(addForecastData(response.data.list))
        setPreferences(unit)
      })
  }

    const savePreferences = (value) => {
      setPreferences(value)
      setUnit(value)
  }

  const setPreferences = (unit) => {
    localStorage.setItem("unit", unit)
  }


  return (
      <>
          <div className='cardWrapper'>
            <div className='unitWrapper'>
                <button className='metricWrapper' onClick={() => savePreferences(METRIC_UNIT)}>metric</button>
                <button className='imperialWrapper' onClick={() => savePreferences(IMPERIAL_UNIT)}>imperial</button>
            </div>
              <Weather currentWeather={currentWeather} unit={unit}/>
              <Forecast unit={unit} />
        </div>
    </>
  )
}

export default App
