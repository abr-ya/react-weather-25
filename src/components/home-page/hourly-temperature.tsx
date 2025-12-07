import type { ITemperatureChartItem } from "@/interfaces/chart.interface";
import { DataCard } from "../layout/data-card";
import { HourlyTemperatureChart } from "..";

export const HourlyTemperature = () => {
  // todo: replace with real data
  const chartData: ITemperatureChartItem[] = [
    { time: "1 AM", temp: 65, feels_like: 68 },
    { time: "3 AM", temp: 64, feels_like: 65 },
    { time: "5 AM", temp: 33, feels_like: 22 },
    { time: "9 AM", temp: 62, feels_like: 61 },
    { time: "11 AM", temp: 17, feels_like: 28 },
  ];

  return (
    <DataCard title="Today's Temperature">
      <div className="h-[200px] w-full">
        <HourlyTemperatureChart data={chartData} titles={{ temp: "Temperature", feels_like: "Feels Like" }} />
      </div>
    </DataCard>
  );
};
