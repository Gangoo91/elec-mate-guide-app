
import React from "react";
import { BadgeAlert, AlignCenter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PricingTierProps {
  title: string;
  price: string;
  annual: string;
  features: string[];
  color: string;
  highlight?: boolean;
  comingSoon?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  annual,
  features,
  color,
  highlight = false,
  comingSoon = false
}) => {
  return (
    <div
      className={`
        border-2 rounded-xl p-4 bg-[#14130A]/60 text-white relative
        ${color}
        ${highlight ? "shadow-lg scale-105 border-4 border-yellow-400" : "shadow"}
        transition-all
        ${comingSoon ? "opacity-85 cursor-not-allowed" : ""}
      `}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">{title}</span>
        {highlight && (
          <span className="ml-2 px-2 py-0.5 rounded bg-[#FFC900] text-[#14130A] text-xs font-semibold">MOST VALUE</span>
        )}
        {comingSoon && (
          <Badge 
            variant="destructive" 
            className="bg-amber-500/90 text-black font-semibold border-0 hover:bg-amber-500/100 flex items-center gap-2"
          >
            <BadgeAlert className="h-4 w-4" />
            Coming Soon
          </Badge>
        )}
      </div>
      <div className="flex items-baseline gap-2 mt-1">
        <span className="text-2xl font-extrabold">{price}</span>
        <span className="text-xs text-[#FFC900] font-semibold">or {annual}</span>
      </div>
      <ul className="mt-2 space-y-1 text-left text-sm text-[#e0e0e0] list-disc list-inside">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      
      {comingSoon && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center z-10 p-4">
            <div className="flex flex-col items-center justify-center space-y-3">
              <span 
                className="px-4 py-2 bg-amber-500 text-black font-bold text-lg rounded-full shadow-lg transform -rotate-6 animate-pulse"
              >
                Coming Soon
              </span>
              <p className="text-amber-200 text-sm text-center max-w-[200px]">
                Register to be notified when this tier launches
              </p>
              <div className="flex items-center justify-center space-x-2">
                <AlignCenter className="h-4 w-4 text-amber-300" />
                <span className="text-xs text-amber-300">Exclusive Features</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PricingTier;
