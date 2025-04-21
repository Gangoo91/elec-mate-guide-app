
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Book, Lightbulb, Briefcase } from "lucide-react";
import DashboardRoleCard from "@/components/DashboardRoleCard";

const roles = [
  {
    label: "Apprentices",
    icon: <Book size={56} strokeWidth={2.5} className="text-[#9b87f5]" />,
    path: "/apprentices",
  },
  {
    label: "Electricians",
    icon: <Lightbulb size={56} strokeWidth={2.5} className="text-[#F97316]" />,
    path: "/electricians",
  },
  {
    label: "Employers",
    icon: <Briefcase size={56} strokeWidth={2.5} className="text-[#8B5CF6]" />,
    path: "/employers",
  },
];

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredRoles = roles.filter((role) =>
    role.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#E5DEFF] px-4">
      <h1 className="text-[2.2rem] sm:text-5xl font-extrabold text-center mt-16 mb-2 leading-tight text-[#1A1F2C] tracking-tight animate-fade-in drop-shadow-lg">
        The Electrical<br />Industry App
      </h1>
      <p className="text-lg font-medium text-[#7E69AB] mb-10 animate-fade-in">
        Where apprentices, electricians &amp; employers connect.
      </p>
      <div className="w-full max-w-2xl flex items-center mb-14 px-2">
        <div className="relative w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7E69AB]">
            <Search size={28} />
          </span>
          <input
            className="w-full pl-14 pr-4 py-4 rounded-2xl bg-white text-lg text-[#403E43] placeholder:text-[#aaa] border-2 border-[#E5DEFF] focus:ring-2 focus:ring-[#9b87f5] outline-none font-semibold shadow transition"
            placeholder="Search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col sm:flex-row gap-7 w-full max-w-2xl justify-center">
          {filteredRoles.length === 0 && (
            <div className="w-full bg-[#F1F0FB] p-8 rounded-2xl text-[#7E69AB] text-center text-lg font-medium shadow animate-fade-in">
              No results found.
            </div>
          )}
          {filteredRoles.map((role) => (
            <DashboardRoleCard
              key={role.label}
              label={role.label}
              icon={role.icon}
              onClick={() => navigate(role.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
