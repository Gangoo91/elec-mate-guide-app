
import React from 'react';
import SectionCard from "@/components/units/SectionCard";

interface SectionsListProps {
  handleStudySection: (sectionId: string) => void;
}

const SectionsList = ({ handleStudySection }: SectionsListProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl text-[#FFC900] mb-4">Study Sections</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <SectionCard 
          sectionId="1.1" 
          unitId="305" 
          title="1. Electrical Installation Design Principles" 
          description="Planning circuits, supply arrangements, and design for various applications."
          isLevel3={true}
        />
        
        <SectionCard 
          sectionId="2.1" 
          unitId="305" 
          title="2. Selection of Electrical Equipment" 
          description="Selection of protective devices, cables, accessories and distribution boards."
          isLevel3={true}
        />
        
        <SectionCard 
          sectionId="3.1" 
          unitId="305" 
          title="3. Cable Sizing and Protection" 
          description="Calculations for current-carrying capacity, voltage drop and fault protection."
          isLevel3={true}
        />
        
        <SectionCard 
          sectionId="4.1" 
          unitId="305" 
          title="4. Discrimination and Coordination" 
          description="Ensuring protective devices operate correctly during fault conditions."
          isLevel3={true}
        />
        
        <SectionCard 
          sectionId="5.1" 
          unitId="305" 
          title="5. Earthing and Bonding Design" 
          description="Main and supplementary bonding, earthing conductor sizing."
          isLevel3={true}
        />
        
        <SectionCard 
          sectionId="6.1" 
          unitId="305" 
          title="6. Health, Safety and Building Regulations" 
          description="BS 7671, Building Regulations, energy efficiency and fire safety."
          isLevel3={true}
        />
      </div>
    </div>
  );
};

export default SectionsList;
