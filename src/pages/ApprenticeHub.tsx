
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
  const { setPreferredRole, refreshPreferences } = useUserPreferences();
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Track that we're on the apprentice hub page
  useEffect(() => {
    console.log("ApprenticeHub - Component mounted");
    // Record that we've reached the apprentice hub
    sessionStorage.setItem('currentPage', 'apprentice-hub');
    document.title = "Apprentice Hub"; // Update page title
    
    // Clear any redirect flags
    sessionStorage.removeItem('redirected_from_root');
  }, []);
  
  // Set apprentice role and ensure session is fresh
  useEffect(() => {
    const initApprenticeHub = async () => {
      console.log("ApprenticeHub - Initializing, refreshing session");
      try {
        // First refresh the auth session
        await refreshSession();
        
        // Set apprentice role in localStorage for persistence
        console.log("ApprenticeHub - Setting preferredRole to apprentice");
        localStorage.setItem('preferredRole', 'apprentice');
        setPreferredRole('apprentice');
        
        // Force preference refresh
        refreshPreferences();
      } catch (error) {
        console.error("Error initializing apprentice hub:", error);
      } finally {
        setIsInitialized(true);
      }
    };
    
    // Run initialization
    initApprenticeHub();
    
    // Add a special event listener just for this page to handle navigation events
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        // Page is being restored from cache (back/forward navigation)
        console.log("ApprenticeHub - Page restored from cache");
        localStorage.setItem('preferredRole', 'apprentice');
        setPreferredRole('apprentice');
      }
    };
    
    window.addEventListener('pageshow', handlePageShow);
    
    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, [refreshSession, setPreferredRole, refreshPreferences]);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (isInitialized && !loading && !user) {
      console.log("ApprenticeHub - No user found, redirecting to login");
      navigate("/login", { replace: true });
    }
  }, [user, loading, navigate, isInitialized]);
  
  // Show loading state
  if (loading || !isInitialized) {
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
