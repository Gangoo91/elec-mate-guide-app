import { useExerciseKudos } from "@/hooks/useExerciseKudos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const KudosDisplay = () => {
  const { userKudos, isLoading } = useExerciseKudos();
  
  if (isLoading) {
    return <div>Loading kudos...</div>;
  }
  
  if (!userKudos || userKudos.totalPoints === 0) {
    return (
      <Card className="bg-[#22251e] border-[#FFC900]/20 mb-6">
        <CardHeader>
          <CardTitle className="text-[#FFC900] text-xl flex items-center gap-2">
            <Award className="h-5 w-5" /> Your Kudos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#FFC900]/70">
            You haven't earned any kudos yet. Complete stress management exercises to start earning points!
          </p>
        </CardContent>
      </Card>
    );
  }
  
  const level = Math.floor(userKudos.totalPoints / 50) + 1;
  const nextLevelPoints = level * 50;
  const progress = (userKudos.totalPoints / nextLevelPoints) * 100;
  
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 mb-6">
      <CardHeader>
        <CardTitle className="text-[#FFC900] text-xl flex items-center gap-2">
          <Award className="h-5 w-5" /> Your Kudos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[#FFC900] text-2xl font-bold">{userKudos.totalPoints}</span>
            <span className="text-[#FFC900]/70 text-sm">Total Points</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#FFC900]/20 p-2 rounded-full">
              <Trophy className="h-6 w-6 text-[#FFC900]" />
            </div>
            <span className="text-[#FFC900] font-medium mt-1">Level {level}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#FFC900] text-2xl font-bold">{userKudos.exercisesCompleted}</span>
            <span className="text-[#FFC900]/70 text-sm">Exercises</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-[#FFC900]/70">Progress to level {level + 1}</span>
            <span className="text-[#FFC900]/70">{userKudos.totalPoints} / {nextLevelPoints} points</span>
          </div>
          <Progress value={progress} className="h-2 bg-[#FFC900]/20" />
        </div>
        
        <div className="text-center mt-2 text-sm text-[#FFC900]/70">
          <p>Keep engaging with stress management exercises for a chance to win monthly rewards!</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default KudosDisplay;
