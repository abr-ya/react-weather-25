import { Card, CardContent, CardHeader, CardTitle } from "..";

interface DataCardProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
}

export const DataCard = ({ className = "flex-1", title, children }: DataCardProps) => (
  <Card className={className}>
    {title && (
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    )}
    <CardContent>{children}</CardContent>
  </Card>
);
