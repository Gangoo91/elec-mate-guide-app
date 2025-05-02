
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Timer, BookOpen, GraduationCap } from "lucide-react";

export const VideoSidebar = () => {
  // For demo purposes, we'll use some static data
  const trainingStats = {
    totalMinutes: 240,
    targetMinutes: 600,
    completedVideos: 8,
    totalVideos: 24,
  };
  
  const progress = (trainingStats.totalMinutes / trainingStats.targetMinutes) * 100;
  
  return (
    <div className="space-y-4">
      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-[#FFC900] flex items-center gap-2">
            <Timer className="h-5 w-5" />
            Off-the-Job Training
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-[#FFC900]/80">{trainingStats.totalMinutes} minutes recorded</span>
                <span className="text-[#FFC900]/80">{trainingStats.targetMinutes} target</span>
              </div>
              <Progress value={progress} className="h-2 bg-[#FFC900]/20" />
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#FFC900]/5 p-3 rounded-md border border-[#FFC900]/10">
                <p className="text-xs text-[#FFC900]/60">Completed</p>
                <p className="text-lg font-medium text-[#FFC900]">{trainingStats.completedVideos} videos</p>
              </div>
              
              <div className="bg-[#FFC900]/5 p-3 rounded-md border border-[#FFC900]/10">
                <p className="text-xs text-[#FFC900]/60">Training Time</p>
                <p className="text-lg font-medium text-[#FFC900]">
                  {Math.floor(trainingStats.totalMinutes / 60)}h {trainingStats.totalMinutes % 60}m
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-[#FFC900] flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            EAL Course Alignment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between items-center p-2 bg-[#FFC900]/5 rounded-md border border-[#FFC900]/10">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-[#FFC900]" />
              <span className="text-[#FFC900]">QELTK2-01</span>
            </div>
            <span className="text-[#FFC900]/70">3 videos</span>
          </div>
          
          <div className="flex justify-between items-center p-2 bg-[#FFC900]/5 rounded-md border border-[#FFC900]/10">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-[#FFC900]" />
              <span className="text-[#FFC900]">QELTK2-03</span>
            </div>
            <span className="text-[#FFC900]/70">2 videos</span>
          </div>
          
          <div className="flex justify-between items-center p-2 bg-[#FFC900]/5 rounded-md border border-[#FFC900]/10">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-[#FFC900]" />
              <span className="text-[#FFC900]">QELTK3-01</span>
            </div>
            <span className="text-[#FFC900]/70">2 videos</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
