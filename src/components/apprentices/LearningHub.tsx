
import React from 'react';
import { Book, TestTube, Wrench, Video, Boxes, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const LearningHub = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Study Guide Section */}
        <Link to="/apprentices/study-materials">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Book className="h-6 w-6" />
                Study Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70">
                Access comprehensive study materials for City & Guilds and EAL qualifications, 
                including Level 2, Level 3, and advanced electrical courses.
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Online Mock Exams Section */}
        <Link to="/apprentices/practice-exams">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <TestTube className="h-6 w-6" />
                Online Mock Exams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70">
                Practice with adaptive testing, earn certification badges, and access 
                realistic exam simulations with instant feedback.
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Apprentice Tooling Section */}
        <Link to="/apprentices/ai-tools">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Wrench className="h-6 w-6" />
                Apprentice Tooling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70">
                Access AI-powered tools designed to help with regulations, 
                technical specifications, and practical learning assistance.
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Video Demonstrations */}
        <Link to="/apprentices/video-demonstrations">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Video className="h-6 w-6" />
                Video Demonstrations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70">
                Watch expert demonstrations of practical skills, installations, 
                and testing procedures with detailed explanations.
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* AR Learning */}
        <Link to="/apprentices/ar-learning">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Boxes className="h-6 w-6" />
                AR Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70">
                Explore electrical components and systems in 3D with our augmented 
                reality tools for enhanced practical understanding.
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Audio Tutorials */}
        <Link to="/apprentices/audio-tutorials">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Headphones className="h-6 w-6" />
                Audio Tutorials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70">
                Listen to voice-guided tutorials covering essential electrical topics, 
                perfect for learning while on the go.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default LearningHub;
