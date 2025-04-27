
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Plus } from "lucide-react";
import { Form } from "@/components/ui/form";
import { studyGroupSchema, type StudyGroupFormValues } from "./schema";
import BasicFormFields from "./BasicFormFields";
import AdvancedFormFields from "./AdvancedFormFields";

interface CreateStudyGroupDialogProps {
  onGroupCreated: () => void;
}

const CreateStudyGroupDialog = ({ onGroupCreated }: CreateStudyGroupDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  
  const form = useForm<StudyGroupFormValues>({
    resolver: zodResolver(studyGroupSchema),
    defaultValues: {
      name: "",
      description: "",
      topic: "",
      level: "",
      maxParticipants: 10,
      meetingLink: "",
      tags: [],
      is_private: false,
      study_materials: [],
    }
  });

  const onSubmit = async (data: StudyGroupFormValues) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to create study groups",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('study_groups')
        .insert({
          name: data.name,
          description: data.description,
          topic: data.topic,
          level: data.level,
          max_participants: data.maxParticipants,
          meeting_link: data.meetingLink || null,
          created_by: user.id,
          tags: data.tags,
          is_private: data.is_private,
          study_materials: data.study_materials
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Study group created successfully",
      });

      setOpen(false);
      form.reset();
      onGroupCreated();
    } catch (error) {
      console.error("Error creating study group:", error);
      toast({
        title: "Error",
        description: "Failed to create study group. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90">
          <Plus className="h-5 w-5 mr-2" />
          Create Study Group
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">Create a New Study Group</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <BasicFormFields form={form} />
            <AdvancedFormFields form={form} />
            <Button type="submit" className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90">
              Create Group
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateStudyGroupDialog;
