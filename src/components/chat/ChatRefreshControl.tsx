
import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

interface RefreshControlProps {
  onRefresh: () => Promise<void>;
  className?: string;
}

export function ChatRefreshControl({ onRefresh, className = "" }: RefreshControlProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullStartY, setPullStartY] = useState(0);
  const [pullDistance, setPullDistance] = useState(0);

  // Reset pull distance when refreshing completes
  useEffect(() => {
    if (!isRefreshing) {
      setPullDistance(0);
    }
  }, [isRefreshing]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.scrollY === 0) {
      setPullStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (pullStartY === 0 || isRefreshing) return;

    const currentPullDistance = e.touches[0].clientY - pullStartY;
    if (currentPullDistance > 0) {
      setPullDistance(Math.min(currentPullDistance, 100)); // Limit pull distance
    }
  };

  const handleTouchEnd = async () => {
    if (pullDistance > 50 && !isRefreshing) {
      setIsRefreshing(true);
      await onRefresh();
      setIsRefreshing(false);
    }
    setPullStartY(0);
    setPullDistance(0);
  };

  return (
    <div
      className={`w-full ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {pullDistance > 0 && (
        <div
          className="flex justify-center items-center transition-all duration-200"
          style={{ height: `${pullDistance}px` }}
        >
          <RefreshCw 
            className={`text-[#FFC900] ${isRefreshing ? 'animate-spin' : 'animate-pulse'}`} 
            style={{ 
              transform: `rotate(${pullDistance * 3.6}deg)`,
              opacity: Math.min(pullDistance / 50, 1)
            }} 
          />
        </div>
      )}
      {isRefreshing && (
        <div className="flex justify-center items-center p-2">
          <RefreshCw className="animate-spin text-[#FFC900]" />
          <span className="ml-2 text-[#FFC900]">Refreshing...</span>
        </div>
      )}
    </div>
  );
}
