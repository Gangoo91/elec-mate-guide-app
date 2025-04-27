
import React from 'react';
import { ComponentInfo } from "@/types/arLearning";
import { useYouTubePlayerElement } from "@/components/video/players/youtube/hooks/useYouTubePlayerElement";
import LoadingSpinner from "@/components/LoadingSpinner";

interface ComponentDetailsProps {
  component: ComponentInfo;
}

const ComponentDetails = ({ component }: ComponentDetailsProps) => {
  const playerElementId = "component-video-player";
  const { containerRef, containerCreated } = useYouTubePlayerElement({
    videoId: component.youtubeId,
    playerElementId
  });

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-[#FFC900]">
        {component.name}
      </h3>
      <p className="text-[#FFC900]/70">
        {component.description}
      </p>
      
      {component.specifications && (
        <div className="mt-4">
          <h4 className="text-[#FFC900] font-medium mb-2">Specifications</h4>
          <ul className="list-disc list-inside text-[#FFC900]/70 space-y-1">
            {component.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      )}
      
      {component.tips && (
        <div className="mt-4">
          <h4 className="text-[#FFC900] font-medium mb-2">Installation Tips</h4>
          <ul className="list-disc list-inside text-[#FFC900]/70 space-y-1">
            {component.tips.map((tip, index) => (
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
  );
};

export default ComponentDetails;
