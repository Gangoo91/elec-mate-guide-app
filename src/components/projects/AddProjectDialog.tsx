
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";
import { ProjectForm } from "./ProjectForm";

interface AddProjectDialogProps {
  onProjectAdded: () => void;
}

export function AddProjectDialog({ onProjectAdded }: AddProjectDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      // In a real implementation, we would save to the database
      console.log("Adding new project:", data);
      
      toast({
        title: "Success",
        description: "Project has been added successfully",
      });
      
      setOpen(false);
      onProjectAdded();
    } catch (error) {
      console.error("Error adding project:", error);
      toast({
        title: "Error",
        description: "Failed to add project. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]">
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20 w-[95%] max-w-lg mx-auto">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">Add New Project</DialogTitle>
        </DialogHeader>
        <ProjectForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
