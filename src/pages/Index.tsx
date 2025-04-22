
import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

// This component ensures we always render the Dashboard component
// instead of any legacy Index component
const Index = () => {
  return <Dashboard />;
};

export default Index;
