import type { IFavoriteCity } from "@/interfaces/city.interface";

interface IFavoriteCityItemProps {
  city: IFavoriteCity;
  onRemove: () => void;
}

export const FavoriteCityItem = ({ city }: IFavoriteCityItemProps) => {
  console.log("favorite-city-item", city);

  return <div>favorite-city-item</div>;
};
