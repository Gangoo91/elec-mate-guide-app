
import React, { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { CheckSquare, Clock, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { JobDetailsDialog } from "@/components/jobs/JobDetailsDialog";
import { useToast } from "@/hooks/use-toast";

type Job = {
  id: string;
  client_name: string;
  address: string;
  date: string;
  start_time: string;
  end_time: string;
  job_type: string;
  notes?: string;
  status: string;
};

const JobCompletionPage = () => {
  const [completedJobs, setCompletedJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { toast } = useToast();

  const fetchCompletedJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('status', 'completed')
        .order('date', { ascending: false });

      if (error) throw error;
      setCompletedJobs(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch completed jobs. Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchCompletedJobs();
  }, []);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsDetailsOpen(true);
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Job Completion"
          description="View completed jobs and process paperwork."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6 text-center">
                <CheckSquare className="h-8 w-8 text-[#FFC900] mx-auto mb-2" />
                <h3 className="text-[#FFC900] font-medium">Completed Jobs</h3>
                <p className="text-3xl font-bold text-[#FFC900] mt-2">{completedJobs.length}</p>
              </CardContent>
            </Card>
          </div>
          
          <h3 className="text-xl text-[#FFC900] font-medium mb-4">Recently Completed Jobs</h3>
          
          <div className="space-y-4">
            {completedJobs.map(job => (
              <Card 
                key={job.id}
                className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
                onClick={() => handleJobClick(job)}
              >
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-[#FFC900] mr-2" />
                        <h3 className="text-[#FFC900] font-medium text-lg">{job.client_name}</h3>
                      </div>
                      <p className="text-[#FFC900]/70 text-sm mt-1">{job.job_type}</p>
                      <p className="text-[#FFC900]/70 text-sm mt-2">{job.address}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#FFC900]/70 text-sm">{job.date}</p>
                      <div className="flex items-center justify-end text-[#FFC900] mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{`${job.start_time} - ${job.end_time}`}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {selectedJob && (
          <JobDetailsDialog
            job={selectedJob}
            open={isDetailsOpen}
            onOpenChange={setIsDetailsOpen}
            onJobUpdated={fetchCompletedJobs}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default JobCompletionPage;
