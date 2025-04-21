
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book, Lightbulb, Briefcase, Search } from "lucide-react";

const bgColor = "#1A1F2C";
const cardColor = "#FFC900";
const textColor = "#FFFDE6";

const roles = [
  {
    label: "APPRENTICES",
    icon: <Book size={84} strokeWidth={2.5} className="mx-auto mb-6" />,
    path: "/apprentices",
  },
  {
    label: "ELECTRICIANS",
    icon: <Lightbulb size={84} strokeWidth={2.5} className="mx-auto mb-6" />,
    path: "/electricians",
  },
  {
    label: "EMPLOYERS",
    icon: <Briefcase size={84} strokeWidth={2.5} className="mx-auto mb-6" />,
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
    <div
      className="min-h-screen flex flex-col items-center justify-start px-4"
      style={{ background: bgColor }}
    >
      <h1
        className="text-[2.5rem] sm:text-5xl font-extrabold text-center mb-10 mt-16 leading-tight drop-shadow"
        style={{ color: textColor, letterSpacing: 0 }}
      >
        THE ELECTRICAL<br />INDUSTRY APP
      </h1>
      <div className="w-full max-w-xl mb-16 flex items-center px-2">
        <div className="relative w-full">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={28} />
          </span>
          <input
            className="w-full pl-16 pr-5 py-5 rounded-2xl bg-[#23261e]/90 text-xl text-gray-200 placeholder:text-gray-400 border-none outline-none focus:ring-2 focus:ring-[#FFC900] transition"
            placeholder="Search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ fontWeight: 600 }}
            autoFocus={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full max-w-2xl items-center">
        <div className="flex flex-col sm:flex-row gap-10 w-full">
          {filteredRoles.slice(0, 2).map((role) => (
            <button
              key={role.label}
              className="flex-1 rounded-2xl shadow-xl transition-transform duration-200 hover:scale-105 focus:scale-105 outline-none"
              style={{
                background: cardColor,
                minHeight: 210,
                minWidth: 0,
              }}
              onClick={() => navigate(role.path)}
            >
              <div className="flex flex-col items-center justify-center h-full px-2 py-8">
                {role.icon}
                <span
                  className="text-2xl font-bold tracking-wide"
                  style={{ color: "#fff", letterSpacing: "0.06em" }}
                >
                  {role.label}
                </span>
              </div>
            </button>
          ))}
        </div>
        {filteredRoles[2] && (
          <button
            className="w-full rounded-2xl shadow-xl transition-transform duration-200 hover:scale-105 focus:scale-105 outline-none"
            style={{
              background: cardColor,
              minHeight: 210,
            }}
            onClick={() => navigate(filteredRoles[2].path)}
          >
            <div className="flex flex-col items-center justify-center h-full px-2 py-8">
              {filteredRoles[2].icon}
              <span
                className="text-2xl font-bold tracking-wide"
                style={{ color: "#fff", letterSpacing: "0.06em" }}
              >
                {filteredRoles[2].label}
              </span>
            </div>
          </button>
        )}
        {filteredRoles.length === 0 && (
          <div className="w-full rounded-2xl shadow-xl bg-[#23261e]/70 p-8 text-gray-300 text-center text-lg">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
