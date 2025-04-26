
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarDays, Edit, Trash2, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectForm } from "./ProjectForm";
import { useProjects, type Project } from "@/hooks/useProjects";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

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

  const getStatusColor = (status: string) => {
    const statusColors: Record<string, string> = {
      planning: "text-blue-500",
      "in-progress": "text-amber-500",
      "on-hold": "text-purple-500",
      completed: "text-green-500",
      cancelled: "text-red-500"
    };
    return statusColors[status] || "text-gray-500";
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not set";
    return new Date(dateString).toLocaleDateString();
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
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-[#333] border-[#444]">
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <div className="mt-2 text-center">
                      <p className="text-xs text-[#FFC900]/60 uppercase">Status</p>
                      <p className={`font-medium ${getStatusColor(project.status)}`}>
                        {project.status.replace("-", " ")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#333] border-[#444]">
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <div className="mt-2 text-center">
                      <p className="text-xs text-[#FFC900]/60 uppercase">Deadline</p>
                      <p className="font-medium text-[#FFC900]">
                        {formatDate(project.deadline)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#333] border-[#444]">
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <div className="mt-2 text-center">
                      <p className="text-xs text-[#FFC900]/60 uppercase">Budget</p>
                      <p className="font-medium text-[#FFC900]">
                        {project.budget ? `£${project.budget.toLocaleString()}` : "Not set"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#333] border-[#444]">
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <div className="mt-2 text-center">
                      <p className="text-xs text-[#FFC900]/60 uppercase">Progress</p>
                      <p className="font-medium text-[#FFC900]">
                        {project.progress !== undefined ? `${project.progress}%` : "Not started"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card className="bg-[#333] border-[#444]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-[#FFC900]">
                      <Users className="inline-block w-4 h-4 mr-2" /> Team Members
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="text-xs text-[#FFC900]/70">
                      <p>Project Manager: John Smith</p>
                      <p>Lead Electrician: Sarah Wilson</p>
                      <p>Apprentice: Mike Johnson</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#333] border-[#444]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-[#FFC900]">
                      <Calendar className="inline-block w-4 h-4 mr-2" /> Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="text-xs text-[#FFC900]/70">
                      <p>Start Date: {formatDate("2025-04-01")}</p>
                      <p>Phase 1 Completion: {formatDate("2025-04-15")}</p>
                      <p>Expected Completion: {formatDate(project.deadline)}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-[#FFC900] mb-3">Project Tasks</h3>
                <div className="space-y-2">
                  <div className="flex items-center p-3 bg-[#333] rounded-md">
                    <div className="w-5 h-5 mr-3 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span className="text-sm text-[#FFC900]">Initial site assessment</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-[#333] rounded-md">
                    <div className="w-5 h-5 mr-3 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-black text-xs">⟳</span>
                    </div>
                    <span className="text-sm text-[#FFC900]">Material procurement</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-[#333] rounded-md">
                    <div className="w-5 h-5 mr-3 rounded-full bg-gray-600 flex items-center justify-center">
                      <span className="text-white text-xs">○</span>
                    </div>
                    <span className="text-sm text-[#FFC900]">Installation</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Add explicit close button at bottom for better UX */}
          {!isEditing && (
            <div className="flex justify-end mt-6">
              <DialogClose asChild>
                <Button variant="outline" className="border-[#444] text-[#FFC900]">
                  Close
                </Button>
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent className="bg-[#22251e] border-[#FFC900]/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#FFC900]">Delete Project</AlertDialogTitle>
            <AlertDialogDescription className="text-[#FFC900]/70">
              Are you sure you want to delete this project? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-[#444] text-[#FFC900]">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
