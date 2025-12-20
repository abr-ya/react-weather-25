import type { PropsWithChildren } from "react";
import { FavoriteCities } from "..";

export const WithFavouriteLayout = ({ children }: PropsWithChildren) => (
  <div className="space-y-4">
    <FavoriteCities />
    {children}
  </div>
);
