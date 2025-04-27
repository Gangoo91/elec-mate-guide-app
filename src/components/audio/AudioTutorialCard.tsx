
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, AlertCircle } from "lucide-react";
import { AudioTutorial } from '@/types/audio';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { useToast } from "@/components/ui/use-toast";

interface AudioTutorialCardProps {
  tutorial: AudioTutorial;
}

const AudioTutorialCard = ({ tutorial }: AudioTutorialCardProps) => {
  const { isPlaying, togglePlayback, currentTime, progress, duration, error, seek } = useAudioPlayer(tutorial.audioUrl);
  const { toast } = useToast();
  
  const handlePlayPause = () => {
    if (error) {
      toast({
        title: "Audio Error",
        description: error,
        variant: "destructive",
      });
      return;
    }
    togglePlayback();
  };

  const handleSeek = (value: number[]) => {
    seek(value[0]);
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-[#FFC900] text-lg font-medium">
          {tutorial.title}
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="text-[#FFC900] hover:text-[#FFC900]/70"
          onClick={handlePlayPause}
        >
          {error ? <AlertCircle className="h-5 w-5" /> : isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-[#FFC900]/70 text-sm mb-4">{tutorial.description}</p>
        
        <div className="space-y-2">
          <Slider
            value={[progress]}
            min={0}
            max={100}
            step={1}
            onValueChange={handleSeek}
            className="w-full"
          />
          
          <div className="flex items-center justify-between text-[#FFC900]/50 text-sm">
            <span className="flex items-center gap-1">
              <Volume2 className="h-4 w-4" />
              {currentTime} / {duration}
            </span>
            <span>{tutorial.kudosPoints} kudos</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioTutorialCard;
