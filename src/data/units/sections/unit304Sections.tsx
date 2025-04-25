
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections304: Record<string, SectionData> = {
  "1.1": {
    title: "Initial Verification Requirements",
    description: "Understanding the requirements and procedures for initial verification of electrical installations",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Purpose of Initial Verification</h2>
        <p>
          Initial verification is performed on new installations, additions, or alterations to existing installations before they are put into service. The purpose is to confirm that the installation is:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Safe for use</li>
          <li>Compliant with BS 7671 (IET Wiring Regulations)</li>
          <li>Free from defects and damage</li>
          <li>Correctly designed to meet client requirements</li>
          <li>Built according to the design specifications</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Legal Requirements</h3>
        <p>
          Initial verification is mandated by several regulations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Electricity at Work Regulations 1989</li>
          <li>Building Regulations Part P (for domestic installations)</li>
          <li>BS 7671 Requirements for Electrical Installations</li>
          <li>Health and Safety at Work Act 1974</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Documentation Required</h2>
        <p>
          Before starting the verification process, the following documentation should be available:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Design specifications and calculations</li>
          <li>Circuit diagrams, charts, or tables</li>
          <li>Distribution board schedules</li>
          <li>Cable specifications and route plans</li>
          <li>Risk assessments for the installation</li>
          <li>Manufacturer's equipment instructions</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Stages of Initial Verification</h2>
        
        <h3 className="text-lg font-medium mt-4">1. Visual Inspection</h3>
        <p>
          A thorough visual inspection must be completed before testing begins, checking:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Connection of conductors and protective devices</li>
          <li>Correct selection of conductors for current-carrying capacity</li>
          <li>Presence and correct location of protective devices</li>
          <li>Presence of fire barriers, seals, and protection against thermal effects</li>
          <li>Selection of equipment and protective measures appropriate for external influences</li>
          <li>Identification of conductors (particularly neutral and protective conductors)</li>
          <li>Presence of diagrams, warning notices, and other information</li>
          <li>Accessibility for operation, inspection, and maintenance</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">2. Testing Sequence</h3>
        <p>
          Tests must be carried out in the correct sequence:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mt-2">
          <li>Continuity of protective conductors</li>
          <li>Continuity of ring final circuit conductors</li>
          <li>Insulation resistance</li>
          <li>Polarity</li>
          <li>Earth electrode resistance (where applicable)</li>
          <li>Earth fault loop impedance</li>
          <li>RCD operation</li>
          <li>Phase sequence (for three-phase installations)</li>
          <li>Functional testing</li>
        </ol>
        
        <h2 className="text-xl font-semibold mt-6">Certification</h2>
        <p>
          Upon successful completion of verification, the following documentation must be provided:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Electrical Installation Certificate (EIC)</li>
          <li>Schedule(s) of Inspections</li>
          <li>Schedule(s) of Test Results</li>
          <li>Any departures from the regulations (if applicable)</li>
          <li>As-installed drawings and documentation</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Certification Requirements</h3>
        <p>
          The EIC must include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Details of the client</li>
          <li>Installation address</li>
          <li>Description and extent of the installation covered</li>
          <li>Declaration that the installation meets BS 7671</li>
          <li>Details of any departures from BS 7671</li>
          <li>Designer's, constructor's, and inspector's details and signatures</li>
          <li>Next inspection recommendation date</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Safety Precautions</h2>
        <p>
          When carrying out initial verification, safety precautions must be observed:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Use appropriate PPE (personal protective equipment)</li>
          <li>Ensure test equipment is suitable and properly calibrated</li>
          <li>Take precautions against inadvertent contact with live parts</li>
          <li>Inform all relevant persons before testing begins</li>
          <li>Use safe isolation procedures when necessary</li>
          <li>Follow the correct sequence of tests</li>
        </ul>
      </div>
    ),
  },
};
