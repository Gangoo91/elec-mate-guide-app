
import { useToast } from "@/hooks/use-toast";

export function useErrorHandler() {
  const { toast } = useToast();
  
  const handleError = (error: unknown, fallbackMessage: string = "An error occurred") => {
    console.error("Error caught by useErrorHandler:", error);
    
    const errorMessage = error instanceof Error 
      ? error.message 
      : typeof error === 'string' 
        ? error 
        : fallbackMessage;
        
    toast({
      title: "Error",
      description: errorMessage,
      variant: "destructive",
    });
    
    return errorMessage;
  };
  
  return { handleError };
}
