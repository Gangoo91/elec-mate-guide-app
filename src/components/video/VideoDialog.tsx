
import React from 'react';
import { Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { VideoPlayer } from './VideoPlayer';
import { ScrollArea } from "@/components/ui/scroll-area";

interface VideoLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  unit_number?: string;
  video_url: string;
  kudos_points: number;
}

interface VideoDialogProps {
  video: VideoLesson | null;
  onClose: () => void;
}

export const VideoDialog = ({ video, onClose }: VideoDialogProps) => {
  if (!video) return null;

  return (
    <Dialog open={!!video} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] p-4 sm:p-6 bg-[#22251e] border-[#FFC900]/20 max-h-[90vh]">
        <ScrollArea className="max-h-[85vh] pr-2">
          <DialogTitle className="text-lg sm:text-xl font-semibold text-[#FFC900]">
            {video.title}
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-[#FFC900]/70">
            {video.unit_number && `Unit ${video.unit_number} - `}
            {video.duration} duration
          </DialogDescription>
          <div className="space-y-4">
            <div className="w-full">
              <VideoPlayer
                videoId={video.id}
                videoUrl={video.video_url}
                title={video.title}
              />
            </div>
            <Separator className="bg-[#FFC900]/20" />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-[#FFC900]/70">{video.description}</p>
                <div className="bg-[#FFC900]/10 text-[#FFC900] px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {video.duration}
                </div>
              </div>
              <p className="text-[#FFC900]/50 text-sm">Complete this video to earn {video.kudos_points} kudos points.</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
