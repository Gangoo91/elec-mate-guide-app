
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { School, Plus, Calendar, Clock, Edit, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LessonPlansPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Lesson Plans" 
          description="Create and manage structured teaching guides for your classes"
          actions={
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Plan
            </Button>
          }
        />
        
        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Lessons</TabsTrigger>
            <TabsTrigger value="recent">Recently Used</TabsTrigger>
            <TabsTrigger value="all">All Plans</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4">
            {[
              {
                title: "Introduction to Electrical Theory",
                date: "Tomorrow, 9:00 AM",
                group: "Level 2 Group A",
                duration: "2 hours",
                objectives: "Understanding basic electrical principles, Ohm's law, and circuit components",
                resources: "Textbook Ch. 3, Handout #12, Circuit Diagrams",
              },
              {
                title: "Practical Wiring Techniques",
                date: "Wednesday, 1:30 PM",
                group: "Level 2 Group B",
                duration: "3 hours",
                objectives: "Learn cable selection, cutting, and installation practices",
                resources: "Toolkit, Practice boards, Safety equipment",
              },
              {
                title: "Advanced Circuit Design",
                date: "Friday, 10:00 AM",
                group: "Level 3 Group A",
                duration: "2.5 hours",
                objectives: "Complex circuit analysis, fault finding, system design",
                resources: "Digital multimeter, Circuit simulation software",
              },
            ].map((plan, index) => (
              <Card key={index} className="hover:border-primary/50 transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{plan.title}</CardTitle>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" /> Edit
                    </Button>
                  </div>
                  <div className="flex items-center text-muted-foreground gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{plan.date}</span>
                    </div>
                    <div className="flex items-center">
                      <School className="h-4 w-4 mr-1" />
                      <span>{plan.group}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{plan.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Learning Objectives:</h4>
                      <p className="text-muted-foreground text-sm">{plan.objectives}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Resources Needed:</h4>
                      <p className="text-muted-foreground text-sm">{plan.resources}</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Export PDF
                      </Button>
                      <Button size="sm">
                        View Full Plan
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="recent">
            <p className="text-muted-foreground mb-4">Your recently used lesson plans</p>
            {/* Recent lessons content would go here */}
          </TabsContent>
          
          <TabsContent value="all">
            <p className="text-muted-foreground mb-4">All your lesson plans</p>
            {/* All lessons content would go here */}
          </TabsContent>
          
          <TabsContent value="templates">
            <p className="text-muted-foreground mb-4">Lesson plan templates you can use</p>
            {/* Templates content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default LessonPlansPage;
