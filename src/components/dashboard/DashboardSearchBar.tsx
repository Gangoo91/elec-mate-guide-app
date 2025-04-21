
import React from "react";
import { Search } from "lucide-react";

interface DashboardSearchBarProps {
  query: string;
  setQuery: (val: string) => void;
  isFocused: boolean;
  setIsFocused: (val: boolean) => void;
  placeholder?: string;
  id?: string;
}

const DashboardSearchBar = ({
  query,
  setQuery,
  isFocused,
  setIsFocused,
  placeholder = "Search portals…",
  id = "portal-search"
}: DashboardSearchBarProps) => (
  <div className="max-w-lg mx-auto mb-10">
    <div className={`relative w-full transition-all duration-300 ${isFocused ? "scale-105" : ""}`}>
      <label htmlFor={id} className="sr-only">Search</label>
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFC900a0]">
        <Search size={25} aria-hidden="true" />
      </span>
      <input
        id={id}
        className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#22251e] text-base md:text-lg text-[#FFC900] placeholder:text-[#FFC90099] border border-[#FFC90044] focus:ring-2 focus:ring-[#FFC900] outline-none font-semibold shadow transition"
        placeholder={placeholder}
        type="search"
        role="searchbox"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  </div>
);

export default DashboardSearchBar;
