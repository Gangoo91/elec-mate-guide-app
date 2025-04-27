
import React from 'react';
import { ComponentInfo } from "@/types/arLearning";

interface ComponentDetailsProps {
  component: ComponentInfo;
}

const ComponentDetails = ({ component }: ComponentDetailsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-[#FFC900]">
        {component.name}
      </h3>
      <p className="text-[#FFC900]/70">
        {component.description}
      </p>
      
      {component.specifications && (
        <div className="mt-4">
          <h4 className="text-[#FFC900] font-medium mb-2">Specifications</h4>
          <ul className="list-disc list-inside text-[#FFC900]/70 space-y-1">
            {component.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      )}
      
      {component.tips && (
        <div className="mt-4">
          <h4 className="text-[#FFC900] font-medium mb-2">Installation Tips</h4>
          <ul className="list-disc list-inside text-[#FFC900]/70 space-y-1">
            {component.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ComponentDetails;
