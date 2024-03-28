import utcConverter from "./utcConverter";
import roundTime from "./roundTime";
import { groupForecastByDay } from "./utcConverter";
import daysConverter from "./daysConverter";

const filterForecast = (data) => {
  let currentDate = new Date();
  let date = new Date();
  // console.log(
  //   `today date ${currentDate.toLocaleDateString()} : Time ${currentDate.toLocaleTimeString()}`
  // );

  // let nextDaysProp = date.setDate(date.getDate() + 4);
  let nextDate = new Date(new Date().setDate(new Date().getDate() + 4));
  // console.log(
  //   `Extended date ${nextDate.toLocaleDateString()} : Time ${nextDate.toLocaleTimeString()}`
  // );

  let filteredList = [];
  if (data !== undefined) {
    for (const element of data.forecast) {
      let convertedToLocalDate = utcConverter(element.dt_txt);
      // console.log(`Converted Date ${convertedToLocalDate.toLocaleDateString()}}`);
      // console.log(`Converted Time ${convertedToLocalDate.toLocaleTimeString()}}`);

      console.log(`Converted time is ${convertedToLocalDate.getTime()}`);
      console.log(`current time is ${currentDate.getTime()}`);
      console.log(`next time is ${nextDate.getTime()}`);
      if (
        currentDate < convertedToLocalDate &&
        convertedToLocalDate <= nextDate
      ) {
        let roundedTime = roundTime(currentDate);
        console.log(
          `Current time rounded is ${roundedTime.toLocaleTimeString()}`
        );
        console.log(true);
        if (filteredList.filter((e) => e.dt === element.dt).length === 0) {
          filteredList.push(element);
        }
        // if (
        //   roundedTime.getHours() === convertedToLocalDate.getHours() ||
        //   roundedTime.setHours(3) === convertedToLocalDate.getHours()
        // ) {

        // }
      }
      // console.log(element);
    }
  }

  // let filteredList = data.forecast.filter((el) => {
  //   if (el.dt_txt !== undefined) {
  //     currentDate >= utcConverter(el.dt_txt) &&
  //       utcConverter(el.dt_txt) <= nextDate;
  //   }
  // });
  // console.log(`Filtered list ${filteredList}`);
  console.log(`Length of array is ${filteredList.length}`);
  return filteredList;
};

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
      dayName: daysConverter(utcConverter(forecastList[0].dt_txt).getDay()),
      forecastByHours: forecastList,
      description: forecastList[0].weather[0].description,
      temp: forecastList[0].main.temp,
    });
  }

  return result;
};

[
  {
    date: "3/29/2024",
    minTemp: 8.73,
    maxTemp: 20.9,
  },
  {
    date: "3/30/2024",
    minTemp: 10.83,
    maxTemp: 22.68,
  },
  {
    date: "3/31/2024",
    minTemp: 11.2,
    maxTemp: 23.38,
  },
  {
    date: "4/1/2024",
    minTemp: 12.18,
    maxTemp: 26.11,
  },
  {
    date: "4/2/2024",
    minTemp: 12.41,
    maxTemp: 19.28,
  },
];

export default filterForecast;
