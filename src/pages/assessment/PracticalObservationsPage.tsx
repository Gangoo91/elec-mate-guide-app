
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PracticalObservationsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/assessment');
  };
  
  const navigateToPage = (path: string) => {
    navigate(path);
  };

  const practicalQuestions = [
    {
      question: "What is the primary purpose of the practical observation assessment?",
      options: [
        "To test theoretical knowledge only",
        "To evaluate practical competency in a real-work environment",
        "To assess communication skills only",
        "To verify employment history"
      ],
      correctAnswer: "To evaluate practical competency in a real-work environment",
      explanation: "The practical observation assessment aims to evaluate candidates' ability to apply their skills and knowledge in an authentic work setting."
    },
    {
      question: "How long does the standard practical observation typically last?",
      options: [
        "4 hours",
        "6 hours",
        "8 hours",
        "12 hours"
      ],
      correctAnswer: "8 hours",
      explanation: "The standard observation period is 8 hours, providing sufficient time to demonstrate the required range of skills and competencies."
    },
    {
      question: "Which of the following is NOT typically assessed during the practical observation?",
      options: [
        "Safe working practices",
        "Tool selection and use",
        "Knowledge of electrical theory",
        "Documentation completion"
      ],
      correctAnswer: "Knowledge of electrical theory",
      explanation: "While theoretical knowledge underpins practice, the practical observation specifically focuses on applied skills rather than theoretical knowledge which is assessed in other components."
    },
    {
      question: "What should you do if you encounter an unfamiliar situation during the observation?",
      options: [
        "Skip the task and move to something else",
        "Ask the assessor for the answer",
        "Use reference materials and communicate your approach clearly",
        "Guess the solution without telling anyone"
      ],
      correctAnswer: "Use reference materials and communicate your approach clearly",
      explanation: "Using appropriate reference materials when needed and clearly explaining your reasoning demonstrates good professional practice."
    },
    {
      question: "Why is documenting your work important during practical observation?",
      options: [
        "It's not important for the observation",
        "To prove you were present",
        "It demonstrates professional accountability and creates records of work completed",
        "Only to meet paperwork requirements"
      ],
      correctAnswer: "It demonstrates professional accountability and creates records of work completed",
      explanation: "Documentation demonstrates professional practice and provides evidence of work performed, decisions made, and outcomes achieved."
    },
    {
      question: "What should you prioritize when demonstrating maintenance procedures?",
      options: [
        "Speed of completion",
        "Using advanced techniques to impress assessors",
        "Accuracy, safety, and following correct procedures",
        "Using as many different tools as possible"
      ],
      correctAnswer: "Accuracy, safety, and following correct procedures",
      explanation: "Quality and safety are always more important than speed. Following correct procedures demonstrates competence."
    },
    {
      question: "How should you respond if you make an error during the observation?",
      options: [
        "Hide it and continue",
        "Acknowledge it, correct it safely, and explain what happened",
        "Blame equipment or materials",
        "Ask to restart the entire assessment"
      ],
      correctAnswer: "Acknowledge it, correct it safely, and explain what happened",
      explanation: "Acknowledging mistakes and correcting them appropriately demonstrates integrity and problem-solving ability."
    },
    {
      question: "Which personal protective equipment (PPE) considerations are important during practical observation?",
      options: [
        "Wear the minimum required to save time",
        "Use only what's comfortable",
        "Use appropriate PPE for each task and maintain it properly",
        "Borrow PPE from others if you forget yours"
      ],
      correctAnswer: "Use appropriate PPE for each task and maintain it properly",
      explanation: "Using appropriate PPE for specific tasks and ensuring it's in good condition demonstrates safety awareness and professionalism."
    },
    {
      question: "When communicating with others during the observation, what approach should you take?",
      options: [
        "Minimize communication to focus on tasks",
        "Use highly technical language to impress assessors",
        "Communicate clearly, professionally, and appropriately for the audience",
        "Let others lead all communications"
      ],
      correctAnswer: "Communicate clearly, professionally, and appropriately for the audience",
      explanation: "Clear and appropriate communication demonstrates professionalism and the ability to work effectively with others."
    },
    {
      question: "What is the most appropriate approach to time management during the observation?",
      options: [
        "Rush through tasks to show efficiency",
        "Focus on quality and safety while maintaining steady progress",
        "Spend extra time on simple tasks to show thoroughness",
        "Complete only the minimum requirements"
      ],
      correctAnswer: "Focus on quality and safety while maintaining steady progress",
      explanation: "Balancing quality and efficiency while maintaining safety is the most professional approach to time management."
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Practical Observations"
          description="Detailed requirements for the practical observation component"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="1. Observation Environment and Setup">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">1.1 Real-Work Setting</h3>
              <p className="text-[#FFC900]/80">
                The practical observation takes place in a genuine work environment where you'll be observed performing various electrical maintenance tasks. The environment should reflect your normal working conditions and include industry-standard equipment.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>The observation may occur at your regular workplace</li>
                <li>It could be arranged at a suitable alternative location with appropriate facilities</li>
                <li>The setting must allow for demonstration of all required competencies</li>
                <li>Special arrangements may be made for specialized equipment access if needed</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">1.2 Duration and Scope</h3>
              <p className="text-[#FFC900]/80">
                The observation lasts approximately 8 hours, during which you'll demonstrate a range of skills across electrical maintenance operations. This gives assessors sufficient time to evaluate your practical capabilities in a comprehensive manner.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Typically conducted during a standard working day (e.g., 8:00 AM to 4:00 PM)</li>
                <li>Includes regular breaks to reflect normal working conditions</li>
                <li>May be split across multiple days if required by operational constraints</li>
                <li>Covers a comprehensive range of tasks to demonstrate breadth of competency</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">1.3 Assessment Personnel</h3>
              <p className="text-[#FFC900]/80">
                Your practical skills will be evaluated by qualified assessors who are experts in electrical maintenance and installation. They will observe your work, ask questions, and make notes throughout the day.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Assessors are experienced industry professionals with assessment qualifications</li>
                <li>They will maintain a professional distance during the observation</li>
                <li>They may ask clarifying questions about your work as you proceed</li>
                <li>An internal verifier may also be present for quality assurance</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="2. Assessment Criteria">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">2.1 Key Areas of Assessment</h3>
              <p className="text-[#FFC900]/80">
                The observation will evaluate your competence across several critical areas of electrical maintenance and operations. Your performance in each area contributes to the overall assessment outcome.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Safe working practices and adherence to safety regulations</strong> - Consistently following safety protocols and regulations throughout all tasks</li>
                <li><strong>Proper selection and use of tools and test equipment</strong> - Choosing appropriate tools and using them correctly and safely</li>
                <li><strong>Diagnostic approaches and fault-finding methodologies</strong> - Applying logical troubleshooting processes to identify issues</li>
                <li><strong>Maintenance procedures and techniques</strong> - Following industry best practices for maintenance tasks</li>
                <li><strong>Documentation completion and accuracy</strong> - Creating clear, comprehensive records of work performed</li>
                <li><strong>Communication with colleagues and stakeholders</strong> - Effective information exchange with others in the workplace</li>
                <li><strong>Problem-solving in practical scenarios</strong> - Responding appropriately to unexpected situations or challenges</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">2.2 Performance Standards</h3>
              <p className="text-[#FFC900]/80">
                Your work will be assessed against industry standards and regulatory requirements. The assessor will look for evidence that you meet or exceed these standards consistently throughout the observation period.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>All work must comply with current electrical regulations (e.g., BS 7671)</li>
                <li>Tasks should be completed to industry quality standards</li>
                <li>Work must adhere to health and safety legislation requirements</li>
                <li>Performance should demonstrate both technical competence and professional conduct</li>
                <li>Efficiency and time management are considered alongside quality</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">2.3 Required Evidence Collection</h3>
              <p className="text-[#FFC900]/80">
                During the observation, the assessor will collect various forms of evidence to document your performance and competence across the required skills and knowledge areas.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Direct observation notes from the assessor</li>
                <li>Photographs of completed work (where appropriate)</li>
                <li>Completed documentation from maintenance tasks</li>
                <li>Records of verbal questioning and responses</li>
                <li>Witness testimonies from colleagues or supervisors (if applicable)</li>
                <li>Self-reflection statements following task completion</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="3. Preparation Guidelines">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">3.1 Before the Observation</h3>
              <p className="text-[#FFC900]/80">
                Proper preparation is essential for a successful practical observation. The following guidelines will help you prepare effectively in the days and weeks leading up to your assessment day.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Review all safety procedures</strong> relevant to your workplace and the tasks you're likely to perform</li>
                <li><strong>Practice explaining your actions and reasoning</strong> as you work to develop clear verbal communication</li>
                <li><strong>Ensure familiarity with all tools and equipment</strong> you might need to use during the observation</li>
                <li><strong>Prepare to demonstrate both routine and non-routine tasks</strong> across a range of maintenance activities</li>
                <li><strong>Review proper documentation procedures</strong> for maintenance tasks and ensure you understand how to complete them correctly</li>
                <li><strong>Check that your PPE is complete and in good condition</strong> before assessment day</li>
                <li><strong>Practice time management</strong> across multiple tasks to develop efficient work habits</li>
                <li><strong>Refresh your knowledge of relevant regulations</strong> and technical standards</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">3.2 During the Observation</h3>
              <p className="text-[#FFC900]/80">
                Your behavior and approach during the observation period will significantly impact your assessment outcome. Follow these guidelines to demonstrate your competence effectively on the day.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Work at a steady, methodical pace</strong> - accuracy is more important than speed</li>
                <li><strong>Verbalize your thought process</strong> when making decisions to demonstrate your reasoning</li>
                <li><strong>Always prioritize safety</strong> in every action you take - never compromise safety for speed</li>
                <li><strong>Complete documentation thoroughly</strong> as you progress through tasks</li>
                <li><strong>Demonstrate professional conduct</strong> throughout the observation period</li>
                <li><strong>Ask clarifying questions</strong> if instructions are unclear - this shows good communication</li>
                <li><strong>Maintain a clean and organized work area</strong> throughout the day</li>
                <li><strong>Use reference materials appropriately</strong> when needed rather than guessing</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">3.3 Common Tasks and Activities</h3>
              <p className="text-[#FFC900]/80">
                While each observation is tailored to your specific work environment, certain types of tasks are commonly included in practical observations. Being prepared for these will help you demonstrate your skills effectively.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Safe isolation procedures</strong> before working on electrical equipment</li>
                <li><strong>Inspection of electrical systems</strong> for compliance and condition</li>
                <li><strong>Fault diagnosis</strong> on electrical circuits or equipment</li>
                <li><strong>Maintenance of electrical components</strong> following manufacturer guidelines</li>
                <li><strong>Testing of electrical installations</strong> using appropriate test equipment</li>
                <li><strong>Documentation of work</strong> including maintenance records and certificates</li>
                <li><strong>Risk assessment</strong> and implementation of control measures</li>
                <li><strong>Component replacement</strong> and system restoration</li>
              </ul>
            </div>
          </LessonContent>

          <div className="flex justify-between items-center mb-8 mt-12">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
              onClick={() => navigateToPage('/apprentices/study-materials/city-guilds/moet/assessment')}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Assessment
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
              onClick={() => navigateToPage('/apprentices/study-materials/city-guilds/moet/assessment/technical-interviews')}
            >
              Technical Interviews
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#FFC900]/20">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Test Your Knowledge</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Complete this quiz to test your understanding of the practical observation assessment component.
            </p>
            <SafetyQuiz 
              unitId="moet-practical" 
              timeLimit={600}
              questionsToShow={5}
              questions={practicalQuestions}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PracticalObservationsPage;

