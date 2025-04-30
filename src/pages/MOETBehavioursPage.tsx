
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const MOETBehavioursPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet');
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="MOET Expected Behaviours"
          description="Professional conduct and workplace expectations for MOET technicians"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <div 
            onClick={() => handleNavigate('/apprentices/study-materials/city-guilds/moet/behaviours/professional-conduct')} 
            className="cursor-pointer hover:opacity-90 transition-opacity border border-[#FFC900]/20 hover:border-[#FFC900]/50 rounded-md p-6"
          >
            <LessonContent title="Professional Conduct">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#FFC900]">Workplace Professionalism</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                  <li>Punctuality and attendance standards</li>
                  <li>Professional appearance and presentation</li>
                  <li>Communication etiquette</li>
                  <li>Workplace ethics and integrity</li>
                  <li>Confidentiality and data protection</li>
                </ul>
                <div className="flex justify-end mt-4">
                  <Button variant="ghost" className="text-[#FFC900] hover:text-[#FFC900]/80">
                    Learn more <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </LessonContent>
          </div>

          <div 
            onClick={() => handleNavigate('/apprentices/study-materials/city-guilds/moet/behaviours/safety-awareness')} 
            className="cursor-pointer hover:opacity-90 transition-opacity border border-[#FFC900]/20 hover:border-[#FFC900]/50 rounded-md p-6"
          >
            <LessonContent title="Safety Awareness">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#FFC900]">Safety Culture</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                  <li>Risk assessment and hazard identification</li>
                  <li>PPE compliance and proper usage</li>
                  <li>Emergency response procedures</li>
                  <li>Reporting of safety concerns</li>
                  <li>Safe working practices promotion</li>
                </ul>
                <div className="flex justify-end mt-4">
                  <Button variant="ghost" className="text-[#FFC900] hover:text-[#FFC900]/80">
                    Learn more <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </LessonContent>
          </div>

          <div 
            onClick={() => handleNavigate('/apprentices/study-materials/city-guilds/moet/behaviours/teamwork')} 
            className="cursor-pointer hover:opacity-90 transition-opacity border border-[#FFC900]/20 hover:border-[#FFC900]/50 rounded-md p-6"
          >
            <LessonContent title="Teamwork">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#FFC900]">Collaboration Skills</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                  <li>Effective team communication</li>
                  <li>Conflict resolution strategies</li>
                  <li>Supporting team members</li>
                  <li>Knowledge sharing practices</li>
                  <li>Cross-functional collaboration</li>
                </ul>
                <div className="flex justify-end mt-4">
                  <Button variant="ghost" className="text-[#FFC900] hover:text-[#FFC900]/80">
                    Learn more <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </LessonContent>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MOETBehavioursPage;
