
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StressManagementResource } from "@/hooks/useStressManagementResources";
import { Link } from "react-router-dom";

interface ExerciseCardProps {
  exercise: StressManagementResource;
  isFeatured?: boolean;
}

const ExerciseCard = ({ exercise, isFeatured }: ExerciseCardProps) => {
  // Get appropriate color based on difficulty level
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
    <Link to={`/mental-health/stress-management/${exercise.id}`} className="block h-full">
      <Card className="h-full flex flex-col bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-[#FFC900]/10">
        <CardHeader className="pb-2">
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
        <CardContent className="pt-2 mt-auto">
          <Badge variant="outline" className={`${getDifficultyColor()}`}>
            {exercise.difficulty_level || "Beginner"}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ExerciseCard;
