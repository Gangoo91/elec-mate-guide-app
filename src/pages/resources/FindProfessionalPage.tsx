
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, ExternalLink, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FindProfessionalPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Find a Mental Health Professional"
          description="Resources to help you find qualified mental health support"
        />
        
        <div className="mb-6 bg-[#22251e] border border-[#FFC900]/20 p-4 rounded-md">
          <h2 className="text-[#FFC900] text-lg font-medium mb-2">Looking for the right professional</h2>
          <p className="text-[#FFC900]/90">
            Finding the right mental health professional is an important step in your wellbeing journey. 
            The directories below can help you locate qualified therapists, counsellors, and other 
            mental health practitioners who may be able to support you with your specific needs.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                British Association for Counselling and Psychotherapy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/90 mb-4">
                The BACP is the largest professional body for counselling and psychotherapy in the UK. 
                Their directory allows you to search for accredited therapists who meet their professional standards.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Verified Professionals</Badge>
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">UK-Wide Coverage</Badge>
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Search by Location</Badge>
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Filter by Specialization</Badge>
              </div>
              <Button 
                className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                onClick={() => window.open("https://www.bacp.co.uk/search/Therapists", "_blank")}
              >
                Find a Therapist
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                UK Council for Psychotherapy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/90 mb-4">
                The UKCP is a professional body for psychotherapists, maintaining standards for training 
                and ethics. Their directory helps connect individuals with qualified psychotherapists 
                who can provide specialized support.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Accredited Members</Badge>
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Range of Therapies</Badge>
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">In-Person & Online</Badge>
              </div>
              <Button 
                className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                onClick={() => window.open("https://www.psychotherapy.org.uk/find-a-therapist/", "_blank")}
              >
                Search Directory
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Handshake className="h-5 w-5" />
                Counselling Directory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/90 mb-4">
                The Counselling Directory is a comprehensive database of counsellors and therapists across the UK.
                It provides detailed profiles, areas of specialization, and contact information to help you find
                a professional that matches your needs.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#FFC900]/80" />
                  <span className="text-[#FFC900]/80">Search by postcode to find local support</span>
                </div>
              </div>
              <Button 
                className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                onClick={() => window.open("https://www.counselling-directory.org.uk/", "_blank")}
              >
                Visit Directory
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Phone className="h-5 w-5" />
                NHS Mental Health Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/90 mb-4">
                The NHS provides various mental health services, including talking therapies through the 
                Improving Access to Psychological Therapies (IAPT) program. You can self-refer or speak to 
                your GP for a referral to these services.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#FFC900]/80" />
                  <span className="text-[#FFC900]/80">Free NHS services</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#FFC900]/80" />
                  <span className="text-[#FFC900]/80">Available throughout the UK</span>
                </div>
              </div>
              <Button 
                className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                onClick={() => window.open("https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/", "_blank")}
              >
                Find NHS Services
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default FindProfessionalPage;
