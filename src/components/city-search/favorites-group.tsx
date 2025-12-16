import type { IFavoriteCity } from "@/interfaces/city.interface";

interface IFavoritesGroupProps {
  data: IFavoriteCity[];
}

export const FavoritesGroup = ({ data }: IFavoritesGroupProps) => (
  <div>Favorites: {data.map((item) => item.name).join(", ")}</div>
);
