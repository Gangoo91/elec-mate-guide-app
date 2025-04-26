
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const JobSchedulePage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <BackButton />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFC900] mb-4">
            Job Scheduling
          </h1>
          <p className="text-[#FFC900]/80 mb-8">
            Manage your appointments, tasks, and job timelines effectively.
          </p>
          
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="h-8 w-8 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Coming Soon</h2>
              </div>
              <p className="text-[#FFC900]/70">
                Our job scheduling system is under development. Soon you'll be able to:
              </p>
              <ul className="list-disc list-inside mt-4 text-[#FFC900]/70 space-y-2">
                <li>Schedule and manage appointments</li>
                <li>Track job progress</li>
                <li>Set reminders and notifications</li>
                <li>View your calendar and timeline</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default JobSchedulePage;
