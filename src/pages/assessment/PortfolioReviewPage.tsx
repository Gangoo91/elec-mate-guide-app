
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PortfolioReviewPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/assessment');
  };
  
  const navigateToPage = (path: string) => {
    navigate(path);
  };

  const portfolioQuestions = [
    {
      question: "What is the primary purpose of the portfolio in the assessment process?",
      options: [
        "To showcase artistic ability",
        "To provide evidence of competence across required skills and knowledge",
        "To demonstrate academic qualifications",
        "To list previous employers"
      ],
      correctAnswer: "To provide evidence of competence across required skills and knowledge",
      explanation: "The portfolio serves as a collection of evidence that demonstrates your practical application of skills and knowledge in real-world contexts."
    },
    {
      question: "What type of documentation should be included in the portfolio?",
      options: [
        "Only photographs of completed work",
        "Only written testimonials from supervisors",
        "A diverse range of evidence including maintenance records, risk assessments, and project documentation",
        "Only certification documents"
      ],
      correctAnswer: "A diverse range of evidence including maintenance records, risk assessments, and project documentation",
      explanation: "A comprehensive portfolio includes multiple types of evidence that collectively demonstrate the full range of required competencies."
    },
    {
      question: "How should evidence be organized within the portfolio?",
      options: [
        "In chronological order only",
        "Randomly to show versatility",
        "According to competency areas with clear indexing and cross-referencing",
        "By project size from largest to smallest"
      ],
      correctAnswer: "According to competency areas with clear indexing and cross-referencing",
      explanation: "Organizing by competency areas helps assessors easily locate evidence for each required skill or knowledge area."
    },
    {
      question: "What should you do if you don't have evidence for a specific competency requirement?",
      options: [
        "Create fake evidence",
        "Ignore that requirement",
        "Identify the gap and discuss with your assessor how alternative evidence could be provided",
        "Use someone else's work"
      ],
      correctAnswer: "Identify the gap and discuss with your assessor how alternative evidence could be provided",
      explanation: "Honesty about gaps and proactively seeking solutions demonstrates professional integrity and problem-solving ability."
    },
    {
      question: "Why is contextual information important for each piece of portfolio evidence?",
      options: [
        "It's not important - the evidence speaks for itself",
        "It helps assessors understand when, where, and how you applied your skills",
        "It makes the portfolio longer and more impressive",
        "It's only required for photographic evidence"
      ],
      correctAnswer: "It helps assessors understand when, where, and how you applied your skills",
      explanation: "Context helps the assessor understand the circumstances and constraints under which you demonstrated your skills."
    },
    {
      question: "Which of the following would be considered strong portfolio evidence?",
      options: [
        "A general letter of recommendation without specific details",
        "Detailed maintenance records with documented fault diagnosis, solution implementation, and testing",
        "A list of employers without project details",
        "Descriptions of tasks without supporting documentation"
      ],
      correctAnswer: "Detailed maintenance records with documented fault diagnosis, solution implementation, and testing",
      explanation: "Comprehensive documentation that shows the complete process demonstrates both competence and understanding."
    },
    {
      question: "How recent should the evidence in your portfolio be?",
      options: [
        "All evidence must be from the last month",
        "Only evidence from your current employer is acceptable",
        "Primarily recent evidence, typically within the last 1-2 years",
        "Age of evidence doesn't matter"
      ],
      correctAnswer: "Primarily recent evidence, typically within the last 1-2 years",
      explanation: "Recent evidence ensures that your demonstrated skills reflect current industry practices and standards."
    },
    {
      question: "What role do reflective statements play in a portfolio?",
      options: [
        "They are unnecessary and should be avoided",
        "They help demonstrate your learning process and professional growth",
        "They only matter if something went wrong",
        "They are only needed for academic qualifications"
      ],
      correctAnswer: "They help demonstrate your learning process and professional growth",
      explanation: "Reflective statements show your ability to learn from experience and continuously improve your professional practice."
    },
    {
      question: "When including risk assessments in your portfolio, what should they demonstrate?",
      options: [
        "Only that you completed the paperwork",
        "That you identified hazards, evaluated risks, and implemented appropriate control measures",
        "That the work was completed quickly",
        "That you followed someone else's instructions"
      ],
      correctAnswer: "That you identified hazards, evaluated risks, and implemented appropriate control measures",
      explanation: "Effective risk assessments demonstrate your ability to identify potential hazards and implement appropriate safety measures."
    },
    {
      question: "What should you be prepared to do during the portfolio review session?",
      options: [
        "Simply hand over your portfolio and leave",
        "Discuss and explain the evidence, answering questions about your work processes and decisions",
        "Read the entire portfolio to the assessors",
        "Create additional evidence on the spot"
      ],
      correctAnswer: "Discuss and explain the evidence, answering questions about your work processes and decisions",
      explanation: "The review is interactive, requiring you to explain your evidence and demonstrate your understanding through discussion."
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Portfolio Review"
          description="Requirements and preparation for the portfolio assessment component"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="1. Portfolio Requirements">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">1.1 Portfolio Purpose</h3>
              <p className="text-[#FFC900]/80">
                The portfolio review is a critical component of the assessment process, providing evidence of your competencies across a range of electrical maintenance activities. It demonstrates your ability to apply knowledge in real workplace scenarios over time.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Demonstrates consistent competence across multiple projects and contexts</li>
                <li>Provides evidence of both practical skills and theoretical knowledge</li>
                <li>Shows development and growth in professional capability</li>
                <li>Documents your problem-solving approaches in real situations</li>
                <li>Validates the breadth and depth of your experience</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">1.2 Required Content</h3>
              <p className="text-[#FFC900]/80">
                Your portfolio must include specific types of evidence that collectively demonstrate your competence across all required areas of the qualification.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Project documentation:</strong> Plans, specifications, and completion records</li>
                <li><strong>Maintenance records:</strong> Scheduled maintenance and repair documentation</li>
                <li><strong>Risk assessments:</strong> Completed forms showing hazard identification and control measures</li>
                <li><strong>Photographic evidence:</strong> Properly labeled images showing work before, during, and after</li>
                <li><strong>Test results:</strong> Documentation of testing procedures and outcomes</li>
                <li><strong>Witness testimonies:</strong> Verified statements from supervisors or clients</li>
                <li><strong>Personal development evidence:</strong> Training records and reflective accounts</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">1.3 Organization and Presentation</h3>
              <p className="text-[#FFC900]/80">
                How you organize and present your portfolio significantly impacts its effectiveness in demonstrating your competence.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Clear structure with logical organization by competency area or project type</li>
                <li>Comprehensive index and cross-referencing system</li>
                <li>Professional presentation with consistent formatting</li>
                <li>Digital format with easy navigation features (if submitted electronically)</li>
                <li>Contextual information explaining the circumstances of each piece of evidence</li>
                <li>Authentication of evidence (signatures, dates, company details where appropriate)</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="2. Evidence Quality and Sufficiency">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">2.1 Quality Standards</h3>
              <p className="text-[#FFC900]/80">
                Not all evidence is equal. The quality of your portfolio evidence is assessed against specific criteria to ensure it adequately demonstrates your competence.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Validity:</strong> Evidence directly relates to the required competencies</li>
                <li><strong>Authenticity:</strong> Evidence is genuinely your own work and properly verified</li>
                <li><strong>Currency:</strong> Evidence is recent enough to represent current skills (typically 1-2 years)</li>
                <li><strong>Sufficiency:</strong> Evidence adequately covers the full range of required competencies</li>
                <li><strong>Relevance:</strong> Evidence demonstrates skills in appropriate contexts</li>
                <li><strong>Completeness:</strong> Evidence shows entire processes, not just outcomes</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">2.2 Competency Coverage</h3>
              <p className="text-[#FFC900]/80">
                Your portfolio must provide evidence across all the required competency areas for the qualification. Ensure comprehensive coverage with multiple examples for each area.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Safety procedures and risk assessment</strong></li>
                <li><strong>Planning and preparation of maintenance activities</strong></li>
                <li><strong>Inspection and testing of electrical systems</strong></li>
                <li><strong>Fault diagnosis and rectification</strong></li>
                <li><strong>Installation and replacement of components</strong></li>
                <li><strong>Documentation and record-keeping</strong></li>
                <li><strong>Communication with clients and colleagues</strong></li>
                <li><strong>Problem-solving and technical decision-making</strong></li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">2.3 Evidence Diversity</h3>
              <p className="text-[#FFC900]/80">
                Including a range of different evidence types strengthens your portfolio by providing multiple perspectives on your competence.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Direct evidence:</strong> Work products, documentation, videos of performance</li>
                <li><strong>Indirect evidence:</strong> Witness testimonies, supervisor reports</li>
                <li><strong>Supplementary evidence:</strong> Training certificates, qualifications</li>
                <li><strong>Personal statements:</strong> Reflections on process and learning</li>
                <li><strong>Questioning:</strong> Written responses to technical scenarios</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="3. Preparation Guidelines">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">3.1 Collecting Evidence</h3>
              <p className="text-[#FFC900]/80">
                Begin collecting portfolio evidence well in advance of your assessment to ensure you have comprehensive coverage of all required competencies.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Start early</strong> - collecting evidence throughout your training period</li>
                <li><strong>Document projects thoroughly</strong> as you complete them</li>
                <li><strong>Take photographs</strong> of work at various stages (with appropriate permissions)</li>
                <li><strong>Keep copies of all work records</strong>, including maintenance logs and test certificates</li>
                <li><strong>Request witness testimonies</strong> promptly while details are fresh</li>
                <li><strong>Maintain a log of activities</strong> to identify any gaps in evidence</li>
                <li><strong>Obtain appropriate authentication</strong> (signatures, company stamps) as you go</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">3.2 Assembling Your Portfolio</h3>
              <p className="text-[#FFC900]/80">
                The process of organizing your evidence into a coherent portfolio requires careful planning and attention to detail.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Create a mapping document</strong> showing which evidence relates to which competencies</li>
                <li><strong>Organize evidence logically</strong> by competency area or chronologically</li>
                <li><strong>Write contextual statements</strong> for each piece or group of evidence</li>
                <li><strong>Include reflective accounts</strong> explaining your learning and development</li>
                <li><strong>Create a comprehensive index</strong> with clear referencing system</li>
                <li><strong>Review for gaps</strong> and develop plan to address any missing evidence</li>
                <li><strong>Ensure all evidence is authenticated</strong> appropriately</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">3.3 Portfolio Review Session</h3>
              <p className="text-[#FFC900]/80">
                Prepare for the interactive portfolio review session where you'll discuss your evidence with assessors.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Review your entire portfolio</strong> thoroughly before the session</li>
                <li><strong>Be prepared to explain any technical decisions</strong> documented in your evidence</li>
                <li><strong>Practice articulating your problem-solving approaches</strong></li>
                <li><strong>Be ready to discuss alternative methods</strong> you might have used</li>
                <li><strong>Consider what you learned</strong> from each project or task</li>
                <li><strong>Identify any professional development needs</strong> highlighted by your evidence</li>
                <li><strong>Be honest about any limitations</strong> in your evidence or experience</li>
              </ul>
            </div>
          </LessonContent>

          <div className="flex justify-between items-center mb-8 mt-12">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
              onClick={() => navigateToPage('/apprentices/study-materials/city-guilds/moet/assessment/technical-interviews')}
            >
              <ArrowLeft className="h-4 w-4" />
              Technical Interviews
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#FFC900]/20">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Test Your Knowledge</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Complete this quiz to test your understanding of the portfolio assessment component.
            </p>
            <SafetyQuiz 
              unitId="moet-portfolio" 
              timeLimit={600}
              questionsToShow={5}
              questions={portfolioQuestions}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PortfolioReviewPage;
