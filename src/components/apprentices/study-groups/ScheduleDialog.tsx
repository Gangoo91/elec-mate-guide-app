
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { StudyGroupSchedule } from "@/types/studyGroups";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

interface ScheduleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  groupId: string;
  onScheduleCreated: () => void;
}

const DAYS_OF_WEEK = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const ScheduleDialog: React.FC<ScheduleDialogProps> = ({
  open,
  onOpenChange,
  groupId,
  onScheduleCreated
}) => {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      day_of_week: 'Monday',
      start_time: '09:00',
      duration_minutes: 60,
      meeting_link: ''
    }
  });

  const onSubmit = async (data: Partial<StudyGroupSchedule>) => {
    try {
      const scheduleData = {
        ...data,
        group_id: groupId,
        // Ensure required fields are included and properly typed
        day_of_week: data.day_of_week || 'Monday',
        start_time: data.start_time || '09:00',
        duration_minutes: data.duration_minutes || 60
      };

      const { error } = await supabase
        .from('study_group_schedules')
        .insert(scheduleData);

      if (error) throw error;

      toast({
        title: "Schedule created",
        description: "The meeting schedule has been created successfully",
      });

      onScheduleCreated();
      onOpenChange(false);
      form.reset();
    } catch (error) {
      console.error('Error creating schedule:', error);
      toast({
        title: "Error",
        description: "Failed to create schedule. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">Schedule Regular Meeting</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="day_of_week"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Day of Week</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]">
                        <SelectValue placeholder="Select day" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                      {DAYS_OF_WEEK.map((day) => (
                        <SelectItem key={day} value={day}>{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="start_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Start Time</FormLabel>
                  <FormControl>
                    <Input
                      type="time"
                      {...field}
                      className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration_minutes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Duration (minutes)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={15}
                      max={180}
                      {...field}
                      className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="meeting_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Meeting Link (optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Teams or Zoom meeting link"
                      className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90">
              Create Schedule
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDialog;
