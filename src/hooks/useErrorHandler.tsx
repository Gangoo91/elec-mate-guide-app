
import { useToast } from "@/hooks/use-toast";

export function useErrorHandler() {
  const { toast } = useToast();
  
  const handleError = (error: unknown, fallbackMessage: string = "An error occurred") => {
    console.error("Error caught by useErrorHandler:", error);
    
    let errorMessage = fallbackMessage;
    
    // Extract the most useful error message
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object' && 'message' in error) {
      errorMessage = String((error as any).message);
    }
    
    // Format special types of errors
    if (errorMessage.includes('violates row level security')) {
      errorMessage = 'You do not have permission to perform this action. Please check your login status.';
    } else if (errorMessage.includes('JWT expired')) {
      errorMessage = 'Your session has expired. Please log in again.';
    } else if (errorMessage.includes('network')) {
      errorMessage = 'Network error. Please check your connection and try again.';
    }
    
    toast({
      title: "Error",
      description: errorMessage,
      variant: "destructive",
    });
    
    return errorMessage;
  };
  
  return { handleError };
}
