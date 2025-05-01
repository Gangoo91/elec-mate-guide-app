
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QualificationsTab from './QualificationsTab';
import StudyGroupsTab from './StudyGroupsTab';
import ResourcesTab from './ResourcesTab';
import FeaturedUnits from './FeaturedUnits';
import QuickAccessTools from './QuickAccessTools';
import ProgressSummaryCard from './ProgressSummaryCard';
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  return (
    <Tabs defaultValue="main" className="w-full">
      <TabsList className={`grid ${isMobile ? 'grid-cols-2 gap-1 mb-4' : 'grid-cols-4 mb-6'}`}>
        <TabsTrigger value="main">{isMobile ? 'Overview' : 'Overview'}</TabsTrigger>
        <TabsTrigger value="qualifications">{isMobile ? 'Quals' : 'Qualifications'}</TabsTrigger>
        {!isMobile && <TabsTrigger value="study-groups">Study Groups</TabsTrigger>}
        {!isMobile && <TabsTrigger value="resources">Resources</TabsTrigger>}
        {isMobile && <TabsTrigger value="study-groups">Groups</TabsTrigger>}
        {isMobile && <TabsTrigger value="resources">Resources</TabsTrigger>}
      </TabsList>
      
      {/* Main Overview Tab */}
      <TabsContent value="main">
        <div className="space-y-4 md:space-y-6">
          {/* Progress Summary Card */}
          <ProgressSummaryCard units={featuredUnits} />

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
