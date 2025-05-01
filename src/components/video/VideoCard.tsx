
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, BookOpen, Timer } from "lucide-react";
import { VideoLesson } from '@/types/videos';
import { CompletionBadge } from './components/CompletionBadge';

interface VideoCardProps {
  video: VideoLesson;
  isCompleted?: boolean;
  onClick?: () => void;
  onWatch?: (video: VideoLesson) => void;
}

const VideoCard = ({ video, isCompleted = false, onClick, onWatch }: VideoCardProps) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (onWatch) onWatch(video);
  };
  
  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/70"
      onClick={handleClick}
    >
      <div className="relative aspect-video bg-[#151812] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle className="h-12 w-12 text-[#FFC900]/90" />
        </div>
        <CompletionBadge watched={isCompleted} />
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-medium text-[#FFC900] line-clamp-2">{video.title}</h3>
          
          <Badge variant="outline" className="shrink-0 bg-[#FFC900]/10 border-[#FFC900]/20 text-[#FFC900] text-xs">
            {video.category.replace('_', ' ')}
          </Badge>
        </div>
        
        <p className="text-xs text-[#FFC900]/70 line-clamp-2 mb-3">{video.description}</p>
        
        <div className="flex items-center justify-between text-[#FFC900]/70 text-xs">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{video.duration}</span>
          </div>
          
          {video.training_minutes && (
            <div className="flex items-center gap-1">
              <Timer className="h-3 w-3" />
              <span>{video.training_minutes}m training</span>
            </div>
          )}
          
          {video.eal_course_id && (
            <div className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>{video.eal_course_id}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
