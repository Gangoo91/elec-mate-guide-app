
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Book, AlertTriangle, Zap } from 'lucide-react';
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
            Stay informed with the latest electrical industry news, regulations, and developments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Regulation Updates</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• BS 7671 Amendments</li>
                <li>• Building Regulations</li>
                <li>• Safety Standards</li>
                <li>• Certification Requirements</li>
                <li>• Compliance Guidelines</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Book className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Training & Development</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• New Qualifications</li>
                <li>• Course Updates</li>
                <li>• CPD Opportunities</li>
                <li>• Industry Events</li>
                <li>• Workshops and Seminars</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Safety Alerts</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Product Recalls</li>
                <li>• Safety Notices</li>
                <li>• Incident Reports</li>
                <li>• Best Practice Updates</li>
                <li>• Risk Assessments</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Technology Trends</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Smart Systems</li>
                <li>• Renewable Energy</li>
                <li>• EV Infrastructure</li>
                <li>• Energy Storage</li>
                <li>• IoT Applications</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Industry Resources</h2>
              <div className="space-y-4 text-[#FFC900]/80">
                <p>Useful resources for staying updated:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Professional body websites</li>
                  <li>Industry publications</li>
                  <li>Government legislation portals</li>
                  <li>Manufacturer updates</li>
                  <li>Trade association newsletters</li>
                  <li>Online forums and communities</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default UpdatesPage;
