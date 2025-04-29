
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { unit201 } from '@/data/units/unit201';
import { sections201 } from '@/data/units/sections/unit201Sections';
import { BookOpen, CheckCircle } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";

const Level2Unit201Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
  };
  
  const handleStudySection = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-2/201/${sectionId}`);
  };

  // Organize sections into section groups similar to level 3 units
  const sectionGroups = [
    {
      number: '1',
      title: 'Understanding Health and Safety Legislation',
      sections: [
        { id: '1.1', title: 'Health and Safety at Work Act 1974', description: 'Key principles and requirements of the Health and Safety at Work Act 1974' },
        { id: '1.2', title: 'Electricity at Work Regulations 1989', description: 'Understanding the specific regulations that govern electrical safety' },
        { id: '1.3', title: 'COSHH (Control of Substances Hazardous to Health)', description: 'Understanding COSHH regulations and how they apply to electrical work' },
        { id: '1.4', title: 'Manual Handling Regulations', description: 'Safe lifting and moving of equipment and materials' },
        { id: '1.5', title: 'Working at Height Regulations', description: 'Safety requirements when working on ladders and elevated platforms' },
        { id: '1.6', title: 'Risk Assessments and Method Statements (RAMS)', description: 'Creating and using RAMS documents for electrical work' }
      ]
    },
    {
      number: '2',
      title: 'Hazards in Building Services Engineering',
      sections: [
        { id: '2.1', title: 'Working at Heights (Falls)', description: 'Understanding risks and safety measures when working at height' },
        { id: '2.2', title: 'Manual Handling Injuries', description: 'Prevention of injuries when lifting electrical equipment and materials' },
        { id: '2.3', title: 'Fire Hazards', description: 'Understanding fire risks specific to electrical work and how to mitigate them' },
        { id: '2.4', title: 'Slips, Trips, and Falls', description: 'Preventing common workplace accidents through good housekeeping' },
        { id: '2.5', title: 'Use of Hazardous Substances', description: 'Safe handling of glues, solvents, and other chemicals' }
      ]
    },
    {
      number: '3',
      title: 'Risk Assessment and Accident Prevention',
      sections: [
        { id: '3.1', title: 'How to Identify Hazards and Assess Risks', description: 'Systematic approaches to identifying workplace hazards' },
        { id: '3.2', title: 'Hierarchy of Control Measures', description: 'Understanding the most effective approaches to controlling risks' }
      ]
    },
    {
      number: '4',
      title: 'Safe Use of Tools, Equipment, and Materials',
      sections: [
        { id: '4.1', title: 'Correct and Safe Use of Hand Tools and Power Tools', description: 'Best practices for using common electrical tools' },
        { id: '4.2', title: 'Inspecting Tools Before Use', description: 'Checking tools and equipment to ensure they are safe to use' },
        { id: '4.3', title: 'Use of Personal Protective Equipment (PPE)', description: 'Selection and proper use of safety equipment' }
      ]
    },
    {
      number: '5',
      title: 'Fire Prevention and Emergency Procedures',
      sections: [
        { id: '5.1', title: 'How Fires Start (Fire Triangle)', description: 'Understanding the science behind fires and how to prevent them' },
        { id: '5.2', title: 'Types of Fire Extinguishers', description: 'Selecting and using the appropriate fire extinguisher' },
        { id: '5.3', title: 'Evacuation Procedures', description: 'Emergency response and evacuation in case of fire' }
      ]
    },
    {
      number: '6',
      title: 'Working Safely with Electricity',
      sections: [
        { id: '6.1', title: 'Safe Isolation Procedures', description: 'Comprehensive guide to safely isolating electrical systems' },
        { id: '6.2', title: 'Importance of Proving Dead Before Working', description: 'Verifying electrical equipment is de-energized before work' },
        { id: '6.3', title: 'Double-checking Tools and Equipment', description: 'Ensuring tools and test equipment are safe and appropriate' }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit 201 - ${unit201.title}`}
          description={unit201.description || ''}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-10">
          {/* Unit Content */}
          <div>
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Unit Content</h2>
            
            <div className="space-y-10">
              {sectionGroups.map((group, index) => (
                <SectionGroup
                  key={index}
                  number={group.number}
                  title={group.title}
                  sections={group.sections}
                  onStudy={handleStudySection}
                />
              ))}
            </div>
          </div>
          
          {/* Unit Quiz Button */}
          <div className="mt-12">
            <Button 
              className="w-full py-6 bg-[#FFC900] hover:bg-[#e5b700] text-[#22251e] font-semibold text-lg"
              onClick={() => navigate('/apprentices/study-materials/city-guilds/level-2/201/assessment')}
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Take Unit 201 Assessment
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2Unit201Page;
