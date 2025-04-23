
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StressManagementResource } from "@/hooks/useStressManagementResources";
import { Button } from "@/components/ui/button";

interface ExerciseCardProps {
  exercise: StressManagementResource;
  isFeatured?: boolean;
  onStart: () => void;
  onComplete: () => void;
  isInProgress: boolean;
  hasEarnedKudos: boolean;
}

const ExerciseCard = ({ 
  exercise, 
  isFeatured,
  onStart,
  onComplete,
  isInProgress,
  hasEarnedKudos
}: ExerciseCardProps) => {
  const getDifficultyColor = () => {
    switch (exercise.difficulty_level?.toLowerCase()) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'border-[#FFC900]/30 text-[#FFC900]/80';
    }
  };

  return (
    <Card className="h-full flex flex-col bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
      <CardHeader className="pb-2 flex-1">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg text-[#FFC900]">{exercise.title}</CardTitle>
          {isFeatured && (
            <Badge className="bg-[#FFC900]/20 text-[#FFC900] border-[#FFC900]/30">
              <Star className="mr-1 h-3 w-3" /> Daily Pick
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-[#FFC900]/70 mt-2">
          <Clock className="h-4 w-4" />
          <span>{exercise.duration_minutes} minutes</span>
          <Badge variant="secondary" className="ml-auto">
            {exercise.category}
          </Badge>
        </div>
        <CardDescription className="text-[#FFC900]/70 mt-2">
          {exercise.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex items-center justify-between gap-4">
          <Badge variant="outline" className={`${getDifficultyColor()}`}>
            {exercise.difficulty_level || "Beginner"}
          </Badge>
          {hasEarnedKudos ? (
            <Badge variant="outline" className="bg-[#FFC900]/20 text-[#FFC900]">
              Completed
            </Badge>
          ) : isInProgress ? (
            <Button onClick={onComplete} size="sm" className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90">
              Complete Exercise
            </Button>
          ) : (
            <Button onClick={onStart} size="sm" variant="outline" className="text-[#FFC900] border-[#FFC900]/30 hover:bg-[#FFC900]/10">
              Start Exercise
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
