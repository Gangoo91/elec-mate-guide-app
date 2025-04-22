
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
