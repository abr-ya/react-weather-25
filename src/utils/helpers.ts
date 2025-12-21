import { format } from "date-fns";

export const formatTime = (timestamp: number, opt = "h:mm a") => format(new Date(timestamp * 1000), opt);

export const formatTemp = (temp: number) => `${Math.round(temp)}°`;

export const getDayDuration = (sunrise: number, sunset: number) => {
  const durationInSeconds = sunset - sunrise;
  const isoDate = new Date(durationInSeconds * 1000).toISOString();

  return isoDate.substring(11, 19);
};
