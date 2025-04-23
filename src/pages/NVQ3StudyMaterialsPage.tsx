
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Download, Play, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const NVQ3StudyMaterialsPage = () => {
  const studyMaterials = [
    {
      title: "AM2 Assessment Preparation",
      description: "Comprehensive guide to prepare for the AM2 assessment, including practical tasks and common challenges.",
      type: "PDF",
      icon: <FileText className="h-5 w-5" />,
      size: "4.2 MB",
      progress: 0
    },
    {
      title: "Advanced Installation Techniques",
      description: "Detailed coverage of complex electrical installations required for Level 3 qualification.",
      type: "PDF",
      icon: <FileText className="h-5 w-5" />,
      size: "5.1 MB",
      progress: 0
    },
    {
      title: "Fault Finding Masterclass",
      description: "Expert techniques for identifying and resolving electrical faults in various scenarios.",
      type: "Video",
      icon: <Play className="h-5 w-5" />,
      size: "32 mins",
      progress: 0
    },
    {
      title: "Electrical Design Principles",
      description: "Understanding electrical design principles and requirements for commercial and industrial settings.",
      type: "Study Guide",
      icon: <BookOpen className="h-5 w-5" />,
      size: "23 pages",
      progress: 0
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        <PageHeader 
          title="NVQ Level 3 & AM2 Study Materials"
          description="Advanced resources for your NVQ Level 3 qualification and AM2 assessment."
          hideBackButton={true}
        />
        
        <div className="mt-8 grid grid-cols-1 gap-6">
          {studyMaterials.map((material, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {material.icon}
                      <span className="bg-[#FFC900]/10 text-[#FFC900] text-xs px-2 py-0.5 rounded">
                        {material.type}
                      </span>
                      <span className="text-[#FFC900]/60 text-xs">
                        {material.size}
                      </span>
                    </div>
                    <h3 className="text-[#FFC900] font-medium text-lg mb-1">{material.title}</h3>
                    <p className="text-[#FFC900]/70 text-sm mb-4">{material.description}</p>
                    
                    {material.progress > 0 ? (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-[#FFC900]/70">
                          <span>Progress</span>
                          <span>{material.progress}%</span>
                        </div>
                        <Progress value={material.progress} className="h-2 bg-[#FFC900]/10">
                          <div className="h-full bg-[#FFC900]" style={{ width: `${material.progress}%` }} />
                        </Progress>
                      </div>
                    ) : (
                      <Button className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812] flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default NVQ3StudyMaterialsPage;
