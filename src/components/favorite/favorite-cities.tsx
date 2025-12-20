import { useFavorites } from "@/hooks";
import { FavoriteCityItem } from "./favorite-city-item";
import { ScrollArea, ScrollBar } from "..";

export const FavoriteCities = () => {
  const { favorites, removeFavorite } = useFavorites();

  if (!favorites.length) return null;

  return (
    <>
      <h1 className="text-xl font-bold tracking-tight">Favorites</h1>
      <ScrollArea className="w-full pb-4">
        <div className="flex gap-4">
          {favorites.map((city) => (
            <FavoriteCityItem key={city.id} city={city} onRemove={() => removeFavorite.mutate(city.id)} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="mt-2" />
      </ScrollArea>
    </>
  );
};
