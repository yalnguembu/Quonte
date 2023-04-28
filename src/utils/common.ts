const oneWeekTime = 604800000;
const oneDayTime = 86400000;
const oneHourTime = 3600000;
const oneMinutesTime = 60000;
const oneSecondsTime = 1000;

export const date = () => {
  const getPassedTime = (isoDate: string): string => {
    const time = Date.now() - new Date(isoDate).getTime();
    let passedTime: number = time / oneWeekTime;

    if (passedTime > 4) return new Date(isoDate).toDateString();
    if (passedTime >= 1)
      return `${Math.round(passedTime)} week${
        time * passedTime > 1 ? "s ago" : ""
      }`;
    passedTime = time / oneDayTime;
    if (passedTime >= 1)
      return `${Math.round(passedTime)} day${
        time * passedTime > 1 ? "s ago" : ""
      }`;
    passedTime = time / oneHourTime;
    if (passedTime >= 1)
      return `${Math.round(passedTime)} hour${
        time * passedTime > 1 ? "s ago" : ""
      }`;
    passedTime = time / oneMinutesTime;
    if (passedTime >= 1)
      return `${Math.round(passedTime)} minutes${
        time * passedTime > 1 ? "s ago" : ""
      }`;
    passedTime = time / oneSecondsTime;
    if (passedTime > 1)
      return `${Math.round(passedTime)} second${
        time * passedTime > 1 ? "s ago" : ""
      }`;
    return `just now`;
  };

  return {
    getPassedTime,
  };
};
