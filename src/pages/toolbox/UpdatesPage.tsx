
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import IndustryResources from "@/components/IndustryResources";

const UpdatesPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/toolbox-talk');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Industry Updates"
          description="Stay informed with the latest UK electrical industry news, regulations, and developments."
          customBackAction={handleBackClick}
        />
        
        <IndustryResources />
      </div>
    </MainLayout>
  );
};

export default UpdatesPage;
