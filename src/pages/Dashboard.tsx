
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book, Lightbulb, Briefcase, Search } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
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

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredRoles = roles.filter((role) =>
    role.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="container px-4 py-10 md:py-16">
        <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
          <Logo size={80} />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] mb-4 mt-6">
            Electrical Industry Hub
          </h1>
          <p className="text-lg text-[#FFC900]/80 mb-4 max-w-xl">
            Your all-in-one platform for apprentices, electricians, and employers to connect, learn, and thrive.
          </p>
        </div>
        <div className="max-w-lg mx-auto mb-10">
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFC900a0]">
              <Search size={25} />
            </span>
            <input
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#22251e] text-base md:text-lg text-[#FFC900] placeholder:text-[#FFC90099] border border-[#FFC90044] focus:ring-2 focus:ring-[#FFC900] outline-none font-semibold shadow transition"
              placeholder="Search portals…"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {filteredRoles.length === 0 && (
            <div className="col-span-full bg-[#23230a] p-7 rounded-xl text-[#FFC900c0] text-center text-lg font-bold shadow-md border-2 border-[#FFC90022] animate-fade-in">
              No results found.
            </div>
          )}
          {filteredRoles.map((role) => (
            <Card
              key={role.label}
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC900]/10 cursor-pointer h-full flex flex-col"
              onClick={() => navigate(role.path)}
              role="button"
              tabIndex={0}
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
        <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20">
          <h2 className="text-2xl font-bold text-[#FFC900] mb-2">About This App</h2>
          <p className="text-[#FFC900]/80">
            Designed to empower every stage of your electrical industry journey. Select your portal to get started!
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;

