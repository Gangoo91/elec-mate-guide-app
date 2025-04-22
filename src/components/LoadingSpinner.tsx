
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

const LoadingSpinner = ({ size = 'md', className = '', label = 'Loading' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex justify-center items-center ${className}`} aria-live="polite">
      <div 
        className={`${sizeClasses[size]} border-4 border-[#FFC900]/20 border-t-[#FFC900] rounded-full animate-spin`}
        role="status"
        aria-label={label}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
};

export default LoadingSpinner;
