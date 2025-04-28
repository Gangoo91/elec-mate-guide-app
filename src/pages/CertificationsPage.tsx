
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, GraduationCap } from 'lucide-react';

const CertificationsPage = () => {
  const specializations = [
    {
      title: "Industrial Automation",
      certs: ["PLC Programming Certification", "SCADA Systems", "Industrial Networks"],
      path: "/electricians/development/specialisations/automation"
    },
    {
      title: "Renewable Energy",
      certs: ["Solar PV Installation", "MCS Certification", "Energy Storage Systems"],
      path: "/electricians/development/specialisations/renewable"
    },
    {
      title: "Smart Building Technologies",
      certs: ["KNX Certification", "BMS Programming", "IoT Integration"],
      path: "/electricians/development/specialisations/smart-building"
    },
    {
      title: "High Voltage",
      certs: ["HV Safety Management", "Protection Coordination", "CompEx Certification"],
      path: "/electricians/development/specialisations/highvoltage"
    },
    {
      title: "Data Center Power",
      certs: ["Data Center Operations", "Critical Systems Management", "Power Distribution"],
      path: "/electricians/development/specialisations/datacenter"
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
                      <Link to={spec.path}>
                        <Button variant="outline" size="sm">
                          <Book className="mr-2 h-4 w-4" />
                          View Path
                        </Button>
                      </Link>
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
                <h2 className="text-xl font-semibold text-[#FFC900]">Upcoming Course Content</h2>
                <GraduationCap className="h-6 w-6 text-[#FFC900]" />
              </div>
              <p className="text-[#FFC900]/70 mb-4">
                We're building comprehensive certification preparation programs for each specialization. 
                Our structured learning paths will include:
              </p>
              <ul className="space-y-2 text-[#FFC900]/70">
                <li>• Detailed study materials and practice exams</li>
                <li>• Video tutorials and demonstrations</li>
                <li>• Hands-on practical exercises</li>
                <li>• Industry expert guidance</li>
                <li>• Test-taking strategies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default CertificationsPage;
