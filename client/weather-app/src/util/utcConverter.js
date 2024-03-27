const utcConverter = (utcDate) => {
  let time = "2024-03-27 09:00:00";
  let localTime = new Date();
  console.log(`local Date ${localTime.toLocaleDateString()}`);
  console.log(`local Time ${localTime.toLocaleTimeString()}`);

  let currentTime = new Date(utcDate);
  console.log(`Current Date ${currentTime.toLocaleDateString()}`);
  console.log(`Current Time ${currentTime.toLocaleTimeString()}`);
  let convertedDt = new Date(Date.parse(`${utcDate} UTC`));
  console.log(`Converted Date ${convertedDt.toLocaleDateString()}}`);
  console.log(`Converted Time ${convertedDt.toLocaleTimeString()}}`);
  return convertedDt;
};

export default utcConverter;
