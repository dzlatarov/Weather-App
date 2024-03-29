const unixTimestampConvertor = (timeStamp) => {
  const unixTimestamp = timeStamp;
  const date = new Date(unixTimestamp * 1000);

  return date.getDay();
};

export const unixTimeStampToDate = (timeStamp) => {
  const unixTimestamp = timeStamp;
  const date = new Date(unixTimestamp * 1000);

  return date;
};

export default unixTimestampConvertor;
