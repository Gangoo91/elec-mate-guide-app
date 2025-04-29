
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const ProtectiveDevices = () => {
  return (
    <LessonContent title="Protective Devices">
      <p className="mb-4">
        Selecting the appropriate protective devices is essential for electrical safety. The main types include:
      </p>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Miniature Circuit Breakers (MCBs)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide overcurrent protection for circuits and equipment</li>
            <li>Available in different trip characteristics:
              <ul className="list-disc pl-6 mt-1">
                <li><strong>Type B:</strong> Trips at 3-5 times rated current (domestic/commercial installations)</li>
                <li><strong>Type C:</strong> Trips at 5-10 times rated current (motors, discharge lighting)</li>
                <li><strong>Type D:</strong> Trips at 10-20 times rated current (high inrush equipment)</li>
              </ul>
            </li>
            <li>Common ratings: 6A, 10A, 16A, 20A, 32A, 40A, 50A, 63A</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Residual Current Devices (RCDs)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide protection against electric shock by detecting earth leakage currents</li>
            <li>Common sensitivities:
              <ul className="list-disc pl-6 mt-1">
                <li><strong>30mA:</strong> Additional protection for socket outlets and mobile equipment</li>
                <li><strong>100mA:</strong> Fire protection</li>
                <li><strong>300mA:</strong> Some fixed equipment, fire protection</li>
              </ul>
            </li>
            <li>Types:
              <ul className="list-disc pl-6 mt-1">
                <li><strong>Type AC:</strong> Detects AC leakage currents</li>
                <li><strong>Type A:</strong> Detects AC and pulsating DC leakage currents</li>
                <li><strong>Type B:</strong> Detects AC, pulsating DC and smooth DC leakage currents</li>
                <li><strong>Type S:</strong> Time-delayed operation for discrimination</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Residual Current Circuit Breakers with Overcurrent Protection (RCBOs)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Combines functions of MCB and RCD in a single device</li>
            <li>Provides both overcurrent and earth leakage protection</li>
            <li>Allows individual circuits to have dedicated RCD protection</li>
            <li>Reduces disruption as only the affected circuit is disconnected</li>
            <li>Available in various ratings and sensitivities</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Selection Criteria</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Circuit design current and cable rating</li>
            <li>Required disconnection time for fault protection</li>
            <li>Prospective fault current at the point of installation</li>
            <li>Type of load and inrush current characteristics</li>
            <li>Discrimination requirements with other devices</li>
            <li>Environmental conditions</li>
          </ul>
        </div>
      </div>
    </LessonContent>
  );
};

export default ProtectiveDevices;
