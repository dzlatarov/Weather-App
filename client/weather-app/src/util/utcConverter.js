import monthsConverter from "./monthsConverter";

const utcConverter = (utcDate) => {
  return new Date(Date.parse(`${utcDate} UTC`));
};

export const utcConverterDate = (dateTime) => {
  let dt = new Date(Date.parse(`${dateTime} UTC`));
  let month = monthsConverter(dt);
  return `${dt.getDate()} ${month}`;
};

export default utcConverter;
