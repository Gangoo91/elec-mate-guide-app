
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const ElectricalMaintenancePage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-skills');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Electrical Maintenance"
          description="Preventative maintenance techniques and best practices"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Scheduled Maintenance Programs">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Maintenance Schedules</h3>
              <p className="text-[#FFC900]/80">
                Effective electrical maintenance requires consistent scheduling and thorough documentation. 
                Scheduled maintenance helps prevent equipment failures, extends the life of electrical systems, 
                and ensures safe operation.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Daily visual inspections for obvious issues</li>
                <li>Weekly testing of emergency systems</li>
                <li>Monthly insulation resistance testing</li>
                <li>Quarterly thermal imaging of critical connections</li>
                <li>Annual comprehensive system testing</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Equipment Testing Procedures">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Testing Methods</h3>
              <p className="text-[#FFC900]/80">
                Regular testing helps identify potential issues before they lead to failures or safety hazards.
                Following standardized testing procedures ensures consistency and reliability.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Insulation resistance measurement</li>
                <li>Earth continuity testing</li>
                <li>Voltage and current measurements</li>
                <li>Thermal scanning</li>
                <li>Load testing</li>
                <li>Power quality analysis</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Documentation Systems">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Record Keeping</h3>
              <p className="text-[#FFC900]/80">
                Thorough documentation is essential for effective maintenance management. Records provide 
                historical data for analysis, compliance evidence, and information for future maintenance planning.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Equipment inventories and specifications</li>
                <li>Maintenance schedules and completed work</li>
                <li>Test results and trending data</li>
                <li>Incident reports and corrective actions</li>
                <li>Spare parts usage and inventory</li>
                <li>Training records for maintenance personnel</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectricalMaintenancePage;
