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
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const studyGroupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  topic: z.string().min(2, "Topic is required"),
  level: z.string().min(1, "Level is required"),
  maxParticipants: z.number().min(2).max(50),
  meetingLink: z.string().optional(),
  tags: z.array(z.string()).optional(),
  is_private: z.boolean().default(false),
  study_materials: z.array(z.any()).optional(),
});

type StudyGroupFormValues = z.infer<typeof studyGroupSchema>;

const CreateStudyGroupDialog = ({ onGroupCreated }: { onGroupCreated: () => void }) => {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  const { handleError } = useErrorHandler();
  
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
      console.log("Submitting study group data:", data);
      
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

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      toast({
        title: "Success",
        description: "Study group created successfully",
      });

      setOpen(false);
      form.reset();
      onGroupCreated();
    } catch (error) {
      handleError(error, "Failed to create study group. Please check your entries and try again.");
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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Group Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Group Name"
                      {...field}
                      className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your study group..."
                      {...field}
                      className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Topic</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Topic (e.g., Electrical Theory, Wiring)"
                      {...field}
                      className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Level</FormLabel>
                  <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]">
                        <SelectValue placeholder="Select Level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="maxParticipants"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Maximum Participants</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="meetingLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Meeting Link (optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Teams/Zoom meeting link"
                      {...field}
                      className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="is_private"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
                    />
                  </FormControl>
                  <FormLabel className="text-[#FFC900] mb-0">Make group private</FormLabel>
                </FormItem>
              )}
            />
            
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
