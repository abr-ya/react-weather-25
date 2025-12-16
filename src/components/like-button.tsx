import { Button } from "./";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { useFavorites } from "@/hooks/use-favorites";
import type { ICityItem } from "@/interfaces/city.interface";
import { Star } from "lucide-react";

interface ILikeButtonProps {
  data: Pick<ICityItem, "country" | "lat" | "lon">;
  name: string;
}

export const LikeButton = ({ data, name }: ILikeButtonProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const isLiked = isFavorite(data.lat, data.lon);

  const handleClick = () => {
    if (isLiked) {
      const id = `${data.lat}-${data.lon}`;
      removeFavorite.mutate(id);
    } else {
      addFavorite.mutate({ ...data, name });
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-pressed={isLiked}
          aria-label={isLiked ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
          onClick={handleClick}
        >
          <Star className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
        </Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={4}>{isLiked ? "Remove favorite" : "Add to favorites"}</TooltipContent>
    </Tooltip>
  );
};
