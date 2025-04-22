
import React, { useEffect } from "react";
import Dashboard from "./Dashboard";

/**
 * Main application entry point - renders the Dashboard component
 * This component is now completely removed from the routing paths
 * and exists only for backward compatibility
 */
const Index = () => {
  useEffect(() => {
    console.log("Index component rendered, redirecting to Dashboard");
  }, []);

  // Simply render the Dashboard directly
  return <Dashboard />;
};

export default Index;
