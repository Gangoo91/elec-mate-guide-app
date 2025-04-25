import React from 'react';
import { useNavigate } from 'react-router-dom';
import SolarContentLayout from '@/components/solar/SolarContentLayout';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const PhysicalInstallationPage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Mounting System Installation",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Learn the critical steps for securely installing solar panel mounting systems:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Roof attachment methods including flashing and mounting hardware</li>
            <li>Proper racking system assembly techniques and load calculations</li>
            <li>Advanced waterproofing methods to prevent roof leaks</li>
            <li>Weight distribution analysis and structural considerations</li>
            <li>Wind load calculations and attachment spacing requirements</li>
          </ul>
          <Button 
            variant="outline" 
            className="mt-4 text-[#FFC900] border-[#FFC900] hover:bg-[#FFC900]/10"
            onClick={() => navigate('/electricians/solar-pv-installation/installation-process/physical-installation/mounting-systems')}
          >
            Learn More About Mounting Systems
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    {
      title: "Panel Installation",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Master the techniques for safe and efficient solar panel installation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Safe panel handling procedures and lifting techniques</li>
            <li>Proper alignment and spacing of modules</li>
            <li>Module clamping and securing methods</li>
            <li>Inter-module wiring and connection best practices</li>
            <li>System grounding requirements and methods</li>
            <li>Panel orientation optimization for maximum efficiency</li>
          </ul>
        </div>
      )
    },
    {
      title: "Equipment Installation",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Learn the proper installation of critical solar system components:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Inverter placement and mounting considerations</li>
            <li>Disconnect installation and accessibility requirements</li>
            <li>Proper conduit routing and support methods</li>
            <li>Weather sealing techniques for roof penetrations</li>
            <li>Junction box installation and wiring management</li>
            <li>Equipment grounding and bonding requirements</li>
          </ul>
        </div>
      )
    },
    {
      title: "Safety Considerations",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Essential safety protocols for solar installation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fall protection systems and requirements</li>
            <li>Personal protective equipment (PPE) guidelines</li>
            <li>Safe tool handling and electrical safety practices</li>
            <li>Emergency response procedures</li>
            <li>Site safety management and hazard prevention</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Physical Installation"
      description="Comprehensive guide to the proper installation of solar PV system components, including mounting systems, panels, and associated equipment."
      sections={sections}
    />
  );
};

export default PhysicalInstallationPage;
