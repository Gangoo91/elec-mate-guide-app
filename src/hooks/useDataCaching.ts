
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useErrorHandler } from "./useErrorHandler";

export function useDataCaching<T>(key: string, tableName: string, options = {}) {
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
    mutationFn: async (newData: Partial<T> & { id: string | number }) => {
      const { data, error } = await supabase
        .from(tableName)
        .update(newData)
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
