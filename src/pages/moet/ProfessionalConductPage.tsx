
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const ProfessionalConductPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/behaviours');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Professional Conduct"
          description="Standards and expectations for professional behaviour in the workplace"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Workplace Professionalism">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Punctuality and Attendance</h3>
              <p className="text-[#FFC900]/80">Consistently arriving on time for work, meetings, and appointments is a fundamental expectation in the electrical industry. Employers and clients rely on technicians to adhere to schedules, especially when critical maintenance or installation work is planned.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Notify your supervisor as early as possible if you will be late or absent</li>
                <li>Plan travel time considering potential traffic or transport delays</li>
                <li>Be prepared and ready to start work at the designated time</li>
                <li>Maintain accurate records of your working hours</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Professional Appearance</h3>
              <p className="text-[#FFC900]/80">As a representative of your company and the electrical profession, your appearance makes an impression on clients and colleagues. Clean, appropriate workwear and proper personal grooming demonstrate professionalism and respect.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Wear clean, well-maintained work attire according to company policy</li>
                <li>Ensure proper personal grooming and hygiene</li>
                <li>Display identification badges or credentials when required</li>
                <li>Use appropriate PPE for the task and environment</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Communication Etiquette</h3>
              <p className="text-[#FFC900]/80">Clear, respectful communication is essential when working with colleagues, clients, and stakeholders. Effective communication prevents misunderstandings and ensures that work meets expectations.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Use appropriate language and tone in all communications</li>
                <li>Listen actively when receiving instructions or feedback</li>
                <li>Communicate clearly when explaining technical concepts to non-technical individuals</li>
                <li>Respond to emails, messages, and calls in a timely manner</li>
                <li>Document work and communications accurately</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Workplace Ethics and Integrity">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Honesty and Transparency</h3>
              <p className="text-[#FFC900]/80">Maintaining honesty in all aspects of your work builds trust with employers, colleagues, and clients. This includes being truthful about your qualifications, experience, and the status of work.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Accurately report work completed, hours worked, and materials used</li>
                <li>Acknowledge mistakes promptly and take responsibility</li>
                <li>Provide realistic timelines and cost estimates</li>
                <li>Never falsify documents or certifications</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Confidentiality</h3>
              <p className="text-[#FFC900]/80">Respecting confidentiality is crucial when working in various environments, from private homes to commercial or industrial settings. Electrical technicians often have access to sensitive information or secure areas.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Never share client details or business information without permission</li>
                <li>Protect access credentials, passwords, and security codes</li>
                <li>Handle documentation securely and dispose of it properly when no longer needed</li>
                <li>Be discreet when discussing work matters in public spaces</li>
                <li>Understand and comply with data protection regulations</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Professional Boundaries</h3>
              <p className="text-[#FFC900]/80">Maintaining appropriate professional relationships with colleagues, clients, and suppliers ensures a respectful work environment and prevents conflicts of interest.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Respect personal space and property</li>
                <li>Avoid conflicts of interest when providing services or recommendations</li>
                <li>Maintain professional distance in client relationships</li>
                <li>Follow company policies regarding gifts, hospitality, and relationships</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfessionalConductPage;
