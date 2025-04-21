
import React from "react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ApprenticeHub = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 bg-[#F1F0FB] animate-fade-in">
      <div className="w-full max-w-2xl mt-14 mb-10 flex flex-col items-center">
        <BookOpen size={72} className="mb-6 text-vividPurple" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 leading-tight text-[#1A1F2C] drop-shadow">
          Apprentice Hub
        </h1>
        <p className="text-lg text-center text-gray-500 max-w-xl mb-10">
          Welcome to your dashboard. Here you'll find everything you need as an apprentice. 
          We’ll add your learning hub, tasks, tips, and more soon.
        </p>
        {/* Example navigation or future dashboard cards */}
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="bg-white rounded-xl p-6 shadow transition hover:scale-105 w-full max-w-md">
            <span className="block text-2xl font-bold text-[#6E59A5] mb-2">Learning Hub</span>
            <p className="text-gray-700 mb-3">Access your courses and materials here.</p>
            <Link 
              to="#" 
              className="inline-block px-5 py-2 rounded-lg bg-[#E5DEFF] text-[#6E59A5] font-semibold text-base shadow hover:bg-[#d6bcfa]"
              tabIndex={-1}
            >
              Coming soon
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprenticeHub;
