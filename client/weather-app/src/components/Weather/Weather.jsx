import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import unixTimestampConvertor from '../../util/unixTimeStampConvertor'
import daysConverter from '../../util/daysConverter'
import './Weather.css'
import { useNavigate } from 'react-router-dom';
import { addWeatherDetails } from '../../state/weather/weatherSlice'
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
    <div data-testid='cypress-title' className='currentDate' onClick={() => addDetails()}>
          {currentWeather && currentWeather.weather && (
            <div className='cardWrapper'>
                <div className='descriptionWrapper'>
                   <div data-testid='date' className='date'>{daysConverter(unixTimestampConvertor(currentWeather.dt))}</div>
                    <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} className='icon'></img>
                    <div className='description'>{currentWeather.weather[0].description}</div>
                </div>
                <div className='temperatureWrapper'>
                      <span>{currentWeather.main.temp.toFixed(0)}</span>
                      <span className='symbol'>o</span>
                      {unit !== undefined && (<span>{ unit === 'metric' ? 'C' : 'F'}</span>)}
                </div>
            </div>
          )}
    </div>
  )
}

export default Weather
