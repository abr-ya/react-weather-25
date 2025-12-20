import type { IFavoriteCity } from "@/interfaces/city.interface";
import { Button } from "..";
import { Loader2, X } from "lucide-react";
import { useWeatherQuery } from "@/hooks";
import { CityWeather } from "./city-weather";

interface IFavoriteCityItemProps {
  city: IFavoriteCity;
  onRemove: () => void;
}

export const FavoriteCityItem = ({ city: { id, name, lat, lon }, onRemove }: IFavoriteCityItemProps) => {
  const { data: weatherData, isLoading } = useWeatherQuery({ lat, lon });

  const goToCityPage = () => {
    const cityPath = `/city/${encodeURIComponent(name)}?lat=${lat}&lon=${lon}`;
    console.log("Navigating to:", cityPath);
  };

  const removeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("Removing favorite city with id:", id);
    onRemove(); // todo: add dialog?!
    // toast
  };

  return (
    <div
      onClick={() => goToCityPage()}
      className="relative flex min-w-[250px] cursor-pointer items-center gap-3 rounded-lg border bg-card p-4 pr-8 shadow-sm transition-all hover:shadow-md"
      role="button"
      tabIndex={0}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1 h-6 w-6 rounded-full p-0  hover:text-destructive-foreground group-hover:opacity-100"
        onClick={removeHandler}
      >
        <X className="h-4 w-4" />
      </Button>

      {isLoading ? (
        <div className="flex h-8 items-center justify-center">
          <Loader2 className="h-4 w-4 animate-spin" />
        </div>
      ) : (
        <CityWeather data={weatherData} />
      )}
    </div>
  );
};
