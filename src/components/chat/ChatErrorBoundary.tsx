
import { AlertTriangle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useErrorHandler } from "@/hooks/useErrorHandler";

interface ChatErrorBoundaryProps {
  children: React.ReactNode;
}

export function ChatErrorBoundary({ children }: ChatErrorBoundaryProps) {
  const { toast } = useToast();
  const { handleError } = useErrorHandler();

  const onError = (error: Error) => {
    toast({
      title: "Chat Error",
      description: "There was an error with the chat. Please try again.",
      variant: "destructive",
    });
    handleError(error, "Chat error occurred");
  };

  const fallback = (
    <Alert variant="destructive" className="m-4">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Chat Error</AlertTitle>
      <AlertDescription>
        There was a problem loading the chat. Please try refreshing the page or try again later.
      </AlertDescription>
      <Button
        onClick={() => window.location.reload()}
        variant="outline"
        className="mt-4"
      >
        Refresh Page
      </Button>
    </Alert>
  );

  return (
    <ErrorBoundary fallback={fallback} onError={onError}>
      {children}
    </ErrorBoundary>
  );
}
