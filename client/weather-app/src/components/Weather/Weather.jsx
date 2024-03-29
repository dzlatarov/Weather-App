import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import unixTimestampConvertor, { unixTimeStampToDate } from '../../util/unixTimeStampConvertor'
import daysConverter from '../../util/daysConverter'
import './Weather.css'
import { useNavigate } from 'react-router-dom';
import { addWeatherDetails } from '../../state/weather/weatherSlice'
import utcConverter from '../../util/utcConverter'
import { filter } from '../../util/filterForecast'

const Weather = ({ currentWeather, unit }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { forecast } = useSelector(state => state.weather);
  // const forecastList = filter(forecast)
  // const currentWeather = forecastList[0]
  // console.table(forecastList)
    
  useEffect(() => {
      // if (currentWeather.weather != undefined) {
      //     console.log(`current weather object is ${currentWeather.weather[0].icon}`)
      //     console.log(`current weather object is ${currentWeather.main.temp.toFixed(0)}`)
      // }   
      
  }, [currentWeather, unit])

  const addDetails = () => {
    dispatch(addWeatherDetails(currentWeather))
    navigate('/singleWeather')
    
    console.log(`weather details ${currentWeather.weather[0].icon}`)
  }

  return (
      <section data-testid='cypress-title' className="current-weather" onClick={() => addDetails()}>
        {currentWeather && currentWeather.weather && (
          <div className="weather-container">
            <div className="row">
              <h1 className="col temp-title" id="current-temperature">{currentWeather.main.temp.toFixed(0)}°{unit && unit === 'metric' ? 'C' : 'F'}</h1>
              <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} className='icon'></img>
              <div className="col todays-info">
                <p id="current-time">{utcConverter(unixTimeStampToDate(currentWeather.dt)).toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'})}</p>
                <h2 data-testid='date' id="current-day">{daysConverter(unixTimestampConvertor(currentWeather.dt))}</h2>
                <p id="weather-type">{currentWeather.weather[0].description}</p>
              </div>
              <div className="col d-flex align-items-center side-info">
                <ul>
                  <li>Humidity: <span id="humidity">{currentWeather.main.humidity}</span></li>
                  <li>Wind: <span id="wind">{currentWeather.wind.speed}</span></li>
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
