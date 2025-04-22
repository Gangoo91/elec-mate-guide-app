
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import LearningHub from "@/components/apprentices/LearningHub";
import { useAuth } from "@/hooks/useAuth";
import { Award, BookOpen, FileText, BookText, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressSummary from "@/components/apprentices/ProgressSummary";

const ApprenticeHub = () => {
  const navigate = useNavigate();
  const { user, refreshSession } = useAuth();
  
  useEffect(() => {
    // Refresh session to ensure user data is available
    refreshSession();
    // Mark this as the preferred role
    localStorage.setItem('preferredRole', 'apprentice');
  }, [refreshSession]);
  
  const featuredResources = [
    {
      title: "18th Edition Wiring Regulations",
      description: "Latest updates and requirements for electrical installations",
      icon: <FileText className="h-5 w-5 text-[#FFC900]" />,
      action: () => navigate("/apprentices/study-materials/regulations")
    },
    {
      title: "NVQ Level 2 Core Units",
      description: "Essential units for your electrical qualification",
      icon: <BookText className="h-5 w-5 text-[#FFC900]" />,
      action: () => navigate("/apprentices/study-materials/nvq2/core-units")
    },
    {
      title: "Practice Exams",
      description: "Test your knowledge with mock assessments",
      icon: <BookOpen className="h-5 w-5 text-[#FFC900]" />,
      action: () => navigate("/apprentices/practice-exams")
    },
    {
      title: "Mental Health Hub",
      description: "Support, community, and resources for apprentice mental health & well-being",
      icon: <Heart className="h-5 w-5 text-[#FFC900]" />,
      action: () => navigate("/apprentices/mental-health")
    }
  ];

  // If no user is found after refresh attempt, redirect to login
  useEffect(() => {
    const checkAuth = setTimeout(() => {
      if (!user) {
        navigate('/login');
      }
    }, 1000); // Give a second for auth to initialize
    
    return () => clearTimeout(checkAuth);
  }, [user, navigate]);

  return (
    <MainLayout>
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#FFC900] mb-2">Apprentice Hub</h1>
            <p className="text-[#FFC900]/80">Your personal learning and development center</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button 
              className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
              onClick={() => navigate("/apprentices/study-materials")}
            >
              Study Materials
            </Button>
            <Button 
              className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10" 
              variant="outline"
              onClick={() => navigate("/apprentices/mental-health")}
            >
              Mental Health Hub
            </Button>
          </div>
        </div>
        
        {/* Main content area - two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Progress Summary */}
          <div className="lg:col-span-1">
            <ProgressSummary />
            
            {/* Featured Resources */}
            <Card className="bg-[#22251e] border-[#FFC900]/20 mt-6">
              <CardHeader>
                <CardTitle className="text-[#FFC900] flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Featured Resources
                </CardTitle>
                <CardDescription className="text-[#FFC900]/70">
                  Recommended materials for your level
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {featuredResources.map((resource, index) => (
                  <div 
                    key={index}
                    className="p-3 border border-[#FFC900]/20 rounded-md hover:bg-[#FFC900]/5 hover:border-[#FFC900]/40 cursor-pointer transition-colors"
                    onClick={() => resource.action()}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {resource.icon}
                      <h3 className="font-medium text-[#FFC900]">{resource.title}</h3>
                    </div>
                    <p className="text-sm text-[#FFC900]/60 ml-7">{resource.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          {/* Right column - Learning Hub */}
          <div className="lg:col-span-2">
            <LearningHub />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApprenticeHub;
