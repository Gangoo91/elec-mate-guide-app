
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProjectForm } from "./ProjectForm";
import { useProjects } from "@/hooks/useProjects";
import { useAuth } from "@/hooks/useAuth";

export function AddProjectDialog() {
  const [open, setOpen] = useState(false);
  const { addProject } = useProjects();
  const { user } = useAuth();

  const handleSubmit = async (data: any) => {
    try {
      if (!user?.id) {
        throw new Error("User not authenticated");
      }
      
      await addProject.mutateAsync({
        ...data,
        user_id: user.id
      });
      setOpen(false);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]">
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20 w-[95%] max-w-lg mx-auto overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">Add New Project</DialogTitle>
        </DialogHeader>
        <ProjectForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </DialogContent>
    </Dialog>
  );
}
