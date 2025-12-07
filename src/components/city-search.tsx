import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { useLocationSearch } from "@/hooks/use-api";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

export const CitySearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  // const navigate = useNavigate();

  const { data: locations, isLoading } = useLocationSearch(query);

  const handleSelect = (cityData: string) => {
    const [lat, lon, name] = cityData.split("|");

    console.log(lat, lon, name);

    // setOpen(false);
    // navigate(`/city/${name}?lat=${lat}&lon=${lon}`);
  };

  const favorites = []; // Load favorite cities from state or context
  const history = []; // Load search history from state or context

  return (
    <>
      <Button
        variant="outline"
        className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search cities...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search cities..." value={query} onValueChange={setQuery} />
          <CommandList>
            {query.length > 2 && !isLoading && <CommandEmpty>No cities found.</CommandEmpty>}

            {/* Favorites Section */}
            {favorites.length}

            {/* Search History Section */}
            {history.length}

            {/* Search Results */}
            <CommandSeparator />
            {locations && locations.length > 0 && (
              <CommandGroup heading="Suggestions">
                {isLoading && (
                  <div className="flex items-center justify-center p-4">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                )}
                {locations?.map((location) => (
                  <CommandItem
                    key={`${location.lat}-${location.lon}`}
                    value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                    onSelect={handleSelect}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    <span>{location.name}</span>
                    {location.state && <span className="text-sm text-muted-foreground">, {location.state}</span>}
                    <span className="text-sm text-muted-foreground">, {location.country}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};
