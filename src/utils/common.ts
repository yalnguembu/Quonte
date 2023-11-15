const oneWeekTime = 604800000;
const oneDayTime = 86400000;
const oneHourTime = 3600000;
const oneMinutesTime = 60000;
const oneSecondsTime = 1000;

export const date = () => {
  const getPassedTime = (isoDate: string): string => {
    const time = new Date(isoDate).getTime() - Date.now();
    let passedTime: number = time / oneWeekTime;

    if (passedTime > 4) return new Date(isoDate).toDateString();
    if (passedTime >= 1)
      return `${Math.round(passedTime)} week${
        Math.round(time * passedTime) > 1 ? "s ago" : ""
      }`;
    passedTime = time / oneDayTime;
    if (passedTime >= 1)
      return `${Math.round(passedTime)} day${
        Math.round(time * passedTime) > 1 ? "s ago" : ""
      }`;
    passedTime = time / oneHourTime;
    if (passedTime >= 1)
      return `${Math.round(passedTime)} hour${
        Math.round(time * passedTime) > 1 ? "s ago" : ""
      }`;
    passedTime = time / oneMinutesTime;
    if (passedTime >= 1)
      return `${Math.round(passedTime)} minute${
        Math.round(time * passedTime) > 1 ? "s ago" : ""
      }`;
    passedTime = time / oneSecondsTime;
    if (passedTime > 1)
      return `${Math.round(passedTime)} second${
        Math.round(time * passedTime) > 1 ? "s ago" : ""
      }`;
    return `just now`;
  };

  return {
    getPassedTime,
  };
};

export const string = () => {
  const replaceSpaceBySlashToLowercase = (text: string) =>
    text.toLowerCase().replace(" ", "-");
  return { replaceSpaceBySlashToLowercase };
};
