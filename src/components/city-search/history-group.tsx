import type { HistoryItem } from "@/interfaces/city.interface";

interface HistoryGroupProps {
  data: HistoryItem[];
}

export const HistoryGroup = ({ data }: HistoryGroupProps) => {
  return <div>{data.length} searches</div>;
};
