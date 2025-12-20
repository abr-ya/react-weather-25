import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./use-local-storage";
import type { HistoryItem } from "@/interfaces/city.interface";

export const useSearchHistory = () => {
  const [history, setHistory] = useLocalStorage<HistoryItem[]>("search-history", []);
  const queryClient = useQueryClient();

  const historyQuery = useQuery({
    queryKey: ["search-history"],
    queryFn: () => history,
    initialData: history,
  });

  const addToHistory = useMutation({
    mutationFn: async (search: Omit<HistoryItem, "id" | "searchedAt">) => {
      const newSearch: HistoryItem = {
        ...search,
        id: `${search.lat}-${search.lon}-${Date.now()}`,
        searchedAt: Date.now(),
      };

      // Remove duplicates and keep only last 10 searches
      const filteredHistory = history.filter((item) => !(item.lat === search.lat && item.lon === search.lon));
      const updatedHistory = [newSearch, ...filteredHistory].slice(0, 10);

      setHistory(updatedHistory);

      return updatedHistory;
    },
    onSuccess: (newHistory) => {
      queryClient.setQueryData(["search-history"], newHistory);
    },
  });

  const clearHistory = useMutation({
    mutationFn: async () => {
      setHistory([]);

      return [];
    },
    onSuccess: () => {
      queryClient.setQueryData(["search-history"], []);
    },
  });

  return {
    addToHistory,
    clearHistory,
    historyQuery,
  };
};
