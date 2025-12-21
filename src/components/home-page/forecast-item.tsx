import type { IForecastListItem } from "@/api/interfaces";
import { formatTemp } from "@/utils/helpers";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";

export const ForecastItem = ({ data }: { data: IForecastListItem }) => (
  <div key={data.dt} className="grid grid-cols-3 items-center gap-4 rounded-lg border p-4">
    <div>
      <p className="font-medium">{data.dt_txt}</p>
      <p className="text-sm text-muted-foreground capitalize">{data.weather[0].description}</p>
    </div>

    <div className="flex justify-center gap-4">
      <span className="flex items-center text-blue-500">
        <ArrowDown className="mr-1 h-4 w-4" />
        {formatTemp(data.main.temp_min)}
      </span>
      <span className="flex items-center text-red-500">
        <ArrowUp className="mr-1 h-4 w-4" />
        {formatTemp(data.main.temp_max)}
      </span>
    </div>

    <div className="flex justify-end gap-4">
      <span className="flex items-center gap-1">
        <Droplets className="h-4 w-4 text-blue-500" />
        <span className="text-sm">{data.main.humidity}%</span>
      </span>
      <span className="flex items-center gap-1">
        <Wind className="h-4 w-4 text-blue-500" />
        <span className="text-sm">
          {data.wind.speed}m/s, {data.wind.deg}°
        </span>
      </span>
    </div>
  </div>
);
