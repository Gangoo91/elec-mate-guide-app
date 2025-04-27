
import React from 'react';
import { BookOpen, Lightbulb, Wrench, Shield, TestTube } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoCard } from './VideoCard';

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

interface VideoCategoryTabsProps {
  categorizedVideos: Record<string, VideoLesson[]>;
  onWatchVideo: (video: VideoLesson) => void;
}

export const categoryIcons = {
  core_units: <BookOpen className="h-5 w-5" />,
  theory: <Lightbulb className="h-5 w-5" />,
  practical_skills: <Wrench className="h-5 w-5" />,
  safety: <Shield className="h-5 w-5" />,
  installation: <Wrench className="h-5 w-5" />,
  testing: <TestTube className="h-5 w-5" />
};

export const categoryTitles = {
  core_units: "Core Units",
  theory: "Theory",
  practical_skills: "Practical Skills",
  safety: "Safety",
  installation: "Installation",
  testing: "Testing & Inspection"
};

export const VideoCategoryTabs = ({ categorizedVideos, onWatchVideo }: VideoCategoryTabsProps) => (
  <Tabs defaultValue="core_units" className="w-full">
    <TabsList className="w-full bg-[#22251e] border-[#FFC900]/20">
      {Object.keys(categoryTitles).map((category) => (
        <TabsTrigger 
          key={category}
          value={category}
          className="flex-1 data-[state=active]:bg-[#FFC900]/20 data-[state=active]:text-[#FFC900]"
        >
          <div className="flex items-center gap-2">
            {categoryIcons[category as keyof typeof categoryIcons]}
            <span>{categoryTitles[category as keyof typeof categoryTitles]}</span>
          </div>
        </TabsTrigger>
      ))}
    </TabsList>

    {Object.keys(categorizedVideos).map((category) => (
      <TabsContent key={category} value={category} className="mt-6">
        <div className="grid gap-4">
          {categorizedVideos[category as keyof typeof categorizedVideos].length === 0 ? (
            <p className="text-center py-6 text-[#FFC900]/60">No videos available in this category.</p>
          ) : (
            categorizedVideos[category as keyof typeof categorizedVideos].map(video => (
              <VideoCard 
                key={video.id} 
                video={video} 
                onWatch={onWatchVideo} 
              />
            ))
          )}
        </div>
      </TabsContent>
    ))}
  </Tabs>
);
