
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Calendar, ClockIcon, Users, CheckSquare } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";
import PageHeader from "@/components/layout/PageHeader";
import { useNavigate } from "react-router-dom";

const JobSchedulePage = () => {
  const navigate = useNavigate();
  
  const scheduleFeatures = [
    {
      title: "Upcoming Jobs",
      description: "View and manage your scheduled appointments and upcoming work orders.",
      icon: <Calendar className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/job-scheduling/upcoming"
    },
    {
      title: "Time Management",
      description: "Track work hours, travel time, and job durations efficiently.",
      icon: <ClockIcon className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/job-scheduling/time"
    },
    {
      title: "Client Management",
      description: "Access client details, contact information, and job histories.",
      icon: <Users className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/job-scheduling/clients"
    },
    {
      title: "Job Completion",
      description: "Mark jobs as complete, collect signatures, and process paperwork.",
      icon: <CheckSquare className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/job-scheduling/completion"
    }
  ];

  const handleBackNavigation = () => {
    navigate("/electricians", { replace: true });
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Job Scheduling"
          description="Efficiently manage your appointments, tasks, and job timelines."
          customBackAction={handleBackNavigation}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {scheduleFeatures.map((feature, index) => (
            <ResourceCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default JobSchedulePage;
