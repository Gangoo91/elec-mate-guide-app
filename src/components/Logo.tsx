
import React, { useCallback } from "react";
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
  const { user } = useAuth();
  const { setPreferredRole } = useUserPreferences();
  
  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    
    if (onClick) {
      onClick(e);
      return;
    }
    
    if (user) {
      console.log("Logo - Navigating to apprentice-hub");
      setPreferredRole('apprentice');
      navigate('/apprentice-hub', { replace: true });
    } else {
      console.log("Logo - Not authenticated, navigating to welcome");
      navigate('/welcome', { replace: true });
    }
  }, [navigate, user, onClick, setPreferredRole]);

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
