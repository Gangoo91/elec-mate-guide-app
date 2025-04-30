
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { professionalConductQuestions } from "@/data/moet/professionalConductSections";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const ProfessionalConductPage = () => {
  const navigate = useNavigate();
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/behaviours');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/behaviours/professional-conduct/${sectionId}`);
  };

  const handleTakeAssessment = () => {
    setShowAssessment(true);
    window.scrollTo(0, 0);
  };

  // Section data structured like other MOET units
  const sectionGroups = [
    {
      number: "1",
      title: "Workplace Professionalism",
      sections: [
        {
          id: "1.1",
          title: "Punctuality and Attendance",
          description: "Standards for time management and reliability in the workplace"
        },
        {
          id: "1.2",
          title: "Professional Appearance",
          description: "Guidelines for appropriate presentation and workwear"
        },
        {
          id: "1.3",
          title: "Communication Etiquette",
          description: "Best practices for clear and respectful workplace communication"
        }
      ]
    },
    {
      number: "2",
      title: "Workplace Ethics and Integrity",
      sections: [
        {
          id: "2.1",
          title: "Honesty and Transparency",
          description: "Maintaining truthfulness in all professional activities"
        },
        {
          id: "2.2",
          title: "Confidentiality",
          description: "Respecting and protecting sensitive information"
        },
        {
          id: "2.3",
          title: "Professional Boundaries",
          description: "Maintaining appropriate relationships with colleagues and clients"
        }
      ]
    },
    {
      number: "3",
      title: "Responsibility and Accountability",
      sections: [
        {
          id: "3.1",
          title: "Taking Ownership of Work",
          description: "Accepting responsibility for actions and outcomes"
        },
        {
          id: "3.2",
          title: "Meeting Deadlines",
          description: "Time management and delivering on commitments"
        },
        {
          id: "3.3",
          title: "Quality Assurance",
          description: "Maintaining high standards in all work activities"
        }
      ]
    },
    {
      number: "4",
      title: "Professional Development",
      sections: [
        {
          id: "4.1",
          title: "Continuous Learning",
          description: "Staying current with industry knowledge and skills"
        },
        {
          id: "4.2",
          title: "Seeking and Accepting Feedback",
          description: "Using constructive criticism to improve performance"
        },
        {
          id: "4.3",
          title: "Knowledge Sharing",
          description: "Contributing to team development through sharing expertise"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Professional Conduct"
          description="Standards and expectations for professional behaviour in the workplace"
          customBackAction={handleBackClick}
        />
        
        {!showAssessment ? (
          <>
            <div className="mt-8 space-y-8">
              {/* Map through section groups */}
              {sectionGroups.map((group) => (
                <SectionGroup
                  key={group.number}
                  number={group.number}
                  title={group.title}
                  sections={group.sections}
                  onStudy={handleStudy}
                />
              ))}
              
              {/* Unit Quiz Button */}
              <div className="mt-12">
                <Button 
                  className="w-full py-6 bg-[#FFC900] hover:bg-[#e5b700] text-[#22251e] font-semibold text-lg"
                  onClick={handleTakeAssessment}
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Test Your Knowledge
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Professional Conduct Assessment</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Test your understanding of professional conduct in the electrical industry with this assessment.
              Answer the questions based on the material covered in the previous sections.
            </p>
            <SafetyQuiz 
              unitId="professional-conduct" 
              timeLimit={600}
              questions={professionalConductQuestions}
              questionsToShow={10}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProfessionalConductPage;
