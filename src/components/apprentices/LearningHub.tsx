
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import SearchBar from './learning-hub/SearchBar';
import LearningHubTabs from './learning-hub/LearningHubTabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from '@/hooks/useAuth';

interface UnitData {
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

const LearningHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredUnits, setFeaturedUnits] = useState<UnitData[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  
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
    const fetchCourses = async () => {
      if (!user) {
        setFeaturedUnits(sampleUnits);
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
          console.error('Error fetching courses:', error);
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
          setFeaturedUnits(units);
        } else {
          // For first time users, populate with sample data and save to database
          await addInitialCourses();
          setFeaturedUnits(sampleUnits);
        }
      } catch (err) {
        console.error('Failed to fetch courses:', err);
        toast({
          title: "Failed to load courses",
          description: "There was an error loading your courses. Please try again.",
          variant: "destructive"
        });
        // Fall back to sample data
        setFeaturedUnits(sampleUnits);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, [user]);
  
  // Add initial sample courses to the database for first-time users
  const addInitialCourses = async () => {
    if (!user) return;
    
    try {
      // Fix for TypeScript error: Convert Date objects to ISO strings before sending to Supabase
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
        console.error('Error adding initial courses:', error);
      }
    } catch (err) {
      console.error('Failed to add initial courses:', err);
    }
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleCardClick = (path: string) => {
    console.log("Navigating to:", path);
    navigate(path);
  };

  const handleDeleteCourse = async (unitNumber: string) => {
    if (!user) {
      // For non-authenticated users, just update local state
      const updatedUnits = featuredUnits.filter(unit => unit.unitNumber !== unitNumber);
      setFeaturedUnits(updatedUnits);
      
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
        console.error('Error removing course:', error);
        throw error;
      }
      
      // Update local state
      const updatedUnits = featuredUnits.filter(unit => unit.unitNumber !== unitNumber);
      setFeaturedUnits(updatedUnits);
      
      toast({
        title: "Course Removed",
        description: `${unitNumber} has been removed from your dashboard`,
      });
    } catch (err) {
      console.error('Failed to remove course:', err);
      toast({
        title: "Error",
        description: "Failed to remove the course. Please try again.",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center p-8">Loading your learning dashboard...</div>;
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <SearchBar value={searchQuery} onChange={handleSearch} />
      <LearningHubTabs 
        featuredUnits={featuredUnits}
        onCardClick={handleCardClick}
        onDeleteCourse={handleDeleteCourse}
      />
    </div>
  );
};

export default LearningHub;
