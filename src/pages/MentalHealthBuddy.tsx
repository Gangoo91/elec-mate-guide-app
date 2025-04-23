
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BecomeMate } from "@/components/mental-health/BecomeMate";
import { MatesList } from "@/components/mental-health/MatesList";
import { useAuth } from "@/hooks/useAuth";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MentalHealthBuddy = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <MainLayout>
        <div className="container py-8">
          <PageHeader
            title="Mental Health Mate"
            description="Connect with fellow professionals who understand the unique challenges of the electrical industry."
          />
          
          <Alert className="bg-[#22251e] border-[#FFC900]/20 mt-4">
            <UserCheck className="h-5 w-5 text-[#FFC900]" />
            <AlertTitle className="text-[#FFC900]">Authentication Required</AlertTitle>
            <AlertDescription className="text-[#FFC900]/70">
              You need to be logged in to use the Mental Health Mate feature.
              <div className="mt-4">
                <Button asChild className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90">
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Mental Health Mate"
          description="Connect with fellow professionals who understand the unique challenges of the electrical industry."
        />

        <Tabs defaultValue="find" className="space-y-6">
          <TabsList>
            <TabsTrigger value="find">Find a Mate</TabsTrigger>
            <TabsTrigger value="become">Become a Mate</TabsTrigger>
          </TabsList>

          <TabsContent value="find">
            <MatesList />
          </TabsContent>

          <TabsContent value="become">
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#22251e] p-6 rounded-lg border border-[#FFC900]/20">
                <h3 className="text-xl font-semibold mb-4 text-[#FFC900]">
                  Become a Mental Health Mate
                </h3>
                <p className="text-[#FFC900]/70 mb-6">
                  By becoming a Mental Health Mate, you're offering to be a supportive listener for others in our community. 
                  This means being open to receiving messages from fellow professionals who need someone to talk to.
                </p>
                <BecomeMate />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default MentalHealthBuddy;
