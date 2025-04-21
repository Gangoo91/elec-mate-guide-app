
import React from "react";
import { Button } from "@/components/ui/button";

const IndustryResources = () => (
  <div className="mt-10 animate-on-load opacity-0" style={{ animationDelay: '900ms' }}>
    <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-[#FFC900] mb-3">Industry Resources</h2>
      <p className="text-[#FFC900]/70 mb-4 text-center">
        Get guidance on best practices, safety, and regulations from official organizations.
      </p>
      <a
        href="https://www.hse.gov.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button
          className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-6 py-3 rounded-lg text-lg font-bold shadow-lg transition"
        >
          Visit the UK Health &amp; Safety Executive (HSE)
        </Button>
      </a>
      <span className="text-xs text-[#FFC900]/60 mt-2">
        hse.gov.uk &ndash; Essential UK safety guidance for electrical professionals
      </span>
    </div>
  </div>
);

export default IndustryResources;
