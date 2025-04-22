
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, GraduationCap, Award } from "lucide-react";

const StudyMaterialsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <BackButton />
        <PageHeader 
          title="Study Materials"
          description="Comprehensive study resources for UK electrical qualifications, including NVQ Level 2, Level 3, and HNC materials."
        />
        
        <Tabs defaultValue="nvq2" className="space-y-6">
          <TabsList className="bg-[#22251e] border-[#FFC900]/20">
            <TabsTrigger value="nvq2" className="text-[#FFC900] data-[state=active]:bg-[#FFC900] data-[state=active]:text-black">
              NVQ Level 2
            </TabsTrigger>
            <TabsTrigger value="nvq3" className="text-[#FFC900] data-[state=active]:bg-[#FFC900] data-[state=active]:text-black">
              NVQ Level 3
            </TabsTrigger>
            <TabsTrigger value="hnc" className="text-[#FFC900] data-[state=active]:bg-[#FFC900] data-[state=active]:text-black">
              HNC
            </TabsTrigger>
          </TabsList>

          {/* NVQ Level 2 Content */}
          <TabsContent value="nvq2" className="space-y-4">
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardHeader>
                <CardTitle className="text-[#FFC900] flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  NVQ Level 2 Electrical Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="text-[#FFC900]">
                  <AccordionItem value="core-units">
                    <AccordionTrigger>Core Units</AccordionTrigger>
                    <AccordionContent className="text-[#FFC900]/80">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Health and Safety in Electrical Installation</li>
                        <li>Environmental Protection Measures</li>
                        <li>Installation of Wiring Systems and Enclosures</li>
                        <li>BS 7671 Requirements - Essential Regulations</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="practical">
                    <AccordionTrigger>Practical Assessments</AccordionTrigger>
                    <AccordionContent className="text-[#FFC900]/80">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Circuit Installation Techniques</li>
                        <li>Cable Selection and Sizing</li>
                        <li>Earthing and Bonding Requirements</li>
                        <li>Testing and Verification Methods</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* NVQ Level 3 Content with AM2 */}
          <TabsContent value="nvq3" className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardHeader>
                <CardTitle className="text-[#FFC900] flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  NVQ Level 3 Advanced Electrical
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="text-[#FFC900]">
                  <AccordionItem value="advanced-units">
                    <AccordionTrigger>Advanced Units</AccordionTrigger>
                    <AccordionContent className="text-[#FFC900]/80">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Complex Circuit Designs</li>
                        <li>Electrical Science and Principles</li>
                        <li>Inspection and Testing Procedures</li>
                        <li>Fault Diagnosis and Rectification</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="regulations">
                    <AccordionTrigger>Regulations and Standards</AccordionTrigger>
                    <AccordionContent className="text-[#FFC900]/80">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Advanced BS 7671 Applications</li>
                        <li>Special Locations Requirements</li>
                        <li>Design Considerations</li>
                        <li>Documentation and Certification</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* AM2 Card */}
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardHeader>
                <CardTitle className="text-[#FFC900] flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  AM2 Assessment Preparation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="text-[#FFC900]">
                  <AccordionItem value="practical-tasks">
                    <AccordionTrigger>Assessment Tasks</AccordionTrigger>
                    <AccordionContent className="text-[#FFC900]/80">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Installation of Electrical Systems</li>
                        <li>Safe Isolation Procedures</li>
                        <li>Inspection and Testing</li>
                        <li>Fault Finding Exercises</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="prep-resources">
                    <AccordionTrigger>Study Resources</AccordionTrigger>
                    <AccordionContent className="text-[#FFC900]/80">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Practice Test Questions</li>
                        <li>Assessment Centre Guidelines</li>
                        <li>Common Pitfalls and Tips</li>
                        <li>Time Management Strategies</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* HNC Content */}
          <TabsContent value="hnc" className="space-y-4">
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardHeader>
                <CardTitle className="text-[#FFC900] flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Higher National Certificate in Electrical Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="text-[#FFC900]">
                  <AccordionItem value="core-modules">
                    <AccordionTrigger>Core Modules</AccordionTrigger>
                    <AccordionContent className="text-[#FFC900]/80">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Electrical and Electronic Principles</li>
                        <li>Mathematics for Engineering</li>
                        <li>Project Design and Implementation</li>
                        <li>Engineering Science</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="specialist-units">
                    <AccordionTrigger>Specialist Units</AccordionTrigger>
                    <AccordionContent className="text-[#FFC900]/80">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Power Systems and Transmission</li>
                        <li>Industrial Automation</li>
                        <li>Renewable Energy Systems</li>
                        <li>Electrical Installation Design</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default StudyMaterialsPage;
