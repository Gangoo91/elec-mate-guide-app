
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from '@/hooks/useAuth';
import { useErrorHandler } from '@/hooks/useErrorHandler';

export interface UnitData {
  unitNumber: string;
  title: string;
  description: string;
  path: string;
  progress?: {
    completed: number;
    total: number;
    timeSpent?: number;
    estimatedTime?: number;
    lastActivity?: Date;
  };
}

export function useCourseManagement() {
  const [courses, setCourses] = useState<UnitData[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();
  const { handleError } = useErrorHandler();

  // Sample data to use when not logged in or for first time users
  const sampleUnits = [
    {
      unitNumber: "Level 2 - Unit 201",
      title: "Health and Safety in Electrical Installation",
      description: "Essential knowledge about working safely in electrical environments",
      path: "/apprentices/study-materials/city-guilds/level-2/201",
      progress: {
        completed: 2,
        total: 6,
        timeSpent: 120,
        estimatedTime: 360,
        lastActivity: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
      }
    },
    {
      unitNumber: "EAL - Installation Technology",
      title: "Electrical Installation Technology",
      description: "Core principles and practices of electrical installation work",
      path: "/apprentices/study-materials/eal/level-2/installation-technology",
      progress: {
        completed: 1,
        total: 5,
        timeSpent: 45,
        estimatedTime: 300
      }
    }
  ];
  
  // Fetch user courses from Supabase
  useEffect(() => {
    fetchCourses();
  }, [user]);
  
  const fetchCourses = async () => {
    if (!user) {
      setCourses(sampleUnits);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_courses')
        .select('*')
        .eq('user_id', user.id);
      
      if (error) {
        throw error;
      }
      
      if (data && data.length > 0) {
        // Transform database data to UnitData format
        const units: UnitData[] = data.map(course => ({
          unitNumber: course.unit_number,
          title: course.title,
          description: course.description,
          path: course.path,
          progress: {
            completed: course.completed || 0,
            total: course.total || 0,
            timeSpent: course.time_spent || 0,
            estimatedTime: course.estimated_time || 0,
            lastActivity: course.last_activity ? new Date(course.last_activity) : undefined
          }
        }));
        setCourses(units);
      } else {
        // For first time users, populate with sample data and save to database
        await addInitialCourses();
        setCourses(sampleUnits);
      }
    } catch (err) {
      handleError(err, 'Failed to fetch courses. Please try again.');
      // Fall back to sample data
      setCourses(sampleUnits);
    } finally {
      setLoading(false);
    }
  };
  
  // Add initial sample courses to the database for first-time users
  const addInitialCourses = async () => {
    if (!user) return;
    
    try {
      // Convert Date objects to ISO strings before sending to Supabase
      const coursesToAdd = sampleUnits.map(unit => ({
        user_id: user.id,
        unit_number: unit.unitNumber,
        title: unit.title,
        description: unit.description,
        path: unit.path,
        completed: unit.progress?.completed || 0,
        total: unit.progress?.total || 0,
        time_spent: unit.progress?.timeSpent || 0,
        estimated_time: unit.progress?.estimatedTime || 0,
        last_activity: unit.progress?.lastActivity ? unit.progress.lastActivity.toISOString() : new Date().toISOString()
      }));
      
      const { error } = await supabase
        .from('user_courses')
        .insert(coursesToAdd);
        
      if (error) {
        throw error;
      }
    } catch (err) {
      handleError(err, 'Failed to add initial courses');
    }
  };
  
  const handleDeleteCourse = async (unitNumber: string) => {
    if (!user) {
      // For non-authenticated users, just update local state
      const updatedCourses = courses.filter(unit => unit.unitNumber !== unitNumber);
      setCourses(updatedCourses);
      
      toast({
        title: "Course Removed",
        description: `${unitNumber} has been removed from your dashboard`,
      });
      return;
    }
    
    try {
      // Delete from database
      const { error } = await supabase
        .from('user_courses')
        .delete()
        .eq('user_id', user.id)
        .eq('unit_number', unitNumber);
      
      if (error) {
        throw error;
      }
      
      // Update local state
      const updatedCourses = courses.filter(unit => unit.unitNumber !== unitNumber);
      setCourses(updatedCourses);
      
      toast({
        title: "Course Removed",
        description: `${unitNumber} has been removed from your dashboard`,
      });
    } catch (err) {
      handleError(err, 'Failed to remove course. Please try again.');
    }
  };

  return {
    courses,
    loading,
    handleDeleteCourse
  };
}
