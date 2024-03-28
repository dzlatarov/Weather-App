import utcConverter from "./utcConverter";
import roundTime from "./roundTime";

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

export default filterForecast;
