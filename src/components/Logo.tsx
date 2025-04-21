
import React from "react";

const Logo = ({ size = 120 }: { size?: number }) => (
  <img
    src="/lovable-uploads/photo-1518770660439-4636190af475"
    alt="App Logo"
    width={size}
    height={size}
    className="mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform"
    style={{ objectFit: "cover" }}
  />
);

export default Logo;
