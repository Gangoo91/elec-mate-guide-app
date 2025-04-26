
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
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Preventive Maintenance"
          description="Comprehensive guide to preventive maintenance procedures and scheduling"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Introduction to Preventive Maintenance">
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                Preventive maintenance is a systematic approach to equipment care that helps prevent breakdowns and extends equipment life through regular inspections and servicing.
              </p>
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Components</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Regular inspections and checks</li>
                <li>Scheduled maintenance activities</li>
                <li>Equipment cleaning and lubrication</li>
                <li>Component replacement based on wear</li>
                <li>Performance monitoring and testing</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Maintenance Scheduling">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Creating Maintenance Schedules</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Daily Checks:</strong> Basic equipment inspection, cleaning, and monitoring</li>
                <li><strong>Weekly Tasks:</strong> More detailed inspections and basic maintenance</li>
                <li><strong>Monthly Procedures:</strong> Comprehensive testing and component checks</li>
                <li><strong>Quarterly Activities:</strong> Major inspections and preventive replacements</li>
                <li><strong>Annual Maintenance:</strong> Complete system overhaul and testing</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Equipment Inspection Techniques">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Visual Inspection</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Check for physical damage or wear</li>
                <li>Identify loose connections</li>
                <li>Inspect for overheating signs</li>
                <li>Look for contamination or debris</li>
                <li>Verify proper labeling and safety signs</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#FFC900] mt-4">Testing Procedures</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Electrical measurements and testing</li>
                <li>Thermal imaging inspections</li>
                <li>Vibration analysis</li>
                <li>Insulation resistance testing</li>
                <li>Performance benchmarking</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default PreventiveMaintenancePage;
