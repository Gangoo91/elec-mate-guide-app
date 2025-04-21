
import { Check } from "lucide-react";

type SubscriptionBenefitsProps = {
  tier?: string;
};

export const SubscriptionBenefits = ({ tier }: SubscriptionBenefitsProps) => {
  return (
    <div className="bg-[#151812]/60 rounded-lg p-4 border border-[#FFC900]/10">
      <h4 className="text-sm font-medium text-[#FFC900] mb-2">Your Access Includes:</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-[#FFC900]/80">
            {tier === "Apprentice" ? "Apprentice resources" : 
             tier === "Electrician" ? "Apprentice and Electrician resources" :
             "Full access to all platform resources"}
          </span>
        </li>
        <li className="flex items-start">
          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-[#FFC900]/80">Priority support via email</span>
        </li>
        <li className="flex items-start">
          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-[#FFC900]/80">Cancel or change plans anytime</span>
        </li>
      </ul>
    </div>
  );
};
