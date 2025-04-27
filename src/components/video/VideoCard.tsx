
import React from 'react';
import { Clock, Play } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface VideoLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'core_units' | 'practical_skills' | 'theory' | 'safety' | 'installation' | 'testing';
  kudos_points: number;
  video_url: string;
  unit_number?: string;
}

interface VideoCardProps {
  video: VideoLesson;
  onWatch: (video: VideoLesson) => void;
}

export const VideoCard = ({ video, onWatch }: VideoCardProps) => (
  <Card 
    onClick={() => onWatch(video)}
    className="hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer bg-[#22251e] border-[#FFC900]/20 hover:shadow-lg hover:shadow-[#FFC900]/10 transform hover:-translate-y-1"
  >
    <CardHeader>
      <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[#FFC900]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-base sm:text-lg">{video.title}</span>
          {video.unit_number && (
            <span className="text-sm bg-[#FFC900]/10 px-2 py-1 rounded">
              Unit {video.unit_number}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Clock className="h-4 w-4" />
          <span>{video.duration}</span>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-[#FFC900]/70 mb-4 text-sm sm:text-base line-clamp-2">{video.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Play className="h-5 w-5 text-[#FFC900]" />
          <span className="text-[#FFC900]/70 text-sm">Watch Now</span>
        </div>
        <span className="text-[#FFC900] text-sm font-semibold">+{video.kudos_points} kudos</span>
      </div>
    </CardContent>
  </Card>
);
