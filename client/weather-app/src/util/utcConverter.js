import monthsConverter from "./monthsConverter";

const utcConverter = (utcDate) => {
  return new Date(Date.parse(`${utcDate} UTC`));
};

export const utcConverterDate = (dateTime) => {
  let dt = new Date(Date.parse(`${dateTime} UTC`));
  let month = monthsConverter(dt);
  return `${dt.getDate()} ${month}`;
};

export const groupForecastByDay = (forecastData) => {
  const groupedForecast = {};
  forecastData.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!groupedForecast[date]) {
      groupedForecast[date] = [];
    }
    groupedForecast[date].push(item);
  });
  return groupedForecast;
};

export default utcConverter;
