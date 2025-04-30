
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const PreventiveMaintenancePage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices');
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
          <LessonContent title="Preventive Maintenance Overview">
            <p className="mb-4 text-[#FFC900]/80">
              Preventive maintenance is a scheduled service applied to equipment to reduce the likelihood of failures and 
              unplanned downtime. It includes regular inspections, cleaning, lubrication, and parts replacement based on 
              time intervals or usage metrics rather than waiting for equipment to fail.
            </p>
            
            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Key Components of Preventive Maintenance</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Regular inspections and testing of electrical equipment</li>
              <li>Scheduled cleaning and recalibration of components</li>
              <li>Performance testing and diagnostics</li>
              <li>Replacement of parts before failure (based on manufacturer recommendations)</li>
              <li>Documentation and record-keeping of maintenance activities</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Benefits of Preventive Maintenance</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Extended equipment life and improved reliability</li>
              <li>Reduced emergency repairs and unplanned downtime</li>
              <li>Decreased maintenance costs over equipment lifetime</li>
              <li>Improved safety for operators and maintenance personnel</li>
              <li>Enhanced quality and efficiency of equipment operation</li>
              <li>Better planning and scheduling of maintenance resources</li>
            </ul>
          </LessonContent>
          
          <LessonContent title="Creating a Preventive Maintenance Schedule">
            <p className="mb-4 text-[#FFC900]/80">
              An effective preventive maintenance program requires careful planning and scheduling of maintenance activities.
              The following steps outline the process for developing a comprehensive maintenance schedule.
            </p>
            
            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Steps to Create a Maintenance Schedule</h3>
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

            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Common Maintenance Frequencies</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Daily checks:</strong> Visual inspections, monitoring readings</li>
              <li><strong>Weekly/monthly:</strong> Cleaning, lubrication, minor adjustments</li>
              <li><strong>Quarterly:</strong> More extensive testing and calibration</li>
              <li><strong>Annual:</strong> Major overhauls, component replacement</li>
              <li><strong>Usage-based:</strong> Maintenance based on run hours or cycles</li>
            </ul>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default PreventiveMaintenancePage;
