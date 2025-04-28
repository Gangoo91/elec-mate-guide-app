
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, GraduationCap, ExternalLink } from 'lucide-react';

const CertificationsPage = () => {
  const specializations = [
    {
      title: "Industrial Automation",
      certs: [
        "PLC Programming (Siemens SIMATIC)",
        "Allen Bradley PLC Certification",
        "SCADA Systems Expert",
        "Industrial Networks Specialist",
        "CompEx Certification"
      ],
      path: "/electricians/development/specialisations/automation",
      provider: "https://www.siemens.com/global/en/products/automation/training.html"
    },
    {
      title: "Renewable Energy",
      certs: [
        "Solar PV Design & Installation",
        "MCS Certification",
        "Energy Storage Systems",
        "Smart Grid Integration",
        "EV Charging Infrastructure"
      ],
      path: "/electricians/development/specialisations/renewable",
      provider: "https://mcscertified.com/become-certified/"
    },
    {
      title: "Smart Building Technologies",
      certs: [
        "KNX Partner Certification",
        "BMS Programming Expert",
        "IoT Systems Integration",
        "Building Automation",
        "Smart Home Designer"
      ],
      path: "/electricians/development/specialisations/smart-building",
      provider: "https://www.knx.org/knx-en/for-professionals/training/"
    },
    {
      title: "High Voltage",
      certs: [
        "HV Safety Management",
        "Protection & Coordination",
        "CompEx HV Certification",
        "Switchgear Operations",
        "Network Design"
      ],
      path: "/electricians/development/specialisations/highvoltage",
      provider: "https://www.compex.org.uk/"
    },
    {
      title: "Data Center Power",
      certs: [
        "Data Center Operations",
        "Critical Systems Expert",
        "Power Distribution Specialist",
        "Cooling Infrastructure",
        "Emergency Systems Management"
      ],
      path: "/electricians/development/specialisations/datacenter",
      provider: "https://www.datacenterdynamics.com/en/training/"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <BackButton />
        <PageHeader 
          title="Certification Prep"
          description="Prepare for your electrical certification with structured learning paths and practice tests."
        />

        <div className="grid gap-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Specialization Certifications</h2>
              <div className="grid gap-4">
                {specializations.map((spec, index) => (
                  <div key={index} className="border border-[#FFC900]/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-[#FFC900]">{spec.title}</h3>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(spec.provider, '_blank')}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Training
                        </Button>
                        <Link to={spec.path}>
                          <Button variant="outline" size="sm">
                            <Book className="mr-2 h-4 w-4" />
                            View Path
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {spec.certs.map((cert, idx) => (
                        <li key={idx} className="text-[#FFC900]/70">• {cert}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#FFC900]">Course Content</h2>
                <GraduationCap className="h-6 w-6 text-[#FFC900]" />
              </div>
              <p className="text-[#FFC900]/70 mb-4">
                Our comprehensive certification preparation programs include:
              </p>
              <ul className="space-y-2 text-[#FFC900]/70">
                <li>• Interactive learning modules with real-world examples</li>
                <li>• Hands-on practical exercises and simulations</li>
                <li>• Video tutorials and demonstrations</li>
                <li>• Practice exams with detailed explanations</li>
                <li>• Industry expert guidance and mentorship</li>
                <li>• Study guides and reference materials</li>
                <li>• Regular progress assessments</li>
                <li>• Test-taking strategies and tips</li>
              </ul>
              <div className="mt-6 p-4 bg-[#FFC900]/10 rounded-lg">
                <p className="text-[#FFC900]">
                  Looking to start your certification journey? Visit the specific specialization pages for detailed information about requirements, study materials, and preparation resources.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default CertificationsPage;
