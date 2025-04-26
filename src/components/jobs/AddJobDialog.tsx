
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { format, parse } from "date-fns";
import { JobForm } from "./JobForm";
import type { JobFormData } from "./jobValidation";

export function AddJobDialog() {
  const { toast } = useToast();
  const { user } = useAuth();
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (data: JobFormData) => {
    try {
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to add a job",
          variant: "destructive",
        });
        return;
      }

      const parsedDate = parse(data.date, 'dd/MM/yyyy', new Date());

      // First, check if the client exists
      const { data: existingClients } = await supabase
        .from('clients')
        .select('id')
        .eq('name', data.clientName)
        .eq('user_id', user.id)
        .maybeSingle();

      let clientId;
      
      if (!existingClients) {
        // Create a new client
        const { data: newClient, error: clientError } = await supabase
          .from('clients')
          .insert({
            name: data.clientName,
            address: data.address,
            type: 'New Client', // Default type for automatically created clients
            user_id: user.id
          })
          .select('id')
          .single();

        if (clientError) throw clientError;
        clientId = newClient.id;
      } else {
        clientId = existingClients.id;
      }

      // Create the job
      const { data: newJob, error: jobError } = await supabase.from('jobs').insert({
        client_name: data.clientName,
        address: data.address,
        job_type: data.jobType,
        date: format(parsedDate, 'yyyy-MM-dd'),
        start_time: data.startTime,
        end_time: data.endTime,
        notes: data.notes,
        user_id: user.id,
        status: 'upcoming'
      })
      .select('id')
      .single();

      if (jobError) throw jobError;

      // Link the job to the client
      await supabase.from('client_jobs').insert({
        client_id: clientId,
        job_id: newJob.id,
        notes: data.notes
      });

      toast({
        title: "Success",
        description: "Job has been added successfully",
      });
      setOpen(false);
      
      // Use window.location.reload() with a small timeout to ensure the database operation completes
      setTimeout(() => {
        window.location.reload();
      }, 500);
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
        <Button className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812] w-full md:w-auto px-8">
          <Plus className="mr-2 h-4 w-4" /> Add New Job
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20 w-[95%] max-w-lg mx-auto">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">Add New Job</DialogTitle>
        </DialogHeader>
        <JobForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
