
import React, { useEffect } from "react";
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
  const { setPreferredRole } = useUserPreferences();
  
  // Set apprentice role flag when visiting this page AND ensure the session is fresh
  useEffect(() => {
    // Refresh auth session to ensure we have latest data
    console.log("ApprenticeHub - Component mounted, refreshing session");
    refreshSession();
    
    // IMPORTANT: Always set role to apprentice when on this page, even after reloads
    console.log("ApprenticeHub - Setting preferredRole to apprentice");
    setPreferredRole('apprentice');
    
    // Additional check to ensure navigation works after reload
    if (!loading && !user) {
      console.log("ApprenticeHub - No user found, redirecting to login");
      navigate("/login", { replace: true });
    }
  }, [refreshSession, user, loading, navigate, setPreferredRole]);
  
  // Show loading state if auth is still being checked
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="lg" message="Loading Apprentice Hub..." />
      </div>
    );
  }
  
  // Only render the page if we have a user, and ensure we're on the correct route
  return user ? <ApprenticesPage /> : null;
});

ApprenticeHub.displayName = "ApprenticeHub";

export default ApprenticeHub;
