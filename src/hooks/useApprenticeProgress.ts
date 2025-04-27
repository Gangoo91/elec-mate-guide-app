
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
  created_at: string;
};

type MilestoneUpdate = {
  id: string;
  note: string;
  created_at: string;
  milestone_id: string;
};

type NewMilestoneUpdate = {
  note: string;
  milestone_id: string;
};

export function useApprenticeProgress() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: milestones, isLoading: milestonesLoading } = useQuery({
    queryKey: ['apprentice-milestones'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('apprentice_milestones')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Transform the data to ensure it matches the Milestone type
      const typedMilestones = data.map(item => {
        // Check if properties exist in the database response
        const resourceId = 'resource_id' in item ? item.resource_id : null;
        const resourceType = 'resource_type' in item ? 
          item.resource_type as 'video' | 'exam' | 'quiz' | 'audio' | null : null;
          
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          type: item.type,
          status: item.status,
          target_completion_date: item.target_completion_date,
          completed_at: item.completed_at,
          resource_id: resourceId,
          resource_type: resourceType,
          created_at: item.created_at
        };
      }) as Milestone[];
      
      return typedMilestones;
    }
  });

  const { data: milestoneUpdates = [], isLoading: updatesLoading } = useQuery({
    queryKey: ['milestone-updates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('progress_updates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      return data as MilestoneUpdate[];
    }
  });

  const addMilestoneMutation = useMutation({
    mutationFn: async (newMilestone: Omit<Milestone, 'id' | 'created_at'> & { user_id: string }) => {
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

  const addMilestoneUpdateMutation = useMutation({
    mutationFn: async (newUpdate: NewMilestoneUpdate) => {
      const { data, error } = await supabase
        .from('progress_updates')
        .insert(newUpdate)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['milestone-updates'] });
      toast({
        title: "Success",
        description: "Update added successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add update",
        variant: "destructive",
      });
    }
  });

  return {
    milestones,
    milestoneUpdates,
    isLoading: milestonesLoading || updatesLoading,
    addMilestone: addMilestoneMutation.mutate,
    updateMilestone: updateMilestoneMutation.mutate,
    addMilestoneUpdate: addMilestoneUpdateMutation.mutate,
  };
}
