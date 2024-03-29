import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import  { filter } from '../../util/filterForecast'
import { addWeatherDetails } from '../../state/weather/weatherSlice'
import './Forecast.css'

const Forecast = ({ unit }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { forecast } = useSelector(state => state.weather);
  const forecastList = filter(forecast).slice(1)
  useEffect(() => {

    console.log(`ForeCast from redux ${forecast}`)
  }, [forecast, unit])

  const showInDifferentPage = (element) => {
    dispatch(addWeatherDetails(element))
    navigate('/singleWeather')
  }

  return (
    <section className='container'>
      <div className='row week-forecast'>
        {forecastList && forecastList.length > 0 && forecastList.filter((item, index) => index < 4).map((element, index) =>
          <div key={index} className='col' onClick={() => showInDifferentPage(element)}>
            <h3>{element.dayName}</h3>
          <br /><img
            src={`https://openweathermap.org/img/wn/${element.icon}.png`}
          /><br />
            <p className='weather'>{element.description}</p>
            <span>{element.temp}°{unit && unit === 'metric' ? 'C' : 'F'}</span>
        </div>
        )}
      </div>
    </section>
  )
}

export default Forecast