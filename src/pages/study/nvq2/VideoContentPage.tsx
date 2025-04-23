
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Video } from "lucide-react";
import BackButton from "@/components/navigation/BackButton";
import MainLayout from "@/components/layout/MainLayout";

const videos = [
  {
    id: "electrical-safety",
    title: "Electrical Safety Fundamentals",
    description: "Comprehensive guide to electrical safety on site.",
    duration: "32 minutes",
    progress: 100,
  },
  {
    id: "circuit-basics",
    title: "Understanding Circuit Basics",
    description: "Simple explanations of how electrical circuits work.",
    duration: "45 minutes",
    progress: 60,
  },
  {
    id: "testing-procedures",
    title: "Testing Procedures",
    description: "Step-by-step guide to testing electrical installations safely.",
    duration: "50 minutes",
    progress: 0,
  }
];

const VideoContentPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <div className="mb-4">
          <BackButton />
        </div>

        <PageHeader 
          title="Video Tutorials - NVQ Level 2"
          description="Watch step-by-step instructional videos on key electrical topics"
          hideBackButton={true}
        />

        <div className="grid gap-6 mt-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="bg-[#22251e] border-[#FFC900]/20 cursor-pointer hover:scale-105 hover:border-[#FFC900]/50 transition-all"
              tabIndex={0}
              role="button"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Video className="text-[#FFC900] h-6 w-6" />
                    <CardTitle className="text-[#FFC900]">{video.title}</CardTitle>
                  </div>
                  <span className="text-[#FFC900]/70 text-sm">{video.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#FFC900]/70 mb-4">{video.description}</p>
                <div className="flex items-center gap-4">
                  <Progress value={video.progress} className="h-2" />
                  <span className="text-[#FFC900]/70 text-sm">{video.progress}%</span>
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
