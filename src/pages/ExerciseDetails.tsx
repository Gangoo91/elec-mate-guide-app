
import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import LoadingSpinner from "@/components/LoadingSpinner";
import ExerciseSteps from "@/components/stress/ExerciseSteps";
import ExerciseInfo from "@/components/stress/ExerciseInfo";

// Define the Step interface to match what we expect from the database
interface Step {
  step: number;
  instruction: string;
}

interface Exercise {
  id: string;
  title: string;
  description: string;
  resource_type: string;
  steps: Step[];
  benefits: string;
  tips: string;
  duration_minutes?: number; // Make this optional
  reference_url?: string;
  created_at: string;
  updated_at: string;
  url?: string;
}

const ExerciseDetails = () => {
  const { id } = useParams();

  const { data: exercise, isLoading } = useQuery({
    queryKey: ["exercise", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("mental_health_resources")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      
      // Parse the steps JSON if it's a string
      if (data && typeof data.steps === 'string') {
        data.steps = JSON.parse(data.steps);
      }
      
      // Add a fallback for duration_minutes if it doesn't exist
      const processedData = {
        ...data,
        duration_minutes: data.duration_minutes || 5 // Default to 5 minutes
      };
      
      return processedData as Exercise;
    },
  });

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-40">
          <LoadingSpinner size="lg" />
        </div>
      </MainLayout>
    );
  }

  if (!exercise) {
    return (
      <MainLayout>
        <div className="container py-8">
          <p className="text-center text-[#FFC900]">Exercise not found</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader 
          title={exercise.title}
          description={exercise.description}
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          <ExerciseSteps steps={exercise.steps} />
          <ExerciseInfo 
            benefits={exercise.benefits}
            tips={exercise.tips}
            duration={exercise.duration_minutes || 5}
            referenceUrl={exercise.reference_url}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ExerciseDetails;
