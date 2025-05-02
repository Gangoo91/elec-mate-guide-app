
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, School, Award, Users, CheckSquare, Calendar } from "lucide-react";
import { ApprenticeHubCardProps } from './types';
import ApprenticeHubCard from './ApprenticeHubCard';

const LearningResourcesTab: React.FC<{
  onCardClick: (path: string) => void
}> = ({ onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ApprenticeHubCard
        title="Learning Hub"
        description="Access your personalized learning materials"
        icon={<BookOpen className="h-6 w-6 text-primary mb-2" />}
        content="Continue your learning journey with recommended courses and materials."
        path="/apprentices/learning-hub"
        onClick={onCardClick}
      />
      
      <ApprenticeHubCard
        title="City & Guilds"
        description="Electrical installation qualifications"
        icon={<School className="h-6 w-6 text-primary mb-2" />}
        content="Study materials for Level 2 and Level 3 City & Guilds qualifications."
        path="/apprentices/study-materials/city-guilds"
        onClick={onCardClick}
      />
      
      <ApprenticeHubCard
        title="EAL Qualifications"
        description="Specialized electrical certifications"
        icon={<Award className="h-6 w-6 text-primary mb-2" />}
        content="Resources for EAL qualifications and specialized certifications."
        path="/apprentices/study-materials/eal"
        onClick={onCardClick}
      />
      
      <ApprenticeHubCard
        title="Study Groups"
        description="Collaborative learning opportunities"
        icon={<Users className="h-6 w-6 text-primary mb-2" />}
        content="Join study groups with other apprentices to enhance your learning."
        path="/apprentices/study-groups"
        onClick={onCardClick}
      />
      
      <ApprenticeHubCard
        title="AM2 Preparation"
        description="Prepare for your assessment"
        icon={<CheckSquare className="h-6 w-6 text-primary mb-2" />}
        content="Study materials and practice tests for AM2 assessment preparation."
        path="/apprentices/study-materials/am2"
        onClick={onCardClick}
      />
      
      <ApprenticeHubCard
        title="Study Calendar"
        description="Organize your learning schedule"
        icon={<Calendar className="h-6 w-6 text-primary mb-2" />}
        content="Plan your study sessions and track upcoming assessments."
        path="/apprentices/scheduling"
        onClick={onCardClick}
      />
    </div>
  );
};

export default LearningResourcesTab;
