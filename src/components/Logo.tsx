
import React from "react";

type LogoProps = {
  size?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
};

const Logo = ({ size = 120, className = "", onClick }: LogoProps) => (
  <img
    src="/lovable-uploads/photo-1518770660439-4636190af475"
    alt="App logo"
    width={size}
    height={size}
    className={`mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform ${className} ${onClick ? 'cursor-pointer' : ''}`}
    style={{ objectFit: "cover" }}
    onClick={onClick}
  />
);

export default Logo;
