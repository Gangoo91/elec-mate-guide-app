
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { unitData } from '@/data/units';

const UnitContentPage = () => {
  const { unitId } = useParams<{ unitId: string }>();
  const navigate = useNavigate();
  
  // Get unit data based on unitId
  const getUnitData = () => {
    switch(unitId) {
      case '201':
        return unitData.unit201;
      case '202':
        return unitData.unit202;
      case '203':
        return unitData.unit203;
      case '204':
        return unitData.unit204;
      case '210':
        return unitData.unit210;
      default:
        return { title: "Unit Not Found", description: "The requested unit could not be found." };
    }
  };
  
  const unit = getUnitData();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit ${unitId} - ${unit.title || ''}`}
          description={unit.description || ''}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-[#FFC900] font-medium text-xl mb-4">Unit Content</h3>
          <div className="text-[#FFC900]/70">
            {unitId && (
              <p>Detailed content for Unit {unitId} will be displayed here.</p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UnitContentPage;
