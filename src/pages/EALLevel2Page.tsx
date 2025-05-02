
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import UnitCard from "@/components/level2/UnitCard";
import GlassCard from "@/components/shared/GlassCard";
import { useDashboardController } from "@/hooks/useDashboardController";
import { BookOpen, Award, Users, Calendar, Clock, BarChart, BookText, FileText, Play, Hammer } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

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
  const isMobile = useIsMobile();
  
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

  // Resources for quick access
  const resourceCategories = [
    {
      title: "Study Guides",
      items: [
        { title: "Health & Safety Basics", icon: <BookText className="h-4 w-4" />, format: "PDF", size: "1.2 MB" },
        { title: "Electrical Theory", icon: <BookText className="h-4 w-4" />, format: "PDF", size: "2.4 MB" }
      ]
    },
    {
      title: "Video Tutorials",
      items: [
        { title: "Safe Isolation Procedure", icon: <Play className="h-4 w-4" />, format: "Video", size: "15 min" },
        { title: "Circuit Testing", icon: <Play className="h-4 w-4" />, format: "Video", size: "12 min" }
      ]
    },
    {
      title: "Practice Worksheets",
      items: [
        { title: "Wiring Diagrams", icon: <FileText className="h-4 w-4" />, format: "Worksheet", size: "8 pages" },
        { title: "Calculations", icon: <FileText className="h-4 w-4" />, format: "Worksheet", size: "5 pages" }
      ]
    }
  ];

  return (
    <MainLayout>
      {isReady && (
        <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
          <PageHeader 
            title="EAL Level 2 Diploma in Electrical Installation"
            description="Qualification Number: 600/6724/X"
            customBackAction={handleBackClick}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Progress Summary Card - Wider on mobile, side panel on desktop */}
            <div className="lg:col-span-3 mb-2">
              <GlassCard>
                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <h2 className="text-lg font-semibold text-primary mb-1">Your Progress</h2>
                      <p className="text-sm text-primary/70">Continue your journey through EAL Level 2</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        size="sm" 
                        className="text-xs"
                        onClick={() => navigate('/apprentices/study-materials/eal/assessment')}
                      >
                        Practice Tests
                      </Button>
                      <Button 
                        size="sm" 
                        className="text-xs"
                        variant="outline"
                        onClick={() => navigate('/apprentices/study-materials/eal/level-2/installation-methods')}
                      >
                        Continue Learning
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <div className="bg-secondary/30 p-3 rounded-md text-center">
                      <div className="text-2xl font-bold text-primary">{overallProgress}%</div>
                      <div className="text-xs text-primary/70">Course Completion</div>
                    </div>
                    
                    <div className="bg-secondary/30 p-3 rounded-md text-center">
                      <div className="text-2xl font-bold text-primary">{totalCompleted}/{totalSections}</div>
                      <div className="text-xs text-primary/70">Units Completed</div>
                    </div>
                    
                    <div className="bg-secondary/30 p-3 rounded-md text-center">
                      <div className="text-2xl font-bold text-primary">{totalTrainingHours}h {totalTrainingMins}m</div>
                      <div className="text-xs text-primary/70">Training Time</div>
                    </div>
                    
                    <div className="bg-secondary/30 p-3 rounded-md text-center">
                      <div className="text-2xl font-bold text-primary">0/5</div>
                      <div className="text-xs text-primary/70">Assessments Passed</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            
            {/* Main content area - Units */}
            <div className="lg:col-span-2">
              <Card>
                {isMobile ? (
                  <div className="p-4">
                    <select 
                      className="w-full p-2 bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] rounded-md mb-4"
                      value={activeTab}
                      onChange={(e) => setActiveTab(e.target.value)}
                    >
                      <option value="units">Mandatory Units</option>
                      <option value="resources">Learning Resources</option>
                      <option value="community">Community</option>
                      <option value="training">Training Record</option>
                    </select>
                    
                    {activeTab === "units" && (
                      <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-primary">Mandatory Units</h2>
                        <div className="grid grid-cols-1 gap-4">
                          <UnitCard
                            unitNumber="ELEC2/01"
                            title="Health and Safety in Electrical Installation"
                            description="Essential health and safety practices for electrical installations. (48 GLH)"
                            path="/apprentices/study-materials/eal/level-2/health-safety"
                            progress={mockUserProgress['ELEC2/01']}
                          />
                          
                          <UnitCard
                            unitNumber="ELEC2/04"
                            title="Electrical Installation Theory and Technology"
                            description="Principles and technologies of electrical installation. (146 GLH)"
                            path="/apprentices/study-materials/eal/level-2/electrical-theory"
                            progress={mockUserProgress['ELEC2/04']}
                          />
                          
                          <UnitCard
                            unitNumber="ELEC2/05A"
                            title="Electrical Installation Methods, Procedures and Requirements"
                            description="Standard methods and procedures for electrical installations, ensuring compliance. (59 GLH)"
                            path="/apprentices/study-materials/eal/level-2/installation-methods"
                            progress={mockUserProgress['ELEC2/05A']}
                          />
                          
                          <UnitCard
                            unitNumber="ELEC2/05B"
                            title="Electrical Installation Craft Skills"
                            description="Practical skills for electrical installation work. (140 GLH)"
                            path="/apprentices/study-materials/eal/level-2/craft-skills"
                            progress={mockUserProgress['ELEC2/05B']}
                          />
                          
                          <UnitCard
                            unitNumber="ELEC2/08"
                            title="Electrical Science and Principles"
                            description="Scientific principles that form the basis of electrical theory and practice. (93 GLH)"
                            path="/apprentices/study-materials/eal/level-2/electrical-science"
                            progress={mockUserProgress['ELEC2/08']}
                          />
                          
                          <Button 
                            variant="outline" 
                            className="w-full mt-2"
                            onClick={() => setActiveTab("resources")}
                          >
                            View Learning Resources
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === "resources" && (
                      <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-primary">Learning Resources</h2>
                        
                        {resourceCategories.map((category, idx) => (
                          <div key={idx} className="mb-4">
                            <h3 className="text-base font-medium text-primary mb-2">{category.title}</h3>
                            <div className="space-y-2">
                              {category.items.map((item, i) => (
                                <Card key={i} className="bg-secondary/30 border-primary/20">
                                  <CardContent className="p-3">
                                    <div className="flex items-start gap-2">
                                      <div className="mt-0.5">
                                        {item.icon}
                                      </div>
                                      <div>
                                        <h4 className="font-medium text-primary text-sm">{item.title}</h4>
                                        <div className="flex items-center text-xs text-primary/60 mt-0.5 gap-2">
                                          <span className="bg-primary/10 px-1.5 py-0.5 rounded">{item.format}</span>
                                          <span>{item.size}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        <Button 
                          variant="outline" 
                          className="w-full mt-2"
                          onClick={() => setActiveTab("units")}
                        >
                          Back to Units
                        </Button>
                      </div>
                    )}
                    
                    {activeTab === "community" && (
                      <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-primary">Community & Discussion</h2>
                        <p className="text-sm text-primary/70">Connect with fellow students studying EAL Level 2</p>
                        
                        <Card className="bg-secondary/30 border-primary/20">
                          <CardContent className="p-4">
                            <h3 className="font-medium text-primary">Join Study Groups</h3>
                            <p className="text-xs text-primary/70 mt-1">Connect with peers studying EAL Level 2</p>
                            <Button size="sm" className="mt-3 w-full">Find Groups</Button>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-secondary/30 border-primary/20">
                          <CardContent className="p-4">
                            <h3 className="font-medium text-primary">Discussion Forums</h3>
                            <p className="text-xs text-primary/70 mt-1">Ask questions and share insights</p>
                            <Button size="sm" className="mt-3 w-full">View Forums</Button>
                          </CardContent>
                        </Card>
                        
                        <Button 
                          variant="outline" 
                          className="w-full mt-2"
                          onClick={() => setActiveTab("units")}
                        >
                          Back to Units
                        </Button>
                      </div>
                    )}
                    
                    {activeTab === "training" && (
                      <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-primary">Training Record</h2>
                        <p className="text-sm text-primary/70">Track your off-the-job training hours</p>
                        
                        <div className="bg-secondary/30 p-3 rounded-md text-center">
                          <div className="text-2xl font-bold text-primary">{totalTrainingHours}h {totalTrainingMins}m</div>
                          <div className="text-xs text-primary/70">Total Training Time</div>
                        </div>
                        
                        <h3 className="text-base font-medium text-primary mt-4 mb-2">Recent Activity</h3>
                        
                        {Object.entries(mockUserProgress)
                          .filter(([_, data]) => data.timeSpent > 0)
                          .slice(0, 3)
                          .map(([unitId, data]) => (
                            <Card key={unitId} className="bg-secondary/30 border-primary/20 mb-2">
                              <CardContent className="p-3">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <div className="font-medium text-primary text-sm">{unitId}</div>
                                    <div className="text-xs text-primary/70">
                                      {Math.floor(data.timeSpent / 60)}h {data.timeSpent % 60}m logged
                                    </div>
                                  </div>
                                  <div className="text-right text-xs text-primary/70">
                                    Last activity: 3 days ago
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        
                        <Button 
                          variant="outline" 
                          className="w-full mt-2"
                          onClick={() => setActiveTab("units")}
                        >
                          Back to Units
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Tabs defaultValue="units" value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <UnitCard
                            unitNumber="ELEC2/01"
                            title="Health and Safety in Electrical Installation"
                            description="Essential health and safety practices within the electrical installation environment. (48 GLH)"
                            path="/apprentices/study-materials/eal/level-2/health-safety"
                            progress={mockUserProgress['ELEC2/01']}
                          />
                          
                          <UnitCard
                            unitNumber="ELEC2/04"
                            title="Electrical Installation Theory and Technology"
                            description="Introduces the principles and technologies underpinning electrical installation work. (146 GLH)"
                            path="/apprentices/study-materials/eal/level-2/electrical-theory"
                            progress={mockUserProgress['ELEC2/04']}
                          />
                          
                          <UnitCard
                            unitNumber="ELEC2/05A"
                            title="Electrical Installation Methods, Procedures and Requirements"
                            description="Focuses on standard methods and procedures for electrical installations, ensuring compliance with regulations. (59 GLH)"
                            path="/apprentices/study-materials/eal/level-2/installation-methods"
                            progress={mockUserProgress['ELEC2/05A']}
                          />
                          
                          <UnitCard
                            unitNumber="ELEC2/05B"
                            title="Electrical Installation Craft Skills"
                            description="Provides hands-on experience in practical electrical installation tasks, developing essential craft skills. (140 GLH)"
                            path="/apprentices/study-materials/eal/level-2/craft-skills"
                            progress={mockUserProgress['ELEC2/05B']}
                          />
                          
                          <UnitCard
                            unitNumber="ELEC2/08"
                            title="Electrical Science and Principles"
                            description="Explores the fundamental scientific principles that form the basis of electrical theory and practice. (93 GLH)"
                            path="/apprentices/study-materials/eal/level-2/electrical-science"
                            progress={mockUserProgress['ELEC2/08']}
                          />
                        </div>
                      </CardContent>
                    </TabsContent>
                    
                    <TabsContent value="resources" className="m-0">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {resourceCategories.map((category, idx) => (
                            <div key={idx}>
                              <h3 className="text-lg font-semibold text-primary mb-3">{category.title}</h3>
                              <div className="space-y-3">
                                {category.items.map((item, i) => (
                                  <Card key={i} className="bg-secondary/30 border-primary/20 hover:border-primary/40 transition-all duration-200 cursor-pointer">
                                    <CardContent className="p-4">
                                      <div className="flex items-start gap-3">
                                        <div className="p-2 bg-primary/10 rounded-md">
                                          {item.icon}
                                        </div>
                                        <div>
                                          <h4 className="font-medium text-primary">{item.title}</h4>
                                          <div className="flex items-center text-xs text-primary/60 mt-1 gap-2">
                                            <span className="bg-primary/10 px-1.5 py-0.5 rounded">{item.format}</span>
                                            <span>{item.size}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 p-4 bg-secondary/30 rounded-md border border-primary/10">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-md">
                              <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium text-primary">EAL Level 2 Official Textbook</h3>
                              <p className="text-sm text-primary/70 mt-1">Comprehensive study material covering all mandatory units</p>
                            </div>
                            <Button className="ml-auto" size="sm">Access</Button>
                          </div>
                        </div>
                      </CardContent>
                    </TabsContent>
                    
                    <TabsContent value="community" className="m-0">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="bg-secondary/30 border-primary/20 hover:border-primary/40 transition-all duration-200">
                            <CardContent className="p-5">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <Users className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="font-medium text-primary">EAL Level 2 Study Groups</h3>
                              </div>
                              <p className="text-sm text-primary/70 mb-4">Join a group of fellow apprentices studying for EAL Level 2 qualifications.</p>
                              <div className="flex items-center justify-between mt-2">
                                <div className="text-xs text-primary/60">
                                  8 active groups
                                </div>
                                <Button size="sm">Join a Group</Button>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-secondary/30 border-primary/20 hover:border-primary/40 transition-all duration-200">
                            <CardContent className="p-5">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <Calendar className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="font-medium text-primary">Upcoming Study Sessions</h3>
                              </div>
                              <div className="space-y-3 mb-4">
                                <div className="p-2 bg-secondary/50 rounded-md">
                                  <div className="text-sm font-medium text-primary">Installation Methods Q&A</div>
                                  <div className="text-xs text-primary/70 mt-1">Tomorrow, 7:00 PM</div>
                                </div>
                                <div className="p-2 bg-secondary/50 rounded-md">
                                  <div className="text-sm font-medium text-primary">Exam Prep Session</div>
                                  <div className="text-xs text-primary/70 mt-1">Friday, 6:30 PM</div>
                                </div>
                              </div>
                              <Button size="sm">View Calendar</Button>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-secondary/30 border-primary/20 hover:border-primary/40 transition-all duration-200 md:col-span-2">
                            <CardContent className="p-5">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <BookText className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="font-medium text-primary">Discussion Forums</h3>
                              </div>
                              <p className="text-sm text-primary/70 mb-4">Participate in discussions about EAL Level 2 topics and get help from peers.</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="p-2 bg-secondary/50 rounded-md">
                                  <div className="text-sm font-medium text-primary">Understanding Circuit Diagrams</div>
                                  <div className="flex items-center justify-between text-xs text-primary/70 mt-1">
                                    <span>15 replies</span>
                                    <span>Last post: 2 hours ago</span>
                                  </div>
                                </div>
                                <div className="p-2 bg-secondary/50 rounded-md">
                                  <div className="text-sm font-medium text-primary">Practical Assessment Tips</div>
                                  <div className="flex items-center justify-between text-xs text-primary/70 mt-1">
                                    <span>32 replies</span>
                                    <span>Last post: Yesterday</span>
                                  </div>
                                </div>
                              </div>
                              <Button size="sm" className="mt-4">View All Discussions</Button>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </TabsContent>
                    
                    <TabsContent value="training" className="m-0">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-primary">Off-the-Job Training Record</h3>
                          <Button size="sm" variant="outline">Export for Tutor</Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-secondary/30 p-4 rounded-md text-center">
                            <div className="text-2xl font-bold text-primary">{totalTrainingHours}h {totalTrainingMins}m</div>
                            <div className="text-xs text-primary/70">Total Training Time</div>
                          </div>
                          
                          <div className="bg-secondary/30 p-4 rounded-md text-center">
                            <div className="text-2xl font-bold text-primary">12.5</div>
                            <div className="text-xs text-primary/70">Weekly Target (hrs)</div>
                          </div>
                          
                          <div className="bg-secondary/30 p-4 rounded-md text-center">
                            <div className="text-2xl font-bold text-primary">486</div>
                            <div className="text-xs text-primary/70">Required GLH</div>
                          </div>
                        </div>
                        
                        <h4 className="font-medium text-primary mb-3">Training by Unit</h4>
                        <div className="space-y-2 mb-6">
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
                                  <div>
                                    <Button size="sm" variant="outline" className="h-7 text-xs">Add time</Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        
                        <Card className="bg-secondary/30 border-primary/20 mb-4">
                          <CardContent className="p-4">
                            <h4 className="font-medium text-primary mb-2">Weekly Training Summary</h4>
                            <div className="h-32 bg-secondary/20 flex items-center justify-center rounded-md">
                              <div className="text-primary/40 flex flex-col items-center">
                                <BarChart className="h-8 w-8 mb-2" />
                                <span className="text-sm">Training activity chart</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <div className="flex justify-end">
                          <Button>Record Training Time</Button>
                        </div>
                      </CardContent>
                    </TabsContent>
                  </Tabs>
                )}
              </Card>
            </div>
            
            {/* Sidebar - Info cards */}
            <div className="lg:col-span-1">
              <Card className="mb-4">
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold text-primary mb-3">Qualification Details</h2>
                  <div className="space-y-2 text-sm">
                    <p className="text-primary/80 flex justify-between">
                      <span className="font-medium">Total Qualification Time:</span>
                      <span>502 hours</span>
                    </p>
                    <p className="text-primary/80 flex justify-between">
                      <span className="font-medium">Guided Learning Hours:</span>
                      <span>486 GLH</span>
                    </p>
                    <p className="text-primary/80 flex justify-between">
                      <span className="font-medium">Level:</span>
                      <span>2</span>
                    </p>
                    <p className="text-primary/80 flex justify-between">
                      <span className="font-medium">Awarding Body:</span>
                      <span>EAL</span>
                    </p>
                    <p className="text-primary/80 flex justify-between">
                      <span className="font-medium">Qualification Type:</span>
                      <span>Diploma</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-4">
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold text-primary mb-3">Mandatory Units</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 hover:bg-secondary/20 rounded-md transition-colors">
                      <span className="text-sm text-primary/90">ELEC2/01</span>
                      <span className="text-xs text-primary/70">48 GLH</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-secondary/20 rounded-md transition-colors">
                      <span className="text-sm text-primary/90">ELEC2/04</span>
                      <span className="text-xs text-primary/70">146 GLH</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-secondary/20 rounded-md transition-colors">
                      <span className="text-sm text-primary/90">ELEC2/05A</span>
                      <span className="text-xs text-primary/70">59 GLH</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-secondary/20 rounded-md transition-colors">
                      <span className="text-sm text-primary/90">ELEC2/05B</span>
                      <span className="text-xs text-primary/70">140 GLH</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-secondary/20 rounded-md transition-colors">
                      <span className="text-sm text-primary/90">ELEC2/08</span>
                      <span className="text-xs text-primary/70">93 GLH</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-4">
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold text-primary mb-3">Key Resources</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 hover:bg-secondary/20 rounded-md cursor-pointer transition-colors">
                      <div className="p-1.5 bg-primary/10 rounded">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-primary/90">EAL Learner Guide</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 hover:bg-secondary/20 rounded-md cursor-pointer transition-colors">
                      <div className="p-1.5 bg-primary/10 rounded">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-primary/90">Assessment Guide</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 hover:bg-secondary/20 rounded-md cursor-pointer transition-colors">
                      <div className="p-1.5 bg-primary/10 rounded">
                        <Hammer className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-primary/90">Practical Workbook</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    View All Resources
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold text-primary mb-3">Support</h2>
                  <div className="space-y-3 text-sm">
                    <p className="text-primary/80">
                      Need help with your EAL Level 2 studies?
                    </p>
                    <div className="grid grid-cols-1 gap-2 mt-2">
                      <Button size="sm" variant="outline" className="w-full justify-start">
                        <Users className="h-4 w-4 mr-2" />
                        Find a Study Group
                      </Button>
                      <Button size="sm" variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Request Tutor Support
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default EALLevel2Page;
