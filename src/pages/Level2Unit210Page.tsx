
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { unit210 } from '@/data/units/unit210';

const Level2Unit210Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-2/core-units/210/${sectionId}`);
  };

  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units/210/1.4');
  };

  // Section data structured like Level 3 and Unit 204 units
  const sectionGroups = [
    {
      number: "1",
      title: "Communication Fundamentals",
      sections: [
        {
          id: "1.1",
          title: "Communication Basics",
          description: "Understanding the importance of good communication in electrical work"
        },
        {
          id: "1.2",
          title: "Client Communication",
          description: "Learn effective techniques for communicating with customers"
        },
        {
          id: "1.3",
          title: "Team Communication",
          description: "Working effectively with colleagues and other trades"
        },
        {
          id: "1.4",
          title: "Written Communication",
          description: "Creating clear documentation and written records"
        }
      ]
    },
    {
      number: "2",
      title: "Professional Communication",
      sections: [
        {
          id: "2.1",
          title: "Communication Styles",
          description: "Different approaches for different situations and audiences"
        },
        {
          id: "2.2",
          title: "Active Listening",
          description: "Techniques for better understanding and reducing misunderstandings"
        },
        {
          id: "2.3",
          title: "Conflict Resolution",
          description: "Managing disagreements professionally on site and with clients"
        }
      ]
    },
    {
      number: "3",
      title: "Technical Communication",
      sections: [
        {
          id: "3.1",
          title: "Technical Documentation",
          description: "Creating and understanding technical documents and diagrams"
        },
        {
          id: "3.2",
          title: "Explaining Complex Concepts",
          description: "Breaking down technical information for non-specialists"
        },
        {
          id: "3.3",
          title: "Digital Communication",
          description: "Using email, messaging and digital tools effectively"
        }
      ]
    },
    {
      number: "4",
      title: "Communication for Career Development",
      sections: [
        {
          id: "4.1",
          title: "Networking Skills",
          description: "Building professional relationships in the electrical industry"
        },
        {
          id: "4.2",
          title: "Interview Techniques",
          description: "Communicating effectively during job interviews"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={unit210.title} 
          description={unit210.description} 
          customBackAction={handleBackClick}
        />
        
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
              onClick={handleTakeQuiz}
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Take Unit 210 Assessment
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2Unit210Page;
