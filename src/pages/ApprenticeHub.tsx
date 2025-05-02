
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, School, Users, Calendar, Award, CheckSquare, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApprenticeHub = () => {
  const [activeTab, setActiveTab] = useState('learning');
  const navigate = useNavigate();
  
  console.log("ApprenticeHub - Component loaded");
  
  const handleCardClick = (path: string) => {
    console.log("ApprenticeHub - Navigating to:", path);
    navigate(path);
  };

  return (
    <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Apprentice Hub</h1>
        <p className="text-muted-foreground">Access learning resources, track progress, and connect with mentors</p>
      </div>

      <Tabs 
        defaultValue="learning" 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-3 h-auto">
          <TabsTrigger value="learning">Learning Resources</TabsTrigger>
          <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        
        <TabsContent value="learning" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all" 
              onClick={() => handleCardClick('/apprentices/learning-hub')}
            >
              <CardHeader>
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Learning Hub</CardTitle>
                <CardDescription>Access your personalized learning materials</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Continue your learning journey with recommended courses and materials.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/apprentices/study-materials/city-guilds')}
            >
              <CardHeader>
                <School className="h-6 w-6 text-primary mb-2" />
                <CardTitle>City & Guilds</CardTitle>
                <CardDescription>Electrical installation qualifications</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Study materials for Level 2 and Level 3 City & Guilds qualifications.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/apprentices/study-materials/eal')}
            >
              <CardHeader>
                <Award className="h-6 w-6 text-primary mb-2" />
                <CardTitle>EAL Qualifications</CardTitle>
                <CardDescription>Specialized electrical certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Resources for EAL qualifications and specialized certifications.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/apprentices/study-groups')}
            >
              <CardHeader>
                <Users className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Study Groups</CardTitle>
                <CardDescription>Collaborative learning opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Join study groups with other apprentices to enhance your learning.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/apprentices/study-materials/am2')}
            >
              <CardHeader>
                <CheckSquare className="h-6 w-6 text-primary mb-2" />
                <CardTitle>AM2 Preparation</CardTitle>
                <CardDescription>Prepare for your assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Study materials and practice tests for AM2 assessment preparation.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/apprentices/scheduling')}
            >
              <CardHeader>
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Study Calendar</CardTitle>
                <CardDescription>Organize your learning schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Plan your study sessions and track upcoming assessments.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="progress">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/apprentices/progress')}
            >
              <CardHeader>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>Track your apprenticeship milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <p>View your progress through your apprenticeship and qualification journey.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/apprentices/progress/off-the-job')}
            >
              <CardHeader>
                <Clock className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Off-the-Job Training</CardTitle>
                <CardDescription>20% off-the-job training record</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Record and track your off-the-job training hours to meet apprenticeship requirements.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="community">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/apprentices/mentorship')}
            >
              <CardHeader>
                <CardTitle>Mentorship</CardTitle>
                <CardDescription>Connect with experienced electricians</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Get guidance and support from experienced mentors in the electrical industry.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/apprentices/community')}
            >
              <CardHeader>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>Connect with other apprentices</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Ask questions, share knowledge, and connect with other electrical apprentices.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApprenticeHub;
