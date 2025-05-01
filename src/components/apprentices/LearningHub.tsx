
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchBar from './learning-hub/SearchBar';
import LearningHubTabs from './learning-hub/LearningHubTabs';

const LearningHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleCardClick = (path: string) => {
    console.log("Navigating to:", path);
    navigate(path);
  };

  // Featured units with progress tracking
  const featuredUnits = [
    {
      unitNumber: "Level 2 - Unit 201",
      title: "Health and Safety in Electrical Installation",
      description: "Essential knowledge about working safely in electrical environments",
      path: "/apprentices/study-materials/city-guilds/level-2/201",
      difficulty: "beginner" as const,
      progress: {
        completed: 2,
        total: 6,
        timeSpent: 120, // minutes
        estimatedTime: 360, // minutes
        lastActivity: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      }
    },
    {
      unitNumber: "EAL - Installation Technology",
      title: "Electrical Installation Technology",
      description: "Core principles and practices of electrical installation work",
      path: "/apprentices/study-materials/eal/level-2/installation-technology",
      difficulty: "intermediate" as const,
      progress: {
        completed: 1,
        total: 5,
        timeSpent: 45,
        estimatedTime: 300
      }
    }
  ];

  return (
    <div className="space-y-6">
      <SearchBar value={searchQuery} onChange={handleSearch} />
      <LearningHubTabs 
        featuredUnits={featuredUnits}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default LearningHub;
