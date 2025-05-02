
import { useQuery, QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

/**
 * A safer wrapper around useQuery that handles potential initialization issues
 * and provides consistent error handling
 */
export function useQueryHelper<TData, TError = Error>(
  queryKey: QueryKey,
  queryFn: () => Promise<TData>,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>
): UseQueryResult<TData, TError> & { isReady: boolean } {
  const { toast } = useToast();

  // Try to use the useQuery hook safely
  try {
    const queryOptions: UseQueryOptions<TData, TError> = {
      queryKey,
      queryFn,
      ...options,
      meta: {
        ...options?.meta,
        errorHandler: (error: unknown) => {
          // Show toast for user-friendly errors
          toast({
            title: "Something went wrong",
            description: error instanceof Error ? error.message : "An unknown error occurred",
            variant: "destructive",
          });
          
          // Call the original error handler if provided
          if (options?.meta?.errorHandler && typeof options.meta.errorHandler === 'function') {
            // Fixed this line - ensure errorHandler is callable before invoking
            (options.meta.errorHandler as (error: unknown) => void)(error);
          }
        }
      }
    };

    const result = useQuery<TData, TError>(queryOptions);
    
    return { ...result, isReady: true };
  } catch (error) {
    // If useQuery fails (like no QueryClient), return a safe fallback
    console.warn(`Query ${queryKey.join('.')} failed to initialize:`, error);
    
    return {
      data: undefined,
      error: undefined,
      isError: false,
      isLoading: false,
      isSuccess: false, 
      isPending: false,
      isReady: false,
      status: 'error',
      fetchStatus: 'idle',
      isFetching: false,
      failureReason: null,
      failureCount: 0,
      errorUpdateCount: 0,
      refetch: async () => ({ data: undefined, error: undefined, isError: true, isSuccess: false }),
      remove: () => {},
      // Add any other required properties from UseQueryResult
    } as unknown as UseQueryResult<TData, TError> & { isReady: boolean };
  }
}
