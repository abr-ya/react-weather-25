import type { WeatherData } from "@/api/interfaces";

interface ICityWeatherProps {
  data: WeatherData | null | undefined;
}

export const CityWeather = ({ data }: ICityWeatherProps) => {
  if (!data) {
    return <div className="text-sm text-muted-foreground">No weather data available</div>;
  }

  return (
    <div className="flex items-center gap-2">
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt={data.weather[0].description}
        className="h-8 w-8"
      />
      <div>
        <p className="font-medium">{data.name}</p>
        <p className="text-xs text-muted-foreground">{data.sys.country}</p>
      </div>
    </div>
  );
};
