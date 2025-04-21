
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Book, Lightbulb, Briefcase } from "lucide-react";
import DashboardRoleCard from "@/components/DashboardRoleCard";

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
    <div className="min-h-screen flex flex-col items-center bg-background px-4">
      <h1 className="text-[2.4rem] sm:text-5xl font-extrabold text-center mt-16 mb-2 leading-tight text-foreground tracking-tight animate-fade-in drop-shadow-lg">
        THE ELECTRICAL<br />INDUSTRY APP
      </h1>
      <p className="text-lg font-medium text-muted-foreground mb-10 animate-fade-in">
        Where apprentices, electricians &amp; employers connect.
      </p>
      <div className="w-full max-w-2xl flex items-center mb-14 px-2">
        <div className="relative w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search size={28} />
          </span>
          <input
            className="w-full pl-14 pr-4 py-4 rounded-2xl bg-secondary text-lg text-foreground placeholder:text-muted-foreground border border-input focus:ring-2 focus:ring-ring outline-none font-semibold shadow transition"
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
            <div className="w-full bg-secondary p-8 rounded-2xl text-muted-foreground text-center text-lg font-medium shadow animate-fade-in">
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
