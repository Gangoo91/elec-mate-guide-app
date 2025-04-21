
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Book, Lightbulb, Briefcase, Search, Users } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import IndustryResources from "@/components/IndustryResources";

const roles = [
  {
    label: "Apprentices",
    icon: <Book className="h-7 w-7 text-[#FFC900]" />,
    path: "/apprentices",
    description: "Learning, assessment & mentorship for aspiring electricians.",
  },
  {
    label: "Electricians",
    icon: <Lightbulb className="h-7 w-7 text-[#FFC900]" />,
    path: "/electricians",
    description: "Professional resources for licensed electricians.",
  },
  {
    label: "Employers",
    icon: <Briefcase className="h-7 w-7 text-[#FFC900]" />,
    path: "/employers",
    description: "Talent recruitment and workforce management tools.",
  },
];

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

  const filteredRoles = roles.filter((role) =>
    role.label.toLowerCase().includes(query.toLowerCase())
  );

  // Animation effect when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
        }, i * 100);
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <div className="container px-4 py-10 md:py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
          <Logo size={80} />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] mb-4 mt-6">
            Electrical Industry Hub
          </h1>
          <p className="text-lg text-[#FFC900]/80 mb-6 max-w-xl">
            Your all-in-one platform for apprentices, electricians, and employers to connect, learn, and thrive.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button 
              onClick={() => navigate("/signup")} 
              className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
            >
              Get Started
            </Button>
            <Button 
              onClick={() => navigate("/login")} 
              variant="outline" 
              className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
            >
              Sign In
            </Button>
          </div>
          {/* Community Size metric */}
          <div
            className="flex items-center justify-center gap-2 mt-5 bg-[#22251e] border border-[#FFC900]/30 rounded-full px-5 py-2 shadow text-[#FFC900] text-sm font-semibold"
            style={{ maxWidth: 280 }}
          >
            <Users className="h-5 w-5" />
            <span>Community Size:</span>
            <span className="ml-2 text-[#FFC900] font-bold">15k+ members</span>
          </div>
        </div>

        {/* Enhanced Search */}
        <div className="max-w-lg mx-auto mb-10">
          <div className={`relative w-full transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFC900a0]">
              <Search size={25} />
            </span>
            <input
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#22251e] text-base md:text-lg text-[#FFC900] placeholder:text-[#FFC90099] border border-[#FFC90044] focus:ring-2 focus:ring-[#FFC900] outline-none font-semibold shadow transition"
              placeholder="Search portals…"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              aria-label="Search portals"
            />
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {filteredRoles.length === 0 && (
            <div className="col-span-full bg-[#23230a] p-7 rounded-xl text-[#FFC900c0] text-center text-lg font-bold shadow-md border-2 border-[#FFC90022] animate-fade-in">
              No results found.
            </div>
          )}
          {filteredRoles.map((role, index) => (
            <Card
              key={role.label}
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC900]/10 cursor-pointer h-full flex flex-col animate-on-load opacity-0"
              onClick={() => navigate(role.path)}
              role="button"
              tabIndex={0}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {role.icon}
                  <CardTitle className="text-[#FFC900]">{role.label}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grow flex flex-col items-start">
                <CardDescription className="text-[#FFC900]/70">{role.description}</CardDescription>
                <span className="mt-5 ml-auto text-[#FFC900] font-medium hover:underline">
                  Go to {role.label} →
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Resources (External Links) */}
        <IndustryResources />

        {/* Get Involved Section */}
        <div className="bg-[#151812] rounded-xl p-8 border border-[#FFC900]/30 mt-10 flex flex-col items-center text-center animate-on-load opacity-0" style={{ animationDelay: "700ms" }}>
          <h2 className="text-xl font-bold text-[#FFC900] mb-2">Get Involved</h2>
          <p className="text-[#FFC900]/80 mb-5 max-w-2xl">
            We’re building this community together! Have a question, want to share an idea, or contribute helpful resources? 
            <br className="hidden sm:block" />
            Start a discussion, suggest features, or help future-proof the Electrical Industry Hub for everyone.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Button
              variant="outline"
              className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
              onClick={() => {
                window.open('mailto:hello@elec-mate.com?subject=Community%20Suggestion', '_blank');
              }}
            >
              Suggest an Idea
            </Button>
            <Button
              variant="outline"
              className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
              onClick={() => {
                window.open('mailto:hello@elec-mate.com?subject=Submit%20a%20Resource', '_blank');
              }}
            >
              Share a Resource
            </Button>
            <Button
              variant="outline"
              className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
              onClick={() => {
                window.open('mailto:hello@elec-mate.com?subject=General%20Enquiry', '_blank');
              }}
            >
              Ask a Question
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;

