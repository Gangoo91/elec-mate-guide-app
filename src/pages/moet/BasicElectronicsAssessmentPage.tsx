
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle } from "lucide-react";

const BasicElectronicsAssessmentPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics');
  };
  
  const questions = [
    {
      id: 1,
      question: "Which semiconductor material is most widely used in the electronics industry?",
      options: [
        "Germanium",
        "Silicon",
        "Gallium arsenide",
        "Copper oxide"
      ],
      correctAnswer: "Silicon"
    },
    {
      id: 2,
      question: "What happens to the conductivity of a semiconductor when temperature increases?",
      options: [
        "It decreases",
        "It increases",
        "It remains constant",
        "It changes unpredictably"
      ],
      correctAnswer: "It increases"
    },
    {
      id: 3,
      question: "Which of the following is an active component?",
      options: [
        "Resistor",
        "Capacitor",
        "Transistor",
        "Inductor"
      ],
      correctAnswer: "Transistor"
    },
    {
      id: 4,
      question: "What does a diode allow?",
      options: [
        "Current flow in both directions",
        "Current flow in one direction only",
        "Resistance in both directions",
        "Voltage amplification"
      ],
      correctAnswer: "Current flow in one direction only"
    },
    {
      id: 5,
      question: "Which component is used primarily for storing electrical charge?",
      options: [
        "Resistor",
        "Capacitor",
        "Inductor",
        "Transistor"
      ],
      correctAnswer: "Capacitor"
    }
  ];

  const handleOptionChange = (questionId: number, option: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const handleSubmit = () => {
    // Check if all questions have been answered
    if (Object.keys(answers).length < questions.length) {
      toast({
        title: "Incomplete Assessment",
        description: "Please answer all questions before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitted(true);
    
    // Calculate score
    const correctAnswers = questions.filter(q => answers[q.id] === q.correctAnswer).length;
    const percentage = (correctAnswers / questions.length) * 100;
    
    toast({
      title: "Assessment Complete",
      description: `You scored ${correctAnswers} out of ${questions.length} (${percentage.toFixed(0)}%)`,
      className: percentage >= 70 ? "bg-green-500" : "bg-amber-500",
    });
  };

  const getOptionClassName = (questionId: number, option: string) => {
    if (!isSubmitted) return "border-gray-300";
    
    const isSelected = answers[questionId] === option;
    const isCorrect = option === questions.find(q => q.id === questionId)?.correctAnswer;
    
    if (isSelected && isCorrect) return "border-green-500 bg-green-500/10";
    if (isSelected && !isCorrect) return "border-red-500 bg-red-500/10";
    if (!isSelected && isCorrect) return "border-green-500 bg-green-500/10";
    
    return "border-gray-300 opacity-50";
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Basic Electronics Assessment"
          description="Test your knowledge of semiconductor theory and electronic components"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-6">
          {questions.map((q, index) => (
            <Card key={q.id} className="border-[#FFC900]/20">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-[#FFC900]">
                    Question {index + 1}: {q.question}
                  </h3>
                </div>
                
                <RadioGroup
                  value={answers[q.id]}
                  onValueChange={(value) => handleOptionChange(q.id, value)}
                  disabled={isSubmitted}
                >
                  {q.options.map((option, i) => (
                    <div key={i} className={`flex items-center space-x-2 p-2 rounded border ${getOptionClassName(q.id, option)}`}>
                      <RadioGroupItem value={option} id={`q${q.id}-option${i}`} />
                      <Label htmlFor={`q${q.id}-option${i}`} className="flex-1">
                        {option}
                      </Label>
                      {isSubmitted && option === q.correctAnswer && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
          
          <div className="flex justify-end">
            {!isSubmitted ? (
              <Button 
                className="bg-[#FFC900] text-[#22251e] hover:bg-[#e5b700]"
                onClick={handleSubmit}
              >
                Submit Assessment
              </Button>
            ) : (
              <Button 
                className="bg-[#FFC900] text-[#22251e] hover:bg-[#e5b700]"
                onClick={handleBackClick}
              >
                Return to Basic Electronics
              </Button>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BasicElectronicsAssessmentPage;
