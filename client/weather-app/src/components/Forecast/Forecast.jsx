import React, { useState, useEffect } from 'react'
import forecast from '../../apis/forecast'
import filterForecast from '../../util/filterForecast'
import daysConverter from '../../util/daysConverter'
import unixTimestampConvertor from '../../util/unixTimeStampConvertor'
import './Forecast.css'

const Forecast = (forecastListDumpData) => {
    const [latitude, setLatitude] = useState('')
    const [longtitude, setLongtitute] = useState('')
    const [forecastList, setForecastList] = useState([])
    let units = localStorage.getItem("unit")

    useEffect(() => {
        console.log(forecastListDumpData)
        collectFilteredList(filterForecast(forecastListDumpData))
    }, [forecastListDumpData])

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
    
    const collectFilteredList = (list) => {
        let array = []
        list.forEach((element, index) => {
            console.log(index)
            console.log(list[index])
            array.push(list[index])
        });
        setForecastList(array)
        // console.log(`List is ${list[0].dt_txt}`)
    }

//    const callForecastAPI = () => {
//         const response = forecast.get(`?lat=${latitude}&lon=${longtitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`).then((response) => {
//             setForecastList(response.data.list)
//         })
    //     }
    
    const showInDifferentPage = () => {
        console.log('Hello')
    }

  return (
    <div className='forecast'>
      {forecastList && forecastList.length > 0 && forecastList.filter((item, index) => index < 5).map((filteredList, index) =>
        <div key={index} className='forecastWrapper' onClick={showInDifferentPage}>
              <span className='dateWrapper'>{daysConverter(unixTimestampConvertor(filteredList.dt))}</span>
              <img src={`https://openweathermap.org/img/wn/${filteredList.weather[0].icon}.png`} className='icon'></img>
              <span className='temperatureWrapper'>
                {filteredList.main.temp.toFixed(0)}
                <span className='symbol'>o</span>
                {units !== undefined && (<span>{ units === 'metric' ? 'C' : 'F'}</span>)}
              </span>
            </div>
          )}
    </div>
  )
}

export default Forecast