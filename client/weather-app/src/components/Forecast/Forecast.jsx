import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import forecast from '../../apis/forecast'
import filterForecast from '../../util/filterForecast'
import utcConverter from '../../util/utcConverter'
import daysConverter from '../../util/daysConverter'
import unixTimestampConvertor from '../../util/unixTimeStampConvertor'
import { addWeatherDetails, clearWeatherDetails } from '../../state/weather/weatherSlice'
import './Forecast.css'

const Forecast = (forecastListDumpData, unit) => {
    // const [latitude, setLatitude] = useState('')
    // const [longtitude, setLongtitute] = useState('')
    const [forecastList, setForecastList] = useState([])
    let units = localStorage.getItem("unit")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const weatherDetails = useSelector(state => state.weather.value)

    useEffect(() => {
        console.log(`ForeCast from redux ${forecastListDumpData}`)
        collectFilteredList(filterForecast(forecastListDumpData))
    }, [forecastListDumpData, units, unit])

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
    
  const showInDifferentPage = (element) => {
      if (weatherDetails !== undefined && weatherDetails.length > 0) {
        let dt = weatherDetails[0].dt
        if (dt !== element.dt) {
          dispatch(clearWeatherDetails())
          dispatch(addWeatherDetails(element))

          navigate('/singleWeather')
        }
      } else {
        navigate('/singleWeather')
        dispatch(addWeatherDetails(element))
      }
    }

  return (
    <div className='forecast'>
      {forecastList && forecastList.length > 0 && forecastList.filter((item, index) => index < 5).map((element, index) =>
        <div key={index} className='forecastWrapper' onClick={() => showInDifferentPage(element)}>
              <span className='dateWrapper'>{daysConverter(unixTimestampConvertor(element.dt))}</span>
              <img src={`https://openweathermap.org/img/wn/${element.weather[0].icon}.png`} className='icon'></img>
              <span className='temperatureWrapper'>
                {element.main.temp.toFixed(0)}
                <span className='symbol'>o</span>
                {unit !== undefined && (<span>{unit === 'metric' ? 'C' : 'F'}</span>)}
                {/* {filteredList.dt_txt !== undefined && (<span>{utcConverter(filteredList.dt_txt)}</span>)} */}
          </span>
          <span>{utcConverter(element.dt_txt).toLocaleTimeString()}</span>
            </div>
          )}
    </div>
  )
}

export default Forecast