
import React from 'react';
import { Book, TestTube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import ResourceCard from "@/components/shared/ResourceCard";

const ElectriciansLearningHub = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResourceCard
          title="Study Guide"
          description="Access comprehensive study materials for professional qualifications and continuing education."
          icon={<Book className="h-6 w-6" />}
          fullCardLink="/electricians/study-guide"
        />

        <ResourceCard
          title="Online Mock Exams"
          description="Practice with our comprehensive mock exams designed to prepare you for professional electrical qualifications."
          icon={<TestTube className="h-6 w-6" />}
          fullCardLink="/electricians/practice-exams"
        />
      </div>
    </div>
  );
};

export default ElectriciansLearningHub;
