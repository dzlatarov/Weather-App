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
