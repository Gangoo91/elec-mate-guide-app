
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { 
  Book, TestTube, Wrench, Video, Boxes, Headphones, 
  School, GraduationCap, Users, Calendar, BookOpen 
} from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UnitCard } from "@/components/level2/UnitCard";

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
      difficulty: "beginner",
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
      difficulty: "intermediate",
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
      <div className="relative mb-8">
        <Input
          type="search"
          placeholder="Search learning resources, qualifications, tools..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50"
        />
      </div>

      <Tabs defaultValue="main" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="main">Overview</TabsTrigger>
          <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
          <TabsTrigger value="study-groups">Study Groups</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        {/* Main Overview Tab */}
        <TabsContent value="main">
          <div className="space-y-6">
            {/* Continue Learning Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#FFC900]">Continue Learning</h2>
                <Badge variant="outline" className="bg-[#FFC900]/10 text-[#FFC900]">
                  {featuredUnits.length} Active Courses
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredUnits.map((unit, index) => (
                  <UnitCard
                    key={index}
                    unitNumber={unit.unitNumber}
                    title={unit.title}
                    description={unit.description}
                    path={unit.path}
                    progress={unit.progress}
                    difficulty={unit.difficulty}
                  />
                ))}
              </div>
            </section>

            {/* Quick Access Tools */}
            <section>
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Learning Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ResourceCard
                  title="Practice Exams"
                  description="Test your knowledge with adaptive exams designed to identify and improve weak areas."
                  icon={<TestTube className="h-6 w-6" />}
                  onClick={() => handleCardClick("/apprentices/practice-exams")}
                />
                <ResourceCard
                  title="Apprentice Tooling"
                  description="Access AI-powered tools for regulations and practical learning assistance."
                  icon={<Wrench className="h-6 w-6" />}
                  onClick={() => handleCardClick("/apprentices/ai-tools")}
                />
                <ResourceCard
                  title="Study Groups"
                  description="Join or create study groups with fellow apprentices to enhance learning."
                  icon={<Users className="h-6 w-6" />}
                  onClick={() => handleCardClick("/apprentices/study-groups")}
                />
              </div>
            </section>
          </div>
        </TabsContent>

        {/* Qualifications Tab */}
        <TabsContent value="qualifications">
          <div className="space-y-6">
            <Card className="border-[#FFC900]/20 bg-[#22251e]">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-[#FFC900] mb-4">City & Guilds Qualifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ResourceCard
                    title="Level 2"
                    description="Level 2 Diploma in Electrical Installations (Buildings and Structures)"
                    icon={<BookOpen className="h-6 w-6" />}
                    onClick={() => handleCardClick("/apprentices/study-materials/city-guilds/level-2")}
                  />
                  <ResourceCard
                    title="Level 3"
                    description="Level 3 Advanced Technical Diploma in Electrical Installation"
                    icon={<Book className="h-6 w-6" />}
                    onClick={() => handleCardClick("/apprentices/study-materials/city-guilds/level-3")}
                  />
                  <ResourceCard
                    title="AM2"
                    description="AM2 Assessment preparation materials"
                    icon={<TestTube className="h-6 w-6" />}
                    onClick={() => handleCardClick("/apprentices/study-materials/city-guilds/am2")}
                  />
                  <ResourceCard
                    title="MOET"
                    description="Maintenance and Operations Engineering Technician qualification"
                    icon={<Wrench className="h-6 w-6" />}
                    onClick={() => handleCardClick("/apprentices/study-materials/city-guilds/moet")}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-[#FFC900]/20 bg-[#22251e]">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-[#FFC900] mb-4">EAL Qualifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ResourceCard
                    title="Level 2"
                    description="EAL Level 2 Diploma in Electrical Installation"
                    icon={<School className="h-6 w-6" />}
                    onClick={() => handleCardClick("/apprentices/study-materials/eal/level-2")}
                  />
                  <ResourceCard
                    title="Level 3"
                    description="EAL Level 3 Advanced Diploma in Electrical Installation"
                    icon={<School className="h-6 w-6" />}
                    onClick={() => handleCardClick("/apprentices/study-materials/eal/level-3")}
                  />
                  <ResourceCard
                    title="Inspection & Testing"
                    description="EAL inspection and testing qualification resources"
                    icon={<TestTube className="h-6 w-6" />}
                    onClick={() => handleCardClick("/apprentices/study-materials/eal/inspection-testing")}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Study Groups Tab */}
        <TabsContent value="study-groups">
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#FFC900]">My Study Groups</h3>
                <Badge variant="outline" className="bg-[#FFC900]/10 text-[#FFC900]">
                  2 Active Groups
                </Badge>
              </div>
              
              <div className="space-y-4">
                <ResourceCard
                  title="Level 2 Exam Preparation"
                  description="Weekly group sessions focusing on exam techniques and revision for Level 2 Units"
                  icon={<Calendar className="h-6 w-6" />}
                  onClick={() => handleCardClick("/apprentices/study-groups/1")}
                />
                <ResourceCard
                  title="Practical Installation Skills"
                  description="Practice group for sharing tips on practical installations and troubleshooting"
                  icon={<Users className="h-6 w-6" />}
                  onClick={() => handleCardClick("/apprentices/study-groups/2")}
                />
              </div>
              
              <div className="mt-4 flex justify-end">
                <Badge 
                  className="bg-[#FFC900] hover:bg-[#FFC900]/80 cursor-pointer text-black"
                  onClick={() => handleCardClick("/apprentices/study-groups")}
                >
                  View All Study Groups
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ResourceCard
              title="Video Demonstrations"
              description="Watch expert demonstrations of practical skills with detailed explanations."
              icon={<Video className="h-6 w-6" />}
              onClick={() => handleCardClick("/apprentices/video-demonstrations")}
            />
            <ResourceCard
              title="AR Learning"
              description="Explore electrical components and systems in 3D with augmented reality tools."
              icon={<Boxes className="h-6 w-6" />}
              onClick={() => handleCardClick("/apprentices/ar-learning")}
            />
            <ResourceCard
              title="Audio Tutorials"
              description="Listen to voice-guided tutorials covering essential electrical topics."
              icon={<Headphones className="h-6 w-6" />}
              onClick={() => handleCardClick("/apprentices/audio-tutorials")}
            />
            <ResourceCard
              title="Higher Learning"
              description="Advanced materials for HNC, HND and degree-level progression."
              icon={<GraduationCap className="h-6 w-6" />}
              onClick={() => handleCardClick("/apprentices/study-materials/higher-learning")}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningHub;
