
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { AddProjectDialog } from "@/components/projects/AddProjectDialog";
import { ProjectDetailsDialog } from "@/components/projects/ProjectDetailsDialog";
import { useProjects, type Project } from "@/hooks/useProjects";
import { DashboardStats } from "@/components/projects/DashboardStats";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { QuickActionsCard } from "@/components/projects/QuickActionsCard";
import { RecentUpdatesCard } from "@/components/projects/RecentUpdatesCard";

const ProjectManagementPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { projects, isLoading } = useProjects();

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDetailsOpen(true);
  };

  const recentCompletedJobs = projects
    ?.filter(project => project.status === "completed")
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, 3);

  return (
    <MainLayout>
      <div className="container py-6 md:py-8">
        <PageHeader
          title="Project Management"
          description="Track, manage, and collaborate on your electrical projects"
          hideBackButton={false}
        />

        <div className="max-w-7xl mx-auto">
          <DashboardStats projects={projects} />
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#FFC900]">Your Projects</h2>
            <AddProjectDialog />
          </div>
          
          <div className="mb-10">
            <ProjectsGrid
              projects={projects}
              isLoading={isLoading}
              onProjectClick={handleProjectClick}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <QuickActionsCard />
            <RecentUpdatesCard recentCompletedJobs={recentCompletedJobs} />
          </div>
        </div>

        {selectedProject && (
          <ProjectDetailsDialog
            project={selectedProject}
            open={isDetailsOpen}
            onOpenChange={setIsDetailsOpen}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default ProjectManagementPage;
