
import React from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const ProfessionalAssociationsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development');
  };

  const associations = [
    {
      name: "NAPIT (National Association of Professional Inspectors and Testers)",
      description: "Professional membership body offering training, certification, and industry representation.",
      benefits: [
        "Professional certification",
        "Technical support",
        "Industry updates",
        "Insurance schemes"
      ],
      path: "/electricians/development/associations/napit"
    },
    {
      name: "NAECI (National Agreement for the Engineering Construction Industry)",
      description: "Framework for terms and conditions in engineering construction.",
      benefits: [
        "Industry standards",
        "Employment guidelines",
        "Wage agreements",
        "Working conditions"
      ],
      path: "/electricians/development/associations/naeci"
    },
    {
      name: "ECA (Electrical Contractors' Association)",
      description: "Leading trade association for electrical engineering and building services.",
      benefits: [
        "Business support",
        "Technical advice",
        "Training programs",
        "Industry representation"
      ],
      path: "/electricians/development/associations/eca"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Professional Associations"
          description="Connect with key industry organisations and access valuable member benefits."
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          {associations.map((association, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(association.path)}
            >
              <CardContent className="pt-6">
                <h3 className="text-[#FFC900] text-xl font-medium mb-2">{association.name}</h3>
                <p className="text-[#FFC900]/70 mb-4">{association.description}</p>
                <div className="space-y-2">
                  <h4 className="text-[#FFC900] font-medium">Key Benefits:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {association.benefits.map((benefit, i) => (
                      <li key={i} className="text-[#FFC900]/70 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfessionalAssociationsPage;
