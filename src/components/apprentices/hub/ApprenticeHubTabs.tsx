
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LearningResourcesTab from './LearningResourcesTab';
import ProgressTrackingTab from './ProgressTrackingTab';
import CommunityTab from './CommunityTab';

interface ApprenticeHubTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onCardClick: (path: string) => void;
}

const ApprenticeHubTabs: React.FC<ApprenticeHubTabsProps> = ({ 
  activeTab, 
  setActiveTab,
  onCardClick 
}) => {
  return (
    <Tabs 
      defaultValue="learning" 
      value={activeTab} 
      onValueChange={setActiveTab} 
      className="space-y-4"
    >
      <TabsList className="grid w-full grid-cols-3 h-auto">
        <TabsTrigger value="learning">Learning Resources</TabsTrigger>
        <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
        <TabsTrigger value="community">Community</TabsTrigger>
      </TabsList>
      
      <TabsContent value="learning" className="space-y-4">
        <LearningResourcesTab onCardClick={onCardClick} />
      </TabsContent>
      
      <TabsContent value="progress">
        <ProgressTrackingTab onCardClick={onCardClick} />
      </TabsContent>
      
      <TabsContent value="community">
        <CommunityTab onCardClick={onCardClick} />
      </TabsContent>
    </Tabs>
  );
};

export default ApprenticeHubTabs;
