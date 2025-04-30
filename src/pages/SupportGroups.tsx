
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OnlineGroupsTab from "@/components/support-groups/OnlineGroupsTab";
import InPersonGroupsTab from "@/components/support-groups/InPersonGroupsTab";
import IndustryGroupsTab from "@/components/support-groups/IndustryGroupsTab";
import SupportCTA from "@/components/support-groups/SupportCTA";

const SupportGroups = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Support Groups"
          description="Connect with fellow electrical professionals in a supportive environment"
        />
        
        <Tabs defaultValue="online" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6 bg-[#22251e] border border-[#FFC900]/20">
            <TabsTrigger value="online" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              Online Groups
            </TabsTrigger>
            <TabsTrigger value="inperson" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              In-Person Groups
            </TabsTrigger>
            <TabsTrigger value="industry" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              Industry-Specific
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="online">
            <OnlineGroupsTab />
          </TabsContent>
          
          <TabsContent value="inperson">
            <InPersonGroupsTab />
          </TabsContent>
          
          <TabsContent value="industry">
            <IndustryGroupsTab />
          </TabsContent>
        </Tabs>

        <SupportCTA />
      </div>
    </MainLayout>
  );
};

export default SupportGroups;
