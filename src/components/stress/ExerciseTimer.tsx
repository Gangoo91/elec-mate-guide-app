
import React, { useState, useEffect } from 'react';
import { Timer as TimerIcon } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface ExerciseTimerProps {
  durationMinutes: number;
  isActive: boolean;
  onComplete: () => void;
  onExpire: () => void;
}

const ExerciseTimer = ({ durationMinutes, isActive, onComplete, onExpire }: ExerciseTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
  const [completed, setCompleted] = useState(false);
  const totalTime = durationMinutes * 60;
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !completed) {
      setCompleted(true);
      onComplete();
      
      // Start 5-minute expiration timer
      const expirationTimer = setTimeout(() => {
        onExpire();
      }, 5 * 60 * 1000); // 5 minutes
      
      return () => clearTimeout(expirationTimer);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, completed, onComplete, onExpire]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const progress = ((totalTime - timeLeft) / totalTime) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-[#FFC900]/70">
        <TimerIcon className="h-4 w-4" />
        <span>{formatTime(timeLeft)}</span>
      </div>
      <Progress value={progress} className="h-2 bg-[#FFC900]/20" />
    </div>
  );
};

export default ExerciseTimer;
