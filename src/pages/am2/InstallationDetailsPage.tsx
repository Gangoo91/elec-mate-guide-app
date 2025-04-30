
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { LearningObjective } from "@/components/units/LearningObjective";

// Import installation study content
import {
  installationPlanningSection1_1,
  installationPlanningSection1_2,
  installationPlanningSection1_3,
  installationPlanningSection2_1,
  installationPlanningSection2_2,
  installationPlanningSection2_3,
  installationPlanningSection3_1,
  installationPlanningSection3_2,
  installationPlanningSection3_3,
} from '@/data/units/sections/engineering/installationPlanning';

const InstallationDetailsPage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  
  // Helper function to get the section title based on topicId
  const getSectionTitle = () => {
    switch (topicId) {
      case 'reading-drawings': return 'Reading and Interpreting Drawings';
      case 'tools-equipment': return 'Tools and Equipment Selection';
      case 'material-identification': return 'Material Identification';
      case 'cable-containment': return 'Cable Containment Systems';
      case 'consumer-unit': return 'Consumer Unit Installation';
      case 'wiring-systems': return 'Wiring Systems Installation';
      case 'power-circuits': return 'Power Circuits';
      case 'lighting-circuits': return 'Lighting Circuits';
      case 'special-locations': return 'Special Locations';
      case 'cable-preparation': return 'Cable Preparation';
      case 'connection-methods': return 'Connection Methods';
      case 'quality-control': return 'Quality Control';
      case 'time-management': return 'Time Management';
      case 'common-pitfalls': return 'Common Pitfalls';
      case 'final-checks': return 'Final Checks';
      default: return 'Installation Study';
    }
  };

  // Get content based on topic ID
  const getContent = () => {
    switch (topicId) {
      case 'reading-drawings':
        return (
          <>
            <LearningObjective title="Understanding Electrical Drawings">
              <div className="space-y-4">
                <p>
                  Electrical drawings are essential for communicating installation requirements. Understanding how 
                  to read and interpret these drawings is a fundamental skill for the AM2 assessment.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Drawing Types:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Circuit diagrams:</strong> Show electrical connections between components</li>
                  <li><strong>Wiring diagrams:</strong> Illustrate physical wiring layout and connections</li>
                  <li><strong>Layout drawings:</strong> Show positions of electrical equipment within a building</li>
                  <li><strong>Schematic diagrams:</strong> Simplified representations of electrical systems</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Electrical Symbols">
              <div className="space-y-4">
                <p>
                  British Standard electrical symbols are used in drawings to represent different components.
                  For the AM2 assessment, you must be able to identify common symbols accurately.
                </p>
                <h4 className="text-[#FFC900] font-medium">Common Symbols:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Socket outlets (single and double)</li>
                  <li>Light fittings and switches</li>
                  <li>Distribution boards and consumer units</li>
                  <li>Junction boxes and connection points</li>
                  <li>Earth points and bonding connections</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Scale and Dimensions">
              <div className="space-y-4">
                <p>
                  Accurately working with scales and dimensions is crucial for positioning equipment correctly.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Scale Considerations:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Understanding scale ratios (e.g., 1:50, 1:100)</li>
                  <li>Using measuring tools to transfer dimensions from drawings to work areas</li>
                  <li>Accounting for building features not shown on electrical drawings</li>
                  <li>Making accurate measurements for equipment positioning</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Always check drawing scales before starting any layout work</li>
                <li>Verify symbol meanings if you are unsure</li>
                <li>Cross-reference different drawing types to build a complete understanding</li>
                <li>Pay attention to drawing revisions and updates</li>
                <li>Make notes on your drawings during installation for future reference</li>
              </ul>
            </div>
          </>
        );
      
      case 'tools-equipment':
        return (
          <>
            <LearningObjective title="Hand Tools for Electrical Installation">
              <div className="space-y-4">
                <p>
                  Selecting the appropriate tools for each task is essential for efficient and safe installation work.
                  The AM2 assessment will expect you to demonstrate proper tool selection and usage.
                </p>
                <h4 className="text-[#FFC900] font-medium">Essential Hand Tools:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Screwdrivers:</strong> Slotted, Phillips, Pozidriv, and VDE insulated types</li>
                  <li><strong>Pliers and cutters:</strong> Side cutters, combination pliers, long-nose pliers</li>
                  <li><strong>Cable preparation tools:</strong> Wire strippers, cable knives</li>
                  <li><strong>Measurement tools:</strong> Tape measure, spirit level, try square</li>
                  <li><strong>Marking tools:</strong> Pencils, markers, scribes</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Power Tools">
              <div className="space-y-4">
                <p>
                  Power tools speed up installation work but require careful handling for safety and accuracy.
                </p>
                <h4 className="text-[#FFC900] font-medium">Common Power Tools:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Drills:</strong> Cordless and corded options for different materials</li>
                  <li><strong>Hammer drills:</strong> For masonry and concrete surfaces</li>
                  <li><strong>Impact drivers:</strong> For rapid screw insertion</li>
                  <li><strong>Jigsaws and hole saws:</strong> For cutting openings in panels</li>
                </ul>
                <h4 className="text-[#FFC900] font-medium mt-4">Safety Considerations:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Always inspect power tools before use</li>
                  <li>Use appropriate PPE (eye protection, ear protection, etc.)</li>
                  <li>Follow manufacturer's instructions for tool operation</li>
                  <li>Ensure tools are PAT tested and safe to use</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Specialized Installation Equipment">
              <div className="space-y-4">
                <p>
                  Some installation tasks require specialized equipment to complete efficiently.
                </p>
                <h4 className="text-[#FFC900] font-medium">Specialized Equipment:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Conduit benders:</strong> For accurate bending of metallic conduit</li>
                  <li><strong>Cable reels and dispensers:</strong> For efficient cable handling</li>
                  <li><strong>Cable pulling equipment:</strong> For drawing cables through containment</li>
                  <li><strong>Pipe threading equipment:</strong> For threaded metallic conduit systems</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Maintain a clean and organized tool arrangement during assessment</li>
                <li>Select the correct tool for each specific task</li>
                <li>Demonstrate proper tool handling techniques</li>
                <li>Use insulated tools for electrical work</li>
                <li>Return tools to their proper storage when not in use</li>
              </ul>
            </div>
          </>
        );
      
      case 'cable-containment':
        return (
          <>
            <LearningObjective title="Types of Cable Containment Systems">
              <div className="space-y-4">
                <p>
                  Cable containment systems provide mechanical protection and support for cables, ensuring a professional 
                  and compliant installation.
                </p>
                <h4 className="text-[#FFC900] font-medium">Common Containment Systems:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Metal trunking:</strong> Rectangular containment for multiple cables</li>
                  <li><strong>PVC trunking:</strong> Non-metallic alternative for dry environments</li>
                  <li><strong>Steel conduit:</strong> Robust protection with excellent EMI shielding</li>
                  <li><strong>PVC conduit:</strong> Lightweight alternative for non-hostile environments</li>
                  <li><strong>Cable tray:</strong> Open support system for multiple cables</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Installation Techniques">
              <div className="space-y-4">
                <p>
                  Proper installation techniques ensure containment systems are secure, accessible, and 
                  provide adequate protection to cables.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Installation Practices:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Measuring and cutting:</strong> Accurate sizing and clean cuts</li>
                  <li><strong>Bending methods:</strong> Using appropriate benders to avoid kinking</li>
                  <li><strong>Fixing methods:</strong> Selecting appropriate brackets and fixings</li>
                  <li><strong>Joint preparation:</strong> Ensuring secure and smooth connections</li>
                  <li><strong>System integrity:</strong> Maintaining continuity throughout</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Regulatory Requirements">
              <div className="space-y-4">
                <p>
                  Cable containment systems must comply with specific regulations to ensure safety and functionality.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Regulatory Aspects:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>BS 7671 requirements:</strong> Compliance with current regulations</li>
                  <li><strong>Fire barriers:</strong> Maintaining fire compartmentation</li>
                  <li><strong>Support intervals:</strong> Following manufacturer specifications</li>
                  <li><strong>Cable capacity:</strong> Avoiding exceeding maximum fill ratios</li>
                  <li><strong>Earthing requirements:</strong> Ensuring proper bonding of metallic systems</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Ensure all cuts are deburred to prevent cable damage</li>
                <li>Use appropriate tools for each containment type</li>
                <li>Maintain proper alignment and levels during installation</li>
                <li>Allow sufficient space for cable installation and future additions</li>
                <li>Securely fasten all components to prevent movement</li>
              </ul>
            </div>
          </>
        );

      // More case blocks for other topics could be added here
      // For brevity, I'm including just a few fully detailed sections
        
      default:
        // For now, use the first section data as a fallback
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#FFC900]">{getSectionTitle()}</h3>
            <p className="text-[#FFC900]/70">
              Detailed content for this section will be added soon. This page will contain comprehensive 
              information about {getSectionTitle().toLowerCase()}, including practical techniques, regulatory 
              requirements, and assessment tips.
            </p>
            <p className="text-[#FFC900]/70">
              Check back later for updates or explore other available sections.
            </p>
          </div>
        );
    }
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 pt-16 md:pt-16">
        <PageHeader 
          title={getSectionTitle()}
          description={`Detailed study material for ${getSectionTitle().toLowerCase()}`}
          customBackAction={() => navigate('/apprentices/study-materials/city-guilds/am2/installation')}
        />
        
        <div className="mt-8 space-y-8">
          {getContent()}
        </div>

        <div className="mt-12 flex justify-between">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
            onClick={() => navigate('/apprentices/study-materials/city-guilds/am2/installation')}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Installation
          </Button>
          
          <Button 
            className="flex items-center gap-2 bg-[#FFC900] text-[#22251e] hover:bg-[#e5b700]"
          >
            <BookOpen className="h-4 w-4" />
            Download Study Guide
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default InstallationDetailsPage;
