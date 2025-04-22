
import React from 'react';
import { Search, Lightbulb, CalendarCheck, BookOpen, TestTube, BookCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const LearningHub = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);
  const { toast } = useToast();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsSearching(e.target.value.length > 0);
  };

  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim() === '') {
      return;
    }
    
    // In a real app, we would search the database here
    toast({
      title: "Search functionality",
      description: `Searching for "${searchQuery}" - This feature will be implemented soon`,
    });
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

  const learningCards = [
    {
      title: "AI Learning Tools",
      description: "Access our AI-powered assistants for technical diagnostics and regulatory guidance.",
      icon: <Lightbulb className="h-6 w-6" />,
      link: "/apprentices/ai-tools"
    },
    {
      title: "Study Materials",
      description: "Access comprehensive study guides, video tutorials, and reference materials.",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/apprentices/study-materials"
    },
    {
      title: "Practice Exams",
      description: "Test your knowledge with mock exams and quizzes covering various electrical topics.",
      icon: <TestTube className="h-6 w-6" />,
      link: "/apprentices/practice-exams"
    },
    {
      title: "Certification Prep",
      description: "Prepare for your electrical certification with structured learning paths and practice tests.",
      icon: <BookCheck className="h-6 w-6" />,
      link: "/apprentices/certifications"
    }
  ];

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmitSearch} className="relative mb-8">
        <Input
          type="search"
          placeholder="Search learning resources, diagnostics, events..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50"
          aria-label="Search learning resources"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FFC900]/70"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {learningCards.map((card, index) => (
          <Link to={card.link} key={index}>
            <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-[#FFC900] flex items-center gap-2">
                  {React.cloneElement(card.icon, { className: "h-6 w-6 text-[#FFC900]" })}
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#FFC900]/70">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
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
