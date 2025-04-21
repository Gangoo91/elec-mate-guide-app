
import { Book, Lightbulb, Briefcase, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Colors inspired by screenshot
const bgColor = "#151812";
const cardColor = "#FFC900";
const textColor = "#FFFDE6";

const roles = [
  {
    label: "APPRENTICES",
    icon: <Book size={64} strokeWidth={2.2} className="mx-auto mb-5" />,
    path: "/apprentices",
  },
  {
    label: "ELECTRICIANS",
    icon: <Lightbulb size={64} strokeWidth={2.2} className="mx-auto mb-5" />,
    path: "/electricians",
  },
  {
    label: "EMPLOYERS",
    icon: <Briefcase size={64} strokeWidth={2.2} className="mx-auto mb-5" />,
    path: "/employers",
  },
];

const Index = () => {
  const [query, setQuery] = useState("");
  const filteredRoles = roles.filter((role) =>
    role.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-4"
      style={{ background: bgColor }}
    >
      <h1
        className="text-[2.5rem] sm:text-5xl font-extrabold text-center mb-8 mt-14 leading-tight drop-shadow"
        style={{ color: textColor, letterSpacing: 0 }}
      >
        THE ELECTRICAL<br />INDUSTRY APP
      </h1>
      <div className="w-full max-w-xl mb-14 flex items-center px-2">
        <div className="relative w-full">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={26} />
          </span>
          <input
            className="w-full pl-14 pr-5 py-4 rounded-2xl bg-[#23261e]/80 text-lg text-gray-300 placeholder:text-gray-400 border-none outline-none focus:ring-2 focus:ring-[#FFC900] transition"
            placeholder="Search"
            type="text"
            style={{ fontWeight: 500 }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-7 w-full max-w-xl items-center">
        <div className="flex flex-col sm:flex-row gap-7 w-full">
          {filteredRoles.slice(0, 2).map((role) => (
            <Link
              to={role.path}
              key={role.label}
              className="flex-1 rounded-2xl shadow-xl"
              style={{ minWidth: 0 }}
              tabIndex={-1}
            >
              <div
                className="flex flex-col items-center justify-center rounded-2xl transition-transform duration-200 hover:scale-105"
                style={{
                  background: cardColor,
                  padding: "2.8rem 0.5rem",
                  minHeight: 200,
                }}
              >
                {role.icon}
                <span
                  className="text-xl sm:text-2xl font-bold tracking-wide"
                  style={{ color: "#fff", letterSpacing: "0.06em" }}
                >
                  {role.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
        {filteredRoles[2] && (
          <Link
            to={filteredRoles[2].path}
            className="w-full rounded-2xl shadow-xl"
            tabIndex={-1}
          >
            <div
              className="flex flex-col items-center justify-center rounded-2xl transition-transform duration-200 hover:scale-105"
              style={{
                background: cardColor,
                padding: "2.8rem 0.5rem",
                minHeight: 200,
              }}
            >
              {filteredRoles[2].icon}
              <span
                className="text-xl sm:text-2xl font-bold tracking-wide"
                style={{ color: "#fff", letterSpacing: "0.06em" }}
              >
                {filteredRoles[2].label}
              </span>
            </div>
          </Link>
        )}
        {filteredRoles.length === 0 && (
          <div className="w-full rounded-2xl shadow-xl bg-[#23261e]/60 p-8 text-gray-400 text-center text-lg">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
