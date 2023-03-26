export const dayCountdown = (date: string) => {
  const currentDate = new Date().getTime();
  const toTime = Date.parse(date).toLocaleString().replaceAll(',', '');
  const dateInt = parseInt(toTime);
  const timeRemainingMilliseconds = dateInt - currentDate;

  const oneDay = 1000 * 60 * 60 * 24;

  const timeRemainingDays = Math.round(timeRemainingMilliseconds / oneDay);

  return timeRemainingDays;
};

export const setToday = (dateInput: string) => {
  if (dateInput === '') {
    return new Date().toISOString();
  } else {
    return dateInput;
  }
};
