import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { useStressManagementResources, useDailyFeaturedExercise } from "@/hooks/useStressManagementResources";
import ExerciseCard from "@/components/stress/ExerciseCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { useExerciseKudos } from "@/hooks/useExerciseKudos";
import { Button } from "@/components/ui/button";
import { Award, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StressManagement = () => {
  const { data: resources, isLoading } = useStressManagementResources();
  const { data: dailyExercise, isLoading: isDailyLoading } = useDailyFeaturedExercise();
  const { user } = useAuth();
  const { toast } = useToast();
  const { addKudos, userKudos, hasGivenKudos, isLoading: isKudosLoading } = useExerciseKudos();
  const [exerciseInProgress, setExerciseInProgress] = useState<string | null>(null);

  const handleExerciseComplete = async (exerciseId: string) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to earn kudos for exercises",
        variant: "destructive"
      });
      return;
    }

    if (hasGivenKudos(exerciseId)) {
      toast({
        title: "Already completed",
        description: "You've already earned kudos for this exercise",
      });
      return;
    }

    try {
      await addKudos(exerciseId);
      toast({
        title: "Exercise completed!",
        description: "You've earned kudos points for completing this exercise",
      });
      setExerciseInProgress(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Couldn't add kudos. Please try again later.",
        variant: "destructive"
      });
    }
  };

  const exercisesByLevel = React.useMemo(() => {
    if (!resources) return { beginner: [], intermediate: [], advanced: [] };
    
    return resources.reduce((acc, exercise) => {
      if (!exercise.difficulty_level) return acc;
      
      const level = exercise.difficulty_level.toLowerCase();
      if (level === 'beginner' || level === 'intermediate' || level === 'advanced') {
        acc[level].push(exercise);
      } else {
        acc.beginner.push(exercise);
      }
      return acc;
    }, { beginner: [], intermediate: [], advanced: [] });
  }, [resources]);

  const renderExerciseCard = (exercise: any, isFeatured = false) => (
    <div key={exercise.id} className="relative h-full">
      <ExerciseCard 
        exercise={exercise} 
        isFeatured={isFeatured}
        onStart={() => setExerciseInProgress(exercise.id)}
        onComplete={() => handleExerciseComplete(exercise.id)}
        isInProgress={exerciseInProgress === exercise.id}
        hasEarnedKudos={hasGivenKudos(exercise.id)}
      />
    </div>
  );

  if (isLoading || isDailyLoading || isKudosLoading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-40">
          <LoadingSpinner size="lg" />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Stress Management"
          description="Tools and techniques for managing work-related stress"
        />

        <div className="space-y-8">
          {/* Daily Featured Exercise */}
          {dailyExercise && (
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-[#FFC900] h-5 w-5" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Today's Featured Exercise</h2>
              </div>
              {renderExerciseCard(dailyExercise, true)}
            </section>
          )}

          {/* Tabbed Interface for Difficulty Levels */}
          <section>
            <Tabs defaultValue="beginner" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6 bg-[#22251e] border border-[#FFC900]/20">
                <TabsTrigger value="beginner" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
                  Beginner
                </TabsTrigger>
                <TabsTrigger value="intermediate" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
                  Intermediate
                </TabsTrigger>
                <TabsTrigger value="advanced" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
                  Advanced
                </TabsTrigger>
              </TabsList>
              
              {["beginner", "intermediate", "advanced"].map((level) => (
                <TabsContent key={level} value={level}>
                  <h3 className="text-lg font-medium mb-4 text-[#FFC900] capitalize">{level} Exercises</h3>
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                    {exercisesByLevel[level]
                      .filter(exercise => !dailyExercise || exercise.id !== dailyExercise.id)
                      .map(exercise => renderExerciseCard(exercise))}
                  </div>
                  {exercisesByLevel[level].length === 0 && (
                    <p className="text-center text-[#FFC900]/70 py-8">No {level} exercises available.</p>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default StressManagement;
