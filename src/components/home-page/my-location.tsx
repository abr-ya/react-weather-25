import { RefreshCw } from "lucide-react";
import { Button } from "../index";

interface MyLocationProps {
  handleRefresh: () => void;
  isLoading: boolean;
}

export const MyLocation = ({ handleRefresh, isLoading }: MyLocationProps) => (
  <div className="flex items-center justify-between">
    <h1 className="text-xl font-bold tracking-tight">My Location</h1>
    <Button variant="outline" size="icon" onClick={handleRefresh} disabled={isLoading}>
      <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
    </Button>
  </div>
);
