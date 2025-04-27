
import React, { useState, useMemo } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { VideoDialog } from '@/components/video/VideoDialog';
import { VideoCategoryTabs } from '@/components/video/VideoCategoryTabs';
import { VideoSidebar } from '@/components/video/VideoSidebar';
import { VideoLoadingState } from '@/components/video/VideoLoadingState';
import { VideoErrorState } from '@/components/video/VideoErrorState';
import { useVideos, type VideoLesson } from '@/hooks/useVideos';

const VideosDemonstrationsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson | null>(null);
  const { videos, isLoading, error } = useVideos();

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

        <VideoDialog 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      </div>
    </MainLayout>
  );
};

export default VideosDemonstrationsPage;
