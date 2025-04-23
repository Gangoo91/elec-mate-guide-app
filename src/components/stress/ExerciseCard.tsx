
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StressManagementResource } from "@/hooks/useStressManagementResources";

interface ExerciseCardProps {
  exercise: StressManagementResource;
  isFeatured?: boolean;
}

const ExerciseCard = ({ exercise, isFeatured }: ExerciseCardProps) => {
  return (
    <Card className="h-full flex flex-col bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg text-[#FFC900]">{exercise.title}</CardTitle>
          {isFeatured && (
            <Badge variant="outline" className="border-green-500/30 text-green-400">
              Daily Exercise
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-[#FFC900]/70">
          <Clock className="h-4 w-4" />
          <span>{exercise.duration_minutes} minutes</span>
          <Badge variant="secondary" className="ml-auto">
            {exercise.category}
          </Badge>
        </div>
        <CardDescription className="text-[#FFC900]/70">
          {exercise.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <Badge variant="outline" className="text-[#FFC900]/80">
          {exercise.difficulty_level}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
