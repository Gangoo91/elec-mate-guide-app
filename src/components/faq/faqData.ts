
import React from "react";
import { HelpCircle, Users, Lightbulb, Award, MessageSquare, Heart } from "lucide-react";

export interface FAQQuestionType {
  id: string;
  question: string;
  answer: string;
}

export interface FAQItemType {
  section: string;
  icon: React.ReactNode;
  questions: FAQQuestionType[];
}

export const faqItems: FAQItemType[] = [
  // General Platform Questions
  {
    section: "About Elec-Mate",
    icon: <HelpCircle className="h-5 w-5 text-[#FFC900]" />,
    questions: [
      {
        id: "item-1",
        question: "What makes Elec-Mate unique in the UK electrical industry?",
        answer: "Elec-Mate is the UK's premier digital platform designed exclusively for electrical professionals. We provide comprehensive tools, learning resources, and networking opportunities tailored specifically to the British electrical sector, ensuring compliance with UK standards and supporting professional development."
      },
      {
        id: "item-8",
        question: "How do I get started with Elec-Mate?",
        answer: "Getting started is simple. Sign up and select your professional role: Apprentice, Electrician, or Employer. Complete your profile to unlock UK-specific features, including industry-aligned learning materials, project management tools, and professional networking opportunities."
      },
      {
        id: "item-9",
        question: "How does Elec-Mate protect my data?",
        answer: "Your data security is our top priority. Elec-Mate is fully compliant with UK GDPR and data protection regulations. We implement robust security measures to ensure your personal and professional information remains confidential and protected according to the highest UK standards."
      }
    ]
  },
  // Apprentice-focused
  {
    section: "For Apprentices",
    icon: <Users className="h-5 w-5 text-[#FFC900]" />,
    questions: [
      {
        id: "item-2",
        question: "What resources are available for electrical apprentices?",
        answer: "Elec-Mate offers comprehensive resources for UK electrical apprentices, including: study guides aligned with City & Guilds and EAL qualifications, practical assessment preparation, mentorship connections, and tools to track your apprenticeship progress and professional development."
      },
      {
        id: "item-10",
        question: "How does Elec-Mate support my technical certificate preparation?",
        answer: "Our platform provides targeted study resources specifically designed for UK electrical apprenticeship technical certificates. Access practice questions, simulations, and learning modules that align with EAL and City & Guilds requirements, helping you excel in your professional journey."
      }
    ]
  },
  // Electrician-focused
  {
    section: "For Electricians",
    icon: <Lightbulb className="h-5 w-5 text-[#FFC900]" />,
    questions: [
      {
        id: "item-3",
        question: "What AI tools are available for electricians?",
        answer: "Electricians benefit from our AI-powered tools designed for the UK market. These include project planning assistants, compliance documentation generators, and technical resource managers, all built to ensure adherence to BS 7671 (UK Wiring Regulations) and industry best practices."
      },
      {
        id: "item-11",
        question: "How does Elec-Mate keep me updated with industry regulations?",
        answer: "Stay informed with our real-time regulatory updates. We provide instant notifications and comprehensive explanations of changes to IET Wiring Regulations, electrical safety standards, and other critical UK electrical industry guidelines."
      }
    ]
  },
  // Employer-focused
  {
    section: "For Employers",
    icon: <Award className="h-5 w-5 text-[#FFC900]" />,
    questions: [
      {
        id: "item-4",
        question: "How can Elec-Mate benefit electrical businesses?",
        answer: "Elec-Mate offers UK employers advanced workforce management tools, including AI-powered tendering systems aligned with British procurement standards, apprentice development tracking, and comprehensive project management capabilities tailored to the electrical contracting sector."
      },
      {
        id: "item-12",
        question: "Can Elec-Mate help with compliance documentation?",
        answer: "Absolutely. Our platform streamlines compliance documentation management, helping you generate and maintain essential UK electrical industry documents such as Electrical Installation Condition Reports (EICR), minor works certificates, and other regulatory documentation."
      }
    ]
  },
  // Support & Community
  {
    section: "Support & Community",
    icon: <MessageSquare className="h-5 w-5 text-[#FFC900]" />,
    questions: [
      {
        id: "item-5",
        question: "What mental health support is available?",
        answer: "We've partnered with leading UK mental health organisations like Mind and the Electrical Industries Charity to provide confidential support services. Our Mental Health Hub offers resources, counselling connections, and peer support specifically tailored to professionals in the electrical sector."
      },
      {
        id: "item-6",
        question: "How does the mentorship program work?",
        answer: "Our Mentor Connect service matches apprentices and early-career electricians with experienced UK professionals. Mentors provide guidance on industry practices, local regulations, and career development opportunities within the British electrical sector."
      }
    ]
  },
  // Qualifications & Training
  {
    section: "Qualifications & Professional Development",
    icon: <Heart className="h-5 w-5 text-[#FFC900]" />,
    questions: [
      {
        id: "item-7",
        question: "Which qualifications does Elec-Mate support?",
        answer: "We comprehensively support UK electrical qualifications, including City & Guilds, EAL, and other nationally recognised certifications. Track your progress towards NVQs, AM2 assessments, and continuous professional development requirements set by industry bodies like the JIB and Electrical Contractors Association (ECA)."
      },
      {
        id: "item-13",
        question: "What Continuous Professional Development (CPD) opportunities are available?",
        answer: "Access a wide range of CPD courses recognised by UK electrical governing bodies. These courses help maintain your professional status and keep your skills current with the latest technologies and industry standards in the electrical sector."
      }
    ]
  }
];
