
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
  resource_id: string | null;
  resource_type: 'video' | 'exam' | 'quiz' | 'audio' | null;
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
      
      // Transform the data to ensure it matches the Milestone type
      const typedMilestones = data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        type: item.type,
        status: item.status,
        target_completion_date: item.target_completion_date,
        completed_at: item.completed_at,
        resource_id: item.resource_id || null,
        resource_type: (item.resource_type as 'video' | 'exam' | 'quiz' | 'audio' | null) || null
      })) as Milestone[];
      
      return typedMilestones;
    }
  });

  const addMilestoneMutation = useMutation({
    mutationFn: async (newMilestone: Omit<Milestone, 'id'> & { user_id: string }) => {
      const { data, error } = await supabase
        .from('apprentice_milestones')
        .insert(newMilestone)
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
