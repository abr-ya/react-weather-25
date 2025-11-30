import { AlertTriangle, RefreshCw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle, Button } from "..";

interface LocationErrorAlertProps {
  handleRefresh: () => void;
  isLoading: boolean;
}

export const LocationErrorAlert = ({ handleRefresh, isLoading }: LocationErrorAlertProps) => (
  <Alert variant="destructive">
    <AlertTriangle className="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription className="flex flex-col gap-4">
      <p>Failed to fetch Location data. Please try again.</p>
      <Button variant="outline" onClick={handleRefresh} className="w-fit" disabled={isLoading}>
        <RefreshCw className="mr-2 h-4 w-4" />
        Retry
      </Button>
    </AlertDescription>
  </Alert>
);
