
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle, HardDrive, Users } from 'lucide-react';
import BackButton from "@/components/navigation/BackButton";

const SafetyPage = () => {
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
            Safety Protocols & Guidelines
          </h1>
          <p className="text-[#FFC900]/80 max-w-2xl mx-auto">
            Essential safety information, regulations, and best practices for electrical work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Personal Safety</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Required PPE Guidelines</li>
                <li>• Safe Working Procedures</li>
                <li>• Emergency Response Plans</li>
                <li>• First Aid Requirements</li>
                <li>• Risk Assessment Methods</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Hazard Prevention</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Electrical Hazard Identification</li>
                <li>• Lock-out/Tag-out Procedures</li>
                <li>• Fire Safety Measures</li>
                <li>• Working at Heights</li>
                <li>• Confined Space Safety</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <HardDrive className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Equipment Safety</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Tool Inspection Guidelines</li>
                <li>• Test Equipment Safety</li>
                <li>• Equipment Certification</li>
                <li>• Maintenance Requirements</li>
                <li>• Safe Storage Practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Site Safety</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Site Access Controls</li>
                <li>• Warning Signs and Barriers</li>
                <li>• Emergency Procedures</li>
                <li>• Communication Protocols</li>
                <li>• Visitor Safety Management</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Key Safety Regulations</h2>
              <div className="space-y-4 text-[#FFC900]/80">
                <p>Essential regulations and standards to follow:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>BS 7671 Requirements for Electrical Installations</li>
                  <li>Health and Safety at Work Act</li>
                  <li>Electricity at Work Regulations</li>
                  <li>Construction Design and Management Regulations</li>
                  <li>Personal Protective Equipment Regulations</li>
                  <li>Working at Height Regulations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default SafetyPage;
