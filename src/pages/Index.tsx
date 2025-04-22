
import React from "react";
import Dashboard from "./Dashboard";

// This component ensures we always render the Dashboard component
// instead of any legacy Index component
const Index = () => {
  return <Dashboard />;
};

export default Index;
