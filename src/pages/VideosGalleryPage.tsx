
import React, { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { VideoSidebar } from "@/components/video/VideoSidebar";
import { useVideoLessons } from "@/hooks/useVideoLessons";
import { VideoReelView } from "@/components/video/VideoReelView";
import { VideoCategoryTabs } from "@/components/video/VideoCategoryTabs";
import { Skeleton } from "@/components/ui/skeleton";
import { VideoErrorState } from "@/components/video/VideoErrorState";

const VideosGalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { videoLessons, isLoading, error } = useVideoLessons();
  
  // Effect to handle initial loading
  useEffect(() => {
    console.log("Video Gallery Page mounted");
  }, []);
  
  const filteredVideos = selectedCategory 
    ? videoLessons?.filter(video => video.category === selectedCategory) 
    : videoLessons;

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader 
          title="Video Demonstrations" 
          description="Watch step-by-step video tutorials on electrical installation, testing, and safety procedures."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
          <div className="lg:col-span-3">
            <VideoCategoryTabs 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            {isLoading ? (
              <div className="space-y-4 mt-6">
                <Skeleton className="h-64 w-full rounded-lg bg-gray-800/30" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <Skeleton key={i} className="h-40 rounded-lg bg-gray-800/30" />
                  ))}
                </div>
              </div>
            ) : error ? (
              <VideoErrorState />
            ) : (
              <VideoReelView videos={filteredVideos || []} />
            )}
          </div>
          
          <div className="lg:col-span-1">
            <VideoSidebar />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default VideosGalleryPage;
