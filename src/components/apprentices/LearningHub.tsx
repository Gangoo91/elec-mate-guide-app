
import React from 'react';
import { Book, TestTube, Wrench, Video, Boxes, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ResourceCard from "@/components/shared/ResourceCard";
import { Input } from "@/components/ui/input";

const LearningHub = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const resources = [
    {
      title: "Study Guide",
      description: "Access comprehensive study materials for City & Guilds and EAL qualifications, including Level 2, Level 3, and advanced electrical courses.",
      icon: <Book className="h-6 w-6" />,
      path: "/apprentices/study-materials"
    },
    {
      title: "Online Mock Exams",
      description: "Practice with adaptive testing, earn certification badges, and access realistic exam simulations with instant feedback.",
      icon: <TestTube className="h-6 w-6" />,
      path: "/apprentices/practice-exams"
    },
    {
      title: "Apprentice Tooling",
      description: "Access AI-powered tools designed to help with regulations, technical specifications, and practical learning assistance.",
      icon: <Wrench className="h-6 w-6" />,
      path: "/apprentices/ai-tools"
    },
    {
      title: "Video Demonstrations",
      description: "Watch expert demonstrations of practical skills, installations, and testing procedures with detailed explanations.",
      icon: <Video className="h-6 w-6" />,
      path: "/apprentices/video-demonstrations"
    },
    {
      title: "AR Learning",
      description: "Explore electrical components and systems in 3D with our augmented reality tools for enhanced practical understanding.",
      icon: <Boxes className="h-6 w-6" />,
      path: "/apprentices/ar-learning"
    },
    {
      title: "Audio Tutorials",
      description: "Listen to voice-guided tutorials covering essential electrical topics, perfect for learning while on the go.",
      icon: <Headphones className="h-6 w-6" />,
      path: "/apprentices/audio-tutorials"
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            icon={resource.icon}
            fullCardLink={resource.path}
          />
        ))}
      </div>
    </div>
  );
};

export default LearningHub;
