
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Award, CheckCircle, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import LoadingSpinner from '@/components/LoadingSpinner';

interface ProgressSummaryProps {
  onViewDetails?: () => void;
  limitUnits?: boolean;
}

interface CourseUnit {
  id: string;
  title: string;
  completed: boolean;
  score?: number;
}

const ProgressSummary = ({ onViewDetails, limitUnits = true }: ProgressSummaryProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [units, setUnits] = useState<CourseUnit[]>([]);

  // Mock units data (in a real app, this would come from the database)
  const allUnits: CourseUnit[] = [
    { id: '201', title: 'Health & Safety', completed: false },
    { id: '202', title: 'Electrical Scientific Principles', completed: false },
    { id: '203', title: 'Electrical Installation Technology', completed: false },
    { id: '204', title: 'Installation of Wiring Systems', completed: false },
  ];

  useEffect(() => {
    const fetchUserProgress = async () => {
      setLoading(true);
      try {
        if (user) {
          // In a real app, fetch actual progress data from the database
          const { data, error } = await supabase
            .from('user_progress')
            .select('*')
            .eq('user_id', user.id)
            .in('content_id', allUnits.map(u => `${u.id}-quiz`));

          if (error) throw error;

          // Map progress data to units
          const updatedUnits = allUnits.map(unit => {
            const progressRecord = data?.find(p => p.content_id === `${unit.id}-quiz`);
            
            if (progressRecord && progressRecord.progress) {
              return {
                ...unit,
                completed: progressRecord.progress.completed || false,
                score: progressRecord.progress.score
              };
            }
            
            return unit;
          });

          setUnits(updatedUnits);
        } else {
          // If not logged in, just use mock data
          setUnits(allUnits);
        }
      } catch (err) {
        console.error('Error fetching progress data:', err);
        setUnits(allUnits); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, [user]);

  const completedUnits = units.filter(unit => unit.completed).length;
  const completionPercentage = Math.round((completedUnits / units.length) * 100);
  const displayUnits = limitUnits ? units.slice(0, 3) : units;

  const navigateToUnit = (unitId: string) => {
    navigate(`/apprentices/study-materials/nvq2/core-units/${unitId}`);
  };

  if (loading) {
    return (
      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardContent className="p-6 flex justify-center">
          <LoadingSpinner />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900] flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          Learning Progress
        </CardTitle>
        <CardDescription className="text-[#FFC900]/70">
          Your NVQ Level 2 course progress
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-[#FFC900]/70">Overall completion</span>
            <span className="text-[#FFC900] font-medium">{completionPercentage}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
          <p className="text-xs text-[#FFC900]/60 mt-2">
            {completedUnits} of {units.length} units completed
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-[#FFC900]">Recent Units</h3>
          {displayUnits.map((unit) => (
            <div 
              key={unit.id}
              className="flex items-center justify-between p-3 border rounded-md border-[#FFC900]/20 hover:border-[#FFC900]/40 hover:bg-[#FFC900]/5 cursor-pointer transition-colors"
              onClick={() => navigateToUnit(unit.id)}
            >
              <div className="flex items-center gap-2">
                {unit.completed ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <div className="h-4 w-4 border border-[#FFC900]/30 rounded-full" />
                )}
                <span className="text-[#FFC900]/80">Unit {unit.id}: {unit.title}</span>
              </div>
              {unit.completed && unit.score && (
                <span className="text-xs bg-green-500/20 text-green-500 py-1 px-2 rounded">
                  {Math.round(unit.score)}%
                </span>
              )}
            </div>
          ))}
          
          {/* View all button if we're showing limited units */}
          {limitUnits && units.length > 3 && (
            <Button 
              variant="ghost" 
              className="w-full mt-2 border border-[#FFC900]/20 hover:bg-[#FFC900]/10 text-[#FFC900]"
              onClick={() => navigate('/apprentices/study-materials/nvq2/core-units')}
            >
              View All Units <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        {completedUnits === units.length && (
          <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-md">
            <Award className="h-5 w-5 text-green-500" />
            <span className="text-green-500 font-medium">All units completed!</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgressSummary;
