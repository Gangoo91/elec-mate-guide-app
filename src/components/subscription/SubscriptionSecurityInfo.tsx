
import React from "react";
import { Lock, ShieldCheck } from "lucide-react";

const SubscriptionSecurityInfo = React.memo(() => {
  return (
    <div className="flex items-center w-full justify-center gap-3 mt-2 mb-1">
      <div className="flex items-center text-xs text-[#FFC900]/60">
        <Lock className="h-3 w-3 mr-1" />
        Secure payment
      </div>
      <div className="h-3 w-[1px] bg-[#FFC900]/30"></div>
      <div className="flex items-center text-xs text-[#FFC900]/60">
        <ShieldCheck className="h-3 w-3 mr-1" />
        SSL encrypted
      </div>
    </div>
  );
});

SubscriptionSecurityInfo.displayName = "SubscriptionSecurityInfo";

export default SubscriptionSecurityInfo;
