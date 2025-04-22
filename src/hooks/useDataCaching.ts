
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useErrorHandler } from "./useErrorHandler";

// Define allowed table names to make TypeScript happy
type TableName = "mental_health_resources" | "mentorships" | "messages" | "profiles" | "subscribers";

export function useDataCaching<T>(key: string, tableName: TableName, options = {}) {
  const queryClient = useQueryClient();
  const { handleError } = useErrorHandler();

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

  const query = useQuery({
    queryKey: [key],
    queryFn: fetchData,
    ...options
  });

  // Add a mutation for updating data with automatic cache invalidation
  const updateMutation = useMutation({
    mutationFn: async (newData: Partial<T> & { id: string }) => {
      const { data, error } = await supabase
        .from(tableName)
        .update(newData as any) // Using any here because Supabase types are strict but we're ensuring correct data
        .eq('id', newData.id)
        .select();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
    onError: (error) => {
      handleError(error, `Failed to update ${tableName}`);
    }
  });

  return {
    ...query,
    updateMutation
  };
}
