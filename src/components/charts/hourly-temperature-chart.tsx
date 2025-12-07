import type { ITemperatureChartItem } from "@/interfaces/chart.interface";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartTooltip } from "./chart-tooltip";
import { COLORS } from "./constants";

interface ITemperatureChartProps {
  data: ITemperatureChartItem[];
  titles?: {
    temp?: string;
    feels_like?: string;
  };
}

export const HourlyTemperatureChart = ({ data, titles }: ITemperatureChartProps) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data}>
      <XAxis dataKey="time" stroke={COLORS.LABELS} fontSize={12} tickLine={false} axisLine={false} />
      <YAxis
        stroke={COLORS.LABELS}
        fontSize={12}
        tickLine={false}
        axisLine={false}
        tickFormatter={(value) => `${value}°`}
      />
      <Tooltip
        content={({ active, payload }) => {
          if (active && payload && payload.length) {
            const tooltipItems = [
              { title: titles?.temp ?? "Title Temp", value: `${payload[0].value}°` },
              { title: titles?.feels_like ?? "Title Feels", value: `${payload[1].value}°` },
            ];

            return <ChartTooltip items={tooltipItems} />;
          }
          return null;
        }}
      />
      <Line type="monotone" dataKey="temp" stroke={COLORS.PRIMARY} strokeWidth={2} dot={false} />
      <Line
        type="monotone"
        dataKey="feels_like"
        stroke={COLORS.SECONDARY}
        strokeWidth={2}
        dot={false}
        strokeDasharray="5 5"
      />
    </LineChart>
  </ResponsiveContainer>
);
