
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionCard from "@/components/units/SectionCard";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen } from "lucide-react";
import { sections301 } from "@/data/units/sections/unit301Sections";

const Level3Unit301Page = () => {
  const navigate = useNavigate();
  
  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  // Take quiz function
  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/301/assessment');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 301: Environmental Technology Systems"
          description="Learn about renewable energy technologies, sustainable electrical installations, and environmental considerations."
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">1. Introduction to Environmental Technology</h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Section 1.1 */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">1.1</span>
                      Renewable Energy Systems
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Understanding various renewable energy technologies and their applications in electrical installations
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/1.1')}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>

              {/* Section 1.2 */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">1.2</span>
                      Energy Efficiency Measures
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Understanding and implementing energy efficiency measures in electrical installations
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/1.2')}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>

              {/* Section 1.3 */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">1.3</span>
                      Sustainability in Electrical Installations
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Implementing sustainable practices in the design and installation of electrical systems
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/1.3')}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">2. Solar Photovoltaic Installation</h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Section 2.1 */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">2.1</span>
                      System Components Overview
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Understanding the key components of solar photovoltaic systems
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/2.1')}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>
              
              {/* Sections 2.2 & 2.3 would be similar, but they don't have content yet so I'm showing placeholders */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">2.2</span>
                      Installation Requirements
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Guidelines and requirements for installing solar PV systems
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/2.2')}
                    disabled={true}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>
              
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">2.3</span>
                      Maintenance and Troubleshooting
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Common issues and maintenance procedures for solar PV systems
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/2.3')}
                    disabled={true}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Similar sections for Heat Pump Technologies (3), Wind Energy Systems (4), and Energy Storage Systems (5) would follow */}
          
          {/* Unit Quiz Button */}
          <div className="mt-12">
            <Button 
              className="w-full py-6 bg-[#FFC900] hover:bg-[#e5b700] text-[#22251e] font-semibold text-lg"
              onClick={handleTakeQuiz}
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Take Unit 301 Assessment
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit301Page;
