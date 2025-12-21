import type { IForecastData } from "@/api/interfaces";
import { DataCard } from "..";
import { ForecastItem } from "./forecast-item";

interface ForecastProps {
  data: IForecastData;
}

export const Forecast = ({ data }: ForecastProps) => {
  return (
    <DataCard title="Weather Forecast">
      <div className="grid gap-4">
        {/* Weather forecast items will go here */}
        <ForecastItem data={data.list[0]} />
        <ForecastItem data={data.list[1]} />
        <ForecastItem data={data.list[2]} />
        ...
        <ForecastItem data={data.list[12]} />
        ...
        <ForecastItem data={data.list[24]} />
      </div>
    </DataCard>
  );
};
