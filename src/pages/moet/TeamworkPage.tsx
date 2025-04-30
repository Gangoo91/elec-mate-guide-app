
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const TeamworkPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/behaviours');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Teamwork"
          description="Effective collaboration and communication in technical teams"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Collaboration Skills">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Effective Team Communication</h3>
              <p className="text-[#FFC900]/80">Clear communication is the foundation of successful teamwork in technical environments. It ensures that everyone understands their roles, responsibilities, and the overall project objectives.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Use clear, specific language when giving or receiving instructions</li>
                <li>Confirm understanding through active listening and feedback</li>
                <li>Share relevant information proactively with team members</li>
                <li>Document critical communications for future reference</li>
                <li>Adapt communication style based on the recipient's technical knowledge</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Conflict Resolution</h3>
              <p className="text-[#FFC900]/80">Disagreements and conflicts are normal in any workplace. The ability to address and resolve conflicts constructively is essential for maintaining effective teamwork and project progress.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Address issues directly but respectfully</li>
                <li>Focus on the problem, not personal criticisms</li>
                <li>Listen to all perspectives before forming conclusions</li>
                <li>Seek compromise and win-win solutions</li>
                <li>Know when to involve a supervisor or mediator</li>
                <li>Document agreements and follow-up actions</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Supporting Team Members</h3>
              <p className="text-[#FFC900]/80">Mutual support among team members creates a positive work environment and improves overall team performance. Technical teams rely on varied skills and expertise working together seamlessly.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Offer assistance when colleagues are struggling with tasks</li>
                <li>Share knowledge and techniques that could benefit others</li>
                <li>Recognize and acknowledge team members' contributions</li>
                <li>Provide constructive feedback in a supportive manner</li>
                <li>Be flexible and willing to adjust your tasks to support team goals</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Cross-functional Collaboration">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Knowledge Sharing</h3>
              <p className="text-[#FFC900]/80">Sharing technical knowledge and experience benefits the entire team and organization. It prevents knowledge silos and enables continuous improvement in processes and outcomes.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Document solutions to complex problems for future reference</li>
                <li>Participate in mentoring and training activities</li>
                <li>Create and update work instructions and procedures</li>
                <li>Share relevant articles, updates, or learning resources</li>
                <li>Contribute to team meetings and technical discussions</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Working with Other Disciplines</h3>
              <p className="text-[#FFC900]/80">Modern electrical work often requires collaboration with professionals from other technical disciplines. Understanding how to work effectively across specializations is increasingly important.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Learn the basic terminology of related disciplines</li>
                <li>Understand how your work affects and interfaces with other systems</li>
                <li>Coordinate schedules and sequence of operations</li>
                <li>Respect the expertise and contribution of other specialties</li>
                <li>Develop integrated solutions that consider all technical requirements</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Remote and Distributed Teams</h3>
              <p className="text-[#FFC900]/80">With increasing remote work and geographically distributed teams, developing skills for virtual collaboration is essential for today's electrical professionals.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Use collaborative tools effectively (project management software, video conferencing)</li>
                <li>Maintain regular communication with remote team members</li>
                <li>Document decisions and actions clearly for asynchronous work</li>
                <li>Be mindful of time zones when scheduling communications</li>
                <li>Develop clear protocols for emergency or urgent situations</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeamworkPage;
