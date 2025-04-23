
import React, { useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useUserPreferences } from "@/hooks/useUserPreferences";

type LogoProps = {
  size?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
};

const Logo = ({ size = 120, className = "", onClick }: LogoProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, refreshSession } = useAuth();
  const { preferences, refreshPreferences } = useUserPreferences();
  
  useEffect(() => {
    // Ensure session is fresh when component mounts
    refreshSession();
    // Also ensure preferences are fresh
    refreshPreferences();
  }, [refreshSession, refreshPreferences]);
  
  // Memoize the navigation logic to prevent unnecessary re-renders
  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    if (onClick) {
      // Use the provided onClick handler if available
      onClick(e);
      return;
    }
    
    // Default navigation behavior
    e.preventDefault();
    
    if (user) {
      // First refresh preferences to ensure we have the latest
      refreshPreferences();
      const preferredRole = preferences.preferredRole;
      console.log("Logo clicked, user authenticated, preferredRole:", preferredRole);
      
      // Force navigation based on current path and role
      if (location.pathname.includes('/apprentice') || preferredRole === 'apprentice') {
        console.log("Logo - Navigating to apprentice-hub based on current path or preferredRole");
        navigate('/apprentice-hub', { replace: true });
      } else {
        console.log("Logo - Navigating to dashboard (no specific role preference)");
        navigate('/dashboard', { replace: true });
      }
    } else {
      console.log("Logo - Not authenticated, navigating to welcome");
      navigate('/welcome', { replace: true });
    }
  }, [navigate, user, preferences.preferredRole, onClick, location.pathname, refreshPreferences]);

  return (
    <img
      src="/lovable-uploads/photo-1518770660439-4636190af475"
      alt="App logo"
      width={size}
      height={size}
      className={`mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform ${className} cursor-pointer`}
      style={{ objectFit: "cover" }}
      onClick={handleLogoClick}
    />
  );
};

export default Logo;
