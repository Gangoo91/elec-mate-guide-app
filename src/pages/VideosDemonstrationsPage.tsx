
import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Clock, BookOpen, Lightbulb, Shield, Wrench, TestTube } from "lucide-react";
import KudosDisplay from "@/components/profile/KudosDisplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoPlayer } from '@/components/video/VideoPlayer';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

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

const VideoCard = ({ video, onWatch }: { video: VideoLesson; onWatch: (video: VideoLesson) => void }) => (
  <Card 
    onClick={() => onWatch(video)}
    className="hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer bg-[#22251e] border-[#FFC900]/20 hover:shadow-lg hover:shadow-[#FFC900]/10 transform hover:-translate-y-1"
  >
    <CardHeader>
      <CardTitle className="flex items-center justify-between text-[#FFC900]">
        <div className="flex items-center gap-2">
          <span>{video.title}</span>
          {video.unit_number && (
            <span className="text-sm bg-[#FFC900]/10 px-2 py-1 rounded">
              Unit {video.unit_number}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Clock className="h-4 w-4" />
          <span>{video.duration}</span>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-[#FFC900]/70 mb-4 line-clamp-2">{video.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Play className="h-5 w-5 text-[#FFC900]" />
          <span className="text-[#FFC900]/70">Watch Now</span>
        </div>
        <span className="text-[#FFC900] text-sm font-semibold">+{video.kudos_points} kudos</span>
      </div>
    </CardContent>
  </Card>
);

const categoryIcons = {
  core_units: <BookOpen className="h-5 w-5" />,
  theory: <Lightbulb className="h-5 w-5" />,
  practical_skills: <Wrench className="h-5 w-5" />,
  safety: <Shield className="h-5 w-5" />,
  installation: <Wrench className="h-5 w-5" />,
  testing: <TestTube className="h-5 w-5" />
};

const categoryTitles = {
  core_units: "Core Units",
  theory: "Theory",
  practical_skills: "Practical Skills",
  safety: "Safety",
  installation: "Installation",
  testing: "Testing & Inspection"
};

const VideosDemonstrationsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson | null>(null);
  
  const { data: videos = [], isLoading } = useQuery({
    queryKey: ['video-lessons'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('video_lessons')
        .select('*')
        .order('unit_number', { ascending: true });
      
      if (error) throw error;
      return data as VideoLesson[];
    }
  });

  const categorizedVideos = useMemo(() => {
    return {
      core_units: videos.filter(v => v.category === 'core_units'),
      theory: videos.filter(v => v.category === 'theory'),
      practical_skills: videos.filter(v => v.category === 'practical_skills'),
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

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader
          title="Course Video Library"
          description="Access comprehensive video lessons aligned with your course units. Watch demonstrations, theoretical explanations, and earn kudos while progressing through your qualifications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
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
                    {categorizedVideos[category as keyof typeof categorizedVideos].map(video => (
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
            
            <div className="mt-6 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-[#FFC900] mb-3">Course Content Guide</h3>
              <ul className="space-y-2 text-[#FFC900]/80">
                {[
                  "Videos aligned with course units",
                  "Practical demonstrations for hands-on skills",
                  "Theory explanations with visual aids",
                  "Safety procedures and best practices",
                  "Installation techniques and methods",
                  "Testing and inspection guidance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#FFC900] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl bg-[#22251e] border-[#FFC900]/20">
            {selectedVideo && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-[#FFC900]">{selectedVideo.title}</h2>
                  {selectedVideo.unit_number && (
                    <span className="bg-[#FFC900]/10 text-[#FFC900] px-3 py-1 rounded-full text-sm">
                      Unit {selectedVideo.unit_number}
                    </span>
                  )}
                </div>
                <VideoPlayer
                  videoId={selectedVideo.id}
                  videoUrl={selectedVideo.video_url}
                  title={selectedVideo.title}
                />
                <Separator className="bg-[#FFC900]/20" />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[#FFC900]/70">{selectedVideo.description}</p>
                    <div className="bg-[#FFC900]/10 text-[#FFC900] px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {selectedVideo.duration}
                    </div>
                  </div>
                  <p className="text-[#FFC900]/50 text-sm">Complete this video to earn {selectedVideo.kudos_points} kudos points.</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
};

export default VideosDemonstrationsPage;

