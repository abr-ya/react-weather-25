import {
  CurrentWeather,
  DataEmpty,
  Forecast,
  HourlyTemperature,
  LoadingSkeleton,
  LocationErrorAlert,
  MyLocation,
  WeatherDetails,
  WithFavouriteLayout,
} from "@/components";
import { useForecastQuery, useGeolocation, useReverseGeocodeQuery, useWeatherQuery } from "@/hooks";

const HomePageMainPart = () => {
  const { coordinates, getLocation, isLoading: locationLoading, locationError } = useGeolocation();

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

  const isDataLoading = weatherQuery.isFetching || forecastQuery.isFetching || locationQuery.isFetching;

  if (locationLoading || isDataLoading) return <LoadingSkeleton />;

  if (locationError || !coordinates)
    return <LocationErrorAlert handleRefresh={handleRefresh} isLoading={isDataLoading} />;

  return (
    <>
      <MyLocation handleRefresh={handleRefresh} isLoading={isDataLoading} />
      <div className="grid gap-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {weatherQuery.data ? (
            <CurrentWeather data={weatherQuery.data} locationName={locationQuery.data?.[0]} />
          ) : (
            <DataEmpty />
          )}
          <HourlyTemperature />
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {weatherQuery.data ? <WeatherDetails data={weatherQuery.data} /> : <DataEmpty />}
          {forecastQuery.data ? <Forecast data={forecastQuery.data} /> : <DataEmpty />}
        </div>
      </div>
    </>
  );
};

export const HomePage = () => (
  <WithFavouriteLayout>
    <HomePageMainPart />
  </WithFavouriteLayout>
);
