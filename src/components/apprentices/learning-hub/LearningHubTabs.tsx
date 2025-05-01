
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QualificationsTab from './QualificationsTab';
import StudyGroupsTab from './StudyGroupsTab';
import ResourcesTab from './ResourcesTab';
import FeaturedUnits from './FeaturedUnits';
import QuickAccessTools from './QuickAccessTools';

interface LearningHubTabsProps {
  featuredUnits: Array<{
    unitNumber: string;
    title: string;
    description: string;
    path: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    progress?: {
      completed: number;
      total: number;
      timeSpent?: number;
      estimatedTime?: number;
      lastActivity?: Date;
    };
  }>;
  onCardClick: (path: string) => void;
}

const LearningHubTabs = ({ featuredUnits, onCardClick }: LearningHubTabsProps) => {
  return (
    <Tabs defaultValue="main" className="w-full">
      <TabsList className="grid grid-cols-4 mb-6">
        <TabsTrigger value="main">Overview</TabsTrigger>
        <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
        <TabsTrigger value="study-groups">Study Groups</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
      </TabsList>
      
      {/* Main Overview Tab */}
      <TabsContent value="main">
        <div className="space-y-6">
          {/* Continue Learning Section */}
          <FeaturedUnits units={featuredUnits} />

          {/* Quick Access Tools */}
          <QuickAccessTools onCardClick={onCardClick} />
        </div>
      </TabsContent>

      {/* Qualifications Tab */}
      <TabsContent value="qualifications">
        <QualificationsTab onCardClick={onCardClick} />
      </TabsContent>

      {/* Study Groups Tab */}
      <TabsContent value="study-groups">
        <StudyGroupsTab onCardClick={onCardClick} />
      </TabsContent>

      {/* Resources Tab */}
      <TabsContent value="resources">
        <ResourcesTab onCardClick={onCardClick} />
      </TabsContent>
    </Tabs>
  );
};

export default LearningHubTabs;
