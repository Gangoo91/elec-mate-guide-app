
import React from "react";

// This component is kept only for compatibility with existing imports
// It won't be used in the new dashboard flow but must exist to prevent build errors
const CommunityCounter = () => {
  return (
    <div className="hidden">
      {/* This component is deprecated and shouldn't be visible */}
    </div>
  );
};

export default CommunityCounter;
