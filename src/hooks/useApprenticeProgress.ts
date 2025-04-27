
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Milestone = {
  id: string;
  title: string;
  description: string | null;
  type: 'qualification' | 'certification' | 'skill' | 'module';
  status: 'not_started' | 'in_progress' | 'completed';
  target_completion_date: string | null;
  completed_at: string | null;
};

type MilestoneUpdate = {
  note: string;
  created_at: string;
};

export function useApprenticeProgress() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: milestones, isLoading } = useQuery({
    queryKey: ['apprentice-milestones'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('apprentice_milestones')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Milestone[];
    }
  });

  const addMilestoneMutation = useMutation({
    mutationFn: async (newMilestone: Omit<Milestone, 'id'>) => {
      const { data, error } = await supabase
        .from('apprentice_milestones')
        .insert([newMilestone])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apprentice-milestones'] });
      toast({
        title: "Success",
        description: "Milestone added successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add milestone",
        variant: "destructive",
      });
    }
  });

  const updateMilestoneMutation = useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Milestone> & { id: string }) => {
      const { data, error } = await supabase
        .from('apprentice_milestones')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apprentice-milestones'] });
      toast({
        title: "Success",
        description: "Milestone updated successfully",
      });
    }
  });

  return {
    milestones,
    isLoading,
    addMilestone: addMilestoneMutation.mutate,
    updateMilestone: updateMilestoneMutation.mutate,
  };
}
