
import React, { useState } from 'react';

interface DiagramHotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
}

interface InteractiveDiagramProps {
  imageSrc: string;
  altText: string;
  title?: string;
  hotspots: DiagramHotspot[];
}

export const InteractiveDiagram = ({ 
  imageSrc, 
  altText, 
  title,
  hotspots 
}: InteractiveDiagramProps) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="my-6 bg-[#1a1c17] p-4 rounded-lg">
      {title && (
        <h4 className="text-[#FFC900] text-lg mb-3">{title}</h4>
      )}
      
      <div className="relative inline-block">
        <img 
          src={imageSrc} 
          alt={altText} 
          className="max-w-full h-auto rounded"
        />
        
        {hotspots.map(hotspot => (
          <button
            key={hotspot.id}
            className={`absolute w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
              activeHotspot === hotspot.id ? 'bg-[#FFC900] text-[#151812]' : 'bg-[#FFC900]/50 text-[#151812]'
            }`}
            style={{ 
              left: `${hotspot.x}%`, 
              top: `${hotspot.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onClick={() => setActiveHotspot(hotspot.id === activeHotspot ? null : hotspot.id)}
          >
            {hotspot.id}
          </button>
        ))}
      </div>
      
      <div className="mt-4">
        {activeHotspot ? (
          <div className="bg-[#2a2d24] p-4 rounded animate-fade-in">
            <h5 className="text-[#FFC900] font-medium mb-1">
              {hotspots.find(h => h.id === activeHotspot)?.label}
            </h5>
            <p className="text-[#FFC900]/80 text-sm">
              {hotspots.find(h => h.id === activeHotspot)?.description}
            </p>
          </div>
        ) : (
          <p className="text-[#FFC900]/60 text-sm italic">Click on any numbered point to learn more.</p>
        )}
      </div>
    </div>
  );
};
