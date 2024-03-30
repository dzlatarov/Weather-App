import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import  { filter } from '../../util/filterForecast'
import { addWeatherDetails } from '../../state/weather/weatherSlice'
import './Forecast.css'
import unitMap from '../../util/unitMap';

const Forecast = ({ unit }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const forecast = useSelector(state => state.weather.forecast);
  const forecastList = filter(forecast).slice(1, 5)

  const showInDifferentPage = (element) => {
    dispatch(addWeatherDetails(element))
    navigate('/weather-details')
  }

  return (
    <section className='container'>
      <div className='row week-forecast'>
        {forecastList && forecastList.length > 0 && forecastList.map((element, index) =>
          <div key={index} className='col' onClick={() => showInDifferentPage(element)}>
            <h3 data-testid='nextDay'>{element.dayName}</h3>
          <br /><img
            src={`https://openweathermap.org/img/wn/${element.icon}.png`}
          /><br />
            <p className='weather'>{element.description}</p>
            <span>{element.temp}°{unitMap[unit]}</span>
        </div>
        )}
      </div>
    </section>
  )
}

export default Forecast