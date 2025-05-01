
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { VideoPlayer } from './VideoPlayer';
import { VideoLesson } from '@/types/videos';
import { Timer, Book } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTrainingRecord } from '@/hooks/useTrainingRecord';
import { Button } from '@/components/ui/button';

interface VideoDialogProps {
  video: VideoLesson | null;
  onClose: () => void;
}

export const VideoDialog = ({ video, onClose }: VideoDialogProps) => {
  if (!video) return null;
  
  const { recordTrainingTime, isComplete } = useTrainingRecord({
    videoId: video.id,
    trainingMinutes: video.training_minutes || 0,
    ealCourseId: video.eal_course_id,
    videoTitle: video.title
  });

  return (
    <Dialog open={!!video} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl p-0 bg-[#22251e]">
        <div className="flex flex-col">
          <div className="aspect-video w-full">
            <VideoPlayer 
              videoId={video.id} 
              videoUrl={video.video_url} 
              title={video.title} 
            />
          </div>
          
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h3 className="text-xl font-bold text-[#FFC900]">{video.title}</h3>
              
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-[#FFC900]/10 border-[#FFC900]/20 text-[#FFC900]">
                  {video.category.replace('_', ' ')}
                </Badge>
                
                {video.unit_number && (
                  <Badge variant="outline" className="bg-[#FFC900]/10 border-[#FFC900]/20 text-[#FFC900]">
                    Unit {video.unit_number}
                  </Badge>
                )}
              </div>
            </div>
            
            <p className="text-[#FFC900]/80 mb-4">{video.description}</p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4 text-sm text-[#FFC900]/70">
              <div className="flex items-center gap-1">
                <Timer className="h-4 w-4" /> 
                <span>Duration: {video.duration}</span>
              </div>
              
              {video.training_minutes && (
                <div className="flex items-center gap-1">
                  <Timer className="h-4 w-4" /> 
                  <span>Training value: {video.training_minutes} minutes</span>
                </div>
              )}
              
              {video.eal_course_id && (
                <div className="flex items-center gap-1 ml-auto">
                  <Book className="h-4 w-4" /> 
                  <span>EAL Course: {video.eal_course_id}</span>
                </div>
              )}
            </div>
            
            {video.training_minutes && !isComplete && (
              <div className="mt-4">
                <Button
                  onClick={recordTrainingTime}
                  className="bg-[#FFC900] text-black hover:bg-[#FFD700]"
                >
                  Record {video.training_minutes} minutes to training record
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
