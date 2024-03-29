import daysConverter from "./daysConverter";
import unixTimestampConvertor from "./unixTimeStampConvertor";

const filterForecastForSingleDay = (forecastList, currentWeather) => {
  let filteredArray = [];
  if (forecastList !== undefined && currentWeather !== undefined) {
    let currentDayOfWeek = "";
    if (currentWeather[0].dt != undefined) {
      currentDayOfWeek = daysConverter(
        unixTimestampConvertor(currentWeather[0].dt)
      );
    } else {
      currentDayOfWeek = currentWeather[0].dayName;
    }

    for (const weather of forecastList) {
      let day = daysConverter(unixTimestampConvertor(weather.dt));
      if (day === currentDayOfWeek) {
        filteredArray.push(weather);
      }
    }
  }

  return filteredArray;
};

export default filterForecastForSingleDay;
