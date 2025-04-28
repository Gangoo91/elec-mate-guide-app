
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const IndustrySpecialisationsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development');
  };

  const handleCardClick = (path: string) => {
    console.log("Navigating to:", path);
    navigate(path);
  };

  const specialisations = [
    {
      title: "Renewable Energy Systems",
      description: "Specialise in solar PV, wind energy, and other renewable technologies.",
      path: "/electricians/development/specialisations/renewable",
      skills: ["Solar PV Installation", "Battery Storage", "Smart Grid Integration"]
    },
    {
      title: "Industrial Automation",
      description: "Focus on automated manufacturing systems and industrial controls.",
      path: "/electricians/development/specialisations/automation",
      skills: ["PLC Programming", "SCADA Systems", "Industrial Networks"]
    },
    {
      title: "Smart Building Technologies",
      description: "Work with building automation and smart home systems.",
      path: "/electricians/development/specialisations/smart-building",
      skills: ["Building Management Systems", "IoT Integration", "Energy Management"]
    },
    {
      title: "Hazardous Areas",
      description: "Specialise in electrical installations for explosive and hazardous environments.",
      path: "/electricians/specialisations/hazardous",
      skills: ["Ex Protection", "Zone Classification", "Intrinsic Safety"]
    },
    {
      title: "Marine & Offshore",
      description: "Work on electrical systems for ships, oil rigs, and offshore installations.",
      path: "/electricians/specialisations/marine",
      skills: ["Marine Power Systems", "Navigation Equipment", "Corrosion Protection"]
    },
    {
      title: "EV Infrastructure",
      description: "Design and install electric vehicle charging systems and infrastructure.",
      path: "/electricians/specialisations/ev",
      skills: ["Charging Station Installation", "Load Management", "Smart Charging"]
    },
    {
      title: "Data Center Power",
      description: "Specialise in power distribution and backup systems for data centers.",
      path: "/electricians/development/specialisations/datacenter",
      skills: ["UPS Systems", "Power Distribution", "Cooling Infrastructure"]
    },
    {
      title: "High Voltage",
      description: "Work with high voltage installations and power distribution networks.",
      path: "/electricians/development/specialisations/highvoltage",
      skills: ["HV Switchgear", "Protection Systems", "Network Design"]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Industry Specialisations"
          description="Explore emerging sectors and specialized areas within electrical engineering."
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          {specialisations.map((spec, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={() => handleCardClick(spec.path)}
            >
              <CardContent className="pt-6">
                <h3 className="text-[#FFC900] text-xl font-medium mb-2">{spec.title}</h3>
                <p className="text-[#FFC900]/70 mb-4">{spec.description}</p>
                <div className="flex flex-wrap gap-2">
                  {spec.skills.map((skill, i) => (
                    <span key={i} className="bg-[#FFC900]/10 text-[#FFC900] px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default IndustrySpecialisationsPage;
