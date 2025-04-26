
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

export function useTeamMembers() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('name');

      if (error) throw error;
      setTeamMembers(data || []);
    } catch (error) {
      console.error('Error fetching team members:', error);
      toast({
        title: "Error",
        description: "Failed to load team members",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addTeamMember = async (newMember: Omit<TeamMember, 'id'>) => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .insert([newMember])
        .select()
        .single();

      if (error) throw error;

      setTeamMembers(prev => [...prev, data]);
      toast({
        title: "Success",
        description: "Team member added successfully",
      });
      return data;
    } catch (error) {
      console.error('Error adding team member:', error);
      toast({
        title: "Error",
        description: "Failed to add team member",
        variant: "destructive",
      });
      throw error;
    }
  };

  const updateTeamMember = async (member: TeamMember) => {
    try {
      const { error } = await supabase
        .from('team_members')
        .update({
          name: member.name,
          role: member.role,
          email: member.email,
          phone: member.phone
        })
        .eq('id', member.id);

      if (error) throw error;

      setTeamMembers(prev => 
        prev.map(m => m.id === member.id ? member : m)
      );
      
      return member;
    } catch (error) {
      console.error('Error updating team member:', error);
      throw error;
    }
  };

  const deleteTeamMember = async (id: string) => {
    try {
      const { error } = await supabase
        .from('team_members')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setTeamMembers(prev => prev.filter(member => member.id !== id));
      
      return true;
    } catch (error) {
      console.error('Error deleting team member:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return { teamMembers, loading, addTeamMember, updateTeamMember, deleteTeamMember };
}
