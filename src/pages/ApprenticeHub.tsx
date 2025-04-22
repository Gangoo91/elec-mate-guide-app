
import React, { useEffect } from "react";
import { memo } from "react";
import ApprenticesPage from "./ApprenticesPage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

// Memoize the component to prevent unnecessary re-renders
const ApprenticeHub = memo(() => {
  const navigate = useNavigate();
  const { refreshSession, user, loading } = useAuth();
  
  // Set apprentice role flag when visiting this page AND ensure the session is fresh
  useEffect(() => {
    console.log("ApprenticeHub - Setting preferredRole to apprentice");
    localStorage.setItem('preferredRole', 'apprentice');
    
    // Refresh auth session to ensure we have latest data
    refreshSession();
    
    // Additional check to ensure navigation works after reload
    if (!loading && !user) {
      console.log("ApprenticeHub - No user found, redirecting to login");
      navigate("/login", { replace: true });
    }
  }, [refreshSession, user, loading, navigate]);
  
  // Show loading state if auth is still being checked
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  // Only render the page if we have a user
  return user ? <ApprenticesPage /> : null;
});

ApprenticeHub.displayName = "ApprenticeHub";

export default ApprenticeHub;
