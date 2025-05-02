
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const TeachingResourcesPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Teaching Resources"
          description="Access and manage your teaching materials, lesson plans and demonstration guides"
        />
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search resources..." 
              className="pl-8"
            />
          </div>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Upload New Resource
          </Button>
        </div>
        
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="level2">Level 2</TabsTrigger>
            <TabsTrigger value="level3">Level 3</TabsTrigger>
            <TabsTrigger value="am2">AM2</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Electrical Installation Theory",
                  type: "Presentation",
                  level: "Level 2",
                  date: "Updated 2 weeks ago",
                  icon: <FileText className="h-8 w-8 text-primary" />
                },
                {
                  title: "Health & Safety Guidelines",
                  type: "Document",
                  level: "All Levels",
                  date: "Updated 1 month ago",
                  icon: <FileText className="h-8 w-8 text-primary" />
                },
                {
                  title: "Practical Wiring Demonstration",
                  type: "Video",
                  level: "Level 2",
                  date: "Updated 3 weeks ago",
                  icon: <Video className="h-8 w-8 text-primary" />
                },
                {
                  title: "Fault Finding Exercise",
                  type: "Interactive",
                  level: "Level 3",
                  date: "Updated 1 week ago",
                  icon: <BookOpen className="h-8 w-8 text-primary" />
                },
                {
                  title: "Electrical Science Principles",
                  type: "Presentation",
                  level: "Level 2",
                  date: "Updated 2 months ago",
                  icon: <FileText className="h-8 w-8 text-primary" />
                },
              ].map((resource, index) => (
                <Card key={index} className="hover:border-primary/50 transition-all hover:shadow-md cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      {resource.icon}
                      <span className="text-xs px-2 py-1 bg-muted rounded-md">{resource.type}</span>
                    </div>
                    <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{resource.level}</span>
                      <span>{resource.date}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="level2">
            <p className="text-muted-foreground mb-4">Showing Level 2 resources only</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Level 2 specific resources would go here */}
              <Card className="hover:border-primary/50 transition-all hover:shadow-md cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <FileText className="h-8 w-8 text-primary" />
                    <span className="text-xs px-2 py-1 bg-muted rounded-md">Presentation</span>
                  </div>
                  <CardTitle className="text-lg mt-2">Electrical Installation Theory</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Level 2</span>
                    <span>Updated 2 weeks ago</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="level3">
            <p className="text-muted-foreground">Showing Level 3 resources only</p>
            {/* Level 3 specific content would go here */}
          </TabsContent>
          
          <TabsContent value="am2">
            <p className="text-muted-foreground">Showing AM2 resources only</p>
            {/* AM2 specific content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default TeachingResourcesPage;
