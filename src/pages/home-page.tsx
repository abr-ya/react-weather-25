import { Button } from "@/components";
import { useGeolocation } from "@/hooks";
import { RefreshCw } from "lucide-react";

export const HomePage = () => {
  const { coordinates, getLocation } = useGeolocation();

  const handleRefresh = () => {
    console.log("Refresh button clicked");
    getLocation();
    if (coordinates) {
      console.log(`Current coordinates: lat=${coordinates.lat}, lon=${coordinates.lon}`);
      // Reload weather data based on new coordinates
    }
  };

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
          todo: CurrentWeather + HourlyTemperature
          {/* CurrentWeather */}
          {/* HourlyTemperature */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          todo: WeatherDetails + WeatherForecast
          {/* WeatherDetails */}
          {/* WeatherForecast */}
        </div>
      </div>
    </div>
  );
};
