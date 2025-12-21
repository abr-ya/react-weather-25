import { format } from "date-fns";

export const formatTime = (timestamp: number, opt = "h:mm a") => format(new Date(timestamp * 1000), opt);

export const formatTemp = (temp: number) => `${Math.round(temp)}°`;
