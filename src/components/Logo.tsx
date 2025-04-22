
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useUserPreferences } from "@/hooks/useUserPreferences";

type LogoProps = {
  size?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
};

const Logo = ({ size = 120, className = "", onClick }: LogoProps) => {
  const navigate = useNavigate();
  const { user, refreshSession } = useAuth();
  const { preferences } = useUserPreferences();
  
  useEffect(() => {
    // Ensure session is fresh when component mounts
    refreshSession();
  }, [refreshSession]);
  
  const handleLogoClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (onClick) {
      // Use the provided onClick handler if available
      onClick(e);
      return;
    }
    
    // Default navigation behavior
    e.preventDefault();
    
    if (user) {
      const preferredRole = preferences.preferredRole;
      console.log("Logo clicked, preferredRole:", preferredRole);
      
      if (preferredRole === 'apprentice') {
        console.log("Navigating to apprentice-hub based on preferredRole");
        navigate('/apprentice-hub', { replace: true });
      } else {
        console.log("Navigating to dashboard (no specific role preference)");
        navigate('/dashboard', { replace: true });
      }
    } else {
      navigate('/welcome', { replace: true });
    }
  };

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
