
import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';

interface TrainingTimeDisplayProps {
  onRecordTime: (minutes: number) => void;
  autoRecordInterval?: number; // Time in minutes to auto-record
}

const TrainingTimeDisplay: React.FC<TrainingTimeDisplayProps> = ({
  onRecordTime,
  autoRecordInterval = 15 // Default auto-record every 15 minutes
}) => {
  const [sessionStart] = useState<Date>(new Date());
  const [currentSessionTime, setCurrentSessionTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [lastRecorded, setLastRecorded] = useState<Date | null>(null);
  
  const { toast } = useToast();

  // Update current session time every minute
  useEffect(() => {
    if (!isActive) return;
    
    const timer = setInterval(() => {
      const elapsedMinutes = Math.floor((Date.now() - sessionStart.getTime()) / 60000);
      setCurrentSessionTime(elapsedMinutes);
      
      // Auto-record if interval has passed
      if (autoRecordInterval > 0 && elapsedMinutes > 0 && elapsedMinutes % autoRecordInterval === 0) {
        // Only record if we haven't already recorded this interval
        if (!lastRecorded || (Date.now() - lastRecorded.getTime()) > (autoRecordInterval * 60000 * 0.9)) {
          handleAutoRecord(autoRecordInterval);
        }
      }
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, [isActive, sessionStart, lastRecorded, autoRecordInterval]);

  // Record time when component unmounts
  useEffect(() => {
    return () => {
      const elapsedMinutes = Math.floor((Date.now() - sessionStart.getTime()) / 60000);
      if (elapsedMinutes > 0) {
        onRecordTime(elapsedMinutes);
      }
    };
  }, []);

  const handleAutoRecord = (minutes: number) => {
    onRecordTime(minutes);
    setLastRecorded(new Date());
    
    toast({
      title: "Training time updated",
      description: `${minutes} minutes automatically added to your training record`,
    });
  };

  const handleManualRecord = () => {
    const elapsedMinutes = Math.floor((Date.now() - sessionStart.getTime()) / 60000);
    if (elapsedMinutes > 0) {
      onRecordTime(elapsedMinutes);
      setLastRecorded(new Date());
      
      toast({
        title: "Training time recorded",
        description: `${elapsedMinutes} minutes added to your training record`,
      });
    }
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="bg-secondary p-3 rounded-lg border border-primary/20 flex items-center justify-between">
      <div className="flex items-center">
        <Clock className="h-4 w-4 text-primary mr-2" />
        <span className="text-sm text-primary/80">Session time: {formatTime(currentSessionTime)}</span>
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleManualRecord}
        disabled={currentSessionTime === 0}
      >
        Record Time
      </Button>
    </div>
  );
};

export default TrainingTimeDisplay;
