
import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import KudosDisplay from "@/components/profile/KudosDisplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VideoLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'practical' | 'theory' | 'safety';
  kudosPoints: number;
  videoUrl: string;
}

const demoVideos: VideoLesson[] = [
  {
    id: "1",
    title: "Basic Circuit Installation",
    description: "Step-by-step guide to installing a basic electrical circuit safely.",
    duration: "15:30",
    category: 'practical',
    kudosPoints: 10,
    videoUrl: "https://example.com/video1"
  },
  {
    id: "2",
    title: "Safety Protocols for Live Testing",
    description: "Essential safety measures when conducting live electrical testing.",
    duration: "12:45",
    category: 'safety',
    kudosPoints: 15,
    videoUrl: "https://example.com/video2"
  },
  {
    id: "3",
    title: "Understanding 3-Phase Systems",
    description: "Theoretical explanation of 3-phase power systems with real examples.",
    duration: "20:15",
    category: 'theory',
    kudosPoints: 12,
    videoUrl: "https://example.com/video3"
  }
];

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
        <span className="text-[#FFC900] text-sm">+{video.kudosPoints} kudos</span>
      </div>
    </CardContent>
  </Card>
);

const VideosDemonstrationsPage = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<'practical' | 'theory' | 'safety'>('practical');

  const handleWatchVideo = (video: VideoLesson) => {
    // Here you would normally start playing the video
    // For now, we'll just show a toast and award kudos
    toast({
      title: "Video Started",
      description: `You've earned ${video.kudosPoints} kudos points for starting "${video.title}"`,
    });
  };

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

              <TabsContent value="practical" className="mt-6">
                <div className="grid gap-4">
                  {demoVideos
                    .filter(video => video.category === 'practical')
                    .map(video => (
                      <VideoCard key={video.id} video={video} onWatch={handleWatchVideo} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="theory" className="mt-6">
                <div className="grid gap-4">
                  {demoVideos
                    .filter(video => video.category === 'theory')
                    .map(video => (
                      <VideoCard key={video.id} video={video} onWatch={handleWatchVideo} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="safety" className="mt-6">
                <div className="grid gap-4">
                  {demoVideos
                    .filter(video => video.category === 'safety')
                    .map(video => (
                      <VideoCard key={video.id} video={video} onWatch={handleWatchVideo} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <KudosDisplay />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default VideosDemonstrationsPage;
