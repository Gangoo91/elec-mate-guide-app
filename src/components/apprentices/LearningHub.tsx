
import React from 'react';
import { Search, Lightbulb, CalendarCheck } from "lucide-react";
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
      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader>
          <CardTitle className="text-[#FFC900] flex items-center gap-2">
            <Search className="h-6 w-6" />
            Learning Hub Search
          </CardTitle>
          <div className="relative">
            <Input
              type="search"
              placeholder="Search learning resources, diagnostics, events..."
              value={searchQuery}
              onChange={handleSearch}
              className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50"
            />
          </div>
        </CardHeader>
      </Card>

      <Link to="/apprentices/ai-tools">
        <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-[#FFC900] flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              AI Learning Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#FFC900]/70">
              Access our AI-powered assistants for technical diagnostics and regulatory guidance.
            </p>
          </CardContent>
        </Card>
      </Link>
      
      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader>
          <CardTitle className="text-[#FFC900] flex items-center gap-2">
            <CalendarCheck className="h-6 w-6" />
            Training Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-[#151812] rounded-lg p-4 border border-[#FFC900]/10">
            <p className="text-[#FFC900]/70 text-sm italic">Training events will be displayed here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearningHub;
