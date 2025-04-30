
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

const CircuitTheoryAssessmentPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/circuit-theory');
  };
  
  const questions = [
    {
      id: 1,
      question: "What does Ohm's Law state?",
      options: [
        "Power equals voltage times current",
        "Voltage equals current divided by resistance",
        "Current equals voltage times resistance",
        "Voltage equals current times resistance"
      ],
      correctAnswer: "Voltage equals current times resistance"
    },
    {
      id: 2,
      question: "In a series circuit, which of these statements is true?",
      options: [
        "The voltage is the same across all components",
        "The current is different through each component",
        "The current is the same through all components",
        "The total resistance is less than any individual resistance"
      ],
      correctAnswer: "The current is the same through all components"
    },
    {
      id: 3,
      question: "Which component allows current to flow in one direction only?",
      options: [
        "Resistor",
        "Capacitor",
        "Diode",
        "Inductor"
      ],
      correctAnswer: "Diode"
    },
    {
      id: 4,
      question: "According to Kirchhoff's Current Law, what happens at a node?",
      options: [
        "Current entering equals current leaving",
        "Voltage drops equal voltage rises",
        "Power in equals power out",
        "Resistance is conserved"
      ],
      correctAnswer: "Current entering equals current leaving"
    },
    {
      id: 5,
      question: "How is the total resistance calculated in a parallel circuit?",
      options: [
        "By adding all resistances",
        "By multiplying all resistances",
        "By using the formula 1/Rtotal = 1/R1 + 1/R2 + ...",
        "By dividing the voltage by current"
      ],
      correctAnswer: "By using the formula 1/Rtotal = 1/R1 + 1/R2 + ..."
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
          title="Circuit Theory Assessment"
          description="Test your knowledge of electrical circuit theory"
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
                Return to Circuit Theory
              </Button>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CircuitTheoryAssessmentPage;
