
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const StudentProgressPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Student Progress" 
          description="Track individual and group progress through qualifications and milestones"
        />
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search students..." 
              className="pl-8"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Class Overview</TabsTrigger>
            <TabsTrigger value="individual">Individual Progress</TabsTrigger>
            <TabsTrigger value="assessments">Recent Assessments</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Level 2 Group A</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Progress</span>
                        <span>67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>12 Students</span>
                      <span>Last updated: Today</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> 8 On Track
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 text-amber-500 border-amber-500">
                        <Clock className="h-3 w-3" /> 3 Behind
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 text-red-500 border-red-500">
                        <AlertTriangle className="h-3 w-3" /> 1 At Risk
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Level 2 Group B</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Progress</span>
                        <span>82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>14 Students</span>
                      <span>Last updated: Today</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> 12 On Track
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 text-amber-500 border-amber-500">
                        <Clock className="h-3 w-3" /> 2 Behind
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Level 3 Group A</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Progress</span>
                        <span>54%</span>
                      </div>
                      <Progress value={54} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>10 Students</span>
                      <span>Last updated: Yesterday</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> 5 On Track
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 text-amber-500 border-amber-500">
                        <Clock className="h-3 w-3" /> 4 Behind
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 text-red-500 border-red-500">
                        <AlertTriangle className="h-3 w-3" /> 1 At Risk
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Progress By Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { unit: "Unit 201 - Health and Safety", completion: 92 },
                    { unit: "Unit 202 - Electrical Science", completion: 78 },
                    { unit: "Unit 203 - Electrical Installations", completion: 65 },
                    { unit: "Unit 204 - Installation Methods", completion: 52 },
                  ].map((unit, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{unit.unit}</span>
                        <span>{unit.completion}%</span>
                      </div>
                      <Progress value={unit.completion} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="individual">
            <p className="text-muted-foreground mb-4">Select a student to view their detailed progress</p>
            {/* Individual student progress would go here */}
          </TabsContent>
          
          <TabsContent value="assessments">
            <p className="text-muted-foreground mb-4">Recent assessment results and upcoming tests</p>
            {/* Recent assessments content would go here */}
          </TabsContent>
          
          <TabsContent value="reports">
            <p className="text-muted-foreground mb-4">Generate and view detailed progress reports</p>
            {/* Reports content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default StudentProgressPage;
