
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import KudosDisplay from "@/components/profile/KudosDisplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoPlayer } from '@/components/video/VideoPlayer';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'practical' | 'theory' | 'safety';
  kudos_points: number;
  video_url: string;
}

const VideoCard = ({ video, onWatch }: { video: VideoLesson; onWatch: (video: VideoLesson) => void }) => (
  <Card className="hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer bg-[#22251e] border-[#FFC900]/20">
    <CardHeader>
      <CardTitle className="flex items-center justify-between text-[#FFC900]">
        <span>{video.title}</span>
        <span className="text-sm">{video.duration}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-[#FFC900]/70 mb-4">{video.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Play className="h-5 w-5 text-[#FFC900]" />
          <span className="text-[#FFC900]/70">Watch Now</span>
        </div>
        <span className="text-[#FFC900] text-sm">+{video.kudos_points} kudos</span>
      </div>
    </CardContent>
  </Card>
);

const VideosDemonstrationsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson | null>(null);
  
  const { data: videos = [], isLoading } = useQuery({
    queryKey: ['video-lessons'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('video_lessons')
        .select('*');
      
      if (error) throw error;
      return data as VideoLesson[];
    }
  });

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-[#FFC900]/20 rounded w-1/4"></div>
            <div className="h-4 bg-[#FFC900]/20 rounded w-2/4"></div>
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-40 bg-[#FFC900]/20 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader
          title="Video Demonstrations"
          description="Watch practical demonstrations and earn kudos while learning essential electrical skills."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Tabs defaultValue="practical" className="w-full">
              <TabsList className="w-full bg-[#22251e] border-[#FFC900]/20">
                <TabsTrigger 
                  value="practical"
                  className="flex-1 data-[state=active]:bg-[#FFC900]/20 data-[state=active]:text-[#FFC900]"
                >
                  Practical Skills
                </TabsTrigger>
                <TabsTrigger 
                  value="theory"
                  className="flex-1 data-[state=active]:bg-[#FFC900]/20 data-[state=active]:text-[#FFC900]"
                >
                  Theory
                </TabsTrigger>
                <TabsTrigger 
                  value="safety"
                  className="flex-1 data-[state=active]:bg-[#FFC900]/20 data-[state=active]:text-[#FFC900]"
                >
                  Safety
                </TabsTrigger>
              </TabsList>

              {['practical', 'theory', 'safety'].map((category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid gap-4">
                    {videos
                      .filter(video => video.category === category)
                      .map(video => (
                        <VideoCard 
                          key={video.id} 
                          video={video} 
                          onWatch={() => setSelectedVideo(video)} 
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <KudosDisplay />
          </div>
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl bg-[#22251e] border-[#FFC900]/20">
            {selectedVideo && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#FFC900]">{selectedVideo.title}</h2>
                <VideoPlayer
                  videoId={selectedVideo.id}
                  videoUrl={selectedVideo.video_url}
                  title={selectedVideo.title}
                />
                <p className="text-[#FFC900]/70">{selectedVideo.description}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
};

export default VideosDemonstrationsPage;
