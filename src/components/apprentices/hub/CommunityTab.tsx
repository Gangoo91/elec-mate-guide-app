
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import ApprenticeHubCard from './ApprenticeHubCard';

const CommunityTab: React.FC<{
  onCardClick: (path: string) => void
}> = ({ onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ApprenticeHubCard
        title="Mentorship"
        description="Connect with experienced electricians"
        content="Get guidance and support from experienced mentors in the electrical industry."
        path="/apprentices/mentorship"
        onClick={onCardClick}
      />
      
      <ApprenticeHubCard
        title="Community Forum"
        description="Connect with other apprentices"
        content="Ask questions, share knowledge, and connect with other electrical apprentices."
        path="/apprentices/community"
        onClick={onCardClick}
      />
      
      <ApprenticeHubCard
        title="Leaderboards"
        description="Recognition and achievement tracking"
        icon={<Trophy className="h-6 w-6 text-primary mb-2" />}
        content="View top performers in learning, mentorship, and community contribution."
        path="/leaderboards"
        onClick={onCardClick}
      />
    </div>
  );
};

export default CommunityTab;
