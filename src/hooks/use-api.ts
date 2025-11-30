import { useQuery } from "@tanstack/react-query";
import { weatherAPI } from "../api/weather-api";
import type { Coordinates } from "../api/interfaces";

export const WEATHER_KEYS = {
  weather: (coords: Coordinates) => ["weather", coords] as const,
} as const;

export const useWeatherQuery = (coordinates: Coordinates | null) =>
  useQuery({
    queryKey: WEATHER_KEYS.weather(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () => (coordinates ? weatherAPI.getCurrentWeather(coordinates) : null),
    enabled: !!coordinates,
  });
