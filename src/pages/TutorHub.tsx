
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users, Calendar, CheckSquare, BookOpen, School } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TutorHub = () => {
  const [activeTab, setActiveTab] = useState('teaching');
  const navigate = useNavigate();
  
  console.log("TutorHub - Component loaded");
  
  const handleCardClick = (path: string) => {
    console.log("TutorHub - Navigating to:", path);
    navigate(path);
  };

  return (
    <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Tutor Hub</h1>
        <p className="text-muted-foreground">Manage student progress, create assessments, and access teaching resources</p>
      </div>

      <Tabs 
        defaultValue="teaching" 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-3 h-auto">
          <TabsTrigger value="teaching">Teaching Resources</TabsTrigger>
          <TabsTrigger value="students">Student Management</TabsTrigger>
          <TabsTrigger value="assessments">Assessments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="teaching" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all" 
              onClick={() => handleCardClick('/tutors/teaching-resources')}
            >
              <CardHeader>
                <GraduationCap className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Teaching Resources</CardTitle>
                <CardDescription>Access curriculum materials</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Access your teaching materials, lesson plans, and presentation slides.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/tutors/lesson-plans')}
            >
              <CardHeader>
                <School className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Lesson Plans</CardTitle>
                <CardDescription>Structured teaching guides</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Access and customize lesson plans for Level 2 and Level 3 qualifications.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/tutors/demonstration-guides')}
            >
              <CardHeader>
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Demonstration Guides</CardTitle>
                <CardDescription>Practical teaching aids</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Step-by-step guides for demonstrating electrical concepts and techniques.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="students">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/tutors/student-progress')}
            >
              <CardHeader>
                <CardTitle>Student Progress</CardTitle>
                <CardDescription>Track apprentice development</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Monitor individual and group progress through qualifications and milestones.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/tutors/off-the-job-monitoring')}
            >
              <CardHeader>
                <CheckSquare className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Off-the-Job Hours</CardTitle>
                <CardDescription>Monitor training requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Monitor and verify apprentice off-the-job training hours and activities.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/tutors/class-management')}
            >
              <CardHeader>
                <Users className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Class Management</CardTitle>
                <CardDescription>Organize learning groups</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Create and manage student groups, schedule sessions and track attendance.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="assessments">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/tutors/create-assessments')}
            >
              <CardHeader>
                <CardTitle>Create Assessments</CardTitle>
                <CardDescription>Build custom tests and quizzes</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Create formative and summative assessments for your students.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/tutors/grade-assessments')}
            >
              <CardHeader>
                <CardTitle>Grade Assessments</CardTitle>
                <CardDescription>Review and mark student work</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Access, review, and provide feedback on student assessments.</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => handleCardClick('/tutors/assessment-calendar')}
            >
              <CardHeader>
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Assessment Calendar</CardTitle>
                <CardDescription>Schedule and manage deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Plan and organize assessment schedules for different student groups.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TutorHub;
