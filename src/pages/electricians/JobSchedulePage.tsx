
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Calendar, ClockIcon, Users, CheckSquare } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";
import PageHeader from "@/components/layout/PageHeader";

const JobSchedulePage = () => {
  const scheduleFeatures = [
    {
      title: "Upcoming Jobs",
      description: "View and manage your scheduled appointments and upcoming work orders.",
      icon: <Calendar className="h-7 w-7 text-[#FFC900]" />,
      action: {
        label: "View Schedule",
        href: "#"
      }
    },
    {
      title: "Time Management",
      description: "Track work hours, travel time, and job durations efficiently.",
      icon: <ClockIcon className="h-7 w-7 text-[#FFC900]" />,
      action: {
        label: "Manage Time",
        href: "#"
      }
    },
    {
      title: "Client Management",
      description: "Access client details, contact information, and job histories.",
      icon: <Users className="h-7 w-7 text-[#FFC900]" />,
      action: {
        label: "View Clients",
        href: "#"
      }
    },
    {
      title: "Job Completion",
      description: "Mark jobs as complete, collect signatures, and process paperwork.",
      icon: <CheckSquare className="h-7 w-7 text-[#FFC900]" />,
      action: {
        label: "Complete Jobs",
        href: "#"
      }
    }
  ];

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Job Scheduling"
          description="Efficiently manage your appointments, tasks, and job timelines."
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
