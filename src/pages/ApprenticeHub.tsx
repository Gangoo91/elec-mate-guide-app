
import React, { useEffect, useState } from "react";
import { memo } from "react";
import ApprenticesPage from "./ApprenticesPage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useUserPreferences } from "@/hooks/useUserPreferences";
import LoadingSpinner from "@/components/LoadingSpinner";

// Memoize the component to prevent unnecessary re-renders
const ApprenticeHub = memo(() => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { setPreferredRole } = useUserPreferences();
  const [initialized, setInitialized] = useState(false);
  
  // Set apprentice role on component mount - only once
  useEffect(() => {
    console.log("ApprenticeHub - Component mounted");
    if (!initialized) {
      // Set role to apprentice
      localStorage.setItem('preferredRole', 'apprentice');
      setTimeout(() => {
        // Use setTimeout to prevent state update conflicts
        setPreferredRole('apprentice');
        setInitialized(true);
      }, 0);
      
      // Update document title
      document.title = "Apprentice Hub";
    }
  }, [setPreferredRole, initialized]);
  
  // Simplified auth check to prevent loops
  useEffect(() => {
    if (!loading && !user) {
      console.log("ApprenticeHub - No user found, redirecting to login");
      navigate("/login", { replace: true });
    }
  }, [user, loading, navigate]);
  
  // Show loading state only when actually loading auth
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="lg" message="Loading Apprentice Hub..." />
      </div>
    );
  }
  
  // Only render if authenticated
  return user ? <ApprenticesPage /> : null;
});

ApprenticeHub.displayName = "ApprenticeHub";

export default ApprenticeHub;
