
import React, { useEffect } from "react";
import ApprenticesPage from "./ApprenticesPage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

// Ensures the /apprentice-hub route renders the full ApprenticesPage component
const ApprenticeHub = () => {
  const navigate = useNavigate();
  const { refreshSession } = useAuth();
  
  // Set apprentice role flag when visiting this page AND ensure the session is fresh
  useEffect(() => {
    console.log("ApprenticeHub - Setting preferredRole to apprentice");
    localStorage.setItem('preferredRole', 'apprentice');
    
    // Refresh auth session to ensure we have latest data
    refreshSession();
  }, [refreshSession]);
  
  return <ApprenticesPage />;
};

export default ApprenticeHub;
