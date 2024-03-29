import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import unixTimestampConvertor, { unixTimeStampToDate } from '../../util/unixTimeStampConvertor'
import daysConverter from '../../util/daysConverter'
import './Weather.css'
import { useNavigate } from 'react-router-dom';
import { addWeatherDetails } from '../../state/weather/weatherSlice'

const Weather = ({ currentWeather, unit }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    
  useEffect(() => { 
  }, [currentWeather, unit])

  const addDetails = () => {
    dispatch(addWeatherDetails(currentWeather))
    navigate('/singleWeather')
  }

  return (
      <section data-testid='cypress-title' className='current-weather' onClick={() => addDetails()}>
        {currentWeather && currentWeather.weather && (
          <div className='weather-container'>
            <div className='row'>
              <h1 className='col temp-title' id='current-temperature'>{currentWeather.main.temp.toFixed(0)}°{unit && unit === 'metric' ? 'C' : 'F'}</h1>
              <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} className='icon'></img>
              <div className='col todays-info'>
                <p id='current-time'>{unixTimeStampToDate(currentWeather.dt).toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'})}</p>
                <h2 data-testid='date' id='current-day'>{daysConverter(unixTimestampConvertor(currentWeather.dt))}</h2>
                <p id='weather-type'>{currentWeather.weather[0].description}</p>
              </div>
              <div className='col d-flex align-items-center side-info'>
                <ul>
                  <li>Humidity: <span id='humidity'>{currentWeather.main.humidity} <img className='humidity-img' src='rain.png'></img></span></li>
                  <li>Wind: <span id='wind'>{currentWeather.wind.speed}<img className='wind-img' src='wind.png'></img></span></li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <hr />
      </section>
  )
}

export default Weather
