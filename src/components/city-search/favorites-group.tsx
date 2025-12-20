import type { IFavoriteCity } from "@/interfaces/city.interface";
import { CommandGroup, CommandItem } from "..";
import { Star } from "lucide-react";

interface IFavoritesGroupProps {
  data: IFavoriteCity[];
  selectHandler: (value: string) => void;
}

export const FavoritesGroup = ({ data, selectHandler }: IFavoritesGroupProps) => (
  <CommandGroup heading="Favorites">
    {data.map((city) => (
      <CommandItem
        key={city.id}
        value={`${city.lat}|${city.lon}|${city.name}|${city.country}`}
        onSelect={selectHandler}
      >
        <Star className="mr-2 h-4 w-4 text-yellow-500" />
        <span>{city.name}</span>
        {city.state && <span className="text-sm text-muted-foreground">, {city.state}</span>}
        <span className="text-sm text-muted-foreground">, {city.country}</span>
      </CommandItem>
    ))}
  </CommandGroup>
);
