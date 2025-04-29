
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const SupplementaryBonding = () => {
  return (
    <LessonContent title="Supplementary Bonding">
      <p className="mb-4">
        Supplementary bonding is an additional protective measure used in locations with increased risk 
        of electric shock. It involves connecting together exposed and extraneous conductive parts to 
        reduce touch voltage to a safe level.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">When Supplementary Bonding is Required</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Special locations:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Bathrooms and shower rooms</li>
              <li>Swimming pools and their surrounding zones</li>
              <li>Saunas</li>
              <li>Medical locations</li>
              <li>Agricultural premises</li>
            </ul>
          </li>
          <li><strong>Disconnection time:</strong> When automatic disconnection times cannot be achieved</li>
          <li><strong>High-risk areas:</strong> Where there is increased risk due to body resistance reduction</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Implementation in Bathrooms</h4>
          <p className="mb-2">In bathrooms, supplementary bonding connects together:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Metal pipes (water, gas, waste, heating)</li>
            <li>Metal baths and shower trays</li>
            <li>Metal taps and shower fittings</li>
            <li>Accessible metallic structural parts</li>
            <li>Metal window frames (if accessible from inside the bathroom)</li>
            <li>Protective conductors of all circuits in the location</li>
          </ul>
          <p className="mt-2 italic">Note: Supplementary bonding may be omitted if all circuits are protected by 30mA RCDs and metal pipes are connected to the main equipotential bonding.</p>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Technical Requirements</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Conductor sizing:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Minimum 2.5mm² copper if mechanically protected</li>
                <li>Minimum 4mm² copper if not mechanically protected</li>
                <li>Not smaller than the smallest circuit protective conductor in the location</li>
              </ul>
            </li>
            <li><strong>Connection methods:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Approved clamps complying with BS 951</li>
                <li>Accessible connections (but not requiring a tool to remove)</li>
                <li>Clean metal-to-metal contact</li>
                <li>Protected against corrosion</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Testing Requirements</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Continuity testing between all bonded parts</li>
          <li>Maximum resistance typically 0.05Ω (varies with installation)</li>
          <li>Visual inspection of connections</li>
          <li>Documentation of all bonding connections on installation certificates</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section5_2: Section = {
  title: "Supplementary Bonding",
  description: "When and how to implement supplementary bonding",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the purpose and principles of supplementary bonding</li>
            <li>Identify locations where supplementary bonding is required</li>
            <li>Learn the technical requirements for supplementary bonding conductors</li>
            <li>Know how to implement and test supplementary bonding in special locations</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Supplementary Bonding Requirements" 
        content={<SupplementaryBonding />}
      />
    </>
  )
};
