
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Play, CheckSquare, ArrowRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface InteractiveLearningModuleProps {
  title: string;
  description?: string;
  theory: React.ReactNode;
  examples?: React.ReactNode;
  practice?: React.ReactNode;
  assessment?: React.ReactNode;
  onComplete?: () => void;
}

const InteractiveLearningModule = ({
  title,
  description,
  theory,
  examples,
  practice,
  assessment,
  onComplete
}: InteractiveLearningModuleProps) => {
  const [activeTab, setActiveTab] = useState("theory");
  const [isTheoryCompleted, setIsTheoryCompleted] = useState(false);
  const [isExamplesCompleted, setIsExamplesCompleted] = useState(false);
  const [isPracticeCompleted, setIsPracticeCompleted] = useState(false);
  const [isAssessmentCompleted, setIsAssessmentCompleted] = useState(false);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const markCompleted = (section: string) => {
    switch(section) {
      case 'theory':
        setIsTheoryCompleted(true);
        break;
      case 'examples':
        setIsExamplesCompleted(true);
        break;
      case 'practice':
        setIsPracticeCompleted(true);
        break;
      case 'assessment':
        setIsAssessmentCompleted(true);
        if (onComplete) onComplete();
        break;
    }
  };

  const isComplete = isTheoryCompleted && 
    (!examples || isExamplesCompleted) && 
    (!practice || isPracticeCompleted) && 
    (!assessment || isAssessmentCompleted);

  return (
    <Card className="bg-secondary border-primary/20 shadow-lg overflow-hidden mb-8">
      <div className="bg-primary/5 p-4 border-b border-primary/10">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-primary font-semibold text-xl">{title}</h3>
            {description && <p className="text-primary/70 text-sm mt-1">{description}</p>}
          </div>
          {isComplete && (
            <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <CheckSquare className="h-4 w-4 mr-1" /> Complete
            </div>
          )}
        </div>
      </div>
      
      <Tabs defaultValue="theory" value={activeTab} onValueChange={handleTabChange} className="w-full">
        <div className="px-4 bg-primary/10 border-b border-primary/10">
          <TabsList className="bg-transparent h-12">
            <TabsTrigger 
              value="theory" 
              className={`${isTheoryCompleted ? 'text-green-500' : ''} data-[state=active]:bg-background`}
            >
              <BookOpen className="h-4 w-4 mr-2" /> Theory
            </TabsTrigger>
            {examples && (
              <TabsTrigger 
                value="examples" 
                className={`${isExamplesCompleted ? 'text-green-500' : ''} data-[state=active]:bg-background`}
              >
                <FileText className="h-4 w-4 mr-2" /> Examples
              </TabsTrigger>
            )}
            {practice && (
              <TabsTrigger 
                value="practice" 
                className={`${isPracticeCompleted ? 'text-green-500' : ''} data-[state=active]:bg-background`}
              >
                <Play className="h-4 w-4 mr-2" /> Practice
              </TabsTrigger>
            )}
            {assessment && (
              <TabsTrigger 
                value="assessment" 
                className={`${isAssessmentCompleted ? 'text-green-500' : ''} data-[state=active]:bg-background`}
              >
                <CheckSquare className="h-4 w-4 mr-2" /> Assessment
              </TabsTrigger>
            )}
          </TabsList>
        </div>

        <CardContent className="p-6">
          <TabsContent value="theory" className="m-0 mt-2">
            <div className="prose prose-sm max-w-none text-foreground">
              {theory}
              <div className="mt-6 flex justify-between">
                <Button 
                  onClick={() => markCompleted('theory')} 
                  variant={isTheoryCompleted ? "outline" : "default"}
                >
                  {isTheoryCompleted ? "Completed" : "Mark as Complete"}
                </Button>
                {examples && (
                  <Button 
                    onClick={() => setActiveTab("examples")} 
                    variant="ghost" 
                    className="flex items-center"
                  >
                    Next: Examples <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </TabsContent>
          
          {examples && (
            <TabsContent value="examples" className="m-0 mt-2">
              <div className="prose prose-sm max-w-none text-foreground">
                {examples}
                <div className="mt-6 flex justify-between">
                  <Button 
                    onClick={() => markCompleted('examples')} 
                    variant={isExamplesCompleted ? "outline" : "default"}
                  >
                    {isExamplesCompleted ? "Completed" : "Mark as Complete"}
                  </Button>
                  {practice && (
                    <Button 
                      onClick={() => setActiveTab("practice")} 
                      variant="ghost" 
                      className="flex items-center"
                    >
                      Next: Practice <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>
          )}
          
          {practice && (
            <TabsContent value="practice" className="m-0 mt-2">
              <div className="prose prose-sm max-w-none text-foreground">
                {practice}
                <div className="mt-6 flex justify-between">
                  <Button 
                    onClick={() => markCompleted('practice')} 
                    variant={isPracticeCompleted ? "outline" : "default"}
                  >
                    {isPracticeCompleted ? "Completed" : "Mark as Complete"}
                  </Button>
                  {assessment && (
                    <Button 
                      onClick={() => setActiveTab("assessment")} 
                      variant="ghost" 
                      className="flex items-center"
                    >
                      Next: Assessment <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>
          )}
          
          {assessment && (
            <TabsContent value="assessment" className="m-0 mt-2">
              <div className="prose prose-sm max-w-none text-foreground">
                {assessment}
                <div className="mt-6">
                  <Button 
                    onClick={() => markCompleted('assessment')} 
                    variant={isAssessmentCompleted ? "outline" : "default"}
                  >
                    {isAssessmentCompleted ? "Assessment Completed" : "Complete Assessment"}
                  </Button>
                </div>
              </div>
            </TabsContent>
          )}
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default InteractiveLearningModule;
