import { useSelector } from "react-redux";

const filterForecastForSingleDay = (forecastList, currentWeather) => {
  console.log(`CurrentWeather dt is ${currentWeather.dt}`);
  return forecastList.filter((el) => el.dt === currentWeather.dt);
};

export default filterForecastForSingleDay;
