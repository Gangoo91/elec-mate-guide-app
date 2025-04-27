
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, CircuitBoard, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";
import { arComponents } from "@/data/arComponents";
import ARViewControls from "./ar-learning/ARViewControls";
import ComponentDetails from "./ar-learning/ComponentDetails";
import { ComponentInfo } from "@/types/arLearning";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Group components by category
const componentCategories = {
  'Protection Devices': ['rcbo', 'mcb', 'rcd'],
  'Distribution Equipment': ['consumer-unit', 'metal-conduit', 'junction-box'],
  'Installation Components': ['socket-outlet', 'metal-clad-switch']
};

const ARLearningView = () => {
  const [activeTab, setActiveTab] = useState('rcbo');
  const [isLoading, setIsLoading] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [openCategories, setOpenCategories] = useState<string[]>(['Protection Devices']);
  const canvasRef = useRef<HTMLDivElement>(null);

  function getActiveComponent(): ComponentInfo {
    return arComponents.find(comp => comp.id === activeTab) || arComponents[0];
  }

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

  const toggleCategory = (category: string) => {
    setOpenCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    setIsLoading(true);
    setZoom(1);
    setRotation(0);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [activeTab]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Component Selection Sidebar */}
        <Card className="bg-[#22251e] border-[#FFC900]/20">
          <CardHeader>
            <CardTitle className="text-[#FFC900] flex items-center gap-2">
              <CircuitBoard className="h-5 w-5" />
              Components
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(componentCategories).map(([category, componentIds]) => (
              <Collapsible
                key={category}
                open={openCategories.includes(category)}
                onOpenChange={() => toggleCategory(category)}
                className="space-y-2"
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between p-2 text-[#FFC900] hover:bg-[#FFC900]/10 rounded-md">
                  <span>{category}</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${
                    openCategories.includes(category) ? 'rotate-180' : ''
                  }`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pl-4">
                  {componentIds.map(id => {
                    const component = arComponents.find(c => c.id === id);
                    if (!component) return null;
                    return (
                      <Button
                        key={component.id}
                        variant="ghost"
                        className={`w-full justify-start ${
                          activeTab === component.id
                            ? 'bg-[#FFC900] text-[#22251e]'
                            : 'text-[#FFC900] hover:bg-[#FFC900]/10'
                        }`}
                        onClick={() => setActiveTab(component.id)}
                      >
                        {component.name}
                      </Button>
                    );
                  })}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </CardContent>
        </Card>

        {/* 3D View */}
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
                  {getActiveComponent().imageUrl ? (
                    <img 
                      src={getActiveComponent().imageUrl} 
                      alt={getActiveComponent().name}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="text-center p-6">
                      <CircuitBoard className="h-12 w-12 mx-auto text-[#FFC900] mb-4" />
                      <h3 className="text-[#FFC900] text-lg font-medium mb-2">
                        {getActiveComponent().name}
                      </h3>
                      <p className="text-[#FFC900]/70 mb-4">
                        No image available. Use controls below to interact.
                      </p>
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
      </div>

      {/* Component Details */}
      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader>
          <CardTitle className="text-[#FFC900] flex items-center gap-2">
            <Info className="h-5 w-5" />
            Component Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ComponentDetails component={getActiveComponent()} />
        </CardContent>
      </Card>

      {/* How to Use Section */}
      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader>
          <CardTitle className="text-[#FFC900]">How to Use This Feature</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-[#FFC900]/70">
            <p>
              Interact with the {getActiveComponent().name} to learn about its structure and function:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Use the zoom buttons to get a closer look</li>
              <li>Rotate the component to view from different angles</li>
              <li>Reset the view to return to default position</li>
              <li>Review specifications and installation tips</li>
              <li>Watch the video demonstration for practical insights</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ARLearningView;
