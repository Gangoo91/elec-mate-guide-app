
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const EmployerExpectations = () => {
  return (
    <LessonContent title="Professional Skills and Conduct">
      <p className="mb-4">
        Beyond technical abilities, employers expect a range of professional skills and behaviors that are 
        essential for success in the electrical industry.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Essential Professional Skills</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Communication Skills:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Clear explanation of technical issues to non-technical clients</li>
              <li>Effective liaison with other trades and professionals</li>
              <li>Accurate record-keeping and documentation</li>
              <li>Listening and understanding client requirements</li>
              <li>Providing clear updates on progress and challenges</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Problem-solving:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Diagnosing faults efficiently</li>
              <li>Finding workable solutions within constraints</li>
              <li>Thinking creatively when standard approaches don't work</li>
              <li>Making sound decisions based on technical knowledge</li>
              <li>Recognizing when to seek additional support or information</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Teamwork:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Collaborating effectively with colleagues</li>
              <li>Coordinating work with other trades</li>
              <li>Supporting and mentoring less experienced team members</li>
              <li>Contributing positively to the team environment</li>
              <li>Being adaptable when team priorities change</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Time Management and Reliability</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Punctuality and attendance</li>
          <li>Meeting deadlines and commitments</li>
          <li>Efficient planning and organization of work</li>
          <li>Prioritizing tasks appropriately</li>
          <li>Managing multiple responsibilities</li>
          <li>Realistic time estimation for tasks</li>
          <li>Communicating delays promptly</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Health and Safety Awareness</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Risk assessment:</strong> Identifying and mitigating hazards</li>
          <li><strong>Safe working practices:</strong> Following procedures consistently</li>
          <li><strong>PPE compliance:</strong> Proper use of protective equipment</li>
          <li><strong>Safety consciousness:</strong> Awareness of risks to self and others</li>
          <li><strong>Reporting:</strong> Highlighting safety concerns or incidents</li>
          <li><strong>Emergency procedures:</strong> Knowing what to do when things go wrong</li>
          <li><strong>Housekeeping:</strong> Maintaining clean and safe work areas</li>
        </ul>
      </div>
      
      <div className="mt-4 bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Professional Conduct and Ethics</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">On-site Professionalism:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Appropriate dress and appearance</li>
              <li>Respectful language and behavior</li>
              <li>Maintaining confidentiality of client information</li>
              <li>Respecting client property</li>
              <li>Consideration for client needs and concerns</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Ethical Business Practices:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Honest quotations and billing</li>
              <li>Transparency about potential issues</li>
              <li>No unnecessary work</li>
              <li>Accurate record-keeping</li>
              <li>Compliance with regulations and standards</li>
              <li>Proper waste disposal and environmental responsibility</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Personal Development</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Taking initiative for own learning</li>
          <li>Staying updated with industry developments</li>
          <li>Being receptive to feedback and coaching</li>
          <li>Setting personal development goals</li>
          <li>Contributing ideas for improvement</li>
          <li>Maintaining relevant qualifications</li>
          <li>Developing complementary skills</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section4_1: SectionData = {
  title: "Professional Skills and Conduct",
  description: "Key skills employers expect and professional behavior",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Identify the professional skills required beyond technical competence</li>
            <li>Understand the importance of time management and reliability</li>
            <li>Recognize health and safety expectations in the workplace</li>
            <li>Learn about professional conduct and ethical practices</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Employer Expectations and Professional Conduct" 
        content={<EmployerExpectations />}
      />
    </>
  )
};
