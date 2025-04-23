
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
  const { setPreferredRole, preferences, isLoaded, refreshPreferences } = useUserPreferences();
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Set apprentice role flag when visiting this page AND ensure the session is fresh
  useEffect(() => {
    const initApprenticeHub = async () => {
      console.log("ApprenticeHub - Component mounted, refreshing session");
      try {
        // First refresh the auth session to ensure we have the latest user data
        await refreshSession();
        
        // Force apprentice role setting in localStorage to ensure persistence across reloads
        console.log("ApprenticeHub - Setting preferredRole to apprentice");
        localStorage.setItem('preferredRole', 'apprentice');
        setPreferredRole('apprentice');
        
        // Force an immediate preferences refresh to ensure consistency
        refreshPreferences();
        
        // Add a reload detection flag to help with debugging
        sessionStorage.setItem('lastLoadedPage', 'apprentice-hub');
      } catch (error) {
        console.error("Error initializing apprentice hub:", error);
      } finally {
        setIsInitialized(true);
      }
    };
    
    initApprenticeHub();
    
    // Add a window load event listener to handle page reloads specifically
    const handlePageReload = () => {
      console.log("ApprenticeHub - Page reload detected");
      // This ensures that even on reload, the role is set correctly
      localStorage.setItem('preferredRole', 'apprentice');
      setPreferredRole('apprentice');
    };
    
    window.addEventListener('load', handlePageReload);
    
    return () => {
      window.removeEventListener('load', handlePageReload);
    };
  }, [refreshSession, setPreferredRole, refreshPreferences]);
  
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
  
  // Only render the page if we have a user
  return user ? <ApprenticesPage /> : null;
});

ApprenticeHub.displayName = "ApprenticeHub";

export default ApprenticeHub;
