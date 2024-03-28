const utcConverter = (utcDate) => {
  return new Date(Date.parse(`${utcDate} UTC`));
};

export default utcConverter;
