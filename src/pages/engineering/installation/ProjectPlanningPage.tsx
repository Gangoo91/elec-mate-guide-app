
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const ProjectPlanningPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Project Planning Fundamentals"
          description="Essential principles and methods for planning electrical installation projects"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Site Survey and Assessment">
            <div className="space-y-4">
              <p>
                Every successful installation project begins with a comprehensive site survey. This crucial first step
                involves physical inspection of the installation location to gather essential data about existing 
                conditions, constraints, and opportunities.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Site Survey Elements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Measuring and documenting spatial dimensions</li>
                <li>Identifying locations of existing services and infrastructure</li>
                <li>Documenting access routes and working constraints</li>
                <li>Assessing environmental conditions that may affect installation</li>
                <li>Identifying potential hazards and safety considerations</li>
                <li>Photographing key areas for reference during planning</li>
              </ul>
              
              <p className="mt-4">
                The data collected during site surveys forms the foundation of all subsequent planning activities
                and helps prevent unexpected issues during implementation.
              </p>
            </div>
          </LessonContent>
          
          <LessonContent title="Resource Planning and Allocation">
            <div className="space-y-4">
              <p>
                Effective resource planning ensures that the right materials, tools, equipment, and personnel 
                are available at the right time throughout the project lifecycle.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Resource Planning Components</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Material requirements planning and procurement scheduling</li>
                <li>Equipment selection and availability coordination</li>
                <li>Personnel allocation based on skills and certification requirements</li>
                <li>Subcontractor coordination and scheduling</li>
                <li>Contingency planning for resource constraints or delays</li>
              </ul>
              
              <p className="mt-4">
                Resource planning must be dynamic, with regular reviews and adjustments as the project progresses
                and as conditions change on site.
              </p>
            </div>
          </LessonContent>
          
          <LessonContent title="Project Scheduling and Milestones">
            <div className="space-y-4">
              <p>
                A well-structured project schedule breaks down the installation work into manageable tasks,
                establishes dependencies, and sets realistic timeframes for completion.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Scheduling Techniques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Work Breakdown Structure (WBS) to organize and define project scope</li>
                <li>Gantt charts for visual representation of tasks and timelines</li>
                <li>Critical Path Method (CPM) to identify schedule-critical activities</li>
                <li>Milestone establishment to mark significant project achievements</li>
                <li>Resource-loaded scheduling to prevent overallocation</li>
              </ul>
              
              <p className="mt-4">
                Regular schedule monitoring and adjustment are essential practices to keep projects on track
                and to communicate progress to all stakeholders.
              </p>
            </div>
          </LessonContent>
          
          <LessonContent title="Risk Assessment and Management">
            <div className="space-y-4">
              <p>
                Proactive risk assessment identifies potential issues before they occur, allowing for 
                preventive measures and contingency planning.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Risk Management Process</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Risk identification through brainstorming and historical analysis</li>
                <li>Risk analysis to assess probability and potential impact</li>
                <li>Risk prioritization to focus on critical threats</li>
                <li>Risk response planning - avoid, transfer, mitigate, or accept</li>
                <li>Ongoing risk monitoring throughout the project lifecycle</li>
              </ul>
              
              <p className="mt-4">
                Comprehensive risk management reduces unexpected disruptions and costs while improving 
                project outcome predictability.
              </p>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectPlanningPage;
