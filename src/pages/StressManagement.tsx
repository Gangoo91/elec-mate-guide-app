
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { useStressManagementResources, useDailyFeaturedExercise } from "@/hooks/useStressManagementResources";
import ExerciseCard from "@/components/stress/ExerciseCard";
import LoadingSpinner from "@/components/LoadingSpinner";

const StressManagement = () => {
  const { data: resources, isLoading } = useStressManagementResources();
  const { data: dailyExercise, isLoading: isDailyLoading } = useDailyFeaturedExercise();

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Stress Management"
          description="Tools and techniques for managing work-related stress"
        />

        {(isLoading || isDailyLoading) ? (
          <div className="flex justify-center items-center h-40">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Daily Featured Exercise */}
            {dailyExercise && (
              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FFC900]">Today's Featured Exercise</h2>
                <ExerciseCard exercise={dailyExercise} isFeatured />
              </section>
            )}

            {/* All Exercises Grid */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#FFC900]">All Techniques</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {resources?.map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default StressManagement;
