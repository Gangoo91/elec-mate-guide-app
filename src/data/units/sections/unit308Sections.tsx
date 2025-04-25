
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections308: Record<string, SectionData> = {
  "1.1": {
    title: "Specialist Electrical Roles",
    description: "Exploring specialized career paths within the electrical industry",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Diverse Specializations in Electrical Work</h2>
        <p>
          The electrical industry offers numerous specialized career paths that allow professionals to focus on particular areas of expertise, often with higher pay and greater job satisfaction.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Renewable Energy Specialist</h3>
        <p>
          As the UK moves toward net-zero carbon emissions, renewable energy specialists are increasingly in demand:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Design, installation, and maintenance of solar PV systems</li>
          <li>Wind turbine electrical systems installation and maintenance</li>
          <li>Battery storage system integration</li>
          <li>Heat pump electrical installations</li>
          <li>Microgeneration certification scheme (MCS) approved installer</li>
        </ul>
        <p className="mt-3">
          <strong>Required qualifications:</strong> Level 3 Electrical qualification plus specialized renewable energy certifications such as those from LCL Awards or City & Guilds.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Electrical Test Engineer</h3>
        <p>
          Specialists in testing and certification of electrical installations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Initial verification of new installations</li>
          <li>Periodic inspection and testing of existing installations</li>
          <li>Fault diagnosis using advanced testing equipment</li>
          <li>Certification and documentation</li>
          <li>Compliance verification with BS 7671 and other regulations</li>
        </ul>
        <p className="mt-3">
          <strong>Required qualifications:</strong> Level 3 Electrical qualification plus 2391 Inspection and Testing certification or equivalent.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Building Management Systems Engineer</h3>
        <p>
          Focus on complex automated control systems in commercial buildings:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Installation and programming of BMS controllers</li>
          <li>Integration of HVAC, lighting, and security systems</li>
          <li>Energy management through smart controls</li>
          <li>Fault diagnosis and system optimization</li>
          <li>Remote monitoring and control setup</li>
        </ul>
        <p className="mt-3">
          <strong>Required qualifications:</strong> Electrical qualification plus specific BMS manufacturer training and networking/IT knowledge.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Hazardous Area Electrician</h3>
        <p>
          Specialists working in environments with explosion risks:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Oil and gas industry installations</li>
          <li>Chemical processing plants</li>
          <li>Pharmaceutical manufacturing</li>
          <li>CompEx certification for safe working in explosive atmospheres</li>
          <li>Installation of Ex-rated equipment</li>
        </ul>
        <p className="mt-3">
          <strong>Required qualifications:</strong> Electrical qualification plus CompEx certification.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Fire Alarm Systems Engineer</h3>
        <p>
          Specialists in life safety fire detection and alarm systems:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Design of systems to BS 5839 standards</li>
          <li>Installation of detection and notification equipment</li>
          <li>Programming and commissioning of fire alarm panels</li>
          <li>Integration with other building systems (door releases, lifts, etc.)</li>
          <li>Testing and certification of systems</li>
        </ul>
        <p className="mt-3">
          <strong>Required qualifications:</strong> Electrical qualification plus specific fire alarm system training and certification.
        </p>
        
        <h2 className="text-xl font-semibold mt-6">Highway Electrical Systems Engineer</h2>
        <p>
          Focus on electrical systems for roads and highways:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Street lighting installation and maintenance</li>
          <li>Traffic signal systems</li>
          <li>Highway technology systems (cameras, variable message signs)</li>
          <li>Electric vehicle charging infrastructure</li>
          <li>Urban traffic management control systems</li>
        </ul>
        <p className="mt-3">
          <strong>Required qualifications:</strong> Electrical qualification plus Highway Electrical Association (HEA) training and certification.
        </p>
        
        <h2 className="text-xl font-semibold mt-6">Data Cabling Specialist</h2>
        <p>
          Experts in structured cabling for data networks:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Installation of Cat5e/Cat6/Cat6a/Cat7 and fiber optic cabling</li>
          <li>Data center infrastructure</li>
          <li>Network testing and certification</li>
          <li>Telecommunications rooms and equipment setup</li>
          <li>Integration with building infrastructures</li>
        </ul>
        <p className="mt-3">
          <strong>Required qualifications:</strong> Electrical knowledge plus specific certifications like BICSI or vendor certifications from Systimax, Panduit, etc.
        </p>
      </div>
    ),
  },
};
