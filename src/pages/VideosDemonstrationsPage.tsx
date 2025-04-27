import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { VideoDialog } from '@/components/video/VideoDialog';
import { VideoCategoryTabs } from '@/components/video/VideoCategoryTabs';
import { VideoSidebar } from '@/components/video/VideoSidebar';
import { Skeleton } from "@/components/ui/skeleton";

// Fetch unique categories
const { data: categories } = useQuery({
  queryKey: ['video-categories'],
  queryFn: async () => {
    const { data, error } = await supabase
      .from('video_lessons')
      .select('category')
      .returns<{ category: string }[]>();
    
    if (error) {
      console.error('Error fetching video categories:', error);
      return [];
    }

    const uniqueCategories = [...new Set(data?.map(cat => cat.category))];
    console.log('Existing categories:', uniqueCategories);
    return uniqueCategories;
  }
});

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

const VideosDemonstrationsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson | null>(null);
  
  const { data: videos = [], isLoading, error } = useQuery({
    queryKey: ['video-lessons'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('video_lessons')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) {
        console.error("Error fetching videos:", error);
        throw error;
      }
      
      return data.map(video => ({
        ...video,
        // Ensure category matches our expected categories
        category: mapVideoCategory(video.category)
      })) as VideoLesson[];
    }
  });

  const mapVideoCategory = (category: string): 'core_units' | 'practical_skills' | 'theory' | 'safety' | 'installation' | 'testing' => {
    const categoryMap: Record<string, 'core_units' | 'practical_skills' | 'theory' | 'safety' | 'installation' | 'testing'> = {
      'practical': 'practical_skills',
      'theory': 'theory',
      'safety': 'safety',
      'installation': 'installation',
      'testing': 'testing',
      'core': 'core_units'
    };
    
    return categoryMap[category] || 'theory';
  };

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
        <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-[#FFC900]/20 rounded w-1/4"></div>
            <div className="h-4 bg-[#FFC900]/20 rounded w-2/4"></div>
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-40 w-full" />
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Error Loading Videos</h2>
            <p className="text-[#FFC900]/70">
              There was a problem loading the videos. Please try again later.
            </p>
          </div>
        </div>
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
