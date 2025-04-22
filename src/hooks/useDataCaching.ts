
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useErrorHandler } from "./useErrorHandler";
import { useToast } from "./use-toast";

// Define allowed table names to make TypeScript happy
type TableName = "mental_health_resources" | "mentorships" | "messages" | "profiles" | 
                "subscribers" | "course_content" | "interactive_content" | "user_progress";

export function useDataCaching<T>(key: string, tableName: TableName, options = {}) {
  const queryClient = useQueryClient();
  const { handleError } = useErrorHandler();
  const { toast } = useToast();

  // Improved fetch function with error handling and timeout
  const fetchData = async () => {
    try {
      // Set a reasonable timeout for queries
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error(`Query timeout for ${tableName}`)), 8000)
      );
      
      const queryPromise = supabase
        .from(tableName)
        .select('*');
      
      // Race between the query and the timeout
      const { data, error } = await Promise.race([
        queryPromise,
        timeoutPromise.then(() => { throw new Error(`Query timeout for ${tableName}`); })
      ]) as any;
      
      if (error) throw new Error(error.message);
      
      // Cache the result in localStorage for faster initial loads on subsequent visits
      try {
        localStorage.setItem(`cache_${key}`, JSON.stringify({
          timestamp: Date.now(),
          data
        }));
      } catch (e) {
        // Silent fail for storage errors (quota exceeded, etc.)
        console.warn("Failed to cache data locally:", e);
      }
      
      return data as T[];
    } catch (error) {
      handleError(error, `Failed to fetch ${tableName}`);
      throw error;
    }
  };

  // Enhanced query with stale-while-revalidate pattern
  const query = useQuery({
    queryKey: [key],
    queryFn: fetchData,
    staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep unused data for 10 minutes
    ...options,
    initialData: () => {
      // Try to load from cache for initial render
      try {
        const cached = localStorage.getItem(`cache_${key}`);
        if (cached) {
          const { timestamp, data } = JSON.parse(cached);
          // Use cache if less than 5 minutes old
          if (Date.now() - timestamp < 5 * 60 * 1000) {
            return data as T[];
          }
        }
      } catch (e) {
        // Silent fail for parsing errors
        console.warn("Failed to load cached data:", e);
      }
      return undefined;
    }
  });

  // Add a mutation for updating data with automatic cache invalidation
  const updateMutation = useMutation({
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
      queryClient.invalidateQueries({ queryKey: [key] });
      toast({
        title: "Update successful",
        description: `The ${tableName.replace('_', ' ')} was updated successfully`,
      });
    },
    onError: (error) => {
      handleError(error, `Failed to update ${tableName}`);
    }
  });

  // Add mutation for creating new items
  const createMutation = useMutation({
    mutationFn: async (newData: Partial<T>) => {
      const { data, error } = await supabase
        .from(tableName)
        .insert(newData as any)
        .select();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
      toast({
        title: "Creation successful",
        description: `New ${tableName.replace('_', ' ')} was created successfully`,
      });
    },
    onError: (error) => {
      handleError(error, `Failed to create ${tableName}`);
    }
  });

  // Add mutation for deleting items
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
      toast({
        title: "Deletion successful",
        description: `The ${tableName.replace('_', ' ')} was deleted successfully`,
      });
    },
    onError: (error) => {
      handleError(error, `Failed to delete ${tableName}`);
    }
  });

  return {
    ...query,
    updateMutation,
    createMutation,
    deleteMutation
  };
}
