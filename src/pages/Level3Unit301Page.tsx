
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen } from "lucide-react";

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
          {/* Section 1: Introduction to Environmental Technology */}
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
          
          {/* Section 2: Solar Photovoltaic Installation */}
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
              
              {/* Section 2.2 */}
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
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>
              
              {/* Section 2.3 */}
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
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section 3: Heat Pump Technologies */}
          <div>
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">3. Heat Pump Technologies</h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Section 3.1 */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">3.1</span>
                      Air Source Heat Pumps (ASHP)
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Understanding the principles, components, and applications of air source heat pump systems
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/3.1')}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>

              {/* Section 3.2 */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">3.2</span>
                      Ground Source Heat Pumps (GSHP)
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Understanding the principles, components, and applications of ground source heat pump systems
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/3.2')}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>

              {/* Section 3.3 */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">3.3</span>
                      Electrical Requirements for Heat Pumps
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Understanding the electrical installation and integration requirements for heat pump systems
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/3.3')}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section 4: Wind Energy Systems */}
          <div>
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">4. Wind Energy Systems</h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Section 4.1 */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">4.1</span>
                      Small-Scale Wind Turbine Technologies
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Understanding the principles, components, and applications of small-scale wind turbine systems
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/4.1')}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>

              {/* Section 4.2 */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">4.2</span>
                      Electrical Integration of Wind Systems
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Understanding the electrical requirements and grid integration of small wind turbine systems
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/4.2')}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section 5: Energy Storage Systems */}
          <div>
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">5. Energy Storage Systems</h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Section 5.1 */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">5.1</span>
                      Battery Storage Technologies
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Understanding different battery technologies and their applications in electrical energy storage
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/5.1')}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>

              {/* Section 5.2 */}
              <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[#FFC900]">
                      <span className="mr-2">5.2</span>
                      Integration with Renewable Sources
                    </h3>
                    <p className="text-[#FFC900]/70 mt-2">
                      Understanding how energy storage systems integrate with renewable energy sources
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/level-3/301/5.2')}
                  >
                    <BookOpen className="h-4 w-4" />
                    Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
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

