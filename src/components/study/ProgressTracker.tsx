
import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BookOpen, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import LoadingSpinner from '@/components/LoadingSpinner';

interface CourseUnit {
  unitId: string;
  title: string;
  completed: boolean;
  score?: number;
  lastAccessed?: string;
}

interface ProgressTrackerProps {
  courseId: string;
}

const ProgressTracker = ({ courseId }: ProgressTrackerProps) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [units, setUnits] = useState<CourseUnit[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Mock units for NVQ Level 2 (in a real app, these would come from the database)
  const nvq2Units: CourseUnit[] = [
    { unitId: '201', title: 'Health & Safety', completed: false },
    { unitId: '202', title: 'Electrical Scientific Principles', completed: false },
    { unitId: '203', title: 'Electrical Installation Technology', completed: false },
    { unitId: '204', title: 'Installation of Wiring Systems', completed: false },
  ];

  useEffect(() => {
    if (!user) {
      setUnits(nvq2Units);
      setLoading(false);
      return;
    }

    const fetchUserProgress = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch all progress records for this user that match the unit IDs
        const { data, error } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id)
          .in('content_id', nvq2Units.map(u => `${u.unitId}-quiz`));

        if (error) throw error;

        // Map progress data to units
        const updatedUnits = nvq2Units.map(unit => {
          // Find matching progress record
          const progressRecord = data?.find(p => p.content_id === `${unit.unitId}-quiz`);
          
          if (progressRecord && progressRecord.progress) {
            // Update unit with progress info
            return {
              ...unit,
              completed: progressRecord.progress.completed || false,
              score: progressRecord.progress.score,
              lastAccessed: progressRecord.last_accessed
            };
          }
          
          return unit;
        });

        setUnits(updatedUnits);
      } catch (err) {
        console.error('Error fetching user progress:', err);
        setError('Failed to load your progress. Please try again.');
        // Still show default units if there's an error
        setUnits(nvq2Units);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, [user]);

  const completedUnits = units.filter(unit => unit.completed).length;
  const completionPercentage = Math.round((completedUnits / units.length) * 100);

  if (loading) {
    return (
      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardContent className="p-8 flex justify-center">
          <LoadingSpinner />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900] flex items-center gap-2">
          <Award className="h-5 w-5" />
          NVQ Level 2 Progress
        </CardTitle>
        <CardDescription className="text-[#FFC900]/70">
          Track your learning journey through core units
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <p className="text-[#FFC900]/70">{error}</p>
          </div>
        )}
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#FFC900]/70">Overall completion</span>
            <span className="text-[#FFC900] font-medium">{completionPercentage}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>

        <div className="space-y-4">
          <h3 className="text-[#FFC900] font-medium">Units</h3>
          <div className="space-y-2">
            {units.map(unit => (
              <div
                key={unit.unitId}
                className={`p-3 border rounded-md flex items-center justify-between 
                  ${unit.completed 
                    ? 'border-green-500/30 bg-green-500/10' 
                    : 'border-[#FFC900]/20 hover:border-[#FFC900]/40'
                  }`}
              >
                <div className="flex items-center gap-3">
                  {unit.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <BookOpen className="h-5 w-5 text-[#FFC900]/70" />
                  )}
                  <div>
                    <p className="font-medium text-[#FFC900]">
                      Unit {unit.unitId}: {unit.title}
                    </p>
                    {unit.score && (
                      <p className="text-xs text-[#FFC900]/70">
                        Score: {Math.round(unit.score)}%
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-xs text-[#FFC900]/50">
                  {unit.lastAccessed 
                    ? `Last accessed: ${new Date(unit.lastAccessed).toLocaleDateString()}`
                    : unit.completed ? 'Completed' : 'Not started'
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <p className="text-sm text-[#FFC900]/70">
          {completedUnits} of {units.length} units completed
        </p>
        {completedUnits === units.length && (
          <div className="flex items-center gap-1 text-sm text-green-500">
            <Award className="h-4 w-4" />
            <span>All units completed!</span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProgressTracker;
