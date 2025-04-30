
import React from "react";
import { Link } from "react-router-dom";

const SupportCTA = () => {
  return (
    <div className="mt-8 p-6 bg-[#22251e] border border-[#FFC900]/20 rounded-md">
      <h3 className="text-xl font-semibold mb-4 text-[#FFC900]">Need Immediate Support?</h3>
      <p className="text-[#FFC900]/90 mb-4">
        If you need to talk to someone right now, our Mental Health Mate service 
        connects you directly with a trained peer supporter.
      </p>
      <Link 
        to="/mental-health/buddy" 
        className="inline-block px-4 py-2 bg-[#FFC900] text-[#22251e] rounded-md hover:bg-[#FFC900]/90"
      >
        Find a Mental Health Mate
      </Link>
    </div>
  );
};

export default SupportCTA;
