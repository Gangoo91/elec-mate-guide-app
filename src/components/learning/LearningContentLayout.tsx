
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, CheckCircle, Clock, ArrowLeft, ArrowRight, 
  User, MessageSquare, Download
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface LearningContentLayoutProps {
  unitNumber: string;
  unitTitle: string;
  unitDescription?: string;
  backPath: string;
  children: React.ReactNode;
  progress?: {
    completed: number;
    total: number;
    timeSpent: number;
    estimatedTime?: number;
  };
  sections?: {
    id: string;
    title: string;
    isCompleted: boolean;
  }[];
  nextSection?: {
    title: string;
    path: string;
  };
  prevSection?: {
    title: string;
    path: string;
  };
  onTimeUpdate?: (minutes: number) => void;
}

const LearningContentLayout: React.FC<LearningContentLayoutProps> = ({
  unitNumber,
  unitTitle,
  unitDescription,
  backPath,
  children,
  progress,
  sections = [],
  nextSection,
  prevSection,
  onTimeUpdate
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("content");
  const [sessionStartTime, setSessionStartTime] = useState<number>(Date.now());
  
  const handleBackClick = () => {
    navigate(backPath);
    recordTimeSpent();
  };

  const navigateToSection = (path: string) => {
    navigate(path);
    recordTimeSpent();
  };

  // Record time spent when leaving the page
  const recordTimeSpent = () => {
    if (onTimeUpdate) {
      const minutes = Math.round((Date.now() - sessionStartTime) / 60000);
      if (minutes > 0) {
        onTimeUpdate(minutes);
        toast({
          title: "Learning time recorded",
          description: `${minutes} minutes added to your training record`,
        });
      }
    }
  };

  // For window unload/navigation
  React.useEffect(() => {
    const handleBeforeUnload = () => {
      recordTimeSpent();
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      recordTimeSpent();
    };
  }, [sessionStartTime]);

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={`${unitNumber} - ${unitTitle}`}
          description={unitDescription || ''}
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-secondary border-primary/20 mb-6">
              <CardContent className="p-5">
                <h3 className="text-lg font-medium text-primary mb-3 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" /> Unit Progress
                </h3>
                
                {progress && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-primary/70">Completion</span>
                      <span className="text-sm font-medium text-primary">
                        {progress.completed}/{progress.total}
                      </span>
                    </div>
                    <Progress 
                      value={(progress.completed / progress.total) * 100} 
                      className="h-2"
                    />
                  </div>
                )}
                
                {progress?.timeSpent !== undefined && (
                  <div className="flex items-center justify-between p-2 border-t border-primary/10 mb-2">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-primary/60 mr-2" />
                      <span className="text-sm text-primary/60">Time spent</span>
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {Math.floor(progress.timeSpent / 60)}h {progress.timeSpent % 60}m
                    </span>
                  </div>
                )}

                {progress?.estimatedTime !== undefined && (
                  <div className="flex items-center justify-between p-2 border-b border-primary/10">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-primary/60 mr-2" />
                      <span className="text-sm text-primary/60">Estimated time</span>
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {Math.floor(progress.estimatedTime / 60)}h {progress.estimatedTime % 60}m
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {sections.length > 0 && (
              <Card className="bg-secondary border-primary/20">
                <CardContent className="p-5">
                  <h3 className="text-lg font-medium text-primary mb-3">Unit Sections</h3>
                  <div className="space-y-2">
                    {sections.map((section) => (
                      <div 
                        key={section.id} 
                        className="flex items-center p-2 rounded-md hover:bg-primary/5 transition-colors cursor-pointer"
                      >
                        {section.isCompleted ? (
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        ) : (
                          <div className="h-4 w-4 border rounded-full border-primary/30 mr-2" />
                        )}
                        <span className={`text-sm ${section.isCompleted ? 'text-primary/80' : 'text-primary/60'}`}>
                          {section.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-3">
            <Card className="bg-secondary border-primary/20">
              <Tabs defaultValue="content" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="bg-primary/10 w-full justify-start p-0">
                  <TabsTrigger value="content" className="data-[state=active]:bg-background rounded-none py-3 px-4">
                    <BookOpen className="h-4 w-4 mr-2" /> Content
                  </TabsTrigger>
                  <TabsTrigger value="discussion" className="data-[state=active]:bg-background rounded-none py-3 px-4">
                    <MessageSquare className="h-4 w-4 mr-2" /> Discussion
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="data-[state=active]:bg-background rounded-none py-3 px-4">
                    <Download className="h-4 w-4 mr-2" /> Resources
                  </TabsTrigger>
                </TabsList>
                
                <CardContent className="p-6">
                  <TabsContent value="content" className="m-0">
                    {children}
                    
                    {/* Navigation */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-primary/10">
                      {prevSection ? (
                        <Button 
                          variant="outline" 
                          onClick={() => navigateToSection(prevSection.path)}
                          className="flex items-center"
                        >
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          {prevSection.title}
                        </Button>
                      ) : (
                        <div></div>
                      )}
                      
                      {nextSection && (
                        <Button 
                          onClick={() => navigateToSection(nextSection.path)} 
                          className="flex items-center"
                        >
                          {nextSection.title}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="discussion" className="m-0">
                    <div className="bg-primary/5 rounded-lg p-4 text-center">
                      <User className="h-12 w-12 mx-auto text-primary/40 mb-3" />
                      <h3 className="text-lg font-medium text-primary mb-2">Join the discussion</h3>
                      <p className="text-sm text-primary/70 mb-4">
                        Connect with other learners to discuss this unit and ask questions.
                      </p>
                      <Button className="w-full sm:w-auto">
                        Start a discussion
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="resources" className="m-0">
                    <div className="bg-primary/5 rounded-lg p-4 text-center">
                      <Download className="h-12 w-12 mx-auto text-primary/40 mb-3" />
                      <h3 className="text-lg font-medium text-primary mb-2">Learning Resources</h3>
                      <p className="text-sm text-primary/70 mb-4">
                        Download worksheets, reference guides and other learning materials.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <Button variant="outline" className="flex items-center justify-center">
                          <Download className="h-4 w-4 mr-2" />
                          Unit Worksheet
                        </Button>
                        <Button variant="outline" className="flex items-center justify-center">
                          <Download className="h-4 w-4 mr-2" />
                          Reference Guide
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LearningContentLayout;
