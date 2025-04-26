
import React, { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, FolderGit2 } from "lucide-react";
import type { Project } from "@/hooks/useProjects";

interface ProjectsGridProps {
  projects: Project[] | undefined;
  isLoading: boolean;
  onProjectClick: (project: Project) => void;
}

export const ProjectsGrid = ({ projects, isLoading, onProjectClick }: ProjectsGridProps) => {
  // Memoize the status badge class mapping
  const statusColors = useMemo(() => ({
    planning: "bg-blue-500/20 text-blue-500",
    "in-progress": "bg-amber-500/20 text-amber-500",
    "on-hold": "bg-purple-500/20 text-purple-500",
    completed: "bg-green-500/20 text-green-500",
    cancelled: "bg-red-500/20 text-red-500"
  }), []);

  // Get status badge class with memoization
  const getStatusBadgeClass = useMemo(() => (status: string) => {
    return statusColors[status as keyof typeof statusColors] || "bg-gray-500/20 text-gray-500";
  }, [statusColors]);
  
  // Memoize the loading skeleton
  const loadingSkeleton = useMemo(() => (
    <>
      {Array(4).fill(0).map((_, index) => (
        <Card key={index} className="bg-[#22251e] border-[#FFC900]/20">
          <CardContent className="p-6">
            <div className="w-full h-24 bg-[#333]/20 rounded-md animate-pulse"></div>
          </CardContent>
        </Card>
      ))}
    </>
  ), []);
  
  // Memoize the empty state
  const emptyState = useMemo(() => (
    <div className="col-span-full text-center py-12">
      <FolderGit2 className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-4" />
      <h3 className="text-xl text-[#FFC900]">No Projects Yet</h3>
      <p className="text-[#FFC900]/70 mt-2">Create your first project to get started.</p>
    </div>
  ), []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadingSkeleton}
      </div>
    );
  }

  if (!projects?.length) {
    return emptyState;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <Card 
          key={project.id} 
          className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
          onClick={() => onProjectClick(project)}
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusBadgeClass(project.status)}`}>
                {project.status.replace("-", " ")}
              </span>
              {project.progress !== undefined && (
                <div className="bg-[#333]/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-[#FFC900]">{project.progress}%</span>
                </div>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mb-1">{project.name}</h3>
            <p className="text-[#FFC900]/70 text-sm mb-3">Client: {project.client_name}</p>
            
            {project.deadline && (
              <div className="flex items-center text-[#FFC900]/60 text-xs mt-4">
                <CalendarDays className="h-4 w-4 mr-1" />
                <span>Due: {new Date(project.deadline).toLocaleDateString()}</span>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
