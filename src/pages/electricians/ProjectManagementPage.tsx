
import React, { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CalendarDays, ClipboardList, Clock, FolderGit2, LineChart, PenTool, Share2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AddProjectDialog } from "@/components/projects/AddProjectDialog";
import { ProjectDetailsDialog } from "@/components/projects/ProjectDetailsDialog";

type Project = {
  id: string;
  name: string;
  client_name: string;
  status: string;
  deadline?: string;
  budget?: number;
  progress?: number;
  description?: string;
};

const statusColors: Record<string, string> = {
  planning: "bg-blue-500/20 text-blue-500",
  "in-progress": "bg-amber-500/20 text-amber-500",
  "on-hold": "bg-purple-500/20 text-purple-500",
  completed: "bg-green-500/20 text-green-500",
  cancelled: "bg-red-500/20 text-red-500"
};

const ProjectManagementPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { toast } = useToast();

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, we would fetch from the database
      // For now, using mock data
      const mockProjects = [
        {
          id: "1",
          name: "Residential Rewiring",
          client_name: "Johnson Family",
          status: "in-progress",
          deadline: "2025-05-15",
          budget: 7500,
          progress: 45,
          description: "Complete rewiring of a 3-bedroom house including installation of new consumer unit."
        },
        {
          id: "2",
          name: "Office Lighting Upgrade",
          client_name: "Smith & Co",
          status: "planning",
          deadline: "2025-06-20",
          budget: 12000,
          progress: 15,
          description: "Upgrade lighting fixtures to LED throughout the office building including emergency lighting."
        },
        {
          id: "3",
          name: "Solar Panel Installation",
          client_name: "Green Living Ltd",
          status: "completed",
          deadline: "2025-04-10",
          budget: 18500,
          progress: 100,
          description: "Installation of 4kW solar panel system with battery storage."
        },
        {
          id: "4",
          name: "Factory Maintenance",
          client_name: "Industrial Works",
          status: "on-hold",
          deadline: "2025-05-30",
          budget: 9000,
          progress: 20,
          description: "Quarterly electrical maintenance and safety checks for manufacturing equipment."
        }
      ];
      
      setProjects(mockProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast({
        title: "Error",
        description: "Failed to load projects. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDetailsOpen(true);
  };

  const getStatusBadgeClass = (status: string) => {
    return statusColors[status] || "bg-gray-500/20 text-gray-500";
  };

  const renderProjectCards = () => {
    if (isLoading) {
      return Array(4).fill(0).map((_, index) => (
        <Card key={index} className="bg-[#22251e] border-[#FFC900]/20">
          <CardContent className="p-6">
            <div className="w-full h-24 bg-[#333]/20 rounded-md animate-pulse"></div>
          </CardContent>
        </Card>
      ));
    }

    if (projects.length === 0) {
      return (
        <div className="col-span-full text-center py-12">
          <FolderGit2 className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-4" />
          <h3 className="text-xl text-[#FFC900]">No Projects Yet</h3>
          <p className="text-[#FFC900]/70 mt-2">Create your first project to get started.</p>
        </div>
      );
    }

    return projects.map(project => (
      <Card 
        key={project.id} 
        className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
        onClick={() => handleProjectClick(project)}
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
    ));
  };

  const renderDashboardStats = () => {
    // Calculate some statistics from the projects
    const totalProjects = projects.length;
    const completedProjects = projects.filter(p => p.status === "completed").length;
    const inProgressProjects = projects.filter(p => p.status === "in-progress").length;
    const planningProjects = projects.filter(p => p.status === "planning").length;
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-[#22251e] border-[#FFC900]/20">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <div className="rounded-full bg-[#FFC900]/10 p-3 mb-3">
              <FolderGit2 className="h-5 w-5 text-[#FFC900]" />
            </div>
            <p className="text-sm text-[#FFC900]/70">Total Projects</p>
            <h4 className="text-xl font-bold text-[#FFC900]">{totalProjects}</h4>
          </CardContent>
        </Card>
        
        <Card className="bg-[#22251e] border-[#FFC900]/20">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <div className="rounded-full bg-green-500/10 p-3 mb-3">
              <ClipboardList className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-sm text-[#FFC900]/70">Completed</p>
            <h4 className="text-xl font-bold text-[#FFC900]">{completedProjects}</h4>
          </CardContent>
        </Card>
        
        <Card className="bg-[#22251e] border-[#FFC900]/20">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <div className="rounded-full bg-amber-500/10 p-3 mb-3">
              <Clock className="h-5 w-5 text-amber-500" />
            </div>
            <p className="text-sm text-[#FFC900]/70">In Progress</p>
            <h4 className="text-xl font-bold text-[#FFC900]">{inProgressProjects}</h4>
          </CardContent>
        </Card>
        
        <Card className="bg-[#22251e] border-[#FFC900]/20">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <div className="rounded-full bg-blue-500/10 p-3 mb-3">
              <PenTool className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-sm text-[#FFC900]/70">Planning</p>
            <h4 className="text-xl font-bold text-[#FFC900]">{planningProjects}</h4>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="container py-6 md:py-8">
        <PageHeader
          title="Project Management"
          description="Track, manage, and collaborate on your electrical projects"
          hideBackButton={false}
        />

        <div className="max-w-7xl mx-auto">
          {renderDashboardStats()}
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#FFC900]">Your Projects</h2>
            <AddProjectDialog onProjectAdded={fetchProjects} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {renderProjectCards()}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardHeader>
                <CardTitle className="text-[#FFC900]">Quick Actions</CardTitle>
                <CardDescription className="text-[#FFC900]/70">
                  Common project management tasks
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Button variant="outline" className="w-full justify-start border-[#333] text-[#FFC900]">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Team Members
                </Button>
                <Button variant="outline" className="w-full justify-start border-[#333] text-[#FFC900]">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Project Documents
                </Button>
                <Button variant="outline" className="w-full justify-start border-[#333] text-[#FFC900]">
                  <LineChart className="mr-2 h-4 w-4" />
                  View Project Analytics
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardHeader>
                <CardTitle className="text-[#FFC900]">Recent Updates</CardTitle>
                <CardDescription className="text-[#FFC900]/70">
                  Latest activity on your projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-[#FFC900] pl-4 py-1">
                    <p className="text-sm text-[#FFC900]">Office Lighting Upgrade - Materials delivered</p>
                    <p className="text-xs text-[#FFC900]/60">Today, 10:23 AM</p>
                  </div>
                  <div className="border-l-2 border-[#FFC900] pl-4 py-1">
                    <p className="text-sm text-[#FFC900]">Residential Rewiring - Phase 1 completed</p>
                    <p className="text-xs text-[#FFC900]/60">Yesterday, 4:12 PM</p>
                  </div>
                  <div className="border-l-2 border-[#FFC900] pl-4 py-1">
                    <p className="text-sm text-[#FFC900]">Solar Panel Installation - Final inspection passed</p>
                    <p className="text-xs text-[#FFC900]/60">April 24, 2025</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-xs text-[#FFC900]/80">
                  View all updates
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {selectedProject && (
          <ProjectDetailsDialog
            project={selectedProject}
            open={isDetailsOpen}
            onOpenChange={setIsDetailsOpen}
            onProjectUpdated={fetchProjects}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default ProjectManagementPage;
