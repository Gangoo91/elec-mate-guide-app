
import React from "react";

const CommunityCounter = () => {
  return (
    <div className="flex flex-1 justify-between items-center text-[#FFC900]/80 gap-4">
      <div className="text-center">
        <div className="text-lg font-bold">5,280+</div>
        <div className="text-xs">Electricians</div>
      </div>
      
      <div className="text-center">
        <div className="text-lg font-bold">2,400+</div>
        <div className="text-xs">Apprentices</div>
      </div>
      
      <div className="text-center">
        <div className="text-lg font-bold">780+</div>
        <div className="text-xs">Employers</div>
      </div>
    </div>
  );
};

export default CommunityCounter;
