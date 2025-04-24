import React from 'react';
import { UnitContent } from './interfaces';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Book, CircleX, Timer, AlertTriangle, Info } from "lucide-react";
import { SafetyChecklist } from "@/components/units/SafetyChecklist";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";

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
      title: "Comprehensive Safety Checklist",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="h-5 w-5 text-[#FFC900]" />
            <p className="text-[#FFC900]/90">Before starting any electrical work, thoroughly review and complete this comprehensive safety checklist. Each item is crucial for your safety and the safety of others.</p>
          </div>
          
          <SafetyChecklist 
            items={[
              {
                category: "Personal Protective Equipment (PPE)",
                checks: [
                  "Safety boots with appropriate electrical protection rating",
                  "Insulated gloves tested and in good condition",
                  "Eye protection appropriate for the task",
                  "Arc flash protection where required",
                  "Hard hat when working in construction areas"
                ]
              },
              {
                category: "Work Area Assessment",
                checks: [
                  "Area cordoned off and signed appropriately",
                  "Adequate lighting for the task",
                  "Clear access and escape routes identified",
                  "Fire extinguisher location known and accessible",
                  "First aid kit location verified"
                ]
              },
              {
                category: "Tools and Equipment",
                checks: [
                  "All tools inspected for damage",
                  "Test instruments calibrated and functioning",
                  "Voltage indicators tested against known source",
                  "Insulation on leads and cables intact",
                  "Appropriate isolation equipment available"
                ]
              },
              {
                category: "Documentation and Procedures",
                checks: [
                  "Risk assessment reviewed and understood",
                  "Method statement available and reviewed",
                  "Permits to work in place if required",
                  "Emergency procedures understood",
                  "Contact numbers for supervisors available"
                ]
              }
            ]} 
          />
          
          <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
            <div className="flex items-start gap-3 mb-3">
              <Info className="h-5 w-5 text-[#FFC900]" />
              <h4 className="text-[#FFC900] font-medium">Important Safety Tips</h4>
            </div>
            <ul className="space-y-2 text-[#FFC900]/80 list-disc pl-9">
              <li>Always assume cables are live until proven dead</li>
              <li>Never work alone on live electrical equipment</li>
              <li>Keep your work area clean and organized</li>
              <li>Report any damaged equipment immediately</li>
              <li>If in doubt, always ask a qualified supervisor</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Knowledge Check - Safety Principles",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Timer className="h-5 w-5 text-[#FFC900]" />
            <p className="text-[#FFC900]/90">Test your understanding of health and safety principles. You have 10 minutes to complete this quiz.</p>
          </div>
          
          <SafetyQuiz unitId="201" timeLimit={600} />
        </div>
      )
    }
  ]
};
