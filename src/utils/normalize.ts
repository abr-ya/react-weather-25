import type { WeatherData } from "@/api/interfaces";

export const getLatLonCountry = (data: WeatherData) => ({
  lat: data.coord.lat,
  lon: data.coord.lon,
  country: data.sys.country,
});
