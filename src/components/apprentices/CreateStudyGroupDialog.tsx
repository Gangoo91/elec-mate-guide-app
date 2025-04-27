
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Plus } from "lucide-react";

interface CreateStudyGroupForm {
  name: string;
  description: string;
  topic: string;
  level: string;
  maxParticipants: number;
  meetingLink?: string;
}

const CreateStudyGroupDialog = ({ onGroupCreated }: { onGroupCreated: () => void }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateStudyGroupForm>();
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const onSubmit = async (data: CreateStudyGroupForm) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('study_groups')
        .insert({
          ...data,
          created_by: user.id
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Study group created successfully",
      });

      setOpen(false);
      reset();
      onGroupCreated();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create study group",
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              placeholder="Group Name"
              {...register("name", { required: true })}
              className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
            />
          </div>
          <div>
            <Textarea
              placeholder="Description"
              {...register("description", { required: true })}
              className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
            />
          </div>
          <div>
            <Input
              placeholder="Topic"
              {...register("topic", { required: true })}
              className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
            />
          </div>
          <div>
            <Select
              onValueChange={(value) => register("level").onChange({ target: { value } })}
            >
              <SelectTrigger className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]">
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Input
              type="number"
              placeholder="Maximum Participants"
              {...register("maxParticipants", { required: true, min: 2, max: 50 })}
              className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
            />
          </div>
          <div>
            <Input
              placeholder="Meeting Link (optional)"
              {...register("meetingLink")}
              className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
            />
          </div>
          <Button type="submit" className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90">
            Create Group
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateStudyGroupDialog;
