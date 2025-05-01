
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
import { Monitor, Smartphone, BookOpen, Filter, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from '@/components/ui/dropdown-menu';

const VideoDemonstrationsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson | null>(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'reel'>('reel');
  const [ealFilter, setEalFilter] = useState<string | null>(null);
  const { videos, isLoading, error } = useVideos();
  const isMobile = useIsMobile();

  const categorizedVideos = useMemo(() => {
    let filteredVideos = videos;
    
    // Apply EAL course filter if selected
    if (ealFilter) {
      filteredVideos = videos.filter(v => v.eal_course_id === ealFilter);
    }
    
    return {
      core_units: filteredVideos.filter(v => v.category === 'core_units'),
      practical_skills: filteredVideos.filter(v => v.category === 'practical_skills'),
      theory: filteredVideos.filter(v => v.category === 'theory'),
      safety: filteredVideos.filter(v => v.category === 'safety'),
      installation: filteredVideos.filter(v => v.category === 'installation'),
      testing: filteredVideos.filter(v => v.category === 'testing')
    };
  }, [videos, ealFilter]);

  // Extract all unique EAL course IDs from videos
  const ealCourseIds = useMemo(() => {
    const ids = new Set<string>();
    videos.forEach(video => {
      if (video.eal_course_id) {
        ids.add(video.eal_course_id);
      }
    });
    return Array.from(ids).sort();
  }, [videos]);

  const categories = Object.keys(categorizedVideos) as (keyof typeof categorizedVideos)[];
  const currentCategoryVideos = categorizedVideos[categories[selectedCategoryIndex]];

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'reel' : 'grid');
  };

  const handleEalFilterChange = (courseId: string | null) => {
    setEalFilter(courseId);
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
          title="EAL Training Videos"
          description="Access comprehensive video lessons aligned with your EAL courses. Watch demonstrations and earn off-the-job training hours while progressing through your qualifications."
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
          
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-[#FFC900]/20 text-[#FFC900] hover:border-[#FFC900]/50"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleEalFilterChange(null)}>
                  All EAL Courses
                </DropdownMenuItem>
                {ealCourseIds.map((courseId) => (
                  <DropdownMenuItem 
                    key={courseId}
                    onClick={() => handleEalFilterChange(courseId)}
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    {courseId}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="outline" 
              size="icon"
              className="border-[#FFC900]/20 text-[#FFC900] hover:border-[#FFC900]/50"
              onClick={toggleViewMode}
            >
              {viewMode === 'grid' ? <Smartphone className="h-4 w-4" /> : <Monitor className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {ealFilter && (
          <div className="mb-4 flex items-center">
            <Badge variant="outline" className="bg-[#FFC900]/10 text-[#FFC900] border-[#FFC900]/20 flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              Filtering by EAL course: {ealFilter}
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-5 w-5 p-0 ml-1 hover:bg-[#FFC900]/10"
                onClick={() => handleEalFilterChange(null)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          </div>
        )}

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
