
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Check, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const safeIsolationSteps = [
  {
    id: 1,
    instruction: "Identify the circuit or equipment to be isolated",
    options: [
      { text: "Consult drawings and check labeling", isCorrect: true },
      { text: "Isolate anything that looks like it might be the right circuit", isCorrect: false },
      { text: "Ask someone nearby to identify it for you", isCorrect: false }
    ]
  },
  {
    id: 2,
    instruction: "Inform all affected persons before isolation",
    options: [
      { text: "Notify only your supervisor", isCorrect: false },
      { text: "Notify all people who may be affected by the isolation", isCorrect: true },
      { text: "No need to notify anyone if it's a quick job", isCorrect: false }
    ]
  },
  {
    id: 3,
    instruction: "Switch off and lock off the isolation device",
    options: [
      { text: "Switch off and place a note nearby", isCorrect: false },
      { text: "Switch off and apply personal padlock/lock", isCorrect: true },
      { text: "Switch off only - locking is optional", isCorrect: false }
    ]
  },
  {
    id: 4,
    instruction: "Verify proving device is working",
    options: [
      { text: "Use the proving device directly on the circuit", isCorrect: false },
      { text: "Test the proving device on a known live source first", isCorrect: true },
      { text: "Shake the proving device to see if it works", isCorrect: false }
    ]
  },
  {
    id: 5,
    instruction: "Test the isolated circuit",
    options: [
      { text: "Touch the circuit to see if you get a shock", isCorrect: false },
      { text: "Test that the circuit is dead using your proving device", isCorrect: true },
      { text: "Assume the circuit is dead because you switched it off", isCorrect: false }
    ]
  },
  {
    id: 6,
    instruction: "Re-verify proving device after testing circuit",
    options: [
      { text: "Skip this step to save time", isCorrect: false },
      { text: "Re-verify the proving device works on a known live source", isCorrect: true },
      { text: "Re-verify only if the device seemed to malfunction", isCorrect: false }
    ]
  },
  {
    id: 7,
    instruction: "Apply circuit warning notices and barriers",
    options: [
      { text: "Apply warning notices only for jobs lasting more than a day", isCorrect: false },
      { text: "Apply 'Do Not Switch On' notices and barriers as necessary", isCorrect: true },
      { text: "Verbal warnings to colleagues are sufficient", isCorrect: false }
    ]
  }
];

const SafeIsolationPractice = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/am2/safe-isolation');
  };
  
  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };
  
  const handleNextStep = () => {
    if (selectedOption === null) return;
    
    const isCorrect = safeIsolationSteps[currentStep].options[selectedOption].isCorrect;
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: "That's the right approach for safe isolation.",
      });
    } else {
      toast({
        title: "Incorrect",
        description: "Review the safe isolation procedure and try again.",
        variant: "destructive"
      });
    }
    
    if (currentStep < safeIsolationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setCompleted(true);
    }
  };
  
  const resetPractice = () => {
    setCurrentStep(0);
    setScore(0);
    setSelectedOption(null);
    setCompleted(false);
  };
  
  const progressPercentage = ((currentStep) / safeIsolationSteps.length) * 100;
  
  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Safe Isolation Practice"
          description="Test your knowledge of safe isolation procedures"
          customBackAction={handleBackClick}
        />
        
        <Card className="border-[#FFC900]/20 bg-[#22251e]">
          <CardContent className="p-6">
            {!completed ? (
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <ShieldAlert className="h-8 w-8 text-[#FFC900]" />
                    <h2 className="text-2xl font-bold text-[#FFC900]">
                      Step {currentStep + 1}: {safeIsolationSteps[currentStep].instruction}
                    </h2>
                  </div>
                  
                  <p className="text-[#FFC900]/80">
                    Select the best practice for this step of the safe isolation procedure:
                  </p>
                </div>
                
                <div className="space-y-3">
                  {safeIsolationSteps[currentStep].options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedOption === index 
                          ? 'border-[#FFC900] bg-[#FFC900]/20' 
                          : 'border-[#FFC900]/20 hover:border-[#FFC900]/50'
                      }`}
                    >
                      {option.text}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <Button
                    onClick={handleNextStep}
                    disabled={selectedOption === null}
                    className="w-full bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90 disabled:bg-[#FFC900]/50"
                  >
                    {currentStep === safeIsolationSteps.length - 1 ? "Complete Practice" : "Next Step"}
                  </Button>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-[#FFC900]/70">
                      <span>Step {currentStep + 1} of {safeIsolationSteps.length}</span>
                      <span>Score: {score}/{currentStep}</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2 bg-[#FFC900]/20" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-center">
                <h2 className="text-2xl font-bold text-[#FFC900]">Practice Completed</h2>
                
                <div className="text-7xl font-bold text-[#FFC900]">
                  {score}/{safeIsolationSteps.length}
                </div>
                
                <p className="text-[#FFC900]/80">
                  {score === safeIsolationSteps.length 
                    ? "Perfect! You've mastered the safe isolation procedure."
                    : score >= Math.floor(safeIsolationSteps.length * 0.7)
                      ? "Good job! You understand the safe isolation procedure, but there's room for improvement."
                      : "You need to review the safe isolation procedure. Safety is critical in electrical work."
                  }
                </p>
                
                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={resetPractice}
                    variant="outline"
                    className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
                  >
                    Try Again
                  </Button>
                  
                  <Button
                    onClick={handleBackClick}
                    className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                  >
                    Return to Safe Isolation
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default SafeIsolationPractice;
