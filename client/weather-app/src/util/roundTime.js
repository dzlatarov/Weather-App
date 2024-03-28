const roundTime = (dateTime) => {
  dateTime.setHours(
    dateTime.getHours() + Math.round(dateTime.getMinutes() / 60)
  );
  dateTime.setMinutes(0, 0, 0);

  return dateTime;
};

export default roundTime;
