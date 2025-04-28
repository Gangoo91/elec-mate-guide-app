
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";

const UpdatesPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/electricians/toolbox-talk');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-6">
        <BackButton customAction={handleBackClick} />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFC900] mb-4">
            Industry Updates
          </h1>
          <p className="text-[#FFC900]/80 max-w-2xl mx-auto">
            Stay informed with the latest UK electrical industry news, regulations, and developments.
          </p>
        </div>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 p-6 rounded-lg">
          <p className="text-[#FFC900] text-center">
            Industry updates coming soon. Check back for updates!
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default UpdatesPage;
