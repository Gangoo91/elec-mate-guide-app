
import React from 'react';
import ResourceCard from "@/components/shared/ResourceCard";
import { Video, Boxes, Headphones, GraduationCap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ResourcesTabProps {
  onCardClick: (path: string) => void;
}

const ResourcesTab = ({ onCardClick }: ResourcesTabProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
      <ResourceCard
        title="Video Demonstrations"
        description={isMobile ? "Watch expert demonstrations of skills" : "Watch expert demonstrations of practical skills with detailed explanations."}
        icon={<Video className="h-5 w-5 md:h-6 md:w-6" />}
        onClick={() => onCardClick("/apprentices/video-demonstrations")}
      />
      <ResourceCard
        title="AR Learning"
        description={isMobile ? "Explore components in 3D with AR" : "Explore electrical components and systems in 3D with augmented reality tools."}
        icon={<Boxes className="h-5 w-5 md:h-6 md:w-6" />}
        onClick={() => onCardClick("/apprentices/ar-learning")}
      />
      <ResourceCard
        title="Audio Tutorials"
        description={isMobile ? "Listen to voice-guided tutorials" : "Listen to voice-guided tutorials covering essential electrical topics."}
        icon={<Headphones className="h-5 w-5 md:h-6 md:w-6" />}
        onClick={() => onCardClick("/apprentices/audio-tutorials")}
      />
      <ResourceCard
        title="Higher Learning"
        description={isMobile ? "Advanced materials for HNC/HND" : "Advanced materials for HNC, HND and degree-level progression."}
        icon={<GraduationCap className="h-5 w-5 md:h-6 md:w-6" />}
        onClick={() => onCardClick("/apprentices/study-materials/higher-learning")}
      />
    </div>
  );
};

export default ResourcesTab;
