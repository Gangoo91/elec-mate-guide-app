
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Job = {
  id: string;
  client_name: string;
  address: string;
  job_type: string;
  date: string;
  start_time: string;
  end_time: string;
  notes?: string;
  status: string;
};

type JobDetailsDialogProps = {
  job: Job;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onJobUpdated: () => void;
};

export function JobDetailsDialog({ job, open, onOpenChange, onJobUpdated }: JobDetailsDialogProps) {
  const { toast } = useToast();

  const handleCompleteJob = async () => {
    try {
      const { error } = await supabase
        .from('jobs')
        .update({ status: 'completed' })
        .eq('id', job.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Job has been marked as completed",
      });
      onJobUpdated();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update job status. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">{job.client_name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="text-[#FFC900] font-medium mb-1">Job Type</h4>
            <p className="text-[#FFC900]/70">{job.job_type}</p>
          </div>
          <div>
            <h4 className="text-[#FFC900] font-medium mb-1">Address</h4>
            <p className="text-[#FFC900]/70">{job.address}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-[#FFC900]">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{job.date}</span>
            </div>
            <div className="flex items-center text-[#FFC900]">
              <Clock className="h-4 w-4 mr-2" />
              <span>{`${job.start_time} - ${job.end_time}`}</span>
            </div>
          </div>
          {job.notes && (
            <div>
              <h4 className="text-[#FFC900] font-medium mb-1">Notes</h4>
              <p className="text-[#FFC900]/70">{job.notes}</p>
            </div>
          )}
          {job.status === 'upcoming' && (
            <div className="flex justify-end pt-4">
              <Button
                onClick={handleCompleteJob}
                className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
              >
                Mark as Complete
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
