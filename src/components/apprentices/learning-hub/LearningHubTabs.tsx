
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
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
  onDeleteCourse: (unitNumber: string) => void;
}

const LearningHubTabs = ({ featuredUnits, onCardClick, onDeleteCourse }: LearningHubTabsProps) => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<string>("main");
  
  const tabOptions = [
    { value: "main", label: "Overview" },
    { value: "qualifications", label: "Qualifications" },
    { value: "study-groups", label: "Study Groups" },
    { value: "resources", label: "Resources" }
  ];
  
  // Function to render tab content based on active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case "main":
        return (
          <div className="space-y-4 md:space-y-6">
            <ProgressSummaryCard units={featuredUnits} onDeleteCourse={onDeleteCourse} />
            <FeaturedUnits units={featuredUnits} onDeleteCourse={onDeleteCourse} />
            <QuickAccessTools onCardClick={onCardClick} />
          </div>
        );
      case "qualifications":
        return <QualificationsTab onCardClick={onCardClick} />;
      case "study-groups":
        return <StudyGroupsTab onCardClick={onCardClick} />;
      case "resources":
        return <ResourcesTab onCardClick={onCardClick} />;
      default:
        return null;
    }
  };

  // Render mobile dropdown version
  if (isMobile) {
    return (
      <div className="w-full space-y-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              {tabOptions.find(tab => tab.value === activeTab)?.label || "Overview"}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full min-w-[200px] bg-[#22251e] border-[#FFC900]/20 z-50">
            {tabOptions.map(tab => (
              <DropdownMenuItem 
                key={tab.value}
                className={`${activeTab === tab.value ? 'bg-[#FFC900]/10 text-[#FFC900]' : 'text-[#FFC900]/80'}`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        {renderTabContent()}
      </div>
    );
  }

  // Render desktop tabs version
  return (
    <Tabs defaultValue="main" className="w-full" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-4 mb-6 bg-[#22251e] border-[#FFC900]/20">
        {tabOptions.map(tab => (
          <TabsTrigger 
            key={tab.value} 
            value={tab.value}
            className="data-[state=active]:bg-[#FFC900]/10 data-[state=active]:text-[#FFC900] text-[#FFC900]/70"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      <TabsContent value="main">
        <div className="space-y-4 md:space-y-6">
          <ProgressSummaryCard units={featuredUnits} onDeleteCourse={onDeleteCourse} />
          <FeaturedUnits units={featuredUnits} onDeleteCourse={onDeleteCourse} />
          <QuickAccessTools onCardClick={onCardClick} />
        </div>
      </TabsContent>

      <TabsContent value="qualifications">
        <QualificationsTab onCardClick={onCardClick} />
      </TabsContent>

      <TabsContent value="study-groups">
        <StudyGroupsTab onCardClick={onCardClick} />
      </TabsContent>

      <TabsContent value="resources">
        <ResourcesTab onCardClick={onCardClick} />
      </TabsContent>
    </Tabs>
  );
};

export default LearningHubTabs;
