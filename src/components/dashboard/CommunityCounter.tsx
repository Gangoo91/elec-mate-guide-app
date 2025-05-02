
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const CommunityCounter = () => {
  const { toast } = useToast();
  
  // Wrap the hook in a try/catch to handle situations where QueryClient might not be initialized
  const queryResult = React.useMemo(() => {
    try {
      return useQuery({
        queryKey: ['communitySize'],
        queryFn: async () => {
          const { count, error } = await supabase
            .from('subscribers')
            .select('*', { count: 'exact', head: true });
          
          if (error) {
            console.error('Error fetching community size:', error);
            toast({
              title: "Failed to load community data",
              description: "Please try again later",
              variant: "destructive",
            });
            return 0;
          }
          
          return count || 0;
        },
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
        retry: 2,
        onError: (error) => {
          console.error("Error fetching community size:", error);
        }
      });
    } catch (error) {
      console.warn("Error using Query hook:", error);
      return { isLoading: false, error: true, data: 0 };
    }
  }, [toast]);
  
  const { data: userCount = 0, isLoading, error } = queryResult || { data: 0, isLoading: false, error: false };

  if (isLoading) {
    return <Skeleton className="h-4 w-16 bg-[#FFC900]/10" />;
  }

  if (error) {
    return <span className="text-[#FFC900]/50">Unable to load</span>;
  }

  return (
    <span className="text-[#FFC900]/70">
      {`${userCount.toLocaleString()} member${userCount !== 1 ? 's' : ''}`}
    </span>
  );
};

export default CommunityCounter;
