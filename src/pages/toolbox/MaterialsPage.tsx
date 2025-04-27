
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const MaterialsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/toolbox-talk');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Materials"
          description="Access information about the latest materials, specifications, and best practices."
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-[#FFC900] font-medium text-xl mb-4">Material Resources</h3>
          <p className="text-[#FFC900]/70">
            Material information features coming soon. You'll be able to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-[#FFC900]/70">
            <li>Browse material specifications</li>
            <li>Access installation guides</li>
            <li>View compatibility information</li>
            <li>Check compliance requirements</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default MaterialsPage;
