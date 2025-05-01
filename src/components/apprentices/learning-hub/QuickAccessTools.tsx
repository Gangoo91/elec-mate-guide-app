
import React from 'react';
import ResourceCard from "@/components/shared/ResourceCard";
import { TestTube, Wrench, Users } from "lucide-react";

interface QuickAccessToolsProps {
  onCardClick: (path: string) => void;
}

const QuickAccessTools = ({ onCardClick }: QuickAccessToolsProps) => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Learning Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ResourceCard
          title="Practice Exams"
          description="Test your knowledge with adaptive exams designed to identify and improve weak areas."
          icon={<TestTube className="h-6 w-6" />}
          onClick={() => onCardClick("/apprentices/practice-exams")}
        />
        <ResourceCard
          title="Apprentice Tooling"
          description="Access AI-powered tools for regulations and practical learning assistance."
          icon={<Wrench className="h-6 w-6" />}
          onClick={() => onCardClick("/apprentices/ai-tools")}
        />
        <ResourceCard
          title="Study Groups"
          description="Join or create study groups with fellow apprentices to enhance learning."
          icon={<Users className="h-6 w-6" />}
          onClick={() => onCardClick("/apprentices/study-groups")}
        />
      </div>
    </section>
  );
};

export default QuickAccessTools;
