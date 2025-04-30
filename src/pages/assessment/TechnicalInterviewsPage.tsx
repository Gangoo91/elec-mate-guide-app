
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TechnicalInterviewsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/assessment');
  };
  
  const navigateToPage = (path: string) => {
    navigate(path);
  };

  const interviewQuestions = [
    {
      question: "What is the primary purpose of the technical interview in the assessment process?",
      options: [
        "To evaluate practical skills only",
        "To assess theoretical knowledge and critical thinking abilities",
        "To check employment history",
        "To verify educational qualifications"
      ],
      correctAnswer: "To assess theoretical knowledge and critical thinking abilities",
      explanation: "Technical interviews are specifically designed to evaluate your understanding of electrical principles and your ability to apply them to solve problems."
    },
    {
      question: "How should you approach answering scenario-based questions in a technical interview?",
      options: [
        "Provide the quickest possible solution",
        "Give one-word answers to save time",
        "Explain your reasoning process and consider multiple factors",
        "Ask the interviewer for the correct answer"
      ],
      correctAnswer: "Explain your reasoning process and consider multiple factors",
      explanation: "Assessors are interested in your problem-solving approach and thought process, not just the final answer."
    },
    {
      question: "Which of the following is typically included in a technical interview?",
      options: [
        "Practical demonstrations only",
        "Discussion of theoretical concepts and their practical applications",
        "Physical fitness testing",
        "Language proficiency assessment"
      ],
      correctAnswer: "Discussion of theoretical concepts and their practical applications",
      explanation: "Technical interviews bridge theory and practice by exploring how theoretical knowledge informs practical decisions."
    },
    {
      question: "What should you do if asked about a concept you're unsure of during the interview?",
      options: [
        "Make up an answer confidently",
        "Skip the question and move on",
        "Acknowledge what you do know and explain how you would find the information",
        "Blame your education for not covering that topic"
      ],
      correctAnswer: "Acknowledge what you do know and explain how you would find the information",
      explanation: "Honesty and describing your approach to finding information demonstrates professional integrity and learning ability."
    },
    {
      question: "How can you best prepare for the regulation-related questions in a technical interview?",
      options: [
        "Memorize the entire BS 7671 regulations word for word",
        "Review key regulations and understand their purpose and application",
        "Focus only on the most recent changes",
        "There's no need to prepare for regulation questions"
      ],
      correctAnswer: "Review key regulations and understand their purpose and application",
      explanation: "Understanding the purpose and application of regulations is more important than memorization."
    },
    {
      question: "Which topics are most likely to be covered in the technical interview?",
      options: [
        "Only health and safety regulations",
        "Only circuit theory and calculations",
        "A range of topics including electrical principles, regulations, safety, and fault finding",
        "Personal hobbies and interests"
      ],
      correctAnswer: "A range of topics including electrical principles, regulations, safety, and fault finding",
      explanation: "Technical interviews are comprehensive, covering multiple aspects of electrical knowledge and practice."
    },
    {
      question: "What documentation should you review before your technical interview?",
      options: [
        "Only your CV/resume",
        "Nothing - all questions will be hypothetical",
        "Your portfolio, project documentation, and relevant technical standards",
        "Only social media profiles"
      ],
      correctAnswer: "Your portfolio, project documentation, and relevant technical standards",
      explanation: "Reviewing your own work and relevant standards refreshes your knowledge and prepares you to discuss specific examples."
    },
    {
      question: "How should you explain complex technical concepts during the interview?",
      options: [
        "Use as much technical jargon as possible to impress assessors",
        "Provide simple explanations using clear language and relevant examples",
        "Be as brief as possible regardless of clarity",
        "Refer all complex questions to other experts"
      ],
      correctAnswer: "Provide simple explanations using clear language and relevant examples",
      explanation: "The ability to explain complex concepts clearly demonstrates true understanding and communication skills."
    },
    {
      question: "What should your approach be when discussing safety considerations in a technical scenario?",
      options: [
        "Mention that safety is important but focus on technical solutions",
        "Demonstrate how safety considerations are integrated into all aspects of your work",
        "Only mention safety if specifically asked",
        "Indicate that safety is someone else's responsibility"
      ],
      correctAnswer: "Demonstrate how safety considerations are integrated into all aspects of your work",
      explanation: "Safety should be shown as an integral part of all electrical work, not an afterthought."
    },
    {
      question: "When asked about a project or task from your experience, what aspects should you include?",
      options: [
        "Only the technical specifications",
        "Only the outcome or result",
        "Your role, the challenges faced, solutions implemented, and lessons learned",
        "How much you were paid for the work"
      ],
      correctAnswer: "Your role, the challenges faced, solutions implemented, and lessons learned",
      explanation: "A comprehensive reflection demonstrates your involvement, problem-solving abilities, and capacity for professional growth."
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Technical Interviews"
          description="Preparation and requirements for the technical interview assessment"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="1. Interview Format and Structure">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">1.1 Interview Setting</h3>
              <p className="text-[#FFC900]/80">
                The technical interview is conducted in a professional environment where you'll meet with one or more assessors to discuss various aspects of electrical maintenance and operations. This formal assessment evaluates your theoretical knowledge and its application to practical scenarios.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Usually conducted in a quiet room free from distractions</li>
                <li>May be face-to-face or via video conference in some circumstances</li>
                <li>Typically lasts between 1-3 hours depending on the scope</li>
                <li>May include visual aids, drawings, or equipment for discussion purposes</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">1.2 Interview Components</h3>
              <p className="text-[#FFC900]/80">
                The technical interview consists of several components, each designed to assess different aspects of your knowledge and capability in the field of electrical maintenance.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Knowledge assessment:</strong> Questions on electrical theory, regulations, and industry standards</li>
                <li><strong>Project discussion:</strong> Detailed examination of work examples from your portfolio</li>
                <li><strong>Problem-solving scenarios:</strong> Hypothetical situations requiring analytical thinking</li>
                <li><strong>Safety awareness verification:</strong> Questions about safe working practices and risk assessment</li>
                <li><strong>Professional judgment:</strong> Questions exploring your decision-making process</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">1.3 Assessment Personnel</h3>
              <p className="text-[#FFC900]/80">
                Your interview will be conducted by qualified assessors who are experts in the electrical industry and trained in assessment techniques.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Usually includes an industry expert with extensive experience</li>
                <li>May include an independent assessor from the awarding body</li>
                <li>Sometimes includes a technical specialist for specific subject areas</li>
                <li>An observer may be present for quality assurance purposes</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="2. Knowledge Areas and Topics">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">2.1 Electrical Theory and Principles</h3>
              <p className="text-[#FFC900]/80">
                A fundamental part of the interview will assess your understanding of core electrical concepts and how they apply to maintenance operations.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Circuit theory and calculations</li>
                <li>AC and DC principles</li>
                <li>Power distribution systems</li>
                <li>Motor control and operation</li>
                <li>Power factor and efficiency</li>
                <li>Protection systems and principles</li>
                <li>Transformer theory and application</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">2.2 Regulations and Standards</h3>
              <p className="text-[#FFC900]/80">
                Your knowledge of relevant electrical regulations and how they inform safe working practices will be thoroughly assessed.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>BS 7671 Requirements for Electrical Installations (IET Wiring Regulations)</li>
                <li>Health and Safety at Work Act requirements</li>
                <li>Electricity at Work Regulations</li>
                <li>Specific industry standards relevant to maintenance operations</li>
                <li>Documentation requirements and certification</li>
                <li>Testing frequencies and procedures</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">2.3 Fault Finding and Diagnostics</h3>
              <p className="text-[#FFC900]/80">
                Your approach to identifying and resolving electrical faults will be explored through theoretical scenarios and discussion of real experiences.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Systematic troubleshooting methodologies</li>
                <li>Interpretation of test results</li>
                <li>Common fault types and their symptoms</li>
                <li>Diagnostic equipment selection and use</li>
                <li>Root cause analysis techniques</li>
                <li>Documentation of fault finding processes</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="3. Preparation Guidelines">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">3.1 Before the Interview</h3>
              <p className="text-[#FFC900]/80">
                Thorough preparation will help you demonstrate your knowledge confidently during the technical interview. Focus on these key areas in the weeks before your assessment.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Review fundamental electrical principles</strong> and ensure you can explain them clearly</li>
                <li><strong>Study current regulations</strong> relevant to electrical installation and maintenance</li>
                <li><strong>Practice explaining complex concepts</strong> in simple, clear language</li>
                <li><strong>Prepare examples from your experience</strong> that demonstrate key competencies</li>
                <li><strong>Review your portfolio thoroughly</strong> and be ready to discuss all included projects</li>
                <li><strong>Practice analyzing fault scenarios</strong> and describing your troubleshooting approach</li>
                <li><strong>Refresh your knowledge of safety procedures</strong> and risk assessment methods</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">3.2 During the Interview</h3>
              <p className="text-[#FFC900]/80">
                Your approach during the interview itself can significantly impact how effectively you demonstrate your knowledge and capabilities.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Listen carefully to questions</strong> and ask for clarification if needed</li>
                <li><strong>Structure your answers clearly</strong> with logical progression</li>
                <li><strong>Use specific examples from your experience</strong> to illustrate your points</li>
                <li><strong>Show your reasoning process</strong> when solving problems or analyzing scenarios</li>
                <li><strong>Be honest about knowledge limitations</strong> and explain how you would find information</li>
                <li><strong>Remain calm and professional</strong> even with challenging questions</li>
                <li><strong>Take time to consider questions</strong> rather than rushing to answer immediately</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">3.3 Common Interview Questions</h3>
              <p className="text-[#FFC900]/80">
                While each interview is tailored to your specific experience and portfolio, certain types of questions frequently appear in technical interviews for electrical maintenance.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>"Describe how you would safely isolate an electrical system before maintenance."</strong></li>
                <li><strong>"Explain the steps you would take to diagnose an intermittent fault."</strong></li>
                <li><strong>"What factors would you consider when selecting protective devices for a circuit?"</strong></li>
                <li><strong>"Describe a challenging maintenance problem you've solved and your approach."</strong></li>
                <li><strong>"How would you ensure compliance with regulations in your maintenance work?"</strong></li>
                <li><strong>"Explain the importance of earth continuity in an electrical installation."</strong></li>
                <li><strong>"How would you verify the effectiveness of maintenance work you've completed?"</strong></li>
              </ul>
            </div>
          </LessonContent>

          <div className="flex justify-between items-center mb-8 mt-12">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
              onClick={() => navigateToPage('/apprentices/study-materials/city-guilds/moet/assessment/practical-observations')}
            >
              <ArrowLeft className="h-4 w-4" />
              Practical Observations
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
              onClick={() => navigateToPage('/apprentices/study-materials/city-guilds/moet/assessment/portfolio-review')}
            >
              Portfolio Review
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#FFC900]/20">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Test Your Knowledge</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Complete this quiz to test your understanding of the technical interview assessment component.
            </p>
            <SafetyQuiz 
              unitId="moet-interview" 
              timeLimit={600}
              questionsToShow={5}
              questions={interviewQuestions}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TechnicalInterviewsPage;
