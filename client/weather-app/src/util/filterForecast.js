import utcConverter from "./utcConverter";

const filterForecast = (data) => {
  let currentDate = new Date();
  console.log(
    `today date ${currentDate.toLocaleDateString()} : Time ${currentDate.toLocaleTimeString()}`
  );

  let nextDaysProp = currentDate.setDate(currentDate.getDate() + 4);
  let nextDate = new Date(nextDaysProp);
  console.log(
    `Extended date ${nextDate.toLocaleDateString()} : Time ${nextDate.toLocaleTimeString()}`
  );

  for (const element of data.forecast) {
    utcConverter(element.dt_txt);
    // console.log(element);
  }

  let filteredList = data.forecast.filter((el) => {
    if (el.dt_txt !== undefined) {
      currentDate >= utcConverter(el.dt_txt) &&
        utcConverter(el.dt_txt) <= nextDate;
    }
  });
  console.log(`Filtered list ${filteredList}`);
  return data.forecast;
};

export default filterForecast;
