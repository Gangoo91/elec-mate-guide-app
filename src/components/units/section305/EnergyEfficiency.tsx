
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const EnergyEfficiency = () => {
  return (
    <LessonContent title="Energy Efficiency Standards">
      <p className="mb-4">
        Energy efficiency has become an increasingly important consideration in electrical installations, 
        driven by environmental concerns, cost savings, and regulatory requirements. BS 7671 now includes 
        Part 8, which specifically addresses energy efficiency.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Part L Building Regulations</h4>
        <p>
          Part L of the Building Regulations (Conservation of fuel and power) sets standards for energy efficiency:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>L1A and L2A:</strong> New dwellings and buildings other than dwellings</li>
          <li><strong>L1B and L2B:</strong> Existing dwellings and buildings other than dwellings</li>
          <li>Key requirements affecting electrical design include:
            <ul className="list-disc pl-6 mt-1">
              <li>Minimum efficacy levels for lighting (typically 60 lumens per circuit-watt)</li>
              <li>Controls for lighting systems to prevent unnecessary use</li>
              <li>Energy metering provisions</li>
              <li>Power factor correction requirements</li>
              <li>Efficiency standards for fixed building services</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">BS 7671 Part 8: Energy Efficiency</h4>
          <p className="mb-2">
            Part 8 provides recommendations for the design and erection of electrical installations with regard to energy efficiency:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Energy Efficiency Assessment:</strong> Documentation of energy efficiency measures</li>
            <li><strong>Load Profiles:</strong> Understanding patterns of electricity use</li>
            <li><strong>Power Factor Improvement:</strong> Reducing reactive power demand</li>
            <li><strong>Harmonic Mitigation:</strong> Reducing losses from harmonic currents</li>
            <li><strong>Voltage Drop Optimization:</strong> Ensuring efficient operation of equipment</li>
            <li><strong>Cable Sizing:</strong> Considering lifetime energy costs vs. initial installation costs</li>
            <li><strong>Distribution Transformer Selection:</strong> Considering efficiency ratings</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Energy Efficient Design Techniques</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Lighting:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>LED lighting technology</li>
                <li>Presence detection and daylight sensing</li>
                <li>Zone control and scene setting</li>
                <li>Dimming capabilities</li>
              </ul>
            </li>
            <li><strong>Distribution Design:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Locating distribution boards near to loads</li>
                <li>Optimal voltage distribution</li>
                <li>Selecting appropriately rated equipment</li>
                <li>Considering cable losses in design</li>
              </ul>
            </li>
            <li><strong>Control Systems:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Building Management Systems (BMS)</li>
                <li>Smart metering and monitoring</li>
                <li>Load shedding and demand control</li>
                <li>Automated controls for HVAC and other systems</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Energy Efficiency Classifications</h4>
        <p className="mb-2">
          BS 7671 defines energy efficiency classes EIEC0 to EIEC4:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>EIEC0:</strong> No energy efficiency measures considered</li>
          <li><strong>EIEC1:</strong> Basic energy efficiency measures</li>
          <li><strong>EIEC2:</strong> Enhanced energy efficiency measures</li>
          <li><strong>EIEC3:</strong> Advanced energy efficiency measures</li>
          <li><strong>EIEC4:</strong> Comprehensive energy efficiency measures including monitoring and power management</li>
        </ul>
        <p className="mt-2">
          The appropriate class depends on the installation type, client requirements, and regulatory context.
        </p>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Load Assessment and Optimization</h4>
        <p>Energy efficient design begins with thorough load assessment:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Load profiling:</strong> Understanding when and how energy is used</li>
          <li><strong>Power quality analysis:</strong> Identifying harmonic distortion and power factor issues</li>
          <li><strong>Diversity factors:</strong> Realistic assessment of maximum demand</li>
          <li><strong>Load matching:</strong> Sizing equipment appropriately for the actual load</li>
          <li><strong>Future expansion:</strong> Planning for changes while avoiding oversizing</li>
        </ul>
      </div>
      
      <div className="mt-4">
        <p className="italic text-[#FFC900]/70">
          Note: While energy efficiency is important, safety remains the primary consideration in electrical installations.
          Energy efficiency measures must never compromise safety requirements.
        </p>
      </div>
    </LessonContent>
  );
};

export default EnergyEfficiency;
