
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
  const { refreshSession, user, loading } = useAuth();
  const { setPreferredRole, preferences } = useUserPreferences();
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Set apprentice role flag when visiting this page AND ensure the session is fresh
  useEffect(() => {
    const initApprenticeHub = async () => {
      console.log("ApprenticeHub - Component mounted, refreshing session");
      await refreshSession();
      
      // IMPORTANT: Always set role to apprentice when on this page, even after reloads
      console.log("ApprenticeHub - Setting preferredRole to apprentice");
      setPreferredRole('apprentice');
      setIsInitialized(true);
    };
    
    initApprenticeHub();
  }, [refreshSession, setPreferredRole]);
  
  // Additional check for user authentication
  useEffect(() => {
    if (isInitialized && !loading && !user) {
      console.log("ApprenticeHub - No user found, redirecting to login");
      navigate("/login", { replace: true });
    }
  }, [user, loading, navigate, isInitialized]);
  
  // Show loading state if auth is still being checked
  if (loading || !isInitialized) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="lg" message="Loading Apprentice Hub..." />
      </div>
    );
  }
  
  // Only render the page if we have a user
  return user ? <ApprenticesPage /> : null;
});

ApprenticeHub.displayName = "ApprenticeHub";

export default ApprenticeHub;
