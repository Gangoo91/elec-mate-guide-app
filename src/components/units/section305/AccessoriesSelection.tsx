
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const AccessoriesSelection = () => {
  return (
    <LessonContent title="Selection of Accessories">
      <p className="mb-4">
        Proper selection of electrical accessories ensures safety, functionality, and durability of installations.
        Key accessories include:
      </p>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Switches</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Current ratings:</strong> Typically 6A, 10A, 16A, 20A, 45A</li>
            <li><strong>Types:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>One-way: Simple on/off control</li>
                <li>Two-way: Control from two locations</li>
                <li>Intermediate: Control from three or more locations</li>
                <li>Dimmer: Variable control of lighting levels</li>
                <li>Cord-operated: Ceiling switches for bathrooms</li>
                <li>Time delay: Automatic switch-off after preset time</li>
              </ul>
            </li>
            <li><strong>Selection factors:</strong> Current rating, IP rating, mounting type, aesthetics</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Socket Outlets</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>BS 1363:</strong> Standard 13A socket outlet</li>
            <li><strong>Features:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Switched or unswitched</li>
                <li>Single or dual outlet</li>
                <li>USB charging ports</li>
                <li>RCD protected</li>
                <li>Metal-clad for industrial use</li>
              </ul>
            </li>
            <li><strong>Special types:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Industrial sockets (16A, 32A, etc.)</li>
                <li>Floor-mounted sockets</li>
                <li>Outdoor rated sockets</li>
                <li>Specialized sockets (e.g., shaver outlets)</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Junction Boxes</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Used for cable connections and terminations</li>
            <li><strong>Types:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Surface-mounted</li>
                <li>Flush-mounted</li>
                <li>Maintenance-free (resin-filled)</li>
                <li>Fire-rated</li>
              </ul>
            </li>
            <li><strong>Selection factors:</strong> Number of terminals, cable sizes, IP rating, fire resistance</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Mounting Systems</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Back boxes:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Metal or plastic construction</li>
                <li>Surface or flush mounting</li>
                <li>Various depths for different applications</li>
              </ul>
            </li>
            <li><strong>Trunking and conduit:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>PVC or metal construction</li>
                <li>Mini-trunking for surface cables</li>
                <li>Cable management systems</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Selection Criteria</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Appropriate current and voltage ratings</li>
          <li>Environmental protection (IP rating)</li>
          <li>Physical protection requirements</li>
          <li>Operational requirements (frequency of use, ease of operation)</li>
          <li>Special needs (e.g., accessibility for disabled users)</li>
          <li>Fire resistance where required</li>
          <li>Compliance with relevant standards</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export default AccessoriesSelection;
