
import React from "react";
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
  const { addKudos, userKudos, isLoading: isKudosLoading } = useExerciseKudos();

  // Group exercises by difficulty level
  const exercisesByLevel = React.useMemo(() => {
    if (!resources) return { beginner: [], intermediate: [], advanced: [] };
    
    return resources.reduce((acc, exercise) => {
      if (!exercise.difficulty_level) return acc;
      
      const level = exercise.difficulty_level.toLowerCase();
      if (level === 'beginner' || level === 'intermediate' || level === 'advanced') {
        acc[level].push(exercise);
      } else {
        // Default to beginner if unknown level
        acc.beginner.push(exercise);
      }
      return acc;
    }, { beginner: [], intermediate: [], advanced: [] });
  }, [resources]);

  const handleAddKudos = async (exerciseId: string) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to give kudos to exercises",
        variant: "destructive"
      });
      return;
    }

    try {
      await addKudos(exerciseId);
      toast({
        title: "Kudos added!",
        description: "You've earned points for trying this exercise",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Couldn't add kudos. Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Stress Management"
          description="Tools and techniques for managing work-related stress"
        />

        {(isLoading || isDailyLoading || isKudosLoading) ? (
          <div className="flex justify-center items-center h-40">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Daily Featured Exercise */}
            {dailyExercise && (
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-[#FFC900] h-5 w-5" />
                  <h2 className="text-xl font-semibold text-[#FFC900]">Today's Featured Exercise</h2>
                </div>
                <div className="relative">
                  <ExerciseCard exercise={dailyExercise} isFeatured />
                  {user && (
                    <Button
                      onClick={() => handleAddKudos(dailyExercise.id)}
                      className="absolute top-4 right-4 bg-[#FFC900]/20 hover:bg-[#FFC900]/40 text-[#FFC900]"
                      size="sm"
                    >
                      <Award className="mr-1 h-4 w-4" /> Give Kudos
                    </Button>
                  )}
                </div>
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
                
                <TabsContent value="beginner">
                  <h3 className="text-lg font-medium mb-4 text-[#FFC900]">Beginner Exercises</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {exercisesByLevel.beginner
                      .filter(exercise => !dailyExercise || exercise.id !== dailyExercise.id)
                      .map(exercise => (
                        <div key={exercise.id} className="relative">
                          <ExerciseCard exercise={exercise} />
                          {user && (
                            <Button
                              onClick={() => handleAddKudos(exercise.id)}
                              className="absolute top-4 right-4 bg-[#FFC900]/20 hover:bg-[#FFC900]/40 text-[#FFC900]"
                              size="sm"
                              variant="ghost"
                            >
                              <Award className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                  </div>
                  {exercisesByLevel.beginner.length === 0 && (
                    <p className="text-center text-[#FFC900]/70 py-8">No beginner exercises available.</p>
                  )}
                </TabsContent>
                
                <TabsContent value="intermediate">
                  <h3 className="text-lg font-medium mb-4 text-[#FFC900]">Intermediate Exercises</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {exercisesByLevel.intermediate
                      .filter(exercise => !dailyExercise || exercise.id !== dailyExercise.id)
                      .map(exercise => (
                        <div key={exercise.id} className="relative">
                          <ExerciseCard exercise={exercise} />
                          {user && (
                            <Button
                              onClick={() => handleAddKudos(exercise.id)}
                              className="absolute top-4 right-4 bg-[#FFC900]/20 hover:bg-[#FFC900]/40 text-[#FFC900]"
                              size="sm"
                              variant="ghost"
                            >
                              <Award className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                  </div>
                  {exercisesByLevel.intermediate.length === 0 && (
                    <p className="text-center text-[#FFC900]/70 py-8">No intermediate exercises available.</p>
                  )}
                </TabsContent>
                
                <TabsContent value="advanced">
                  <h3 className="text-lg font-medium mb-4 text-[#FFC900]">Advanced Exercises</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {exercisesByLevel.advanced
                      .filter(exercise => !dailyExercise || exercise.id !== dailyExercise.id)
                      .map(exercise => (
                        <div key={exercise.id} className="relative">
                          <ExerciseCard exercise={exercise} />
                          {user && (
                            <Button
                              onClick={() => handleAddKudos(exercise.id)}
                              className="absolute top-4 right-4 bg-[#FFC900]/20 hover:bg-[#FFC900]/40 text-[#FFC900]"
                              size="sm"
                              variant="ghost"
                            >
                              <Award className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                  </div>
                  {exercisesByLevel.advanced.length === 0 && (
                    <p className="text-center text-[#FFC900]/70 py-8">No advanced exercises available.</p>
                  )}
                </TabsContent>
              </Tabs>
            </section>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default StressManagement;
