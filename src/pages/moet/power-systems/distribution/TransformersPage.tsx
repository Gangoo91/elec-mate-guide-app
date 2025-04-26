
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Bolt } from "lucide-react"; // Replaced Transformer with Bolt

const TransformersPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/distribution');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Distribution Transformers"
          description="Types, applications, and maintenance of distribution transformers"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Types of Distribution Transformers">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Transformer Classifications</h3>
              <p className="text-[#FFC900]/80">Common types of distribution transformers:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Single-phase transformers</li>
                <li>Three-phase transformers</li>
                <li>Auto-transformers</li>
                <li>Dry-type transformers</li>
                <li>Oil-immersed transformers</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Transformer Installation">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Installation Methods</h3>
              <p className="text-[#FFC900]/80">Different mounting configurations:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Pole-mounted installations</li>
                <li>Pad-mounted configurations</li>
                <li>Underground vault installations</li>
                <li>Indoor substations</li>
                <li>Compact substations</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Maintenance and Testing">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Regular Maintenance</h3>
              <p className="text-[#FFC900]/80">Essential maintenance procedures:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Oil testing and filtering</li>
                <li>Insulation resistance testing</li>
                <li>Temperature monitoring</li>
                <li>Tap changer maintenance</li>
                <li>Bushing inspections</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Protection Systems">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Transformer Protection</h3>
              <p className="text-[#FFC900]/80">Protection devices and systems:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Buchholz relays</li>
                <li>Temperature sensors</li>
                <li>Pressure relief devices</li>
                <li>Overcurrent protection</li>
                <li>Differential protection</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default TransformersPage;
