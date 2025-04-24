
import React from "react";
import { Button } from "@/components/ui/button";

type BillingCycleSelectorProps = {
  billingCycle: "monthly" | "yearly";
  setBillingCycle: (cycle: "monthly" | "yearly") => void;
  isLoading: boolean;
};

const BillingCycleSelector = ({ 
  billingCycle, 
  setBillingCycle, 
  isLoading 
}: BillingCycleSelectorProps) => {
  return (
    <div className="flex justify-center gap-1 mb-4">
      <Button
        variant={billingCycle === "monthly" ? "default" : "outline"}
        className={`rounded-full px-6 py-2 text-sm sm:text-base ${billingCycle === "monthly" ? "bg-[#FFC900] text-black font-bold" : "border-[#FFC900] text-[#FFC900]"}`}
        onClick={() => setBillingCycle("monthly")}
        disabled={isLoading}
      >Monthly</Button>
      <Button
        variant={billingCycle === "yearly" ? "default" : "outline"}
        className={`rounded-full px-6 py-2 text-xs sm:text-base ${billingCycle === "yearly" ? "bg-[#FFC900] text-black font-bold" : "border-[#FFC900] text-[#FFC900]"}`}
        onClick={() => setBillingCycle("yearly")}
        disabled={isLoading}
      >Yearly <span className="ml-1 text-[11px] sm:text-xs font-semibold">(Save 17%)</span></Button>
    </div>
  );
};

export default BillingCycleSelector;
