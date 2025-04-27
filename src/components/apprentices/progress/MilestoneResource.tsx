
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play, BookOpen, CirclePlay, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Milestone } from './types';

interface MilestoneResourceProps {
  milestone: Milestone;
  onClose: () => void;
}

export const MilestoneResource = ({ milestone, onClose }: MilestoneResourceProps) => {
  const navigate = useNavigate();

  const getResourceIcon = (resourceType: string | null) => {
    switch(resourceType) {
      case 'video':
        return <Play className="h-5 w-5 text-[#FFC900]" />;
      case 'exam':
        return <BookOpen className="h-5 w-5 text-[#FFC900]" />;
      case 'quiz':
        return <CirclePlay className="h-5 w-5 text-[#FFC900]" />;
      case 'audio':
        return <Headphones className="h-5 w-5 text-[#FFC900]" />;
      default:
        return null;
    }
  };

  const goToResource = (resourceType: string | null, resourceId: string | null) => {
    if (!resourceType || !resourceId) return;
    onClose();
    
    switch(resourceType) {
      case 'video':
        navigate('/apprentices/video-demonstrations');
        break;
      case 'exam':
        navigate('/apprentices/practice-exams');
        break;
      case 'quiz':
        navigate('/apprentices/study-materials');
        break;
      case 'audio':
        navigate('/apprentices/audio-tutorials');
        break;
      default:
        break;
    }
  };

  if (!milestone.resource_id || !milestone.resource_type) return null;

  return (
    <div>
      <h4 className="text-sm font-medium mb-2 text-[#FFC900]">Linked Resource</h4>
      <div className="bg-[#22251e]/70 p-3 rounded-md border border-[#FFC900]/20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {getResourceIcon(milestone.resource_type)}
          <span className="text-sm text-[#FFC900]/80">
            {milestone.resource_type === 'video' ? 'Video tutorial' : 
             milestone.resource_type === 'exam' ? 'Mock exam' :
             milestone.resource_type === 'quiz' ? 'Mini quiz' : 'Audio lesson'}
          </span>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="flex items-center gap-1 text-xs text-[#FFC900]"
          onClick={() => goToResource(milestone.resource_type, milestone.resource_id)}
        >
          <span>Access</span>
          <ArrowUpRight className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};
