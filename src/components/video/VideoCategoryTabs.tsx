
import React from 'react';
import { BookOpen, Lightbulb, Wrench, Shield, Hammer, TestTube } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoCard from './VideoCard';
import { VideoLesson } from '@/types/videos';
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

interface VideoCategoryTabsProps {
  categorizedVideos: Record<string, VideoLesson[]>;
  onWatchVideo: (video: VideoLesson) => void;
  selectedCategory?: string;
  onCategoryChange?: React.Dispatch<React.SetStateAction<string>>;
}

export const categoryIcons = {
  core_units: <BookOpen className="h-5 w-5" />,
  practical_skills: <Wrench className="h-5 w-5" />,
  theory: <Lightbulb className="h-5 w-5" />,
  safety: <Shield className="h-5 w-5" />,
  installation: <Hammer className="h-5 w-5" />,
  testing: <TestTube className="h-5 w-5" />
};

export const categoryTitles = {
  core_units: "Core Units",
  practical_skills: "Practical Skills",
  theory: "Theory",
  safety: "Safety",
  installation: "Installation",
  testing: "Testing & Inspection"
};

export const VideoCategoryTabs = ({ categorizedVideos, onWatchVideo, selectedCategory, onCategoryChange }: VideoCategoryTabsProps) => {
  const { user } = useAuth();
  
  // Default to 'core_units' if no selectedCategory is provided
  const defaultCategory = selectedCategory || 'core_units';
  
  // Fetch video progress for current user
  const { data: videoProgress = [] } = useQuery({
    queryKey: ['video-progress', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('video_progress')
        .select('video_id, watched')
        .eq('user_id', user.id);
        
      if (error) {
        console.error('Error fetching video progress:', error);
        return [];
      }
      
      return data;
    },
    enabled: !!user,
  });
  
  // Convert video progress to a lookup map
  const completedVideos = React.useMemo(() => {
    const map: Record<string, boolean> = {};
    videoProgress.forEach(item => {
      map[item.video_id] = item.watched;
    });
    return map;
  }, [videoProgress]);

  const handleCategoryChange = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <Tabs defaultValue={defaultCategory} value={selectedCategory} className="w-full" onValueChange={handleCategoryChange}>
      <TabsList className="w-full bg-[#22251e] border-[#FFC900]/20 flex flex-wrap gap-1 h-auto p-1">
        {Object.keys(categoryTitles).map((category) => (
          <TabsTrigger 
            key={category}
            value={category}
            className="flex-1 min-w-[150px] data-[state=active]:bg-[#FFC900]/20 data-[state=active]:text-[#FFC900] py-2"
          >
            <div className="flex items-center gap-2 text-sm">
              {categoryIcons[category as keyof typeof categoryIcons]}
              <span className="hidden sm:inline">{categoryTitles[category as keyof typeof categoryTitles]}</span>
              <span className="sm:hidden">{categoryTitles[category as keyof typeof categoryTitles].split(' ')[0]}</span>
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
                  isCompleted={completedVideos[video.id] || false}
                  onWatch={onWatchVideo} 
                />
              ))
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
