
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import UnitCard from "@/components/level2/UnitCard";
import GlassCard from "@/components/shared/GlassCard";
import { useDashboardController } from "@/hooks/useDashboardController";
import { BookOpen, Award, Users, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock user progress data - in a real app, this would come from a database
const mockUserProgress = {
  'ELEC2/01': { completed: 2, total: 5 },
  'ELEC2/04': { completed: 3, total: 8 },
  'ELEC2/05A': { completed: 1, total: 6 },
  'ELEC2/05B': { completed: 4, total: 7 },
  'ELEC2/08': { completed: 0, total: 5 },
};

const EALLevel2Page = () => {
  const navigate = useNavigate();
  const { isReady } = useDashboardController();
  const [activeTab, setActiveTab] = useState<string>("units");
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal');
  };

  // Calculate overall progress
  const totalCompleted = Object.values(mockUserProgress).reduce((sum, unit) => sum + unit.completed, 0);
  const totalSections = Object.values(mockUserProgress).reduce((sum, unit) => sum + unit.total, 0);
  const overallProgress = Math.round((totalCompleted / totalSections) * 100);

  return (
    <MainLayout>
      {isReady && (
        <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
          <PageHeader 
            title="EAL Level 2 Diploma in Electrical Installation"
            description="Qualification Number: 600/6724/X"
            customBackAction={handleBackClick}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
            {/* Course Overview Card */}
            <div className="lg:col-span-1">
              <GlassCard className="mb-6">
                <div className="p-4 pb-2">
                  <h2 className="text-xl font-semibold text-primary mb-4">Course Overview</h2>
                  
                  {/* Overall progress indicator */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-primary/70">Overall Progress</span>
                      <span className="text-sm font-medium text-primary">{overallProgress}%</span>
                    </div>
                    <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full rounded-full transition-all duration-500"
                        style={{ width: `${overallProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Quick stats */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 border-b border-primary/10">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-primary/80">Units Completed</span>
                      </div>
                      <span className="text-sm font-medium text-primary">0/5</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 border-b border-primary/10">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-primary/80">Assessments Passed</span>
                      </div>
                      <span className="text-sm font-medium text-primary">0/5</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 border-b border-primary/10">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-primary/80">Study Hours</span>
                      </div>
                      <span className="text-sm font-medium text-primary">12.5 hrs</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-primary/80">Study Groups</span>
                      </div>
                      <span className="text-sm font-medium text-primary">2 Active</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard>
                <div className="p-4 pb-3">
                  <h2 className="text-xl font-semibold text-primary mb-4">Qualification Details</h2>
                  <div className="space-y-3 text-sm">
                    <p className="text-primary/80">
                      <span className="font-medium">Learning Hours:</span> 486 GLH
                    </p>
                    <p className="text-primary/80">
                      <span className="font-medium">Total Qualification Time:</span> 502 hours
                    </p>
                    <p className="text-primary/80">
                      <span className="font-medium">Level:</span> 2
                    </p>
                    <p className="text-primary/80">
                      <span className="font-medium">Awarding Body:</span> EAL
                    </p>
                    <p className="text-primary/80">
                      <span className="font-medium">Qualification Type:</span> Diploma
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
            
            {/* Main content area */}
            <div className="lg:col-span-3">
              <Card className="overflow-hidden">
                <Tabs 
                  defaultValue="units" 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <div className="bg-secondary/50 border-b border-primary/10">
                    <TabsList className="bg-transparent h-12 w-full justify-start rounded-none px-6">
                      <TabsTrigger value="units" className="data-[state=active]:bg-background">
                        Mandatory Units
                      </TabsTrigger>
                      <TabsTrigger value="resources" className="data-[state=active]:bg-background">
                        Learning Resources
                      </TabsTrigger>
                      <TabsTrigger value="community" className="data-[state=active]:bg-background">
                        Community
                      </TabsTrigger>
                      <TabsTrigger value="schedule" className="data-[state=active]:bg-background">
                        Schedule
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="units" className="m-0">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <UnitCard
                          unitNumber="ELEC2/01"
                          title="Health and Safety in Electrical Installation"
                          description="Covers essential health and safety practices within the electrical installation environment. (48 GLH)"
                          path="/apprentices/study-materials/eal/level-2/health-safety"
                          progress={mockUserProgress['ELEC2/01']}
                        />
                        
                        <UnitCard
                          unitNumber="ELEC2/04"
                          title="Electrical Installation Theory and Technology"
                          description="Introduces the principles and technologies underpinning electrical installation work. (146 GLH)"
                          path="/apprentices/study-materials/eal/level-2/electrical-science"
                          progress={mockUserProgress['ELEC2/04']}
                        />
                        
                        <UnitCard
                          unitNumber="ELEC2/05A"
                          title="Electrical Installation Methods, Procedures and Requirements"
                          description="Focuses on standard methods and procedures for electrical installations, ensuring compliance with regulations. (59 GLH)"
                          path="/apprentices/study-materials/eal/level-2/installation-technology"
                          progress={mockUserProgress['ELEC2/05A']}
                        />
                        
                        <UnitCard
                          unitNumber="ELEC2/05B"
                          title="Electrical Installation Craft Skills"
                          description="Provides hands-on experience in practical electrical installation tasks, developing essential craft skills. (140 GLH)"
                          path="/apprentices/study-materials/eal/level-2/wiring-systems"
                          progress={mockUserProgress['ELEC2/05B']}
                        />
                        
                        <UnitCard
                          unitNumber="ELEC2/08"
                          title="Electrical Science and Principles"
                          description="Explores the fundamental scientific principles that form the basis of electrical theory and practice. (93 GLH)"
                          path="/apprentices/study-materials/eal/level-2/electrical-systems"
                          progress={mockUserProgress['ELEC2/08']}
                        />
                      </div>
                    </CardContent>
                  </TabsContent>
                  
                  <TabsContent value="resources" className="m-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Supplementary Learning Resources</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <Card className="bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                          <CardContent className="p-4 flex items-start">
                            <BookOpen className="h-8 w-8 text-primary mr-3 shrink-0" />
                            <div>
                              <h4 className="font-medium text-primary">EAL Level 2 Textbooks</h4>
                              <p className="text-sm text-primary/70 mt-1">Official EAL recommended reading materials and textbooks</p>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                          <CardContent className="p-4 flex items-start">
                            <Award className="h-8 w-8 text-primary mr-3 shrink-0" />
                            <div>
                              <h4 className="font-medium text-primary">Practice Assessments</h4>
                              <p className="text-sm text-primary/70 mt-1">Sample questions and practice tests for each unit</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-primary mb-4">Video Tutorials</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {["Circuit Theory Basics", "Safe Working Practices", "Wiring Techniques"].map((title, index) => (
                          <Card key={index} className="bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden">
                            <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                              <div className="h-12 w-12 text-primary/50">
                                {/* Play icon replaced with inline SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                              </div>
                            </div>
                            <CardContent className="p-3">
                              <h4 className="font-medium text-primary text-sm">{title}</h4>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </TabsContent>
                  
                  <TabsContent value="community" className="m-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Community & Discussion</h3>
                      <p className="text-primary/80 mb-4">Connect with fellow students studying EAL Level 2 qualifications.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                          <CardContent className="p-4">
                            <h4 className="font-medium text-primary">Join Study Groups</h4>
                            <p className="text-sm text-primary/70 mt-1">Connect with peers to study together and share resources</p>
                            <div className="mt-3 flex items-center">
                              <Users className="h-4 w-4 text-primary/60 mr-1" />
                              <span className="text-xs text-primary/60">8 active groups</span>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                          <CardContent className="p-4">
                            <h4 className="font-medium text-primary">Discussion Forums</h4>
                            <p className="text-sm text-primary/70 mt-1">Ask questions and participate in discussions about course topics</p>
                            <div className="mt-3 flex items-center">
                              <Users className="h-4 w-4 text-primary/60 mr-1" />
                              <span className="text-xs text-primary/60">245 active discussions</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </TabsContent>
                  
                  <TabsContent value="schedule" className="m-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Study Schedule</h3>
                      <p className="text-primary/80 mb-4">Recommended study plan for completing your qualification.</p>
                      
                      <div className="space-y-3">
                        {["Week 1-4: Health and Safety", "Week 5-12: Electrical Science", "Week 13-16: Installation Methods"].map((week, index) => (
                          <Card key={index} className="bg-secondary/30 border-primary/20">
                            <CardContent className="p-3 flex justify-between items-center">
                              <div>
                                <h4 className="font-medium text-primary text-sm">{week}</h4>
                                <p className="text-xs text-primary/70 mt-1">Focus on core concepts and practical applications</p>
                              </div>
                              <Calendar className="h-5 w-5 text-primary/70" />
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default EALLevel2Page;
