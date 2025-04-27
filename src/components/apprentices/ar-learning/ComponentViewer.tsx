
import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircuitBoard, AlertTriangle, ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ComponentInfo } from "@/types/arLearning";
import ARViewControls from "./ARViewControls";
import { toast } from "sonner";

interface ComponentViewerProps {
  activeComponent: ComponentInfo;
}

const ComponentViewer = ({ activeComponent }: ComponentViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [imageError, setImageError] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const resetView = () => {
    setZoom(1);
    setRotation(0);
  };

  // Reset states when component changes
  useEffect(() => {
    setIsLoading(true);
    setImageError(false);
    setZoom(1);
    setRotation(0);
    
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [activeComponent]);

  // Create a fallback image URL using the component name and id
  const fallbackImageUrl = `https://via.placeholder.com/400x300/22251e/FFC900?text=${encodeURIComponent(
    activeComponent.name.replace(/[()]/g, '')
  )}`;

  const handleImageError = () => {
    setImageError(true);
    toast.error(`Image for ${activeComponent.name} could not be loaded`);
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-[#FFC900] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CircuitBoard className="h-5 w-5" />
            Component View
          </div>
          <ARViewControls 
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onRotate={handleRotate}
            onReset={resetView}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="w-full h-[300px] relative border border-[#FFC900]/20 rounded-md bg-black/50 overflow-hidden"
          ref={canvasRef}
        >
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingSpinner size="lg" label="Loading component..." />
            </div>
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center transition-transform duration-300"
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`
              }}
            >
              {activeComponent.imageUrl && !imageError ? (
                <img 
                  src={activeComponent.imageUrl} 
                  alt={activeComponent.name}
                  className="max-w-full max-h-full object-contain"
                  onError={handleImageError}
                />
              ) : (
                <div className="text-center p-6">
                  <ImageOff className="h-12 w-12 mx-auto text-[#FFC900] mb-4" />
                  <h3 className="text-[#FFC900] text-lg font-medium mb-2">
                    {activeComponent.name}
                  </h3>
                  <p className="text-[#FFC900]/70 mb-4">
                    {imageError ? 
                      "Image could not be loaded. Using fallback display." : 
                      "No image available for this component."}
                  </p>
                  <img 
                    src={fallbackImageUrl}
                    alt={`Placeholder for ${activeComponent.name}`}
                    className="max-w-full max-h-[150px] object-contain mx-auto"
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <Button 
            className="bg-[#FFC900] hover:bg-[#FFC900]/80 text-[#22251e] w-full md:w-auto"
            onClick={handleRotate}
          >
            Rotate Component
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComponentViewer;
