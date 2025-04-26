
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { CheckSquare, Clock, User, FileText } from "lucide-react";

const JobCompletionPage = () => {
  // Example jobs that need completion
  const pendingJobs = [
    {
      id: "job1",
      client: "Smith Residence",
      date: "May 2, 2025",
      type: "Electrical Inspection",
      status: "Completed, needs paperwork"
    },
    {
      id: "job2",
      client: "Johnson Commercial Building",
      date: "May 1, 2025",
      type: "Wiring Installation",
      status: "Needs client signature"
    },
    {
      id: "job3",
      client: "City Hospital",
      date: "April 28, 2025",
      type: "Emergency Lighting",
      status: "Waiting for parts confirmation"
    }
  ];

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Job Completion"
          description="Mark jobs as complete, collect signatures, and process paperwork."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6 text-center">
                <CheckSquare className="h-8 w-8 text-[#FFC900] mx-auto mb-2" />
                <h3 className="text-[#FFC900] font-medium">Jobs Completed Today</h3>
                <p className="text-3xl font-bold text-[#FFC900] mt-2">2</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6 text-center">
                <Clock className="h-8 w-8 text-[#FFC900] mx-auto mb-2" />
                <h3 className="text-[#FFC900] font-medium">Awaiting Completion</h3>
                <p className="text-3xl font-bold text-[#FFC900] mt-2">3</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6 text-center">
                <FileText className="h-8 w-8 text-[#FFC900] mx-auto mb-2" />
                <h3 className="text-[#FFC900] font-medium">Pending Documents</h3>
                <p className="text-3xl font-bold text-[#FFC900] mt-2">5</p>
              </CardContent>
            </Card>
          </div>
          
          <h3 className="text-xl text-[#FFC900] font-medium mb-4">Jobs Needing Completion</h3>
          
          <div className="space-y-4">
            {pendingJobs.map(job => (
              <Card key={job.id} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-[#FFC900] mr-2" />
                        <h3 className="text-[#FFC900] font-medium text-lg">{job.client}</h3>
                      </div>
                      <p className="text-[#FFC900]/70 text-sm mt-1">{job.type}</p>
                      <div className="mt-3">
                        <span className="bg-[#FFC900]/10 text-[#FFC900] px-2 py-1 rounded text-xs">
                          Status: {job.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#FFC900]/70 text-sm">{job.date}</p>
                      <div className="mt-4 space-x-2">
                        <button className="bg-transparent border border-[#FFC900]/50 text-[#FFC900] px-3 py-1 rounded text-sm hover:bg-[#FFC900]/10">
                          Collect Signature
                        </button>
                        <button className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812] px-3 py-1 rounded text-sm">
                          Complete Job
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JobCompletionPage;
