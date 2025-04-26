
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { ProjectForm } from "./ProjectForm";
import { useProjects, type Project } from "@/hooks/useProjects";
import { ProjectStatusCard } from "./dialog/ProjectStatusCard";
import { ProjectTeamSection } from "./dialog/ProjectTeamSection";
import { ProjectTimelineSection } from "./dialog/ProjectTimelineSection";
import { ProjectTasksList } from "./dialog/ProjectTasksList";
import { DeleteProjectDialog } from "./dialog/DeleteProjectDialog";

interface ProjectDetailsDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailsDialog({
  project,
  open,
  onOpenChange,
}: ProjectDetailsDialogProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const { updateProject, deleteProject } = useProjects();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async () => {
    try {
      await deleteProject.mutateAsync(project.id);
      setShowDeleteAlert(false);
      onOpenChange(false);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleUpdate = async (data: any) => {
    try {
      await updateProject.mutateAsync({ id: project.id, ...data });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-[#22251e] border-[#FFC900]/20 max-w-3xl w-[95%] overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-[#FFC900]">
              {isEditing ? "Edit Project" : "Project Details"}
            </DialogTitle>
          </DialogHeader>
          
          {isEditing ? (
            <ProjectForm 
              onSubmit={handleUpdate} 
              initialData={project} 
              onCancel={handleCancel}
            />
          ) : (
            <div className="space-y-6 py-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#FFC900]">{project.name}</h2>
                  <p className="text-[#FFC900]/70">Client: {project.client_name}</p>
                  
                  {project.description && (
                    <p className="text-[#FFC900]/70 mt-4 max-w-md">{project.description}</p>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button onClick={handleEdit} variant="outline" size="sm" className="border-[#444] text-[#FFC900]">
                    <Edit className="h-4 w-4 mr-2" /> Edit
                  </Button>
                  <Button 
                    onClick={() => setShowDeleteAlert(true)} 
                    variant="outline" 
                    size="sm" 
                    className="border-[#444] text-red-500"
                  >
                    <Trash2 className="h-4 w-4 mr-2" /> Delete
                  </Button>
                </div>
              </div>
              
              <ProjectStatusCard 
                status={project.status}
                deadline={project.deadline}
                budget={project.budget}
                progress={project.progress}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <ProjectTeamSection />
                <ProjectTimelineSection deadline={project.deadline} />
              </div>
              
              <ProjectTasksList />

              {/* Add explicit close button at bottom for better UX */}
              <div className="flex justify-end mt-6">
                <DialogClose asChild>
                  <Button variant="outline" className="border-[#444] text-[#FFC900]">
                    Close
                  </Button>
                </DialogClose>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <DeleteProjectDialog
        open={showDeleteAlert}
        onOpenChange={setShowDeleteAlert}
        onConfirmDelete={handleDelete}
      />
    </>
  );
}
