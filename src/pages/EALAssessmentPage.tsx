
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EALAssessmentPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="EAL Assessment Preparation"
          description="Materials to help you prepare for EAL electrical qualification assessments"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          <Tabs defaultValue="level2" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="level2">Level 2</TabsTrigger>
              <TabsTrigger value="level3">Level 3</TabsTrigger>
            </TabsList>
            <TabsContent value="level2" className="mt-6">
              <Card className="bg-[#22251e] border-[#FFC900]/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Level 2 Assessment Resources</h2>
                  <p className="text-[#FFC900]/80 mb-6">
                    Prepare for your Level 2 EAL assessments with our comprehensive resources covering 
                    all key examination topics.
                  </p>
                  <p className="text-[#FFC900]/70 text-sm italic">
                    Assessment materials are coming soon. Check back for practice tests and study guides.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="level3" className="mt-6">
              <Card className="bg-[#22251e] border-[#FFC900]/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Level 3 Assessment Resources</h2>
                  <p className="text-[#FFC900]/80 mb-6">
                    Advanced preparation materials for your Level 3 EAL assessments including diagnostic tests
                    and focused exam preparation.
                  </p>
                  <p className="text-[#FFC900]/70 text-sm italic">
                    Assessment materials are coming soon. Check back for practice tests and study guides.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALAssessmentPage;
