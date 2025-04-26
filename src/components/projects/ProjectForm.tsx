
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ProjectBasicInfo } from "./form/ProjectBasicInfo";
import { ProjectStatusField } from "./form/ProjectStatusField";
import { ProjectDetailsFields } from "./form/ProjectDetailsFields";
import { projectSchema, type ProjectFormData } from "./validation/projectSchema";

interface ProjectFormProps {
  onSubmit: (data: ProjectFormData) => void;
  initialData?: Partial<ProjectFormData>;
  onCancel?: () => void;
}

export function ProjectForm({ onSubmit, initialData, onCancel }: ProjectFormProps) {
  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: initialData?.name || "",
      client_name: initialData?.client_name || "",
      status: initialData?.status || "planning",
      description: initialData?.description || "",
      deadline: initialData?.deadline?.split("T")[0] || "",
      budget: initialData?.budget,
      progress: initialData?.progress || 0,
    },
  });

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCancel) {
      onCancel();
    }
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
        <ProjectBasicInfo form={form} />
        <ProjectStatusField form={form} />
        <ProjectDetailsFields form={form} />
        
        <div className="flex justify-end gap-2 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="border-[#444] text-[#FFC900]"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
          >
            Save Project
          </Button>
        </div>
      </form>
    </Form>
  );
}
