
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/shared/GlassCard";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ScheduleSessions = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Schedule Mentorship Sessions"
          description="Book time with your mentors for guidance and advice"
        />
        
        <GlassCard className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#FFC900]/10 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-[#FFC900]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#FFC900]">Upcoming Sessions</h3>
                </div>
                <div className="text-center py-4">
                  <p className="text-[#FFC900]/70 mb-4">You don't have any upcoming mentorship sessions.</p>
                  <Button variant="outline" className="border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900]/10">
                    Request a Session
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#FFC900]/10 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-[#FFC900]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#FFC900]">Past Sessions</h3>
                </div>
                <div className="text-center py-4">
                  <p className="text-[#FFC900]/70">No past mentorship sessions found.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </GlassCard>
      </div>
    </MainLayout>
  );
};

export default ScheduleSessions;
