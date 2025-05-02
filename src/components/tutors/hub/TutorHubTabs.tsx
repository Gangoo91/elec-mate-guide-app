
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeachingResourcesTab from './TeachingResourcesTab';
import StudentManagementTab from './StudentManagementTab';
import AssessmentsTab from './AssessmentsTab';

interface TutorHubTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onCardClick: (path: string) => void;
}

const TutorHubTabs: React.FC<TutorHubTabsProps> = ({ 
  activeTab, 
  setActiveTab, 
  onCardClick 
}) => {
  return (
    <Tabs 
      defaultValue="teaching" 
      value={activeTab} 
      onValueChange={setActiveTab} 
      className="space-y-4"
    >
      <TabsList className="grid w-full grid-cols-3 h-auto">
        <TabsTrigger value="teaching">Teaching Resources</TabsTrigger>
        <TabsTrigger value="students">Student Management</TabsTrigger>
        <TabsTrigger value="assessments">Assessments</TabsTrigger>
      </TabsList>
      
      <TabsContent value="teaching" className="space-y-4">
        <TeachingResourcesTab onCardClick={onCardClick} />
      </TabsContent>
      
      <TabsContent value="students">
        <StudentManagementTab onCardClick={onCardClick} />
      </TabsContent>
      
      <TabsContent value="assessments">
        <AssessmentsTab onCardClick={onCardClick} />
      </TabsContent>
    </Tabs>
  );
};

export default TutorHubTabs;
