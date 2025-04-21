
import React from "react";

type LogoProps = {
  size?: number;
  className?: string;
};

const Logo = ({ size = 120, className = "" }: LogoProps) => (
  <img
    src="/lovable-uploads/photo-1518770660439-4636190af475"
    alt="App logo"
    width={size}
    height={size}
    className={`mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform ${className}`}
    style={{ objectFit: "cover" }}
  />
);

export default Logo;
