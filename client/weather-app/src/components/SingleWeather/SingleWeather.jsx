import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import './SingleWeather.css'
import daysConverter from '../../util/daysConverter'
import unixTimestampConvertor from '../../util/unixTimeStampConvertor'

const SingleWeather = () => {
  const data = useSelector(state => state.weather.value)
  return (
    <div>
      {data && data[0] && (
        <div className='cardWrapper'>
                <div className='descriptionWrapper'>
                   <div className='date'>{daysConverter(unixTimestampConvertor(data[0].dt))}</div>
                    <img src={`https://openweathermap.org/img/wn/${data[0].weather.icon}@2x.png`} className='icon'></img>
                    <div className='description'>{data[0].weather.description}</div>
                </div>
                <div className='temperatureWrapper'>
                      <span>{data[0].temperature.toFixed(0)}</span>
                      <span className='symbol'>o</span>
                      <span>{ data[0].unit === 'metric' ? 'C' : 'F'}</span>
                </div>
            </div>
      )}
    </div>
  )
}

export default SingleWeather
