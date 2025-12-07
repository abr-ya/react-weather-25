import type { WeatherData } from "@/api/interfaces";
import { DataCard } from "..";
import { Compass, Gauge, Sunrise, Sunset } from "lucide-react";
import { formatTime } from "@/utils/helpers";

interface WeatherDetailsProps {
  data: WeatherData;
}

export const WeatherDetails = ({ data: { main, sys, wind } }: WeatherDetailsProps) => {
  const details = [
    {
      title: "Sunrise",
      value: formatTime(sys.sunrise, "HH:mm:ss"),
      icon: Sunrise,
      color: "text-orange-500",
    },
    {
      title: "Sunset",
      value: formatTime(sys.sunset, "HH:mm:ss"),
      icon: Sunset,
      color: "text-blue-500",
    },
    // todo: add wind direction titles
    {
      title: "Wind Direction",
      value: `${wind.deg}°`,
      icon: Compass,
      color: "text-green-500",
    },
    {
      title: "Pressure",
      value: `${main.pressure} hPa`,
      icon: Gauge,
      color: "text-purple-500",
    },
  ];

  return (
    <DataCard title="Weather Details">
      <div className="grid gap-6 sm:grid-cols-2">
        {details.map((detail) => (
          <div key={detail.title} className="flex items-center gap-3 rounded-lg border p-4">
            <detail.icon className={`h-5 w-5 ${detail.color}`} />
            <div>
              <p className="text-sm font-medium leading-none">{detail.title}</p>
              <p className="text-sm text-muted-foreground">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>
    </DataCard>
  );
};
