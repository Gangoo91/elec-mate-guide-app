
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { PhoneCall, Users, Brain, BadgeHelp } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";
import { useNavigate } from "react-router-dom";

const ProfessionalResources = () => {
  const navigate = useNavigate();
  
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Professional Resources"
          description="Access to professional mental health support and resources"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Crisis Support Card */}
          <ResourceCard
            title="Crisis Support"
            description="Immediate help for mental health emergencies"
            icon={<PhoneCall className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/mental-health/professional-resources/crisis-support"
          />

          {/* Support Groups Card */}
          <ResourceCard
            title="Support Groups"
            description="Peer-led mental health support networks"
            icon={<Users className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/mental-health/professional-resources/support-groups"
          />

          {/* Professional Directory Card */}
          <ResourceCard
            title="Find a Professional"
            description="Accredited mental health specialists"
            icon={<Brain className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/mental-health/professional-resources/find-professional"
          />
          
          {/* Self-Help Resources Card */}
          <ResourceCard
            title="Self-Help Resources"
            description="Tools and techniques for managing mental health"
            icon={<BadgeHelp className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/mental-health/professional-resources/self-help"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfessionalResources;
