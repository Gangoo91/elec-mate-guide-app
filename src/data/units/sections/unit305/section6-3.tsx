
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const EnergyEfficiency = () => {
  return (
    <LessonContent title="Energy Efficiency and Fire Safety">
      <p className="mb-4">
        Modern electrical installations must be designed with energy efficiency in mind while also ensuring 
        fire safety. These considerations are increasingly important due to environmental concerns and 
        regulatory requirements.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Energy Efficiency Considerations</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Lighting systems:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>LED lighting with high lumens per watt</li>
              <li>Automatic controls (PIR sensors, daylight sensors, timers)</li>
              <li>Zoning to allow selective operation</li>
              <li>Dimming capabilities</li>
            </ul>
          </li>
          <li><strong>Cable sizing:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Optimizing cable size to reduce energy losses</li>
              <li>Calculating energy-efficient cable sizes (beyond minimum requirements)</li>
              <li>Considering lifetime costs rather than just installation costs</li>
            </ul>
          </li>
          <li><strong>Power factor correction:</strong> To reduce apparent power demand</li>
          <li><strong>Energy monitoring:</strong> Systems to track and manage consumption</li>
          <li><strong>Harmonics mitigation:</strong> To reduce losses and equipment overheating</li>
          <li><strong>Variable speed drives:</strong> For motor applications</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Fire Safety Regulations</h4>
          <p className="mb-2">Electrical installations must comply with fire safety regulations, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Regulatory Reform (Fire Safety) Order 2005</strong></li>
            <li><strong>Building Regulations Part B (Fire Safety)</strong></li>
            <li><strong>BS 5839:</strong> Fire detection and alarm systems</li>
            <li><strong>BS 5266:</strong> Emergency lighting</li>
            <li><strong>BS 7671:</strong> Requirements for electrical installations</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Fire Safety Design Elements</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Cable selection:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Low smoke zero halogen (LSZH) cables in escape routes</li>
                <li>Fire-resistant cables for emergency systems</li>
                <li>Cable containment systems with appropriate fire rating</li>
              </ul>
            </li>
            <li><strong>Fire compartmentation:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Fire stopping where cables penetrate fire-rated walls</li>
                <li>Intumescent seals and barriers</li>
                <li>Maintaining fire separation integrity</li>
              </ul>
            </li>
            <li><strong>Overload and fault protection:</strong> Properly rated protective devices</li>
            <li><strong>Emergency systems:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Emergency lighting with appropriate duration</li>
                <li>Fire alarm systems with battery backup</li>
                <li>Smoke ventilation systems</li>
              </ul>
            </li>
            <li><strong>Arc fault detection:</strong> AFDD devices to prevent fires from arcing faults</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Energy Efficiency Standards</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Energy Performance of Buildings Directive (EPBD)</strong></li>
          <li><strong>BREEAM:</strong> Building Research Establishment Environmental Assessment Method</li>
          <li><strong>LEED:</strong> Leadership in Energy and Environmental Design</li>
          <li><strong>EPC:</strong> Energy Performance Certificates</li>
          <li><strong>Minimum Energy Efficiency Standards (MEES)</strong></li>
        </ul>
        <p className="mt-2">
          Electrical designers should be familiar with these standards and how their designs can contribute 
          to achieving compliance and certification.
        </p>
      </div>
    </LessonContent>
  );
};

const FireSafety = () => {
  return (
    <LessonContent title="Fire Safety in Electrical Installations">
      <p className="mb-4">
        Fire safety is a critical aspect of electrical installation design. Proper design and selection 
        of materials can significantly reduce fire risks associated with electrical systems.
      </p>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Fire Risk Assessment</h4>
          <p className="mb-2">Key considerations in electrical fire risk assessment:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Identification of potential ignition sources</li>
            <li>Assessment of fuel sources near electrical equipment</li>
            <li>Evaluation of existing protective measures</li>
            <li>Determination of risks to building occupants</li>
            <li>Documentation of findings and recommendations</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Cable Installation Methods for Fire Safety</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Appropriate support and fixing methods</li>
            <li>Segregation from heat sources</li>
            <li>Protection against mechanical damage</li>
            <li>Use of fire barriers and compartmentation</li>
            <li>Correct spacing of cables to prevent overheating</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Emergency Systems Requirements</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Emergency lighting:</strong> Minimum 3-hour duration in escape routes</li>
          <li><strong>Fire alarm systems:</strong> Designed to BS 5839 standards</li>
          <li><strong>Fire detection:</strong> Appropriate type and location of detectors</li>
          <li><strong>Emergency power supplies:</strong> Backup generators or UPS systems</li>
          <li><strong>Escape route signage:</strong> Illuminated exit signs</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section6_3: Section = {
  title: "Energy Efficiency and Fire Safety",
  description: "Energy efficiency standards and fire safety regulations",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand energy efficiency considerations in electrical installations</li>
            <li>Learn about fire safety regulations affecting electrical design</li>
            <li>Identify methods to improve energy performance while maintaining safety</li>
            <li>Recognize the requirements for emergency systems</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Energy Efficiency Standards" 
        content={<EnergyEfficiency />}
      />
      
      <ContentSection
        title="Fire Safety Requirements" 
        content={<FireSafety />}
      />
    </>
  )
};
