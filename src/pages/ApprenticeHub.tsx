
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
  
  // Track page loads to detect reloads
  useEffect(() => {
    // Record that we've reached the apprentice hub
    console.log("ApprenticeHub - Page loaded, recording page in sessionStorage");
    sessionStorage.setItem('currentPage', 'apprentice-hub');
    sessionStorage.setItem('lastLoadedPage', 'apprentice-hub');
    
    // Clear any redirect flags that might interfere with navigation
    sessionStorage.removeItem('redirected_from_root');
  }, []);
  
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
      
      // Ensure we record the current page
      sessionStorage.setItem('currentPage', 'apprentice-hub');
      sessionStorage.setItem('lastLoadedPage', 'apprentice-hub');
    };
    
    window.addEventListener('load', handlePageReload);
    
    // Safety check - verify that we're on the right page after a short delay
    const safetyCheck = setTimeout(() => {
      const currentPage = sessionStorage.getItem('currentPage');
      if (currentPage !== 'apprentice-hub') {
        console.log("ApprenticeHub - Safety check detected wrong page, setting to apprentice-hub");
        sessionStorage.setItem('currentPage', 'apprentice-hub');
      }
    }, 500);
    
    return () => {
      window.removeEventListener('load', handlePageReload);
      clearTimeout(safetyCheck);
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
