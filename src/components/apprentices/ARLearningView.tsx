
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Info, Rotate3d, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useYouTubePlayerElement } from "@/components/video/players/youtube/hooks/useYouTubePlayerElement";

// Component types
type ComponentInfo = {
  id: string;
  name: string;
  description: string;
  youtubeId: string;
  specifications?: string[];
  tips?: string[];
}

const ARLearningView = () => {
  const [activeTab, setActiveTab] = useState('rcbo');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Component data with UK-specific information
  const components: ComponentInfo[] = [
    {
      id: 'rcbo',
      name: 'RCBO (BS EN 61009)',
      description: 'Residual Current Breaker with Overcurrent protection, commonly used in UK consumer units. Combines RCD and MCB functionality in a single device.',
      youtubeId: 'mc979OhitAg',
      specifications: [
        'Common ratings: 6A, 10A, 16A, 20A, 32A, 40A',
        'Typical sensitivity: 30mA for personal protection',
        'Breaking capacity: 6kA to 10kA',
        'Type AC, A, or B depending on application'
      ],
      tips: [
        'Always test the test button monthly',
        'Check terminal tightness during installation',
        'Ensure correct current rating for circuit'
      ]
    },
    {
      id: 'consumer-unit',
      name: 'Consumer Unit (BS 7671)',
      description: 'Modern metal consumer units (distribution boards) required by the 18th Edition IET Wiring Regulations for UK domestic installations.',
      youtubeId: '9iKD8kW84C0',
      specifications: [
        'Must be metal construction for domestic installations',
        'Typical sizes: 4-24 ways',
        'Main switch rating: 63A or 100A',
        'Compliant with BS EN 61439-3'
      ],
      tips: [
        'Always ensure proper labeling of circuits',
        'Maintain adequate working space',
        'Check cable entry points for sharp edges'
      ]
    },
    {
      id: 'socket-outlet',
      name: 'Socket Outlet (BS 1363)',
      description: 'UK standard 13A socket outlet with safety features including shuttered live/neutral and earth pin.',
      youtubeId: 'vN9aR2wKv0U',
      specifications: [
        'Rating: 13A at 230V',
        'Must include safety shutters',
        'Required earth connection',
        'Standard British 3-pin configuration'
      ],
      tips: [
        'Check socket alignment during installation',
        'Ensure proper earth connection',
        'Verify shutter operation'
      ]
    },
    {
      id: 'mcb',
      name: 'MCB (BS EN 60898)',
      description: 'Miniature Circuit Breakers used for overcurrent protection in UK electrical installations.',
      youtubeId: 'HB-BgG7pHWo',
      specifications: [
        'Common types: B, C, and D curve',
        'Standard ratings: 6A to 63A',
        'Breaking capacity: 6kA to 10kA',
        'Single pole and multi-pole options'
      ],
      tips: [
        'Select correct curve type for load',
        'Ensure adequate breaking capacity',
        'Check load calculations carefully'
      ]
    },
    {
      id: 'rcd',
      name: 'RCD (BS EN 61008)',
      description: 'Residual Current Device providing additional protection against electric shock in UK installations.',
      youtubeId: 'QR3q_lxYgXo',
      specifications: [
        'Typical ratings: 40A, 63A, 80A, 100A',
        'Standard sensitivity: 30mA or 100mA',
        'Type AC, A, or B depending on loads',
        'Operating time: ≤ 40ms at rated current'
      ],
      tips: [
        'Regular testing required',
        'Consider selectivity with other devices',
        'Check for nuisance tripping causes'
      ]
    }
  ];

  function getActiveComponent(): ComponentInfo {
    return components.find(comp => comp.id === activeTab) || components[0];
  }

  // Video player setup
  const playerElementId = "component-video-player";
  const { containerRef, containerCreated } = useYouTubePlayerElement({
    videoId: getActiveComponent().youtubeId,
    playerElementId
  });

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
                  <CardTitle className="text-[#FFC900] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Rotate3d className="h-5 w-5" />
                      3D View
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleZoomIn}
                        className="text-[#FFC900]"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleZoomOut}
                        className="text-[#FFC900]"
                      >
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleRotate}
                        className="text-[#FFC900]"
                      >
                        <Rotate3d className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={resetView}
                        className="text-[#FFC900]"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>
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
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-[#FFC900]">
                      {getActiveComponent().name}
                    </h3>
                    <p className="text-[#FFC900]/70">
                      {getActiveComponent().description}
                    </p>
                    
                    {/* Specifications */}
                    {getActiveComponent().specifications && (
                      <div className="mt-4">
                        <h4 className="text-[#FFC900] font-medium mb-2">Specifications</h4>
                        <ul className="list-disc list-inside text-[#FFC900]/70 space-y-1">
                          {getActiveComponent().specifications.map((spec, index) => (
                            <li key={index}>{spec}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Installation Tips */}
                    {getActiveComponent().tips && (
                      <div className="mt-4">
                        <h4 className="text-[#FFC900] font-medium mb-2">Installation Tips</h4>
                        <ul className="list-disc list-inside text-[#FFC900]/70 space-y-1">
                          {getActiveComponent().tips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
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
