import {
  Button,
  CurrentWeather,
  HourlyTemperature,
  LoadingSkeleton,
  LocationErrorAlert,
  WeatherDetails,
  WeatherForecast,
} from "@/components";
import { useForecastQuery, useGeolocation, useReverseGeocodeQuery, useWeatherQuery } from "@/hooks";
import { RefreshCw } from "lucide-react";

export const HomePage = () => {
  const { coordinates, getLocation, isLoading, locationError } = useGeolocation();

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  const locationQuery = useReverseGeocodeQuery(coordinates);

  const handleRefresh = () => {
    console.log("Refresh button clicked");
    getLocation();
    if (coordinates) {
      console.log(`Current coordinates: lat=${coordinates.lat}, lon=${coordinates.lon}`);
      // Reload weather data based on new coordinates
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  };

  if (isLoading || !weatherQuery.data || !forecastQuery.data) return <LoadingSkeleton />;

  if (locationError || !coordinates) return <LocationErrorAlert handleRefresh={handleRefresh} />;

  console.log(weatherQuery.data);

  return (
    <div className="space-y-4">
      todo: FavoriteCities
      {/* FavoriteCities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button variant="outline" size="icon" onClick={handleRefresh} disabled={false}>
          <RefreshCw className={"h-4 w-4 "} />
        </Button>
      </div>
      <div className="grid gap-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <CurrentWeather />
          <HourlyTemperature />
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          <WeatherDetails />
          <WeatherForecast />
        </div>
      </div>
    </div>
  );
};
