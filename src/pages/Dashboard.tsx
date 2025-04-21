
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Book, Lightbulb, Briefcase, Search, Activity, Users, Award } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

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

// Featured content to highlight important industry updates
const featuredContent = [
  {
    title: "Latest Code Updates",
    description: "Stay current with the 2023 National Electric Code changes",
    icon: <Award className="h-6 w-6 text-[#FFC900]" />,
    metric: "Updated 2w ago"
  },
  {
    title: "Industry Growth",
    description: "Electrical jobs projected to grow 9% over next 5 years",
    icon: <Activity className="h-6 w-6 text-[#FFC900]" />,
    metric: "+9% growth"
  },
  {
    title: "Community Size",
    description: "Join thousands of electrical professionals nationwide",
    icon: <Users className="h-6 w-6 text-[#FFC900]" />,
    metric: "15k+ members"
  }
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

        {/* Featured Content & Metrics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFC900] mb-6 text-center">Industry Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredContent.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#22251e] rounded-xl p-6 border border-[#FFC900]/20 hover:border-[#FFC900]/40 transition-all duration-300 animate-on-load opacity-0"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="font-bold text-[#FFC900]">{item.title}</h3>
                  </div>
                  <span className="text-sm font-medium text-[#FFC900]/60 bg-[#FFC900]/10 px-2 py-1 rounded-full">
                    {item.metric}
                  </span>
                </div>
                <p className="text-[#FFC900]/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* App Description */}
        <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20 animate-on-load opacity-0" style={{ animationDelay: '600ms' }}>
          <h2 className="text-2xl font-bold text-[#FFC900] mb-2">About This App</h2>
          <p className="text-[#FFC900]/80 mb-4">
            Designed to empower every stage of your electrical industry journey. Select your portal to get started!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-[#151812] rounded-lg p-4 border border-[#FFC900]/10">
              <h3 className="text-[#FFC900] font-semibold mb-2 text-lg">For Professionals</h3>
              <p className="text-[#FFC900]/70 text-sm">Access resources, certifications, and job opportunities tailored to your career stage.</p>
            </div>
            <div className="bg-[#151812] rounded-lg p-4 border border-[#FFC900]/10">
              <h3 className="text-[#FFC900] font-semibold mb-2 text-lg">For Organizations</h3>
              <p className="text-[#FFC900]/70 text-sm">Find qualified talent, manage workforce, and access industry-specific tools.</p>
            </div>
          </div>
        </div>
        {/* Industry Resources (External Links) */}
        <div className="mt-10 animate-on-load opacity-0" style={{ animationDelay: '900ms' }}>
          <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#FFC900] mb-3">Industry Resources</h2>
            <p className="text-[#FFC900]/70 mb-4 text-center">
              Get guidance on best practices, safety, and regulations from official organizations.
            </p>
            <a
              href="https://www.hse.gov.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-6 py-3 rounded-lg text-lg font-bold shadow-lg transition"
              >
                Visit the UK Health &amp; Safety Executive (HSE)
              </Button>
            </a>
            <span className="text-xs text-[#FFC900]/60 mt-2">
              hse.gov.uk &ndash; Essential UK safety guidance for electrical professionals
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
