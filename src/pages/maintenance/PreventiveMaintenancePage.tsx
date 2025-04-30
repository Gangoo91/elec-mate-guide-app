
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { FormativeAssessment } from "@/components/units/FormativeAssessment";
import { Button } from "@/components/ui/button";

const preventiveMaintenanceQuestions = [
  {
    question: "What is the primary goal of preventive maintenance?",
    options: [
      "To reduce equipment costs",
      "To reduce the likelihood of failures and unplanned downtime",
      "To increase equipment performance",
      "To extend warranty periods"
    ],
    correctAnswer: "To reduce the likelihood of failures and unplanned downtime",
    explanation: "Preventive maintenance is primarily focused on reducing the likelihood of equipment failures and unplanned downtime through scheduled service and maintenance activities."
  },
  {
    question: "Which of the following is NOT a key component of preventive maintenance?",
    options: [
      "Regular inspections and testing",
      "Scheduled cleaning and recalibration",
      "Waiting for equipment to fail before servicing",
      "Documentation of maintenance activities"
    ],
    correctAnswer: "Waiting for equipment to fail before servicing",
    explanation: "Preventive maintenance is based on proactive maintenance to prevent failures, not reactive maintenance that waits for equipment to fail before servicing."
  },
  {
    question: "What is the recommended approach for creating a maintenance schedule?",
    options: [
      "Schedule all maintenance at the same time",
      "Only perform maintenance when equipment fails",
      "Schedule maintenance based on criticality and manufacturer recommendations",
      "Perform maintenance only during off-hours"
    ],
    correctAnswer: "Schedule maintenance based on criticality and manufacturer recommendations",
    explanation: "An effective maintenance schedule should be based on equipment criticality and manufacturer recommendations to ensure appropriate maintenance frequencies."
  },
  {
    question: "Which maintenance frequency would typically include major overhauls and component replacements?",
    options: [
      "Daily checks",
      "Weekly maintenance",
      "Monthly maintenance",
      "Annual maintenance"
    ],
    correctAnswer: "Annual maintenance",
    explanation: "Annual maintenance typically includes more extensive work such as major overhauls and component replacements, while daily, weekly, and monthly maintenance focus on inspections and minor adjustments."
  },
  {
    question: "What type of inspection should be included in daily maintenance checks?",
    options: [
      "Complete equipment disassembly",
      "Component replacement",
      "Visual inspections and monitoring readings",
      "Major calibration"
    ],
    correctAnswer: "Visual inspections and monitoring readings",
    explanation: "Daily maintenance checks typically include quick visual inspections and monitoring of readings, which can identify early signs of issues without requiring extensive work."
  },
  {
    question: "Which of the following is a benefit of implementing predictive maintenance techniques?",
    options: [
      "Increased emergency repairs",
      "Higher overall maintenance costs",
      "More accurately predicting when equipment will fail",
      "Reduced equipment lifespan"
    ],
    correctAnswer: "More accurately predicting when equipment will fail",
    explanation: "Predictive maintenance uses condition monitoring to more accurately predict when equipment will fail, allowing for better planning of maintenance activities."
  },
  {
    question: "What should be documented during routine maintenance activities?",
    options: [
      "Only major repairs",
      "Only failed inspections",
      "All maintenance activities, findings, and actions taken",
      "Only maintenance that requires part replacement"
    ],
    correctAnswer: "All maintenance activities, findings, and actions taken",
    explanation: "Comprehensive documentation of all maintenance activities, findings, and actions taken is essential for tracking equipment history and planning future maintenance."
  },
  {
    question: "How does preventive maintenance impact equipment reliability?",
    options: [
      "It has no impact on reliability",
      "It decreases reliability",
      "It improves reliability by addressing issues before failure",
      "It only improves reliability for new equipment"
    ],
    correctAnswer: "It improves reliability by addressing issues before failure",
    explanation: "Preventive maintenance improves equipment reliability by identifying and addressing potential issues before they lead to failure."
  },
  {
    question: "What is a key consideration when scheduling maintenance to minimize operational disruption?",
    options: [
      "Always schedule maintenance during peak operation times",
      "Coordinate with production schedules and plan for equipment downtime",
      "Only perform maintenance when equipment fails",
      "Perform all maintenance at the end of the year"
    ],
    correctAnswer: "Coordinate with production schedules and plan for equipment downtime",
    explanation: "To minimize operational disruption, maintenance should be coordinated with production schedules and planned for times when equipment downtime will have the least impact."
  },
  {
    question: "Which approach to maintenance combines preventive and predictive strategies?",
    options: [
      "Reactive maintenance",
      "Corrective maintenance",
      "Condition-based maintenance",
      "Run-to-failure maintenance"
    ],
    correctAnswer: "Condition-based maintenance",
    explanation: "Condition-based maintenance combines aspects of both preventive and predictive strategies by using real-time monitoring to determine when maintenance should be performed."
  }
];

const PreventiveMaintenancePage = () => {
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices');
  };

  const handleShowQuiz = () => {
    setShowQuiz(true);
    setTimeout(() => {
      const quizElement = document.getElementById('maintenance-quiz');
      if (quizElement) {
        quizElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Preventive Maintenance"
          description="Scheduled maintenance procedures and best practices"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="1. Preventive Maintenance Overview">
            <p className="mb-4">
              Preventive maintenance is a scheduled service applied to equipment to reduce the likelihood of failures and 
              unplanned downtime. It includes regular inspections, cleaning, lubrication, and parts replacement based on 
              time intervals or usage metrics rather than waiting for equipment to fail.
            </p>
            
            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">1.1 Key Components of Preventive Maintenance</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Regular inspections and testing of electrical equipment</li>
              <li>Scheduled cleaning and recalibration of components</li>
              <li>Performance testing and diagnostics</li>
              <li>Replacement of parts before failure (based on manufacturer recommendations)</li>
              <li>Documentation and record-keeping of maintenance activities</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">1.2 Benefits of Preventive Maintenance</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Extended equipment life and improved reliability</li>
              <li>Reduced emergency repairs and unplanned downtime</li>
              <li>Decreased maintenance costs over equipment lifetime</li>
              <li>Improved safety for operators and maintenance personnel</li>
              <li>Enhanced quality and efficiency of equipment operation</li>
              <li>Better planning and scheduling of maintenance resources</li>
            </ul>
          </LessonContent>
          
          <LessonContent title="2. Creating a Preventive Maintenance Schedule">
            <p className="mb-4">
              An effective preventive maintenance program requires careful planning and scheduling of maintenance activities.
              The following steps outline the process for developing a comprehensive maintenance schedule.
            </p>
            
            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">2.1 Steps to Create a Maintenance Schedule</h3>
            <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
              <li>Inventory all equipment requiring maintenance</li>
              <li>Gather manufacturer maintenance recommendations</li>
              <li>Assess equipment criticality and consequences of failure</li>
              <li>Determine appropriate maintenance frequencies</li>
              <li>Create detailed maintenance procedures for each task</li>
              <li>Assign responsibilities to maintenance personnel</li>
              <li>Schedule maintenance to minimize operational disruption</li>
              <li>Implement a tracking system for completed maintenance</li>
            </ol>

            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">2.2 Common Maintenance Frequencies</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Daily checks:</strong> Visual inspections, monitoring readings</li>
              <li><strong>Weekly/monthly:</strong> Cleaning, lubrication, minor adjustments</li>
              <li><strong>Quarterly:</strong> More extensive testing and calibration</li>
              <li><strong>Annual:</strong> Major overhauls, component replacement</li>
              <li><strong>Usage-based:</strong> Maintenance based on run hours or cycles</li>
            </ul>
          </LessonContent>

          <LessonContent title="3. Preventive Maintenance Documentation">
            <p className="mb-4">
              Proper documentation is essential for an effective preventive maintenance program. 
              It helps track equipment history, plan future maintenance, and ensure compliance with regulations.
            </p>
            
            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">3.1 Essential Documentation Elements</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Equipment identification and specifications</li>
              <li>Maintenance history and records</li>
              <li>Scheduled maintenance tasks and frequencies</li>
              <li>Maintenance procedures and checklists</li>
              <li>Parts replacement records</li>
              <li>Test results and measurements</li>
              <li>Inspection findings and observations</li>
              <li>Work orders and service requests</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">3.2 Implementing Computerized Maintenance Management Systems (CMMS)</h3>
            <p className="mb-4">
              Modern maintenance programs often utilize CMMS software to manage maintenance activities, which offers several advantages:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Centralized equipment database</li>
              <li>Automated maintenance scheduling</li>
              <li>Work order generation and tracking</li>
              <li>Parts inventory management</li>
              <li>Maintenance history reporting</li>
              <li>Key performance indicator (KPI) tracking</li>
              <li>Mobile access for technicians</li>
            </ul>
          </LessonContent>

          <LessonContent title="4. Advanced Maintenance Strategies">
            <p className="mb-4">
              Beyond basic preventive maintenance, several advanced strategies can further enhance equipment reliability and performance.
            </p>
            
            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">4.1 Predictive Maintenance</h3>
            <p className="mb-4">
              Predictive maintenance uses condition monitoring techniques to determine the actual condition of equipment and predict when maintenance should be performed:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Vibration analysis:</strong> Detecting abnormal vibrations that may indicate bearing wear or misalignment</li>
              <li><strong>Infrared thermography:</strong> Identifying overheating components or connections</li>
              <li><strong>Oil analysis:</strong> Examining lubricant condition to detect contamination or wear particles</li>
              <li><strong>Ultrasonic testing:</strong> Detecting air leaks, bearing defects, or electrical arcing</li>
              <li><strong>Motor current signature analysis:</strong> Monitoring electrical signatures to detect motor issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">4.2 Reliability-Centered Maintenance (RCM)</h3>
            <p className="mb-4">
              RCM is a structured approach that determines the most appropriate maintenance strategy for each piece of equipment based on its failure modes and criticality:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Identifies functions of equipment and systems</li>
              <li>Analyzes potential failure modes and their effects</li>
              <li>Prioritizes maintenance based on safety, operational, and economic criteria</li>
              <li>Selects the most effective maintenance tasks for each failure mode</li>
              <li>Implements a living program that evolves based on results</li>
            </ul>
          </LessonContent>
          
          {!showQuiz ? (
            <div className="text-center mt-8">
              <Button
                onClick={handleShowQuiz}
                className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-6 py-2 rounded font-medium"
              >
                Test Your Knowledge
              </Button>
            </div>
          ) : (
            <div id="maintenance-quiz" className="mt-8 pt-8 border-t border-[#FFC900]/20">
              <h3 className="text-2xl font-semibold text-[#FFC900] mb-6">
                Test Your Knowledge
              </h3>
              <p className="text-[#FFC900]/80 mb-6">
                Now that you've completed the Preventive Maintenance section, take this quiz 
                to test your understanding of key concepts.
              </p>
              <FormativeAssessment 
                questions={preventiveMaintenanceQuestions}
                questionsToShow={5}
                unitId="maintenance"
              />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default PreventiveMaintenancePage;
