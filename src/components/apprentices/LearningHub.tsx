
import React from 'react';
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AIDiagnosticAssistant from "./AIDiagnosticAssistant";
import RegulationsAssistant from "./RegulationsAssistant";
import { CalendarCheck } from "lucide-react";

const LearningHub = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
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
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFC900]">AI Learning Assistants</h3>
          <AIDiagnosticAssistant />
          <RegulationsAssistant />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFC900] flex items-center gap-2">
            <CalendarCheck className="h-5 w-5" />
            Upcoming Training Events
          </h3>
          <div className="bg-[#151812] rounded-lg p-4 border border-[#FFC900]/10">
            <p className="text-[#FFC900]/70 text-sm italic">Training events will be displayed here.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningHub;
