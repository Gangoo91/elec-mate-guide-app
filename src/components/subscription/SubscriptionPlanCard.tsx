
import React from "react";

type SubscriptionPlanProps = {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  isSelected: boolean;
  billingCycle: "monthly" | "yearly";
  onSelect: () => void;
};

const SubscriptionPlanCard = ({ 
  name, 
  monthlyPrice, 
  yearlyPrice, 
  description, 
  isSelected, 
  billingCycle, 
  onSelect 
}: SubscriptionPlanProps) => {
  return (
    <div 
      onClick={onSelect}
      className={`flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${
        isSelected 
          ? "bg-[#FFC900]/20 border-2 border-[#FFC900]" 
          : "bg-[#151812]/80 border border-[#FFC900]/30 hover:border-[#FFC900]/60"
      }`}
    >
      <div className="flex-1 pr-2">
        <h3 className="text-[#FFC900] font-semibold text-base">{name} Plan</h3>
        <p className="text-xs text-[#FFC900]/70">{description}</p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="font-bold text-[#FFC900] text-base">
          {billingCycle === "monthly" ? monthlyPrice : yearlyPrice}
          <span className="text-xs font-normal">
            {billingCycle === "monthly" ? "/mo" : "/yr"}
          </span>
        </span>
        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
          isSelected 
            ? "bg-[#FFC900]" 
            : "border border-[#FFC900]/50"
        }`}>
          {isSelected && (
            <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanCard;
