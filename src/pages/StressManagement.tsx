
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const StressManagement = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Stress Management"
          description="Tools and techniques for managing work-related stress"
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#FFC900]">Breathing Exercises</h3>
              <p className="text-[#FFC900]/90 mb-6">
                Simple breathing techniques you can use anywhere to help manage stress and anxiety during work.
              </p>
              <ul className="space-y-4 text-[#FFC900]/80">
                <li>• Box Breathing (4-4-4-4 method)</li>
                <li>• Deep Diaphragmatic Breathing</li>
                <li>• Alternate Nostril Breathing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#FFC900]">Mindfulness Practices</h3>
              <p className="text-[#FFC900]/90 mb-6">
                Quick mindfulness exercises you can practice during breaks or after work.
              </p>
              <ul className="space-y-4 text-[#FFC900]/80">
                <li>• 5-Minute Body Scan</li>
                <li>• Mindful Walking</li>
                <li>• Grounding Techniques</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default StressManagement;
