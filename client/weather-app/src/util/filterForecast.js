import { groupForecastByDay } from "./groupForecastByDay";
import daysConverter from "./daysConverter";
import { unixTimeStampToDate } from "./unixTimeStampConvertor";

export const filter = (data) => {
  const forecastByDate = groupForecastByDay(data);

  const result = [];
  for (const currentDate in forecastByDate) {
    const forecastList = forecastByDate[currentDate];
    const minTemp = Math.round(
      Math.min(...forecastList.map((item) => item.main.temp))
    );
    const maxTemp = Math.round(
      Math.max(...forecastList.map((item) => item.main.temp))
    );

    result.push({
      date: currentDate,
      minTemp,
      maxTemp,
      icon: forecastList[0].weather[0].icon,
      dayName: daysConverter(unixTimeStampToDate(forecastList[0].dt).getDay()),
      forecastByHours: forecastList,
      description: forecastList[0].weather[0].description,
      temp: forecastList[0].main.temp.toFixed(0),
    });
  }

  return result;
};
