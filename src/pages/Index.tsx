
import React from "react";
import Dashboard from "./Dashboard";

/**
 * Main application entry point - renders the Dashboard component
 * This component is now completely removed from the routing paths
 * and exists only for backward compatibility
 */
const Index = () => {
  // Simply render the Dashboard directly
  return <Dashboard />;
};

export default Index;
