
import React, { useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

type LogoProps = {
  size?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
};

const Logo = ({ size = 120, className = "", onClick }: LogoProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, refreshSession } = useAuth();
  
  useEffect(() => {
    // Ensure session is fresh when component mounts
    refreshSession();
  }, [refreshSession]);
  
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
      // Always navigate to apprentice-hub when authenticated
      console.log("Logo - Navigating to apprentice-hub");
      navigate('/apprentice-hub', { replace: true });
    } else {
      console.log("Logo - Not authenticated, navigating to welcome");
      navigate('/welcome', { replace: true });
    }
  }, [navigate, user, onClick]);

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
