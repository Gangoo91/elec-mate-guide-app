
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, HelpCircle, MessageSquare, Users, Award, Lightbulb, Heart } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqItems = [
    // General Platform Questions
    {
      section: "General",
      icon: <HelpCircle className="h-5 w-5 text-[#FFC900]" />,
      questions: [
        {
          id: "item-1",
          question: "What makes Elec-Mate different from other platforms?",
          answer: "Elec-Mate is a UK-focused platform designed specifically for the electrical industry. We integrate learning materials aligned with UK standards, AI tools for UK electrical regulations, project management, and industry-specific resources while fostering connections between apprentices, electricians, and employers across the United Kingdom."
        },
        {
          id: "item-8",
          question: "How do I get started with Elec-Mate?",
          answer: "Simply sign up, select your role (Apprentice, Electrician, or Employer), and complete your profile. You'll get immediate access to UK-specific features and can start connecting with other professionals in the British electrical industry."
        },
        {
          id: "item-9",
          question: "Is Elec-Mate compliant with UK data protection laws?",
          answer: "Yes, Elec-Mate is fully compliant with GDPR and UK data protection regulations. We take your privacy and data security seriously and have implemented measures to ensure your information is protected according to UK standards."
        }
      ]
    },
    // Apprentice-focused
    {
      section: "Apprentices",
      icon: <Users className="h-5 w-5 text-[#FFC900]" />,
      questions: [
        {
          id: "item-2",
          question: "What resources are available for apprentices?",
          answer: "Apprentices get access to comprehensive learning materials aligned with UK apprenticeship standards, study guides for City & Guilds qualifications, practical assessments, and direct mentorship opportunities. Our platform helps track your progress and connects you with experienced UK professionals who can guide your development."
        },
        {
          id: "item-10",
          question: "How does Elec-Mate help with my technical certificate?",
          answer: "Elec-Mate provides study resources, practice questions and simulations specifically designed to help apprentices prepare for the technical certificate component of their UK electrical apprenticeship, covering topics aligned with EAL and City & Guilds requirements."
        }
      ]
    },
    // Electrician-focused
    {
      section: "Electricians",
      icon: <Lightbulb className="h-5 w-5 text-[#FFC900]" />,
      questions: [
        {
          id: "item-3",
          question: "What AI tools are available for electricians?",
          answer: "Electricians have access to AI-powered tools for project planning, estimating, and technical documentation, all compliant with BS 7671 (UK Wiring Regulations). These tools enhance productivity while ensuring adherence to UK electrical standards and best practices."
        },
        {
          id: "item-11",
          question: "How does Elec-Mate help me stay updated with regulations?",
          answer: "Elec-Mate provides regular updates on changes to the IET Wiring Regulations (BS 7671) and other UK-specific electrical standards. Our platform delivers timely notifications and explanations of amendments to keep UK electricians informed and compliant."
        }
      ]
    },
    // Employer-focused
    {
      section: "Employers",
      icon: <Award className="h-5 w-5 text-[#FFC900]" />,
      questions: [
        {
          id: "item-4",
          question: "How does Elec-Mate benefit employers?",
          answer: "Employers get access to AI-powered tendering systems aligned with UK procurement standards, workforce management tools, and project tracking capabilities. The platform streamlines communication between teams and helps manage apprentice development programs in accordance with UK training frameworks."
        },
        {
          id: "item-12",
          question: "Can Elec-Mate help with compliance documentation?",
          answer: "Yes, Elec-Mate offers tools to streamline the creation and management of UK electrical compliance documentation, including EICR reports, minor works certificates, and other documentation required by the IET and British regulations."
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
          answer: "Our Mental Health Hub provides access to UK-based resources, including NHS services, counselling connections, and peer support. We partner with UK mental health organisations like Mind and the Electrical Industries Charity to offer confidential support services tailored to electrical industry professionals."
        },
        {
          id: "item-6",
          question: "How does the mentorship program work?",
          answer: "Through Mentor Connect, we match apprentices and early-career electricians with experienced UK professionals. Mentors provide guidance on UK industry practices, share knowledge about local regulations, and help navigate career development opportunities within the British electrical sector."
        }
      ]
    },
    // Qualifications & Training
    {
      section: "Qualifications & Training",
      icon: <Heart className="h-5 w-5 text-[#FFC900]" />,
      questions: [
        {
          id: "item-7",
          question: "Which qualifications does Elec-Mate support?",
          answer: "We support various UK qualifications including City & Guilds, EAL, and other recognised certifications. Our platform helps track progress towards NVQs, AM2 assessments, and continuous professional development requirements set by UK industry bodies like the JIB and ECA."
        },
        {
          id: "item-13",
          question: "Does Elec-Mate offer CPD opportunities?",
          answer: "Yes, we provide access to Continuing Professional Development courses recognised by UK electrical governing bodies. These courses help you maintain your professional status and keep your skills current with the latest UK industry standards and technologies."
        }
      ]
    }
  ];
  
  // Filter FAQ items based on search query
  const filteredFAQItems = searchQuery 
    ? faqItems.map(section => ({
        ...section,
        questions: section.questions.filter(item => 
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.questions.length > 0)
    : faqItems;
    
  return (
    <MainLayout>
      <div className="container py-8 px-4 md:px-6">
        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers about Elec-Mate's features and benefits for UK electrical professionals"
        />
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-8 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#FFC900]" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg pl-10 pr-4 py-2 bg-[#22251e] border border-[#FFC900]/20 text-[#FFC900]/90 placeholder:text-[#FFC900]/50 focus:outline-none focus:border-[#FFC900]/50 focus:ring-1 focus:ring-[#FFC900]/30"
            />
          </div>
        </div>
        
        <div className="mt-8 space-y-8 max-w-4xl mx-auto">
          {filteredFAQItems.map((section, index) => (
            section.questions.length > 0 && (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#FFC900]/20 pb-2">
                  {section.icon}
                  <h2 className="text-xl font-semibold text-[#FFC900]">{section.section}</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {section.questions.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="border-[#FFC900]/20">
                      <AccordionTrigger className="text-[#FFC900]">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#FFC900]/80">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          ))}
          
          {/* Show when no results found */}
          {filteredFAQItems.length === 0 || filteredFAQItems.every(section => section.questions.length === 0) ? (
            <div className="text-center py-8">
              <HelpCircle className="mx-auto h-12 w-12 text-[#FFC900]/40 mb-3" />
              <p className="text-[#FFC900]/60 text-lg">No FAQs found matching your search.</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-3 text-[#FFC900] hover:text-[#FFC900]/80 underline"
              >
                Clear search
              </button>
            </div>
          ) : null}
        </div>

        {/* Contact support */}
        <div className="mt-12 max-w-2xl mx-auto bg-[#22251e] rounded-lg p-6 border border-[#FFC900]/20">
          <h2 className="text-xl font-semibold text-[#FFC900] mb-3 flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            Still have questions?
          </h2>
          <p className="text-[#FFC900]/70 mb-4">
            Our UK-based support team is here to help. Get in touch and we'll get back to you as soon as possible.
          </p>
          <button className="bg-[#FFC900] text-black font-medium px-6 py-2 rounded-md hover:bg-[#FFC900]/90 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;
