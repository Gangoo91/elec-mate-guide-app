
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const SupplyArrangements = () => {
  return (
    <LessonContent title="Supply Arrangements">
      <p className="mb-4">
        The selection of appropriate supply arrangements is a critical part of electrical installation design. 
        This section covers the different types of earthing systems and their applications.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Types of Earthing Systems</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>TN-S System:</strong> Separate neutral and protective conductors throughout the system</li>
          <li><strong>TN-C-S System:</strong> Combined neutral and protective conductors in part of the system (PME)</li>
          <li><strong>TT System:</strong> Earth connection provided by local earth electrode</li>
          <li><strong>IT System:</strong> No direct connection between live parts and earth (isolated)</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">TN-S System</h4>
          <p className="mb-2">
            In a TN-S system, the neutral and protective conductors are separate throughout the entire installation.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Source directly connected to earth at one point</li>
            <li>All exposed conductive parts connected to separate PE conductor</li>
            <li>Neutral and protective conductors never combined after the origin</li>
            <li>Typically used in commercial and industrial installations</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">TN-C-S System (PME)</h4>
          <p className="mb-2">
            Protective Multiple Earthing (PME) involves combined neutral and earth functions in part of the system.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Combined PEN (Protective Earth and Neutral) conductor used by the supply</li>
            <li>Separate neutral and protective conductors within the installation</li>
            <li>Most common system in UK domestic premises</li>
            <li>Cannot be used in some locations (e.g., petrol stations, swimming pools)</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">TT System</h4>
        <p className="mb-2">The TT system relies on a local earth electrode for the earth connection.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>No connection between supply earth and installation earth</li>
          <li>Installation earth provided by local earth electrode</li>
          <li>RCD protection essential due to higher earth fault loop impedance</li>
          <li>Used where PME is unavailable or unsuitable</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section1_2: Section = {
  title: "Supply Arrangements",
  description: "Types of supply systems including TN-S, TN-C-S, and TT systems",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the different types of earthing systems used in electrical installations</li>
            <li>Identify the characteristics of TN-S, TN-C-S, and TT systems</li>
            <li>Know where different supply arrangements are suitable for use</li>
            <li>Recognize safety considerations for each system type</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Supply System Types" 
        content={<SupplyArrangements />}
      />
    </>
  )
};
