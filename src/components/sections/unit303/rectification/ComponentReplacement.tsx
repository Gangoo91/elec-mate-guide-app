
import React from 'react';

const ComponentReplacement = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Component Replacement Techniques</h2>
      <p>
        Proper component replacement is essential for effective fault rectification and to ensure the safe, reliable operation of electrical systems after repair.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Preparation for Component Replacement</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Ensure safe isolation before beginning work</li>
        <li>Gather all required tools and replacement parts</li>
        <li>Record or photograph existing connections</li>
        <li>Verify replacement component specifications match requirements</li>
        <li>Prepare workspace with adequate lighting and access</li>
        <li>Have circuit diagrams and manufacturer documentation available</li>
        <li>Ensure replacement parts are genuine or approved equivalents</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Key Tools and Equipment</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Insulated hand tools appropriate to the task</li>
        <li>Torque screwdrivers and wrenches for proper tightening</li>
        <li>Cable preparation tools (strippers, crimpers)</li>
        <li>Heat shrink tubing and insulating materials</li>
        <li>Soldering equipment (for electronic components)</li>
        <li>Anti-static precautions for sensitive components</li>
        <li>Test equipment for verification after replacement</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Replacing Circuit Protection Devices</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Match exact rating and type (MCB, RCBO, fuse)</li>
        <li>Verify correct breaking capacity for the application</li>
        <li>Ensure terminals are fully tightened to specified torque</li>
        <li>Check proper seating in enclosure or rail mounting</li>
        <li>Verify operation of test button for RCDs</li>
        <li>Ensure device is appropriate for circuit characteristics (Type B, C, D etc.)</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Replacing Cables and Conductors</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Match or exceed original cable specification (CSA, type, rating)</li>
        <li>Remove sufficient length to ensure no damaged section remains</li>
        <li>Maintain correct color coding for conductors</li>
        <li>Use appropriate termination methods (crimps, lugs, etc.)</li>
        <li>Ensure proper cable restraint and mechanical protection</li>
        <li>Label cables clearly for future identification</li>
        <li>Test continuity and insulation resistance before energizing</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Replacing Switches and Accessories</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Match current rating and switching configuration</li>
        <li>Ensure environmental rating is appropriate (IP rating)</li>
        <li>Maintain adequate conductor insulation at terminations</li>
        <li>Avoid excessive wire stripping or exposed conductors</li>
        <li>Securely mount accessories to prevent movement</li>
        <li>Test operation before reinstating supply</li>
        <li>Verify accessory meets current regulations</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Replacing Major Components</h2>
      <h3 className="text-lg font-medium mt-4">Motors and Drives</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Match frame size, mounting arrangement, and shaft dimensions</li>
        <li>Verify electrical specifications (voltage, power, speed)</li>
        <li>Check rotation direction after connection</li>
        <li>Ensure proper alignment to prevent mechanical issues</li>
        <li>Follow manufacturer's guidance for commissioning</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Contactors and Relays</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Match contact rating and configuration</li>
        <li>Verify coil voltage and operation</li>
        <li>Ensure compatibility with control systems</li>
        <li>Check auxiliary contact arrangements if present</li>
        <li>Test operation under no-load conditions first</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Documentation After Replacement</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Record all components replaced with full specifications</li>
        <li>Update circuit diagrams if changes were made</li>
        <li>Document test results after replacement</li>
        <li>Note any deviations from original specifications</li>
        <li>Update asset management systems if applicable</li>
        <li>Record batch numbers or serial numbers of critical components</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Best Practices for Quality Assurance</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Double-check all connections before energizing</li>
        <li>Have work verified by a second person when possible</li>
        <li>Perform full functional testing after replacement</li>
        <li>Monitor new components during initial operation</li>
        <li>Follow up with thermal scanning for critical connections</li>
        <li>Dispose of replaced components properly according to regulations</li>
        <li>Consider root cause analysis to prevent recurring faults</li>
      </ul>
    </div>
  );
};

export default ComponentReplacement;
