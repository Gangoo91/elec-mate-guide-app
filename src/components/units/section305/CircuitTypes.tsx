
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const CircuitTypes = () => {
  return (
    <LessonContent title="Circuit Types and Design">
      <p className="mb-4">
        Different electrical functions require specialized circuit designs:
      </p>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Lighting Circuits</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Typically wired with 1.0mm² or 1.5mm² cable</li>
            <li>Protected by 6A or 10A circuit breakers</li>
            <li>Often incorporate two-way and intermediate switching</li>
            <li>May include dimming controls or emergency lighting</li>
            <li>Recommended maximum of 10-12 lighting points per circuit</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Socket Outlet Circuits</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Ring Circuit:</strong> 2.5mm² cable forming a loop, protected by 30/32A device (common in UK)</li>
            <li><strong>Radial Circuit:</strong> 2.5mm² cable protected by 20A device or 4.0mm² cable protected by 32A device</li>
            <li>Maximum floor area served by a single circuit:
              <ul className="list-disc pl-6 mt-1">
                <li>Ring circuit: 100m²</li>
                <li>20A radial circuit: 50m²</li>
                <li>32A radial circuit: 75m²</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Specialized Circuits</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Cookers:</strong> Dedicated 6.0mm² cable with 32A or 40A protection for units up to 15kW</li>
            <li><strong>Electric Showers:</strong> Dedicated circuit with appropriate cable size based on power rating (typically 6.0mm² - 10.0mm²)</li>
            <li><strong>Emergency Lighting:</strong> Separate circuits with UPS or battery backup systems, compliant with BS 5266</li>
            <li><strong>Immersion Heaters:</strong> Dedicated circuit with appropriate timer controls</li>
            <li><strong>EV Charging Points:</strong> Dedicated circuit with Mode 2 or Mode 3 charging capabilities</li>
          </ul>
        </div>
      </div>
    </LessonContent>
  );
};

export default CircuitTypes;
