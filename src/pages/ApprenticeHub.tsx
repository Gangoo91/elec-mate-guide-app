
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
  const { user, loading } = useAuth();
  const { setPreferredRole } = useUserPreferences();
  
  // Set apprentice role on component mount
  useEffect(() => {
    console.log("ApprenticeHub - Component mounted");
    
    // Set role to apprentice
    localStorage.setItem('preferredRole', 'apprentice');
    setPreferredRole('apprentice');
    
    // Update document title
    document.title = "Apprentice Hub";
  }, [setPreferredRole]);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      console.log("ApprenticeHub - No user found, redirecting to login");
      navigate("/login", { replace: true });
    }
  }, [user, loading, navigate]);
  
  // Show loading state
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
