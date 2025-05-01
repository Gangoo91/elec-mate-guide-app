
import React from 'react';
import ResourceCard from "@/components/shared/ResourceCard";
import { TestTube, Wrench, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface QuickAccessToolsProps {
  onCardClick: (path: string) => void;
}

const QuickAccessTools = ({ onCardClick }: QuickAccessToolsProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold text-[#FFC900] mb-3 md:mb-4">Learning Tools</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
        <ResourceCard
          title="Practice Exams"
          description={isMobile ? "Test your knowledge with adaptive exams" : "Test your knowledge with adaptive exams designed to identify and improve weak areas."}
          icon={<TestTube className="h-5 w-5 md:h-6 md:w-6" />}
          onClick={() => onCardClick("/apprentices/practice-exams")}
        />
        <ResourceCard
          title="Apprentice Tooling"
          description={isMobile ? "Access AI-powered learning tools" : "Access AI-powered tools for regulations and practical learning assistance."}
          icon={<Wrench className="h-5 w-5 md:h-6 md:w-6" />}
          onClick={() => onCardClick("/apprentices/ai-tools")}
        />
        <ResourceCard
          title="Study Groups"
          description={isMobile ? "Join study groups with fellow apprentices" : "Join or create study groups with fellow apprentices to enhance learning."}
          icon={<Users className="h-5 w-5 md:h-6 md:w-6" />}
          onClick={() => onCardClick("/apprentices/study-groups")}
        />
      </div>
    </section>
  );
};

export default QuickAccessTools;
