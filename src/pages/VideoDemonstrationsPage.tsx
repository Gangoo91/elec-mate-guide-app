
import React, { useState, useMemo } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { VideoDialog } from '@/components/video/VideoDialog';
import { VideoCategoryTabs } from '@/components/video/VideoCategoryTabs';
import { VideoSidebar } from '@/components/video/VideoSidebar';
import { VideoLoadingState } from '@/components/video/VideoLoadingState';
import { VideoErrorState } from '@/components/video/VideoErrorState';
import { VideoReelView } from '@/components/video/VideoReelView';
import { VideoReelCarousel } from '@/components/video/VideoReelCarousel';
import { useVideos, type VideoLesson } from '@/hooks/useVideos';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Monitor, Smartphone } from 'lucide-react';

const VideoDemonstrationsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson | null>(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'reel'>('reel');
  const { videos, isLoading, error } = useVideos();
  const isMobile = useIsMobile();

  const categorizedVideos = useMemo(() => {
    return {
      core_units: videos.filter(v => v.category === 'core_units'),
      practical_skills: videos.filter(v => v.category === 'practical_skills'),
      theory: videos.filter(v => v.category === 'theory'),
      safety: videos.filter(v => v.category === 'safety'),
      installation: videos.filter(v => v.category === 'installation'),
      testing: videos.filter(v => v.category === 'testing')
    };
  }, [videos]);

  const categories = Object.keys(categorizedVideos) as (keyof typeof categorizedVideos)[];
  const currentCategoryVideos = categorizedVideos[categories[selectedCategoryIndex]];

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'reel' : 'grid');
  };

  if (isLoading) {
    return (
      <MainLayout>
        <VideoLoadingState />
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <VideoErrorState />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader
          title="Course Video Library"
          description="Access comprehensive video lessons aligned with your course units. Watch demonstrations, theoretical explanations, and earn kudos while progressing through your qualifications."
        />
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategoryIndex === index ? "default" : "outline"}
                className={selectedCategoryIndex === index 
                  ? "bg-[#FFC900] text-black hover:bg-[#FFF200]" 
                  : "border-[#FFC900]/20 text-[#FFC900] hover:border-[#FFC900]/50"
                }
                onClick={() => setSelectedCategoryIndex(index)}
              >
                {category.replace('_', ' ')}
              </Button>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon"
            className="border-[#FFC900]/20 text-[#FFC900] hover:border-[#FFC900]/50"
            onClick={toggleViewMode}
          >
            {viewMode === 'grid' ? <Smartphone className="h-4 w-4" /> : <Monitor className="h-4 w-4" />}
          </Button>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="order-2 lg:order-1 lg:col-span-3">
              <VideoCategoryTabs 
                categorizedVideos={categorizedVideos}
                onWatchVideo={setSelectedVideo}
              />
            </div>
            <div className="order-1 lg:order-2">
              <VideoSidebar />
            </div>
          </div>
        ) : (
          isMobile ? (
            <VideoReelCarousel videos={currentCategoryVideos} />
          ) : (
            <VideoReelView videos={currentCategoryVideos} />
          )
        )}

        {viewMode === 'grid' && (
          <VideoDialog 
            video={selectedVideo} 
            onClose={() => setSelectedVideo(null)} 
          />
        )}
      </div>
    </MainLayout>
  );
};

export default VideoDemonstrationsPage;
