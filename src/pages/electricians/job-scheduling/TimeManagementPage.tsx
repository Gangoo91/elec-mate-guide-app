
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

const TimeManagementPage = () => {
  // Example data
  const weeklyHours = [
    { day: "Monday", hours: 8, jobs: 2 },
    { day: "Tuesday", hours: 9, jobs: 3 },
    { day: "Wednesday", hours: 7, jobs: 2 },
    { day: "Thursday", hours: 10, jobs: 3 },
    { day: "Friday", hours: 6, jobs: 1 },
    { day: "Saturday", hours: 4, jobs: 1 },
    { day: "Sunday", hours: 0, jobs: 0 }
  ];

  // Calculate total hours and jobs
  const totalHours = weeklyHours.reduce((sum, day) => sum + day.hours, 0);
  const totalJobs = weeklyHours.reduce((sum, day) => sum + day.jobs, 0);

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Time Management"
          description="Track work hours, travel time, and job durations efficiently."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#FFC900] font-medium text-lg">Weekly Summary</h3>
                  <Calendar className="h-5 w-5 text-[#FFC900]" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-[#FFC900]/70">Total Hours</p>
                    <p className="text-2xl font-bold text-[#FFC900]">{totalHours}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#FFC900]/70">Total Jobs</p>
                    <p className="text-2xl font-bold text-[#FFC900]">{totalJobs}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#FFC900]/70">Avg. Hours/Job</p>
                    <p className="text-2xl font-bold text-[#FFC900]">{(totalHours / totalJobs).toFixed(1)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#FFC900] font-medium text-lg">Time Tracking</h3>
                  <Clock className="h-5 w-5 text-[#FFC900]" />
                </div>
                <div className="space-y-2">
                  <button className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812] py-2 rounded font-medium">
                    Clock In/Out
                  </button>
                  <button className="w-full border border-[#FFC900]/50 text-[#FFC900] py-2 rounded font-medium hover:bg-[#FFC900]/10 transition-colors">
                    Start Break
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Daily Breakdown</h3>
              <div className="space-y-3">
                {weeklyHours.map((day) => (
                  <div key={day.day} className="flex items-center">
                    <div className="w-24 text-[#FFC900]/70">{day.day}</div>
                    <div className="flex-grow">
                      <div className="bg-[#151812] rounded-full h-4 w-full">
                        <div 
                          className="bg-[#FFC900] h-4 rounded-full" 
                          style={{ width: `${(day.hours / 12) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-16 text-right text-[#FFC900]">{day.hours} hrs</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default TimeManagementPage;
