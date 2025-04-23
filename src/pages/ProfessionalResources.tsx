
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const ProfessionalResources = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Professional Resources"
          description="Access to professional mental health support and resources"
        />
        
        <div className="grid gap-6">
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#FFC900]">Crisis Support Hotlines</h3>
              <p className="text-[#FFC900]/90 mb-4">
                24/7 crisis support hotlines available when you need immediate assistance:
              </p>
              <ul className="space-y-4 text-[#FFC900]/80">
                <li>• Samaritans: 116 123 (24/7, free)</li>
                <li>• Mind: 0300 123 3393 (Mon-Fri, 9am-6pm)</li>
                <li>• CALM: 0800 58 58 58 (5pm-midnight)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#FFC900]">Therapist Directory</h3>
              <p className="text-[#FFC900]/90">
                Find qualified mental health professionals who understand the unique challenges faced by
                electrical professionals. All listed therapists are accredited and experienced in
                work-related stress management.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfessionalResources;
