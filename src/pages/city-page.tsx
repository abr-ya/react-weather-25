import { LoadingSkeleton } from "@/components/loading-skeleton";
import { useForecastQuery, useWeatherQuery } from "@/hooks";
import { useParams, useSearchParams } from "react-router-dom";

export const CityPage = () => {
  const [searchParams] = useSearchParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");
  const { city } = useParams();

  const coordinates = { lat, lon };

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);

  if (weatherQuery.error || forecastQuery.error) {
    return <div>Error loading data.</div>; // todo: replace with error component
  }

  const isDataLoading = weatherQuery.isFetching || forecastQuery.isFetching;
  if (isDataLoading) return <LoadingSkeleton />;

  console.log(weatherQuery.data, forecastQuery.data);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{city}</h1>
        <div className="flex gap-2">todo: add buttons for favorite</div>
      </div>

      <div className="grid gap-6">
        todo: CurrentWeather HourlyTemperature
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div>todo: WeatherDetails</div>
          <div>todo: WeatherForecast</div>
        </div>
      </div>
    </div>
  );
};
