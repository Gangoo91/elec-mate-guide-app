
import React from "react";

type GlassCardProps = {
  className?: string;
  children: React.ReactNode;
};

const GlassCard = ({ className = "", children }: GlassCardProps) => (
  <div
    className={`glass-morphism rounded-3xl border border-[#FFC900]/15 bg-[#151812]/60 shadow-lg flex flex-col items-center animate-fade-in p-3 sm:p-5 md:p-8 w-full ${className}`}
  >
    {children}
  </div>
);

export default GlassCard;
