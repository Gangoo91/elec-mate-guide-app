
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const BuildingRegulations = () => {
  return (
    <LessonContent title="Building Regulations">
      <p className="mb-4">
        Building Regulations set standards for the design and construction of buildings to ensure the health, 
        safety, welfare, and convenience of people in and around buildings. Several parts are relevant to 
        electrical installations.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Part P: Electrical Safety</h4>
        <p>
          Part P of the Building Regulations (applicable in England and Wales) specifically covers electrical safety in dwellings:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Requires that electrical installations are designed and installed to protect people from fire hazards and electric shocks</li>
          <li>Applies to new dwellings and alterations/additions to electrical installations in existing dwellings</li>
          <li>Notifiable work must be certified as compliant with BS 7671 by:
            <ul className="list-disc pl-6 mt-1">
              <li>A registered competent person (e.g., member of an electrical Competent Person Scheme)</li>
              <li>Building Control approval for work done by non-registered persons</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Notifiable Work Under Part P</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>New circuits in a dwelling (including extensions)</li>
            <li>Consumer unit replacement</li>
            <li>Any work in special locations:
              <ul className="list-disc pl-6 mt-1">
                <li>Bathrooms (zones 0, 1, and 2)</li>
                <li>Swimming pools</li>
                <li>Areas with hot air saunas</li>
              </ul>
            </li>
          </ul>
          <p className="mt-2">
            <strong>Note:</strong> Minor works such as replacing accessories, adding sockets to existing circuits, 
            or fitting outdoor low voltage lighting are typically non-notifiable, but must still comply with BS 7671.
          </p>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Other Relevant Building Regulations</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Part A (Structure):</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Affects routing of cables through structural elements</li>
                <li>Restrictions on notching and drilling of joists and beams</li>
              </ul>
            </li>
            <li><strong>Part B (Fire Safety):</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Fire protection requirements for cables passing through fire compartments</li>
                <li>Requirements for escape route lighting</li>
                <li>Fire alarm systems requirements</li>
              </ul>
            </li>
            <li><strong>Part L (Conservation of fuel and power):</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Energy efficiency requirements for lighting</li>
                <li>Control systems for heating and ventilation</li>
                <li>Airtightness considerations when passing cables through thermal elements</li>
              </ul>
            </li>
            <li><strong>Part M (Access to and use of buildings):</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Height and positions of accessories for accessibility</li>
                <li>Visual contrast requirements for socket outlets and switches</li>
                <li>Provision of aids for people with hearing impairment</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Regional Variations</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Scotland:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Scottish Building Standards Technical Handbooks</li>
              <li>Section 4.5 covers electrical safety</li>
              <li>Certification by approved certifier of construction (electrical installations)</li>
            </ul>
          </li>
          <li><strong>Northern Ireland:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Technical Booklet P (Electrical Safety)</li>
              <li>Building Control approval or certification by competent person</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Compliance Procedures</h4>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Design electrical installation to comply with BS 7671 and Building Regulations</li>
          <li>For notifiable work, either:
            <ul className="list-disc pl-6 mt-1">
              <li>Use a registered competent person who will self-certify the work and notify Building Control</li>
              <li>Submit a Building Notice or Full Plans application to Building Control before starting work</li>
            </ul>
          </li>
          <li>Complete appropriate certification:
            <ul className="list-disc pl-6 mt-1">
              <li>Electrical Installation Certificate</li>
              <li>Minor Electrical Installation Works Certificate (for additions to existing circuits)</li>
              <li>Electrical Installation Condition Report (for existing installations)</li>
            </ul>
          </li>
          <li>Provide building owner with all relevant documentation</li>
        </ol>
      </div>
    </LessonContent>
  );
};

export default BuildingRegulations;
