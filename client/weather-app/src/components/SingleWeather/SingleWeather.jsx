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
  console.log(`Filtered data from SingleWeather is ${filteredData}`)

  useEffect(() => {
      
    return () => {

      dispatch(clearForecastData())
      dispatch(clearWeatherDetails())
    };
  },[])
  return (
    <div className='singleWeatherWrapper'>
      {filteredData && filteredData.length > 0 && (
        <div className='date-month-wrapper'>
          <div className='date'>{daysConverter(unixTimestampConvertor(filteredData[0].dt))}</div>
          <div className='month'>{utcConverterDate(filteredData[0].dt_txt)}</div>
        </div>
      )}
      <div className='cardHolder'>
        {filteredData && filteredData.length > 0 && filteredData.map((element, index) =>
          <div key={index} className='card'>
              <div className='descriptionWrapper'>
                  <img src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} className='icon'></img>
                  <div className='description'>{element.weather[0].description}</div>
              </div>
              <div className='temperatureWrapper'>
                    <span>{element.main.temp.toFixed(0)}</span>
                    <span className='symbol'>o</span>
                    {/* <span>{ unit === 'metric' ? 'C' : 'F'}</span> */}
                </div>
              <div className='timeWrapper'>
              <span>{utcConverter(element.dt_txt).toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'})}</span>
              </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default SingleWeather
