import {
  CurrentWeather,
  DataEmpty,
  HourlyTemperature,
  LikeButton,
  WeatherDetails,
  WeatherForecast,
} from "@/components";
import { LoadingSkeleton } from "@/components/loading-skeleton";
import { useForecastQuery, useWeatherQuery } from "@/hooks";
import { getLatLonCountry } from "@/utils/normalize";
import { useParams, useSearchParams } from "react-router-dom";

export const CityPage = () => {
  const [searchParams] = useSearchParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");
  const { city } = useParams();

  const coordinates = { lat, lon };

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);

  if (!city) return <div>Error: City not specified.</div>; // todo: replace with error component

  if (weatherQuery.error || forecastQuery.error) return <div>Error loading data.</div>; // todo: replace with error component

  const isDataLoading = weatherQuery.isFetching || forecastQuery.isFetching;

  if (isDataLoading) return <LoadingSkeleton />;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{city}</h1>
        {weatherQuery.data ? (
          <div className="flex gap-2">
            <LikeButton data={getLatLonCountry(weatherQuery.data)} name={city} />
          </div>
        ) : null}
      </div>

      <div className="grid gap-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {weatherQuery.data ? <CurrentWeather data={weatherQuery.data} /> : <DataEmpty />}
          <HourlyTemperature />
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {weatherQuery.data ? <WeatherDetails data={weatherQuery.data} /> : <DataEmpty />}
          <WeatherForecast />
        </div>
      </div>
    </div>
  );
};
