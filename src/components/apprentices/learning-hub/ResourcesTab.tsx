
import React from 'react';
import ResourceCard from "@/components/shared/ResourceCard";
import { Video, Boxes, Headphones, GraduationCap } from "lucide-react";

interface ResourcesTabProps {
  onCardClick: (path: string) => void;
}

const ResourcesTab = ({ onCardClick }: ResourcesTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ResourceCard
        title="Video Demonstrations"
        description="Watch expert demonstrations of practical skills with detailed explanations."
        icon={<Video className="h-6 w-6" />}
        onClick={() => onCardClick("/apprentices/video-demonstrations")}
      />
      <ResourceCard
        title="AR Learning"
        description="Explore electrical components and systems in 3D with augmented reality tools."
        icon={<Boxes className="h-6 w-6" />}
        onClick={() => onCardClick("/apprentices/ar-learning")}
      />
      <ResourceCard
        title="Audio Tutorials"
        description="Listen to voice-guided tutorials covering essential electrical topics."
        icon={<Headphones className="h-6 w-6" />}
        onClick={() => onCardClick("/apprentices/audio-tutorials")}
      />
      <ResourceCard
        title="Higher Learning"
        description="Advanced materials for HNC, HND and degree-level progression."
        icon={<GraduationCap className="h-6 w-6" />}
        onClick={() => onCardClick("/apprentices/study-materials/higher-learning")}
      />
    </div>
  );
};

export default ResourcesTab;
