
import React, { useState, useEffect } from "react";
import { Book, Lightbulb, Briefcase } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import IndustryResources from "@/components/IndustryResources";
import DashboardHeroSection from "@/components/dashboard/DashboardHeroSection";
import DashboardSearchBar from "@/components/dashboard/DashboardSearchBar";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";

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
        <DashboardHeroSection />
        <DashboardSearchBar
          query={query}
          setQuery={setQuery}
          isFocused={isSearchFocused}
          setIsFocused={setIsSearchFocused}
        />
        <DashboardRoleGrid roles={roles} filteredRoles={filteredRoles} />
        <IndustryResources />
        <div className="bg-[#151812] rounded-xl p-8 border border-[#FFC900]/30 mt-10 flex flex-col items-center text-center animate-on-load opacity-0" style={{ animationDelay: "700ms" }}>
          <h2 className="text-xl font-bold text-[#FFC900] mb-2">Get Involved</h2>
          <p className="text-[#FFC900]/80 mb-5 max-w-2xl">
            We’re building this community together! Have a question, want to share an idea, or contribute helpful resources? 
            <br className="hidden sm:block" />
            Start a discussion, suggest features, or help future-proof the Electrical Industry Hub for everyone.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <button
              type="button"
              className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 border rounded-md px-4 py-2 font-medium"
              onClick={() => window.open('mailto:hello@elec-mate.com?subject=Community%20Suggestion', '_blank')}
            >
              Suggest an Idea
            </button>
            <button
              type="button"
              className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 border rounded-md px-4 py-2 font-medium"
              onClick={() => window.open('mailto:hello@elec-mate.com?subject=Submit%20a%20Resource', '_blank')}
            >
              Share a Resource
            </button>
            <button
              type="button"
              className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 border rounded-md px-4 py-2 font-medium"
              onClick={() => window.open('mailto:hello@elec-mate.com?subject=General%20Enquiry', '_blank')}
            >
              Ask a Question
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
