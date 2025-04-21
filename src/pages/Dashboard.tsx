
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Book, Lightbulb, Briefcase } from "lucide-react";
import DashboardRoleCard from "@/components/DashboardRoleCard";
import Logo from "@/components/Logo";

const roles = [
  {
    label: "Apprentices",
    icon: <Book size={56} strokeWidth={2.5} className="stroke-[3.5] text-card-foreground" />,
    path: "/apprentices",
  },
  {
    label: "Electricians",
    icon: <Lightbulb size={56} strokeWidth={2.5} className="stroke-[3.5] text-card-foreground" />,
    path: "/electricians",
  },
  {
    label: "Employers",
    icon: <Briefcase size={56} strokeWidth={2.5} className="stroke-[3.5] text-card-foreground" />,
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
    <div className="min-h-screen flex flex-col items-center bg-[#151812] px-2">
      <Logo size={80} />
      <h1 className="text-[2.4rem] sm:text-5xl font-extrabold text-center mt-8 mb-1 leading-tight text-[#FFC900] tracking-tight drop-shadow-xl animate-fade-in select-none">
        THE ELECTRICAL<br />INDUSTRY APP
      </h1>
      <p className="text-lg font-semibold text-[#FFC900e0] mb-10 animate-fade-in">
        Where apprentices, electricians &amp; employers connect.
      </p>
      <div className="w-full max-w-2xl flex items-center mb-12 px-2">
        <div className="relative w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFC900a0]">
            <Search size={28} />
          </span>
          <input
            className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#22251e] text-lg text-[#FFC900] placeholder:text-[#FFC90099] border border-[#FFC90044] focus:ring-2 focus:ring-[#FFC900] outline-none font-semibold shadow transition"
            placeholder="Search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl justify-center">
          {filteredRoles.length === 0 && (
            <div className="w-full bg-[#23230a] p-8 rounded-2xl text-[#FFC900c0] text-center text-lg font-bold shadow-xl animate-fade-in border-2 border-[#FFC90022]">
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

