
import React from 'react';
import { UnitContent } from './interfaces';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Book, CircleX } from "lucide-react";

export const unit201: UnitContent = {
  title: "Health and Safety in Building Services Engineering",
  description: "Master essential workplace safety practices and regulations for electrical installations. Learn to identify hazards, use protective equipment, and follow proper safety procedures.",
  sections: [
    {
      title: "Unit Overview",
      content: (
        <>
          <p className="mb-4 text-[#FFC900]/90">This foundational unit is crucial for your development as an electrical professional. You'll learn essential safety practices that will protect you and others throughout your career.</p>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg mb-6">
            <h4 className="text-[#FFC900] font-medium mb-2">Key Topics You'll Master:</h4>
            <ul className="list-none space-y-2">
              {[
                "Workplace hazard identification and risk assessment",
                "Personal protective equipment (PPE) selection and use",
                "Essential safety procedures and regulations",
                "Emergency response protocols",
                "Safe handling of electrical equipment"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FFC900]" />
                  <span className="text-[#FFC900]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Interactive Safety Checklist",
      content: (
        <div className="space-y-6">
          <p className="text-[#FFC900]/90 mb-4">Before starting any electrical work, ensure you've completed this essential safety checklist:</p>
          
          <Card className="bg-[#2a2d24] p-4">
            <div className="space-y-4">
              {[
                "I have assessed the work area for potential hazards",
                "I am wearing appropriate PPE for the task",
                "I have the correct tools and they're in good condition",
                "I have reviewed relevant safety documentation",
                "Emergency procedures are known and understood"
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 border-b border-[#FFC900]/20">
                  <span className="text-[#FFC900]/80">{item}</span>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-[#FFC900]/20 hover:bg-[#FFC900]/10"
                    >
                      <CheckCircle className="h-4 w-4 text-[#FFC900]" />
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-[#FFC900]/20 hover:bg-[#FFC900]/10"
                    >
                      <CircleX className="h-4 w-4 text-[#FFC900]" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )
    },
    {
      title: "Key Learning Resources",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Health and Safety Legislation",
              description: "Learn about the Health and Safety at Work Act and other key regulations.",
              icon: <Book className="h-6 w-6 text-[#FFC900]" />
            },
            {
              title: "Risk Assessment Guide",
              description: "Master the process of identifying and mitigating workplace hazards.",
              icon: <Book className="h-6 w-6 text-[#FFC900]" />
            }
          ].map((resource, index) => (
            <Card key={index} className="bg-[#2a2d24] p-4 hover:bg-[#32362b] transition-colors">
              <div className="flex items-start gap-3">
                {resource.icon}
                <div>
                  <h4 className="text-[#FFC900] font-medium mb-1">{resource.title}</h4>
                  <p className="text-[#FFC900]/70 text-sm">{resource.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )
    },
    {
      title: "Assessment Preparation",
      content: (
        <>
          <p className="text-[#FFC900]/90 mb-4">To successfully complete this unit, you'll need to demonstrate:</p>
          <div className="space-y-3">
            <div className="bg-[#2a2d24] p-4 rounded-lg">
              <h4 className="text-[#FFC900] font-medium mb-2">Knowledge Check Areas:</h4>
              <ul className="list-disc pl-5 space-y-2 text-[#FFC900]/80">
                <li>Comprehensive understanding of relevant health and safety legislation</li>
                <li>Ability to identify and assess workplace hazards accurately</li>
                <li>Knowledge of proper PPE usage and maintenance procedures</li>
                <li>Understanding of emergency procedures and protocols</li>
                <li>Practical application of safe working practices</li>
              </ul>
            </div>
          </div>
        </>
      )
    }
  ]
};
