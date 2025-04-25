
import React from 'react';
import { Book, TestTube } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

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
        {/* Study Guide Section */}
        <Link to="/electricians/study-guide">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Book className="h-6 w-6" />
                Study Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70 mb-6">
                Access comprehensive study materials for professional electrician qualifications and continuing education.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Solar PV Installation", 
                  "Energy Storage Systems", 
                  "Building Management", 
                  "Smart Home Tech", 
                  "EV Infrastructure", 
                  "Data Networks", 
                  "Energy Efficiency", 
                  "Emergency Lighting", 
                  "Fire Alarm Systems", 
                  "Access Control"
                ].map((topic, index) => (
                  <div 
                    key={index}
                    className="bg-[#1a1d16] px-3 py-2 rounded-md border border-[#FFC900]/10 text-[#FFC900]/80 text-sm hover:bg-[#2a2d26] hover:border-[#FFC900]/30 transition-colors cursor-pointer"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Online Mock Exams Section */}
        <Link to="/electricians/practice-exams">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <TestTube className="h-6 w-6" />
                Online Mock Exams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70 mb-6">
                Practice with our comprehensive mock exams designed to prepare you for professional electrical qualifications and certifications.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Solar PV Installation", 
                  "Energy Storage Systems", 
                  "Building Management", 
                  "Smart Home Tech", 
                  "EV Infrastructure", 
                  "Data Networks", 
                  "Energy Efficiency", 
                  "Emergency Lighting", 
                  "Fire Alarm Systems", 
                  "Access Control"
                ].map((topic, index) => (
                  <div 
                    key={index}
                    className="bg-[#1a1d16] px-3 py-2 rounded-md border border-[#FFC900]/10 text-[#FFC900]/80 text-sm hover:bg-[#2a2d26] hover:border-[#FFC900]/30 transition-colors cursor-pointer"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default ElectriciansLearningHub;
