
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const CurrentCarryingCapacity = () => {
  return (
    <LessonContent title="Current-Carrying Capacity">
      <p className="mb-4">
        The current-carrying capacity (I<sub>t</sub>) is the maximum current a cable can carry continuously 
        without exceeding its rated temperature.
      </p>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Basic Principles</h4>
          <p>
            Current-carrying capacity depends on:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Cable size (cross-sectional area)</li>
            <li>Cable insulation type (PVC, XLPE, etc.)</li>
            <li>Installation method (conduit, tray, direct burial, etc.)</li>
            <li>Ambient temperature</li>
            <li>Grouping with other cables</li>
            <li>Thermal insulation crossing or proximity</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Determination Method</h4>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Identify the design current (I<sub>b</sub>)</li>
            <li>Select appropriate protection device rating (I<sub>n</sub>)</li>
            <li>Calculate minimum current for protection device to operate (I<sub>2</sub>)</li>
            <li>Determine base current-carrying capacity from tables</li>
            <li>Apply relevant correction factors (C<sub>a</sub>, C<sub>g</sub>, etc.)</li>
            <li>Verify that corrected capacity exceeds I<sub>2</sub></li>
          </ol>
        </div>
      </div>
    </LessonContent>
  );
};

export default CurrentCarryingCapacity;
