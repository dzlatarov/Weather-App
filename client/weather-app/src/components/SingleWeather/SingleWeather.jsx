import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './SingleWeather.css'
import daysConverter from '../../util/daysConverter'
import { clearForecastData, clearWeatherDetails } from '../../state/weather/weatherSlice'
import unixTimestampConvertor from '../../util/unixTimeStampConvertor'
import filterForecastForSingleDay from '../../util/filterForecastForSingleDay'
import utcConverter, { utcConverterDate } from '../../util/utcConverter'

const SingleWeather = () => { 
  const currentWeather = useSelector(state => state.weather.value)
  const forecastList = useSelector(state => state.weather.forecast)
  const dispatch = useDispatch()
  const filteredData = forecastList.length > 0 && currentWeather.length > 0 && filterForecastForSingleDay(forecastList, currentWeather)
  let unit = localStorage.getItem("unit")

  useEffect(() => {
    return () => {
      dispatch(clearForecastData())
      dispatch(clearWeatherDetails())
    };
  }, [])
  
  return (
    <div className='main container'>
      <div className='weather-panel'>
          <div className='date-time-container'>
            <h2 className='current-day'>{filteredData && filteredData.length > 0 && daysConverter(unixTimestampConvertor(filteredData[0].dt))}</h2>
            <h2 className='current-date'>{filteredData && utcConverterDate(filteredData[0].dt_txt)}</h2>
          </div>
          
          <div className='forecast-container'>
              <div className='forecast-container'>
              <ul  className='forecast-by-hours'>
                {filteredData && filteredData.length > 0 && filteredData.map((element, index) =>
                  <li key={index} className='forecast-element'>
                    <span>{utcConverter(element.dt_txt).toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'})}</span>
                    <img src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}></img>
                    <span className='description'>{element.weather[0].description}</span>
                    <span>{element.main.temp.toFixed(0)}°{unit && unit === 'metric' ? "C" : "F"}</span>
                  </li>
                  )}
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleWeather
