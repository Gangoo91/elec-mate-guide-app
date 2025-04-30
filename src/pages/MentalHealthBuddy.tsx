
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MatesList } from "@/components/mental-health/MatesList";
import { BecomeMate } from "@/components/mental-health/BecomeMate";
import { Heart } from "lucide-react";

const MentalHealthBuddy = () => {
  const [activeTab, setActiveTab] = useState("find");
  
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Mental Health Mate"
          description="Connect with trained peers who can provide mental health support"
        />

        <Card className="border-[#FFC900]/20 bg-[#22251e] mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-3 text-[#FFC900]">
              <Heart className="h-6 w-6 text-[#FFC900]" />
              Mental Health Buddy Program
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-[#FFC900]/90 mb-4">
              Our Mental Health Buddy program connects you with fellow professionals who have volunteered
              to provide peer support. These individuals are not therapists, but they are here to listen,
              share experiences, and help you navigate challenges.
            </p>
            <p className="text-[#FFC900]/90">
              You can find a Mental Health Buddy to talk to, or sign up to become one yourself and help others in the community.
            </p>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6 bg-[#22251e] border border-[#FFC900]/20">
            <TabsTrigger value="find" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              Find a Mental Health Mate
            </TabsTrigger>
            <TabsTrigger value="become" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              Become a Mental Health Mate
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="find" className="mt-0">
            <MatesList />
          </TabsContent>
          
          <TabsContent value="become" className="mt-0">
            <Card className="border-[#FFC900]/20 bg-[#22251e]">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-[#FFC900]">Become a Mental Health Mate</h3>
                    <p className="text-[#FFC900]/90 mb-4">
                      As a Mental Health Mate, you'll provide peer support to others in the electrical industry
                      who may be struggling with their mental health. This is a volunteer role that can make
                      a significant difference in someone's life.
                    </p>
                    <p className="text-[#FFC900]/90 mb-6">
                      Toggle the switch below to make yourself available as a Mental Health Mate. You can turn
                      this off at any time if you need a break or are no longer able to participate.
                    </p>
                  </div>
                  
                  <div className="bg-[#FFC900]/10 p-6 rounded-lg border border-[#FFC900]/20">
                    <BecomeMate />
                  </div>
                  
                  <div className="bg-[#22251e] border border-[#FFC900]/20 p-4 rounded-md">
                    <h4 className="font-medium text-[#FFC900] mb-2">Important Note</h4>
                    <p className="text-[#FFC900]/90 text-sm">
                      Mental Health Mates provide peer support only. If you or someone you know is in crisis,
                      please contact professional mental health services or emergency services immediately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default MentalHealthBuddy;
