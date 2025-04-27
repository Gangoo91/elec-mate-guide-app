
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Info, Rotate3d } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useYouTubePlayerElement } from "@/components/video/players/youtube/hooks/useYouTubePlayerElement";

// Component types
type ComponentInfo = {
  id: string;
  name: string;
  description: string;
  youtubeId: string;
}

const ARLearningView = () => {
  const [activeTab, setActiveTab] = useState('circuit-breaker');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const playerElementId = "component-video-player";
  
  // Video player setup
  const { containerRef, containerCreated } = useYouTubePlayerElement({
    videoId: getActiveComponent().youtubeId,
    playerElementId
  });
  
  // Component data
  const components: ComponentInfo[] = [
    {
      id: 'circuit-breaker',
      name: 'Circuit Breaker',
      description: 'Circuit breakers are automatic electrical switches designed to protect an electrical circuit from damage caused by excess current from an overload or short circuit.',
      youtubeId: 'mc979OhitAg'
    },
    {
      id: 'consumer-unit',
      name: 'Consumer Unit',
      description: 'Consumer units (also known as fuse boxes) distribute electricity around your home and contain circuit breakers that automatically switch off the power when they detect a fault.',
      youtubeId: '9iKD8kW84C0'
    },
    {
      id: 'socket-outlet',
      name: 'Socket Outlet',
      description: 'Socket outlets provide a safe and convenient method of connecting electrical equipment to the power supply.',
      youtubeId: 'vN9aR2wKv0U'
    }
  ];
  
  function getActiveComponent(): ComponentInfo {
    return components.find(comp => comp.id === activeTab) || components[0];
  }
  
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate 3D loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => {
      // Cleanup
    };
  }, [activeTab]);
  
  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-[#22251e] border border-[#FFC900]/20">
          {components.map(component => (
            <TabsTrigger 
              key={component.id} 
              value={component.id}
              className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]"
            >
              {component.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {components.map(component => (
          <TabsContent key={component.id} value={component.id} className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* 3D View */}
              <Card className="bg-[#22251e] border-[#FFC900]/20 col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-[#FFC900] flex items-center gap-2">
                    <Rotate3d className="h-5 w-5" />
                    3D View
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
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-6">
                          <Rotate3d className="h-12 w-12 mx-auto text-[#FFC900] mb-4" />
                          <h3 className="text-[#FFC900] text-lg font-medium mb-2">3D View Simulation</h3>
                          <p className="text-[#FFC900]/70 mb-4">
                            This is a placeholder for the interactive 3D model. In a real AR implementation, 
                            you would see a 3D model of a {getActiveComponent().name} here.
                          </p>
                          <Button className="bg-[#FFC900] hover:bg-[#FFC900]/80 text-[#22251e]">
                            Rotate Model
                          </Button>
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
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-[#FFC900]">
                      {getActiveComponent().name}
                    </h3>
                    <p className="text-[#FFC900]/70">
                      {getActiveComponent().description}
                    </p>
                    <div className="mt-4">
                      <h4 className="text-[#FFC900] font-medium mb-2">Video Demonstration</h4>
                      <div className="w-full h-[180px] relative bg-black rounded overflow-hidden">
                        <div
                          ref={containerRef}
                          className="absolute inset-0 w-full h-full" 
                        />
                        {!containerCreated && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <LoadingSpinner size="md" label="Loading video..." />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
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
                    This simplified 3D visualization helps you understand the structure and function of 
                    electrical components. In a full AR implementation, you would:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Point your device camera at a specially designated marker</li>
                    <li>See a 3D model appear and overlay on your real-world environment</li>
                    <li>Interact with the model by moving around it or tapping on parts</li>
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
