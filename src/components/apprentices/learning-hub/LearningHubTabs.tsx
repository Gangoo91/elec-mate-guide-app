
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeaturedUnits from "./FeaturedUnits";
import QualificationsTab from "./QualificationsTab";
import ResourcesTab from "./ResourcesTab";
import StudyGroupsTab from "./StudyGroupsTab";
import QuickAccessTools from "./QuickAccessTools";
import ProgressSummaryCard from "./ProgressSummaryCard";

interface UnitData {
  unitNumber: string;
  title: string;
  description: string;
  path: string;
  progress?: {
    completed: number;
    total: number;
    timeSpent?: number;
    estimatedTime?: number;
    lastActivity?: Date;
  };
}

interface LearningHubTabsProps {
  featuredUnits: UnitData[];
  onCardClick: (path: string) => void;
  onDeleteCourse?: (unitNumber: string) => void;
}

const LearningHubTabs = ({ featuredUnits, onCardClick, onDeleteCourse }: LearningHubTabsProps) => {
  
  return (
    <Tabs defaultValue="learning" className="space-y-4">
      <TabsList className="bg-[#22251e] border-b border-[#FFC900]/20 w-full justify-start rounded-none p-0">
        <TabsTrigger value="learning" className="data-[state=active]:text-[#FFC900] data-[state=active]:border-b-2 data-[state=active]:border-[#FFC900] rounded-none pb-2 pt-2 px-4 text-[#FFC900]/70">Learning</TabsTrigger>
        <TabsTrigger value="qualifications" className="data-[state=active]:text-[#FFC900] data-[state=active]:border-b-2 data-[state=active]:border-[#FFC900] rounded-none pb-2 pt-2 px-4 text-[#FFC900]/70">Qualifications</TabsTrigger>
        <TabsTrigger value="resources" className="data-[state=active]:text-[#FFC900] data-[state=active]:border-b-2 data-[state=active]:border-[#FFC900] rounded-none pb-2 pt-2 px-4 text-[#FFC900]/70">Resources</TabsTrigger>
        <TabsTrigger value="groups" className="data-[state=active]:text-[#FFC900] data-[state=active]:border-b-2 data-[state=active]:border-[#FFC900] rounded-none pb-2 pt-2 px-4 text-[#FFC900]/70">Study Groups</TabsTrigger>
      </TabsList>
      
      <TabsContent value="learning" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <FeaturedUnits
              units={featuredUnits}
              onDeleteCourse={onDeleteCourse}
            />
          </div>
          <div className="space-y-4">
            <ProgressSummaryCard />
            <QuickAccessTools />
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="qualifications">
        <QualificationsTab />
      </TabsContent>
      
      <TabsContent value="resources">
        <ResourcesTab />
      </TabsContent>
      
      <TabsContent value="groups">
        <StudyGroupsTab />
      </TabsContent>
    </Tabs>
  );
};

export default LearningHubTabs;
