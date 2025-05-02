
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import SearchBar from './learning-hub/SearchBar';
import LearningHubTabs from './learning-hub/LearningHubTabs';
import { useCourseManagement } from '@/hooks/useCourseManagement';

const LearningHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { courses, loading, handleDeleteCourse } = useCourseManagement();
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleCardClick = (path: string) => {
    console.log("Navigating to:", path);
    navigate(path);
  };

  useEffect(() => {
    console.log("LearningHub - Courses loaded:", courses);
  }, [courses]);

  if (loading) {
    return <div className="flex justify-center items-center p-8">Loading your learning dashboard...</div>;
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <SearchBar value={searchQuery} onChange={handleSearch} />
      <LearningHubTabs 
        featuredUnits={courses}
        onCardClick={handleCardClick}
        onDeleteCourse={handleDeleteCourse}
      />
    </div>
  );
};

export default LearningHub;
