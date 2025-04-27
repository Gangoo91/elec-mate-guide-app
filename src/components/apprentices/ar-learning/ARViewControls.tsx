
import React from 'react';
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Rotate3d, RotateCcw } from "lucide-react";

interface ARViewControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onRotate: () => void;
  onReset: () => void;
}

const ARViewControls = ({ onZoomIn, onZoomOut, onRotate, onReset }: ARViewControlsProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onZoomIn}
        className="text-[#FFC900]"
      >
        <ZoomIn className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onZoomOut}
        className="text-[#FFC900]"
      >
        <ZoomOut className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onRotate}
        className="text-[#FFC900]"
      >
        <Rotate3d className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onReset}
        className="text-[#FFC900]"
      >
        <RotateCcw className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ARViewControls;
