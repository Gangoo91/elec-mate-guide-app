
import React from 'react';

interface CompletionBadgeProps {
  watched?: boolean;
}

export const CompletionBadge = ({ watched }: CompletionBadgeProps) => {
  if (!watched) return null;

  return (
    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm z-20">
      Completed
    </div>
  );
};
