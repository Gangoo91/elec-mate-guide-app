
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileVideo, Clock } from "lucide-react";

const VideoContentPage = () => {
  const videos = [
    {
      title: "Health & Safety on Site",
      description: "Essential safety practices for electrical installations",
      duration: "15:30",
      progress: 100,
    },
    {
      title: "Understanding Circuit Diagrams",
      description: "Step-by-step guide to reading and interpreting circuit diagrams",
      duration: "22:45",
      progress: 60,
    },
    {
      title: "Installation Best Practices",
      description: "Proper techniques for electrical installations",
      duration: "18:20",
      progress: 0,
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <PageHeader 
          title="Video Content - NVQ Level 2"
          description="Watch detailed video tutorials and demonstrations"
          hideBackButton={true}
        />

        <div className="grid gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 cursor-pointer hover:border-[#FFC900]/50 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileVideo className="text-[#FFC900] h-6 w-6" />
                    <CardTitle className="text-[#FFC900]">{video.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-[#FFC900]/70">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{video.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#FFC900]/70 mb-4">{video.description}</p>
                <div className="flex items-center gap-4">
                  <Progress value={video.progress} className="h-2" />
                  <span className="text-[#FFC900]/70 text-sm">{video.progress}% Complete</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default VideoContentPage;
