
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Copy, FileText, Star, Trash2, PenSquare } from "lucide-react";

const CreateAssessmentsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Create Assessments" 
          description="Build custom tests and quizzes for your students"
        />
        
        <div className="flex flex-wrap gap-4 mb-8">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Assessment
          </Button>
          <Button variant="outline">
            <Copy className="mr-2 h-4 w-4" />
            Duplicate Existing
          </Button>
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Import Questions
          </Button>
        </div>
        
        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recent">Recent Assessments</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recent" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Level 2 Unit 201 - Health & Safety Final Exam",
                  type: "Summative Assessment",
                  questions: 25,
                  duration: "60 minutes",
                  dateCreated: "Created 2 days ago",
                  status: "Published"
                },
                {
                  title: "Electric Circuit Theory Quiz",
                  type: "Formative Assessment",
                  questions: 15,
                  duration: "30 minutes",
                  dateCreated: "Created 1 week ago",
                  status: "Draft"
                },
                {
                  title: "Practical Wiring Assessment",
                  type: "Practical Assessment",
                  questions: 5,
                  duration: "120 minutes",
                  dateCreated: "Created 3 days ago",
                  status: "Published"
                },
                {
                  title: "Electrical Regulations Test",
                  type: "Formative Assessment",
                  questions: 20,
                  duration: "45 minutes",
                  dateCreated: "Created 5 days ago",
                  status: "Draft"
                }
              ].map((assessment, index) => (
                <Card key={index} className="hover:border-primary/50 transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant={assessment.status === "Published" ? "default" : "outline"}>
                        {assessment.status}
                      </Badge>
                      {assessment.status === "Published" && (
                        <Button variant="ghost" size="icon">
                          <Star className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <CardTitle className="text-lg">{assessment.title}</CardTitle>
                    <CardDescription>{assessment.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Questions:</p>
                        <p>{assessment.questions}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration:</p>
                        <p>{assessment.duration}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-muted-foreground">{assessment.dateCreated}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <PenSquare className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      {assessment.status === "Draft" ? (
                        <Button size="sm" className="flex-1">
                          Publish
                        </Button>
                      ) : (
                        <Button variant="destructive" size="sm" className="flex-none w-10 px-0">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="drafts">
            <p className="text-muted-foreground mb-4">Your draft assessments</p>
            {/* Draft assessments content would go here */}
          </TabsContent>
          
          <TabsContent value="published">
            <p className="text-muted-foreground mb-4">Your published assessments</p>
            {/* Published assessments content would go here */}
          </TabsContent>
          
          <TabsContent value="templates">
            <p className="text-muted-foreground mb-4">Assessment templates you can use</p>
            {/* Templates content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

// Import the Badge component at the top
import { Badge } from "@/components/ui/badge";

export default CreateAssessmentsPage;
