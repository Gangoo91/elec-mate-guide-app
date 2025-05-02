
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, ClipboardCheck, Users } from "lucide-react";
import StudentManagementTab from './StudentManagementTab';
import AssessmentsTab from './AssessmentsTab';
import TeachingResourcesTab from './TeachingResourcesTab';

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
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
      <TabsList className="bg-background/10 p-1">
        <TabsTrigger value="teaching" className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          <span className="hidden sm:inline">Teaching Resources</span>
          <span className="inline sm:hidden">Resources</span>
        </TabsTrigger>
        <TabsTrigger value="students" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span className="hidden sm:inline">Student Management</span>
          <span className="inline sm:hidden">Students</span>
        </TabsTrigger>
        <TabsTrigger value="assessments" className="flex items-center gap-2">
          <ClipboardCheck className="h-4 w-4" />
          <span className="hidden sm:inline">Assessments & Grading</span>
          <span className="inline sm:hidden">Assessments</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="teaching" className="mt-6">
        <TeachingResourcesTab onCardClick={onCardClick} />
      </TabsContent>
      
      <TabsContent value="students" className="mt-6">
        <StudentManagementTab onCardClick={onCardClick} />
      </TabsContent>
      
      <TabsContent value="assessments" className="mt-6">
        <AssessmentsTab onCardClick={onCardClick} />
      </TabsContent>
    </Tabs>
  );
};

export default TutorHubTabs;
