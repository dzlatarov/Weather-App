const unixTimestampConvertor = (timeStamp) => {
  console.log(`input value is ${timeStamp}`);
  // let time = '2024-03-26 21:00:00'
  // let time = '1711484360'
  // let currentTime = new Date()
  // console.log(currentTime.getDay())
  // let convertedDt = new Date(time + " UTC")
  // console.log(`From UTC to local ${convertedDt.getDay()}`)

  const unixTimestamp = timeStamp;
  const date = new Date(unixTimestamp * 1000).getDay();
  const timeString = date.toLocaleString();
  console.log(date);
  //   console.log(`From unix timestamp to date ${timeString}`);

  return date;
};

export default unixTimestampConvertor;
