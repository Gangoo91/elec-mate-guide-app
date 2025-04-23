
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const SupportGroups = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Support Groups"
          description="Connect with fellow electrical professionals in a supportive environment"
        />
        
        <div className="grid gap-6">
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#FFC900]">Weekly Online Meetups</h3>
              <p className="text-[#FFC900]/90 mb-4">
                Join our weekly online support groups where you can connect with others in the industry,
                share experiences, and build a supportive network.
              </p>
              <p className="text-[#FFC900]/80">Sessions available every Tuesday and Thursday at 7PM.</p>
            </CardContent>
          </Card>

          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#FFC900]">Local In-Person Events</h3>
              <p className="text-[#FFC900]/90">
                Monthly in-person meetups organized by region. Connect face-to-face with others in your area
                and build lasting support networks.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default SupportGroups;
