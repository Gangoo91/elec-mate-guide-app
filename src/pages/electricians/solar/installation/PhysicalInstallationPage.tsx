
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SolarContentLayout from '@/components/solar/SolarContentLayout';
import ResourceCard from '@/components/shared/ResourceCard';
import { Wrench, BookOpen, CheckSquare, Book } from 'lucide-react';

const PhysicalInstallationPage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Physical Installation Overview",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResourceCard
            title="Mounting System Installation"
            description="Detailed guide to solar panel mounting techniques"
            icon={<Wrench className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/solar-pv-installation/installation-process/physical-installation/mounting-systems"
          />
          <ResourceCard
            title="Panel Installation"
            description="Safe and efficient solar panel placement methods"
            icon={<BookOpen className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="#"
          />
          <ResourceCard
            title="Equipment Installation"
            description="Proper installation of solar system components"
            icon={<Book className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="#"
          />
          <ResourceCard
            title="Safety Considerations"
            description="Essential safety protocols for solar installation"
            icon={<CheckSquare className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="#"
          />
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Physical Installation"
      description="Comprehensive guide to the proper installation of solar PV system components."
      sections={sections}
    />
  );
};

export default PhysicalInstallationPage;
