
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MateSignupForm } from "@/components/mental-health/MateSignupForm";
import { MatesList } from "@/components/mental-health/MatesList";

const MentalHealthBuddy = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Mental Health Mate"
          description="Connect with fellow professionals who understand the unique challenges of the electrical industry."
        />

        <Tabs defaultValue="find" className="space-y-6">
          <TabsList>
            <TabsTrigger value="find">Find a Mate</TabsTrigger>
            <TabsTrigger value="become">Become a Mate</TabsTrigger>
          </TabsList>

          <TabsContent value="find">
            <MatesList />
          </TabsContent>

          <TabsContent value="become">
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#22251e] p-6 rounded-lg border border-[#FFC900]/20">
                <h3 className="text-xl font-semibold mb-4 text-[#FFC900]">
                  Become a Mental Health Mate
                </h3>
                <p className="text-[#FFC900]/70 mb-6">
                  Share your experience and support others in the electrical industry.
                  Your insights and understanding can make a real difference.
                </p>
                <MateSignupForm />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default MentalHealthBuddy;
