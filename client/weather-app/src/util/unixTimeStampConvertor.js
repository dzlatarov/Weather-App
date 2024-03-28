const unixTimestampConvertor = (timeStamp) => {
  console.log(`input value is ${timeStamp}`);

  const unixTimestamp = timeStamp;
  const date = new Date(unixTimestamp * 1000).getDay();

  return date;
};

export default unixTimestampConvertor;
