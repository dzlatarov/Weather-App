import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './SingleWeather.css'
import daysConverter from '../../util/daysConverter'
import { clearForecastData, clearWeatherDetails } from '../../state/weather/weatherSlice'
import unixTimestampConvertor from '../../util/unixTimeStampConvertor'
import filterForecastForSingleDay from '../../util/filterForecastForSingleDay'

const SingleWeather = () => { 
  const currentWeather = useSelector(state => state.weather.value)
  const forecastList = useSelector(state => state.weather.forecast)
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
      {filteredData && filteredData.length > 0 && filteredData.map((element, index) =>
        <div key={index} className='card'>
                <div className='descriptionWrapper'>
                   <div className='date'>{daysConverter(unixTimestampConvertor(element.dt))}</div>
                    <img src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} className='icon'></img>
                    <div className='description'>{element.weather[0].description}</div>
                </div>
                {/* <div className='temperatureWrapper'>
                      <span>{data[0].temperature.toFixed(0)}</span>
                      <span className='symbol'>o</span>
                      <span>{ data[0].unit.units === 'metric' ? 'C' : 'F'}</span>
                </div> */}
        </div>
      )}
    </div>
  )
}

export default SingleWeather
