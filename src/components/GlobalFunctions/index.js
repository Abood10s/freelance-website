export const getDate = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  const day = weekday[d.getDay()];
  return day;
};
export const CalculateHourlyRate = (hourlyRate) => {
  if (hourlyRate > 0) {
    const percentage = Math.round(0.2 * hourlyRate);
    const total = hourlyRate - percentage;
    return { percentage, total };
  }
  return { percentage: 0, total: 0 };
};
