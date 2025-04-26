
import React from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

type JobFormData = {
  clientName: string;
  address: string;
  jobType: string;
  date: string;
  startTime: string;
  endTime: string;
  notes?: string;
};

export function AddJobDialog() {
  const { toast } = useToast();
  const { user } = useAuth();
  const form = useForm<JobFormData>();
  const [open, setOpen] = React.useState(false);

  const onSubmit = async (data: JobFormData) => {
    try {
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to add a job",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase.from('jobs').insert({
        client_name: data.clientName,
        address: data.address,
        job_type: data.jobType,
        date: data.date,
        start_time: data.startTime,
        end_time: data.endTime,
        notes: data.notes,
        user_id: user.id,
        status: 'upcoming'
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Job has been added successfully",
      });
      setOpen(false);
      // Reset form after successful submission
      form.reset();
      
      // Refresh the page to show the new job
      window.location.reload();
    } catch (error) {
      console.error("Error adding job:", error);
      toast({
        title: "Error",
        description: "Failed to add job. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]">
          <Plus className="mr-2 h-4 w-4" /> Add New Job
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">Add New Job</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="clientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Client Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter client name" {...field} className="bg-[#151812] text-[#FFC900]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter address" {...field} className="bg-[#151812] text-[#FFC900]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Job Type</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter job type" {...field} className="bg-[#151812] text-[#FFC900]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="bg-[#151812] text-[#FFC900]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#FFC900]">Start Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} className="bg-[#151812] text-[#FFC900]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#FFC900]">End Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} className="bg-[#151812] text-[#FFC900]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Notes (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Add any notes" {...field} className="bg-[#151812] text-[#FFC900]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end pt-4">
              <Button type="submit" className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]">
                Add Job
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
