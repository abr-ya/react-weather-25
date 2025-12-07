import type { ITooltipItem } from "@/interfaces/chart.interface";

interface ChartTooltipProps {
  items: ITooltipItem[];
}

export const ChartTooltip = ({ items }: ChartTooltipProps) => (
  <div className="rounded-lg border bg-background p-2 shadow-sm">
    <div className="grid grid-cols-2 gap-2">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col">
          <span className="text-[0.70rem] text-muted-foreground">{item.title}</span>
          <span className="font-bold text-amber-500">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);
