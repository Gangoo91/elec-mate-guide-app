
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useErrorHandler } from "./useErrorHandler";

// Define allowed table names to make TypeScript happy
type TableName = "mental_health_resources" | "mentorships" | "messages" | "profiles" | "subscribers";

export function useDataCaching<T>(key: string, tableName: TableName, options = {}) {
  const { handleError } = useErrorHandler();
  
  // Safely get the queryClient
  let queryClient;
  try {
    queryClient = useQueryClient();
  } catch (error) {
    console.warn("QueryClient not available in useDataCaching:", error);
  }

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select('*');
      
      if (error) throw new Error(error.message);
      return data as T[];
    } catch (error) {
      handleError(error, `Failed to fetch ${tableName}`);
      throw error;
    }
  };

  // Safely use the useQuery hook
  let query;
  try {
    query = useQuery({
      queryKey: [key],
      queryFn: fetchData,
      ...options
    });
  } catch (error) {
    console.warn(`Error setting up query for ${key}:`, error);
    query = {
      data: [],
      isLoading: false,
      error: new Error("Failed to initialize query"),
      refetch: () => Promise.resolve({ data: [] })
    };
  }

  // Add a mutation for updating data with automatic cache invalidation
  let updateMutation;
  try {
    updateMutation = useMutation({
      mutationFn: async (newData: Partial<T> & { id: string }) => {
        const { data, error } = await supabase
          .from(tableName)
          .update(newData as any)
          .eq('id', newData.id)
          .select();
        
        if (error) throw error;
        return data;
      },
      onSuccess: () => {
        queryClient?.invalidateQueries({ queryKey: [key] });
      },
      onError: (error) => {
        handleError(error, `Failed to update ${tableName}`);
      }
    });
  } catch (error) {
    console.warn(`Error setting up mutation for ${key}:`, error);
    updateMutation = {
      mutate: () => console.warn("Mutation not available"),
      isPending: false
    };
  }

  return {
    ...query,
    updateMutation
  };
}
