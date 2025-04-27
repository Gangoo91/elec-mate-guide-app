
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Rotate3d } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";
import { arComponents } from "@/data/arComponents";
import ARViewControls from "./ar-learning/ARViewControls";
import ComponentDetails from "./ar-learning/ComponentDetails";
import { ComponentInfo } from "@/types/arLearning";

const ARLearningView = () => {
  const [activeTab, setActiveTab] = useState('rcbo');
  const [isLoading, setIsLoading] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
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

  useEffect(() => {
    setIsLoading(true);
    setZoom(1);
    setRotation(0);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [activeTab]);

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-[#22251e] border border-[#FFC900]/20 flex flex-wrap">
          {arComponents.map(component => (
            <TabsTrigger 
              key={component.id} 
              value={component.id}
              className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]"
            >
              {component.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {arComponents.map(component => (
          <TabsContent key={component.id} value={component.id} className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* 3D View */}
              <Card className="bg-[#22251e] border-[#FFC900]/20 col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-[#FFC900] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Rotate3d className="h-5 w-5" />
                      3D View
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
                        <LoadingSpinner size="lg" label="Loading 3D model..." />
                      </div>
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center transition-transform duration-300"
                        style={{
                          transform: `scale(${zoom}) rotate(${rotation}deg)`
                        }}
                      >
                        <div className="text-center p-6">
                          <Rotate3d className="h-12 w-12 mx-auto text-[#FFC900] mb-4" />
                          <h3 className="text-[#FFC900] text-lg font-medium mb-2">Interactive 3D View</h3>
                          <p className="text-[#FFC900]/70 mb-4">
                            Viewing: {getActiveComponent().name}
                          </p>
                          <div className="space-y-2">
                            <Button 
                              className="bg-[#FFC900] hover:bg-[#FFC900]/80 text-[#22251e] w-full"
                              onClick={handleRotate}
                            >
                              Rotate Model
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {/* Component Info */}
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
            </div>
            
            <Card className="bg-[#22251e] border-[#FFC900]/20 mt-4">
              <CardHeader>
                <CardTitle className="text-[#FFC900]">How to Use This Feature</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-[#FFC900]/70">
                  <p>
                    Interact with the 3D model to learn about {getActiveComponent().name}:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Use the zoom buttons to get a closer look</li>
                    <li>Rotate the model to view from different angles</li>
                    <li>Reset the view to return to default position</li>
                    <li>Review specifications and installation tips</li>
                    <li>Watch the video demonstration for practical insights</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ARLearningView;
