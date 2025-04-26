
import React, { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { AddJobDialog } from "@/components/jobs/AddJobDialog";
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

const UpcomingJobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { toast } = useToast();

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('status', 'upcoming')
        .order('date', { ascending: true });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch jobs. Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsDetailsOpen(true);
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <PageHeader
            title="Upcoming Jobs"
            description="View and manage your scheduled appointments and upcoming work orders."
          />
          <AddJobDialog />
        </div>
        
        <div className="max-w-4xl mx-auto">
          {jobs.length > 0 ? (
            <div className="space-y-4">
              {jobs.map(job => (
                <Card 
                  key={job.id} 
                  className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
                  onClick={() => handleJobClick(job)}
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-[#FFC900] font-medium text-lg mb-1">{job.client_name}</h3>
                        <p className="text-[#FFC900]/70">{job.job_type}</p>
                        <p className="text-[#FFC900]/70 text-sm mt-2">{job.address}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end space-x-1 text-[#FFC900]">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{job.date}</span>
                        </div>
                        <div className="flex items-center justify-end space-x-1 text-[#FFC900] mt-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{`${job.start_time} - ${job.end_time}`}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-4" />
              <h3 className="text-xl text-[#FFC900]">No Upcoming Jobs</h3>
              <p className="text-[#FFC900]/70 mt-2">You don't have any scheduled jobs at the moment.</p>
            </div>
          )}
        </div>

        {selectedJob && (
          <JobDetailsDialog
            job={selectedJob}
            open={isDetailsOpen}
            onOpenChange={setIsDetailsOpen}
            onJobUpdated={fetchJobs}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default UpcomingJobsPage;
