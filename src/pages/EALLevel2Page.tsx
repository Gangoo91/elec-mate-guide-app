import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import UnitCard from "@/components/level2/UnitCard";
import GlassCard from "@/components/shared/GlassCard";
import { useDashboardController } from "@/hooks/useDashboardController";
import { BookOpen, Award, Users, Calendar, Clock, BarChart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock user progress data - in a real app, this would come from a database
const mockUserProgress = {
  'ELEC2/01': { completed: 2, total: 5, timeSpent: 180, estimatedTime: 300 }, // 3h spent, 5h estimated
  'ELEC2/04': { completed: 3, total: 8, timeSpent: 240, estimatedTime: 480 }, // 4h spent, 8h estimated
  'ELEC2/05A': { completed: 1, total: 6, timeSpent: 60, estimatedTime: 360 },  // 1h spent, 6h estimated
  'ELEC2/05B': { completed: 4, total: 7, timeSpent: 270, estimatedTime: 420 }, // 4.5h spent, 7h estimated
  'ELEC2/08': { completed: 0, total: 5, timeSpent: 0, estimatedTime: 300 },    // 0h spent, 5h estimated
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
  
  // Calculate total training time
  const totalTrainingMinutes = Object.values(mockUserProgress).reduce((sum, unit) => sum + (unit.timeSpent || 0), 0);
  const totalTrainingHours = Math.floor(totalTrainingMinutes / 60);
  const totalTrainingMins = totalTrainingMinutes % 60;
  
  // Calculate estimated total time
  const totalEstimatedMinutes = Object.values(mockUserProgress).reduce((sum, unit) => sum + (unit.estimatedTime || 0), 0);
  const totalEstimatedHours = Math.floor(totalEstimatedMinutes / 60);

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
                        <Clock className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-primary/80">Off-the-Job Training</span>
                      </div>
                      <span className="text-sm font-medium text-primary">{totalTrainingHours}h {totalTrainingMins}m</span>
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
                    <div className="mt-4 pt-3 border-t border-primary/10">
                      <h3 className="font-medium mb-2 text-primary">Required Off-the-Job Training</h3>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-primary/70">Training Completed</span>
                        <span className="text-xs font-medium text-primary">
                          {totalTrainingHours}h / {totalEstimatedHours}h
                        </span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-green-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, (totalTrainingMinutes / totalEstimatedMinutes) * 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-primary/60 mt-2">
                        Apprenticeship standards require 20% of your contracted hours to be spent on off-the-job training.
                      </p>
                    </div>
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
                      <TabsTrigger value="training" className="data-[state=active]:bg-background">
                        Training Record
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
                  
                  <TabsContent value="training" className="m-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Off-the-Job Training Record</h3>
                      <p className="text-primary/80 mb-5">
                        Track your 20% off-the-job training hours for your apprenticeship. This record can be shared with your tutor.
                      </p>
                      
                      <Card className="bg-secondary/30 border-primary/20 mb-6">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-primary flex items-center">
                              <Clock className="h-4 w-4 mr-2" /> Training Summary
                            </h4>
                            <button className="text-xs text-primary underline">Export for Tutor</button>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-secondary/50 p-3 rounded-md text-center">
                              <div className="text-2xl font-bold text-primary">{totalTrainingHours}h {totalTrainingMins}m</div>
                              <div className="text-xs text-primary/70">Total Training Time</div>
                            </div>
                            
                            <div className="bg-secondary/50 p-3 rounded-md text-center">
                              <div className="text-2xl font-bold text-primary">12.5</div>
                              <div className="text-xs text-primary/70">Weekly Target (hrs)</div>
                            </div>
                            
                            <div className="bg-secondary/50 p-3 rounded-md text-center">
                              <div className="text-2xl font-bold text-primary">486</div>
                              <div className="text-xs text-primary/70">Required GLH</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <h4 className="font-medium text-primary mb-3">Training Records by Unit</h4>
                      <div className="space-y-3">
                        {Object.entries(mockUserProgress).map(([unitId, data]) => (
                          <Card key={unitId} className="bg-secondary/30 border-primary/20">
                            <CardContent className="p-3">
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-primary">{unitId}</div>
                                  <div className="text-xs text-primary/70">
                                    {Math.floor(data.timeSpent / 60)}h {data.timeSpent % 60}m logged
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-xs text-primary/70">Last activity: 3 days ago</div>
                                  <button className="text-xs text-primary underline mt-1">Add time manually</button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="mt-6 flex justify-between items-center">
                        <h4 className="font-medium text-primary">Training Graph</h4>
                        <div className="text-xs text-primary/70">
                          <select className="bg-secondary border border-primary/20 rounded p-1">
                            <option>Last 30 days</option>
                            <option>Last 3 months</option>
                            <option>All time</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="h-64 bg-secondary/30 border border-primary/20 rounded-md mt-3 flex items-center justify-center">
                        <div className="text-primary/50 flex flex-col items-center">
                          <BarChart className="h-12 w-12 mb-2" />
                          <span>Training activity graph will appear here</span>
                        </div>
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
