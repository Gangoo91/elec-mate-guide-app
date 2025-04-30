
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { electricalMaintenanceQuestions } from "@/data/moet/electricalMaintenanceQuestions";

const ElectricalMaintenancePage = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-skills');
  };

  const sections = [
    {
      id: "scheduled-maintenance",
      title: "Scheduled Maintenance Programs",
      content: (
        <div className="space-y-6">
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
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">Planning and Implementation</h3>
            <p className="text-[#FFC900]/80">
              A well-designed maintenance plan considers equipment criticality, operational requirements, 
              manufacturer recommendations, and regulatory compliance.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Risk assessment:</strong> Evaluate the impact of failure and probability of occurrence</li>
              <li><strong>Resource allocation:</strong> Personnel, tools, spare parts, and time requirements</li>
              <li><strong>Documentation:</strong> Detailed procedures, checklists, and record-keeping systems</li>
              <li><strong>Training:</strong> Ensure maintenance staff are properly qualified and updated</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">Condition Monitoring</h3>
            <p className="text-[#FFC900]/80">
              Modern maintenance programs incorporate condition monitoring to detect potential issues 
              before they lead to failures.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Thermal imaging:</strong> Identifying hotspots indicating poor connections or overloads</li>
              <li><strong>Ultrasonic detection:</strong> Finding partial discharges and corona effects</li>
              <li><strong>Vibration analysis:</strong> Detecting mechanical issues in motors and generators</li>
              <li><strong>Oil analysis:</strong> Assessing transformer oil condition</li>
              <li><strong>Power quality monitoring:</strong> Identifying harmonics, voltage fluctuations, and other issues</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "equipment-testing",
      title: "Equipment Testing Procedures",
      content: (
        <div className="space-y-6">
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
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">Insulation Testing</h3>
            <p className="text-[#FFC900]/80">
              Insulation deterioration is a leading cause of electrical failures. Regular testing helps 
              identify degradation before complete failure occurs.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Insulation resistance testing:</strong> Using a megohmmeter to measure resistance between conductors and ground</li>
              <li><strong>Polarization index:</strong> Comparing 10-minute to 1-minute insulation resistance values</li>
              <li><strong>Dielectric absorption ratio:</strong> Comparing 60-second to 30-second insulation resistance values</li>
              <li><strong>High potential testing:</strong> Applying voltage higher than rated to identify weak spots</li>
              <li><strong>Partial discharge testing:</strong> Detecting internal discharges within insulation systems</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">Protective Device Testing</h3>
            <p className="text-[#FFC900]/80">
              Protective devices must be regularly tested to ensure they will operate correctly when required.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Circuit breakers:</strong> Testing trip timing, contact resistance, and mechanical operation</li>
              <li><strong>RCDs/GFCIs:</strong> Verifying tripping at specified leakage current levels</li>
              <li><strong>Relays:</strong> Testing pickup values, timing, and coordination</li>
              <li><strong>Fuses:</strong> Inspecting for correct rating and physical condition</li>
              <li><strong>Surge protective devices:</strong> Verifying status indicators and connection integrity</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "documentation-systems",
      title: "Documentation Systems",
      content: (
        <div className="space-y-6">
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
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">Computerized Maintenance Management Systems</h3>
            <p className="text-[#FFC900]/80">
              Modern maintenance relies on digital systems to streamline planning, execution, and record-keeping.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Work order management:</strong> Creating, assigning, tracking, and closing maintenance tasks</li>
              <li><strong>Asset management:</strong> Equipment details, location, and maintenance history</li>
              <li><strong>Inventory control:</strong> Spare parts tracking and automatic reordering</li>
              <li><strong>Scheduling:</strong> Preventative maintenance planning and resource allocation</li>
              <li><strong>Reporting:</strong> Analytics, KPIs, and compliance documentation</li>
              <li><strong>Mobile accessibility:</strong> Field access to documentation and real-time updates</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">Documentation Standards</h3>
            <p className="text-[#FFC900]/80">
              Following consistent documentation standards ensures records are useful and accessible.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>ISO 55000:</strong> Asset management system standards</li>
              <li><strong>IEC 60364:</strong> Electrical installation documentation requirements</li>
              <li><strong>NFPA 70B:</strong> Recommended practice for electrical equipment maintenance</li>
              <li><strong>Internal standards:</strong> Organization-specific formatting, storage, and access protocols</li>
              <li><strong>Version control:</strong> Managing document updates and revisions</li>
              <li><strong>Digital security:</strong> Protecting sensitive maintenance data</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "predictive-maintenance",
      title: "Predictive Maintenance Techniques",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">Data-Driven Maintenance</h3>
            <p className="text-[#FFC900]/80">
              Predictive maintenance uses condition monitoring data and advanced analytics to predict when 
              equipment failure might occur, allowing for planned interventions before issues arise.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Continuous monitoring:</strong> Using sensors to collect real-time performance data</li>
              <li><strong>Trend analysis:</strong> Identifying patterns that indicate degradation</li>
              <li><strong>Statistical models:</strong> Using historical data to predict future performance</li>
              <li><strong>Cost optimization:</strong> Balancing maintenance costs against failure risks</li>
              <li><strong>IoT integration:</strong> Connected devices providing comprehensive system visibility</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">Advanced Monitoring Techniques</h3>
            <p className="text-[#FFC900]/80">
              Modern predictive maintenance employs sophisticated monitoring methods to detect early signs of failure.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Infrared thermography:</strong> Detecting hotspots invisible to the naked eye</li>
              <li><strong>Ultrasonic analysis:</strong> Hearing high-frequency sounds from electrical discharges</li>
              <li><strong>Motor current signature analysis:</strong> Identifying electrical and mechanical issues</li>
              <li><strong>Partial discharge monitoring:</strong> Detecting insulation breakdown in early stages</li>
              <li><strong>Power quality analysis:</strong> Identifying harmonics and other electrical disturbances</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">AI and Machine Learning Applications</h3>
            <p className="text-[#FFC900]/80">
              The latest predictive maintenance systems incorporate artificial intelligence to improve accuracy.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Pattern recognition:</strong> Identifying subtle indicators of potential failure</li>
              <li><strong>Anomaly detection:</strong> Flagging unusual behavior for investigation</li>
              <li><strong>Remaining useful life estimation:</strong> Predicting time until failure</li>
              <li><strong>Root cause analysis:</strong> Determining underlying causes of issues</li>
              <li><strong>Decision support:</strong> Recommending optimal maintenance actions</li>
              <li><strong>Continuous improvement:</strong> Learning from maintenance outcomes to refine predictions</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const handleNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleTakeAssessment = () => {
    setShowAssessment(true);
    window.scrollTo(0, 0);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Electrical Maintenance"
          description="Preventative maintenance techniques and best practices"
          customBackAction={handleBackClick}
        />
        
        {!showAssessment ? (
          <div className="mt-8 space-y-8">
            <LessonContent title={sections[currentSection].title}>
              {sections[currentSection].content}
            </LessonContent>
            
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-[#FFC900]/20">
              <div>
                {currentSection > 0 && (
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={handlePreviousSection}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous Section
                  </Button>
                )}
              </div>

              {currentSection === sections.length - 1 ? (
                <Button
                  className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] flex items-center gap-2"
                  onClick={handleTakeAssessment}
                >
                  <CheckCircle className="h-4 w-4" />
                  Take Assessment
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                  onClick={handleNextSection}
                >
                  Next Section
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Electrical Maintenance Assessment</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Test your understanding of electrical maintenance concepts and practices with this assessment.
              Answer the questions based on the material covered in the previous sections.
            </p>
            <SafetyQuiz 
              unitId="electrical-maintenance" 
              timeLimit={600}
              questions={electricalMaintenanceQuestions}
              questionsToShow={10}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ElectricalMaintenancePage;
