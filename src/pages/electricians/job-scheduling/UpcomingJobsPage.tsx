
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const UpcomingJobsPage = () => {
  // Example data - in a real app, this would come from an API or database
  const upcomingJobs = [
    {
      id: "job1",
      client: "Smith Residence",
      address: "123 Main Street, London",
      date: "May 3, 2025",
      time: "9:00 AM - 12:00 PM",
      type: "Electrical Inspection"
    },
    {
      id: "job2",
      client: "Johnson Commercial Building",
      address: "456 Business Park, Manchester",
      date: "May 5, 2025",
      time: "1:00 PM - 5:00 PM",
      type: "Wiring Installation"
    },
    {
      id: "job3",
      client: "City Hospital",
      address: "789 Health Avenue, Birmingham",
      date: "May 7, 2025",
      time: "8:00 AM - 4:00 PM",
      type: "Emergency Lighting Maintenance"
    }
  ];

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Upcoming Jobs"
          description="View and manage your scheduled appointments and upcoming work orders."
        />
        
        <div className="max-w-4xl mx-auto">
          {upcomingJobs.length > 0 ? (
            <div className="space-y-4">
              {upcomingJobs.map(job => (
                <Card key={job.id} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-[#FFC900] font-medium text-lg mb-1">{job.client}</h3>
                        <p className="text-[#FFC900]/70">{job.type}</p>
                        <p className="text-[#FFC900]/70 text-sm mt-2">{job.address}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end space-x-1 text-[#FFC900]">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{job.date}</span>
                        </div>
                        <div className="flex items-center justify-end space-x-1 text-[#FFC900] mt-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{job.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812] px-3 py-1 rounded text-sm">
                        View Details
                      </button>
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
      </div>
    </MainLayout>
  );
};

export default UpcomingJobsPage;
