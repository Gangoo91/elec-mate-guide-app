
import React from 'react';
import { SectionData } from './interfaces';
import { EnhancedLearningSection } from "@/components/units/EnhancedLearningSection";
import { FormativeAssessment } from "@/components/units/FormativeAssessment";
import { healthAndSafetyQuestions } from './questions/healthAndSafetyQuestions';
import { DetailedHealthSafetyContent } from '@/components/units/sections/unit201/DetailedHealthSafetyContent';

export const section1_1: SectionData = {
  title: "Introduction to Health and Safety",
  description: "Understanding the importance of health and safety in electrical installations",
  content: (
    <>
      <EnhancedLearningSection
        title="Health and Safety Fundamentals"
        description="Learn about the core principles of health and safety in electrical work"
        illustration="/images/safety-illustration.png"
        content={
          <>
            <h3 className="text-xl font-semibold mb-4">Why Health and Safety Matters</h3>
            <p className="mb-4">
              Health and safety is critical in electrical work due to the serious risks involved. 
              As an electrician, you need to understand these risks and how to mitigate them to protect 
              yourself, colleagues, and the public.
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-lg my-4">
              <h4 className="text-lg font-medium mb-2">Key Health and Safety Concepts</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Risk Assessment:</strong> Identifying hazards and implementing controls.
                </li>
                <li>
                  <strong>PPE (Personal Protective Equipment):</strong> Using appropriate protective gear.
                </li>
                <li>
                  <strong>Safe Isolation:</strong> Ensuring electrical systems are safely disconnected.
                </li>
                <li>
                  <strong>Regulations:</strong> Following key legislation like the Electricity at Work Regulations.
                </li>
              </ul>
            </div>
            
            <p className="my-4">
              Electrical safety is governed by various regulations and standards:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Key Regulations</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Health and Safety at Work Act 1974</li>
                  <li>Electricity at Work Regulations 1989</li>
                  <li>BS 7671 (Wiring Regulations)</li>
                  <li>The Management of Health and Safety at Work Regulations 1999</li>
                </ul>
              </div>
              
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Consequences of Non-Compliance</h5>
                <p className="text-sm">
                  Failing to follow health and safety procedures can lead to serious injuries, fatalities, 
                  legal prosecution, fines, and damage to reputation. Every year, numerous incidents occur 
                  due to improper safety practices.
                </p>
              </div>
            </div>
          </>
        }
        examples={
          <>
            <h4 className="text-lg font-medium mb-3">Real-World Examples</h4>
            
            <div className="space-y-4">
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Case Study: Improper Isolation</h5>
                <p>
                  An electrician working on a circuit breaker failed to properly isolate the system and 
                  verify it was dead before starting work. This resulted in an electric shock that caused 
                  severe burns and hospitalization. The investigation found that proper lock-off procedures 
                  were not followed.
                </p>
              </div>
              
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Safety Equipment in Action</h5>
                <p>
                  During a routine repair, an electrician's insulated tools prevented injury when they 
                  accidentally contacted a live part that had been incorrectly labeled. This demonstrates the 
                  importance of always using proper PPE and insulated tools, even when systems are thought to be isolated.
                </p>
              </div>
            </div>
          </>
        }
        practice={
          <>
            <h4 className="text-lg font-medium mb-3">Test Your Understanding</h4>
            
            <FormativeAssessment
              questions={healthAndSafetyQuestions}
              questionsToShow={3}
            />
          </>
        }
      />
    </>
  ),
  detailedContent: <DetailedHealthSafetyContent />
};
