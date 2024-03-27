import React, { useState, useEffect } from 'react'
import weather from '../../apis/weather'
import forecast from '../../apis/forecast'
import unixTimestampConvertor from '../../util/unixTimeStampConvertor'
import daysConverter from '../../util/daysConverter'
import './Weather.css'

const Weather = ({ currentWeather }) => {
    // const [latitude, setLatitude] = useState('')
    // const [longtitude, setLongtitute] = useState('')
    // const [currentWeather, setCurrentWeather] = useState({})

//   useEffect(() => {
//     if (latitude === '' && longtitude === '') {
//       getLocation()
//     } else {
//       callWeatherAPI()
//       // callForecastAPI()
//     }
    //   }, [latitude, longtitude])
    
    useEffect(() => {
        if (currentWeather.weather != undefined) {
            console.log(`current weather object is ${currentWeather.weather.icon}`)
            console.log(`current weather object is ${currentWeather.temperature.toFixed(0)}`)
        }   
        
    }, [currentWeather])


  const getCurrentPosition = (position) => {
    setLatitude(position.coords.latitude.toFixed(2))
    setLongtitute(position.coords.longitude.toFixed(2))

    console.log(`Latitude1 is ${position.coords.latitude.toFixed(2)}`)
    console.log(`Longitude1 is ${position.coords.longitude.toFixed(2)}`)
  }

  const callWeatherAPI = () => {
        const response = weather.get(`?lat=${latitude}&lon=${longtitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`).then((response) => {
        setCurrentWeather(response.data.weather[0])
        })
    }
    
    // const callForecastAPI = () => {
  //   const response = forecast.get(`?lat=${latitude}&lon=${longtitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`).then((response) => {
  //     console.log(response)
  //   })
  // }
  return (
    <div className='currentDate'>
          {currentWeather && currentWeather.weather !== undefined && (
            <div className='cardWrapper'>
                <div className='descriptionWrapper'>
                   <div className='date'>{daysConverter(unixTimestampConvertor(currentWeather.dt))}</div>
                    <img src={`https://openweathermap.org/img/wn/${currentWeather.weather.icon}@2x.png`} className='icon'></img>
                    <div className='description'>{currentWeather.weather.description}</div>
                </div>
                <div className='temperatureWrapper'>
                      <span>{currentWeather.temperature.toFixed(0)}</span>
                      <span className='symbol'>o</span>
                      <span>{ currentWeather.unit === 'metric' ? 'C' : 'F'}</span>
                </div>
            </div>
          )}
    </div>
  )
}

export default Weather
