
import React, { useEffect, useState } from "react";
import { memo } from "react";
import ApprenticesPage from "./ApprenticesPage";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useUserPreferences } from "@/hooks/useUserPreferences";
import LoadingSpinner from "@/components/LoadingSpinner";

// Memoize the component to prevent unnecessary re-renders
const ApprenticeHub = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const { refreshSession, user, loading } = useAuth();
  const { setPreferredRole, preferences, isLoaded, refreshPreferences } = useUserPreferences();
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Set apprentice role flag when visiting this page AND ensure the session is fresh
  useEffect(() => {
    const initApprenticeHub = async () => {
      console.log("ApprenticeHub - Component mounted, refreshing session");
      await refreshSession();
      
      // Force apprentice role setting in localStorage to ensure persistence across reloads
      try {
        console.log("ApprenticeHub - Setting preferredRole to apprentice");
        localStorage.setItem('preferredRole', 'apprentice');
        setPreferredRole('apprentice');
        
        // Force an immediate preferences refresh to ensure consistency
        refreshPreferences();
        setIsInitialized(true);
      } catch (error) {
        console.error("Error setting preferredRole:", error);
        // Try one more time with a timeout
        setTimeout(() => {
          try {
            localStorage.setItem('preferredRole', 'apprentice');
            setPreferredRole('apprentice');
            refreshPreferences();
            setIsInitialized(true);
          } catch (e) {
            console.error("Second attempt to set preferredRole failed:", e);
            setIsInitialized(true);
          }
        }, 500);
      }
    };
    
    initApprenticeHub();
    
    // Add a manual localStorage check/refresh on page load
    window.addEventListener('load', () => {
      try {
        localStorage.setItem('preferredRole', 'apprentice');
        setPreferredRole('apprentice');
        refreshPreferences();
      } catch (e) {
        console.error("Error in load event handler:", e);
      }
    });
    
  }, [refreshSession, setPreferredRole, refreshPreferences]);
  
  // Additional check for role consistency any time the path changes
  useEffect(() => {
    if (isInitialized && isLoaded && preferences.preferredRole !== 'apprentice') {
      console.log("ApprenticeHub - Role inconsistency detected, fixing...");
      try {
        localStorage.setItem('preferredRole', 'apprentice');
        setPreferredRole('apprentice');
        refreshPreferences();
      } catch (e) {
        console.error("Error fixing role inconsistency:", e);
      }
    }
  }, [location.pathname, isInitialized, isLoaded, preferences.preferredRole, setPreferredRole, refreshPreferences]);
  
  // Additional check for user authentication
  useEffect(() => {
    if (isInitialized && !loading && !user) {
      console.log("ApprenticeHub - No user found, redirecting to login");
      navigate("/login", { replace: true });
    }
  }, [user, loading, navigate, isInitialized]);
  
  // Show loading state if auth is still being checked
  if (loading || !isInitialized || !isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="lg" message="Loading Apprentice Hub..." />
      </div>
    );
  }
  
  // Double-check role before rendering
  try {
    localStorage.setItem('preferredRole', 'apprentice');
    if (preferences.preferredRole !== 'apprentice') {
      console.log("ApprenticeHub - Role not set correctly, fixing...");
      setPreferredRole('apprentice');
      refreshPreferences();
    }
  } catch (e) {
    console.error("Error in final role check:", e);
  }
  
  // Only render the page if we have a user
  return user ? <ApprenticesPage /> : null;
});

ApprenticeHub.displayName = "ApprenticeHub";

export default ApprenticeHub;
