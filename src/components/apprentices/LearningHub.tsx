
import React from 'react';
import { Search, Lightbulb, CalendarCheck, BookOpen, TestTube, BookCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const LearningHub = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const trainingEvents = [
    {
      title: "Electrical Safety Fundamentals",
      date: "May 5, 2025",
      type: "Workshop",
      location: "Online"
    },
    {
      title: "Residential Wiring Techniques",
      date: "May 12, 2025",
      type: "Course",
      location: "Brisbane Training Center"
    },
    {
      title: "Commercial Installation Best Practices",
      date: "May 20, 2025",
      type: "Seminar",
      location: "Online"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="relative mb-8">
        <Input
          type="search"
          placeholder="Search learning resources, diagnostics, events..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/apprentices/ai-tools">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
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

        <Link to="/apprentices/study-materials">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Study Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70">
                Access comprehensive study guides, video tutorials, and reference materials.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/apprentices/practice-exams">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <TestTube className="h-6 w-6" />
                Practice Exams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70">
                Test your knowledge with mock exams and quizzes covering various electrical topics.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/apprentices/certifications">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <BookCheck className="h-6 w-6" />
                Certification Prep
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70">
                Prepare for your electrical certification with structured learning paths and practice tests.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader>
          <CardTitle className="text-[#FFC900] flex items-center gap-2">
            <CalendarCheck className="h-6 w-6" />
            Training Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          {trainingEvents.length > 0 ? (
            <div className="space-y-3">
              {trainingEvents.map((event, index) => (
                <div key={index} className="bg-[#151812] rounded-lg p-4 border border-[#FFC900]/10 hover:border-[#FFC900]/30 transition-all duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[#FFC900] font-medium">{event.title}</h3>
                    <span className="bg-[#FFC900]/10 text-[#FFC900] text-xs px-2 py-1 rounded">{event.type}</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <p className="text-[#FFC900]/70 text-sm">📅 {event.date}</p>
                    <p className="text-[#FFC900]/70 text-sm">📍 {event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#151812] rounded-lg p-4 border border-[#FFC900]/10">
              <p className="text-[#FFC900]/70 text-sm italic">No upcoming training events.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LearningHub;
