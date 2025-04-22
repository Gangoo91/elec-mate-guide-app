
import React, { useState } from "react";
import { Book, Lightbulb, Briefcase, Search } from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  {
    label: "APPRENTICES",
    icon: <Book size={42} strokeWidth={2.2} className="mx-auto mb-2" />,
    path: "/apprentices",
    description: "Access apprentice resources and training materials",
  },
  {
    label: "ELECTRICIANS",
    icon: <Lightbulb size={42} strokeWidth={2.2} className="mx-auto mb-2" />,
    path: "/electricians",
    description: "Professional tools and job opportunities",
  },
  {
    label: "EMPLOYERS",
    icon: <Briefcase size={42} strokeWidth={2.2} className="mx-auto mb-2" />,
    path: "/employers",
    description: "Find qualified electricians and apprentices",
  },
];

const Index = () => {
  const [query, setQuery] = useState("");
  const filteredRoles = roles.filter((role) =>
    role.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-16" style={{ background: "#151812" }}>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-3 leading-tight drop-shadow" style={{ color: "#FFFDE6", letterSpacing: 0 }}>
        THE ELECTRICAL<br />INDUSTRY APP
      </h1>
      
      <div className="w-full max-w-xl mb-3 flex items-center px-2">
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#23261e]/80 text-base text-gray-300 placeholder:text-gray-400 border-none outline-none focus:ring-2 focus:ring-[#FFC900] transition"
            placeholder="Search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full max-w-xl">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          {filteredRoles.slice(0, 2).map((role) => (
            <Link
              to={role.path}
              key={role.label}
              className="flex-1 rounded-xl shadow-lg"
              style={{ minWidth: 0 }}
              tabIndex={-1}
            >
              <div
                className="flex flex-col items-center justify-center rounded-xl transition-transform duration-200 hover:scale-105"
                style={{
                  background: "#FFC900",
                  padding: "1rem 0.5rem",
                  minHeight: 110,
                }}
              >
                {role.icon}
                <span className="text-base sm:text-lg font-bold tracking-wide" style={{ color: "#fff", letterSpacing: "0.06em" }}>
                  {role.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
        {filteredRoles[2] && (
          <Link
            to={filteredRoles[2].path}
            className="w-full rounded-xl shadow-lg"
            tabIndex={-1}
          >
            <div
              className="flex flex-col items-center justify-center rounded-xl transition-transform duration-200 hover:scale-105"
              style={{
                background: "#FFC900",
                padding: "1rem 0.5rem",
                minHeight: 110,
              }}
            >
              {filteredRoles[2].icon}
              <span className="text-base sm:text-lg font-bold tracking-wide" style={{ color: "#fff", letterSpacing: "0.06em" }}>
                {filteredRoles[2].label}
              </span>
            </div>
          </Link>
        )}
        {filteredRoles.length === 0 && (
          <div className="w-full rounded-xl shadow-lg bg-[#23261e]/60 p-4 text-gray-400 text-center">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
