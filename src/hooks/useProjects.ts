
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export type Project = {
  id: string;
  name: string;
  client_name: string;
  status: "planning" | "in-progress" | "on-hold" | "completed" | "cancelled";
  description?: string;
  deadline?: string;
  budget?: number;
  progress?: number;
  created_at: string;
  updated_at: string;
  user_id: string;
};

export function useProjects() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Instead of querying "projects" table which doesn't exist, we'll use "jobs" table
  // and adapt it for our project management needs
  const fetchProjects = async (): Promise<Project[]> => {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    
    // Transform job data to match our Project type
    const projects = data?.map(job => ({
      id: job.id,
      name: job.job_type || "Untitled Project",
      client_name: job.client_name,
      status: job.status === "upcoming" ? "planning" : (job.status === "completed" ? "completed" : "in-progress") as Project["status"],
      description: job.notes,
      deadline: job.date,
      budget: undefined,
      progress: job.status === "completed" ? 100 : (job.status === "upcoming" ? 0 : 50),
      created_at: job.created_at,
      updated_at: job.updated_at || job.created_at,
      user_id: job.user_id
    })) || [];
    
    return projects;
  };

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const addProject = useMutation({
    mutationFn: async (newProject: Omit<Project, "id" | "created_at" | "updated_at">) => {
      // Transform to match the jobs table structure
      const jobData = {
        job_type: newProject.name,
        client_name: newProject.client_name,
        address: "Project Address", // Required field for jobs
        status: newProject.status === "planning" ? "upcoming" : 
                newProject.status === "completed" ? "completed" : "in-progress",
        notes: newProject.description,
        date: newProject.deadline || new Date().toISOString().split('T')[0],
        start_time: "09:00", // Required field for jobs
        end_time: "17:00",   // Required field for jobs
        user_id: newProject.user_id
      };

      const { data, error } = await supabase
        .from("jobs")
        .insert([jobData])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast({
        title: "Success",
        description: "Project has been added successfully",
      });
    },
    onError: (error) => {
      console.error("Error adding project:", error);
      toast({
        title: "Error",
        description: "Failed to add project. Please try again.",
        variant: "destructive",
      });
    },
  });

  const updateProject = useMutation({
    mutationFn: async (project: Partial<Project> & { id: string }) => {
      // Transform to match the jobs table structure
      const jobData: any = {};
      if (project.name) jobData.job_type = project.name;
      if (project.client_name) jobData.client_name = project.client_name;
      if (project.status) {
        jobData.status = project.status === "planning" ? "upcoming" : 
                        project.status === "completed" ? "completed" : "in-progress";
      }
      if (project.description !== undefined) jobData.notes = project.description;
      if (project.deadline) jobData.date = project.deadline;

      const { data, error } = await supabase
        .from("jobs")
        .update(jobData)
        .eq("id", project.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast({
        title: "Success",
        description: "Project has been updated successfully",
      });
    },
    onError: (error) => {
      console.error("Error updating project:", error);
      toast({
        title: "Error",
        description: "Failed to update project. Please try again.",
        variant: "destructive",
      });
    },
  });

  const deleteProject = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("jobs")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast({
        title: "Success",
        description: "Project has been deleted successfully",
      });
    },
    onError: (error) => {
      console.error("Error deleting project:", error);
      toast({
        title: "Error",
        description: "Failed to delete project. Please try again.",
        variant: "destructive",
      });
    },
  });

  return {
    projects,
    isLoading,
    addProject,
    updateProject,
    deleteProject,
  };
}
