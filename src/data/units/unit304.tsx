
import { UnitContent } from './interfaces';
import SectionContent from "@/components/units/SectionContent";

export const unit304: UnitContent = {
  title: "Electrical Installations: Inspection, Testing and Commissioning",
  description: "Learn how to inspect, test, and certify electrical installations according to regulations.",
  sections: [
    {
      title: "1. Initial Verification",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="1.1 What to check before you power up"
            path="/apprentices/study-materials/city-guilds/level-3/304/1.1"
            description="Ensuring compliance with BS 7671, Part 6 through proper verification."
          />
          <SectionContent 
            title="1.2 Documentation requirements"
            path="/apprentices/study-materials/city-guilds/level-3/304/1.2"
            description="Understanding the necessary paperwork for installation verification."
          />
        </div>
      ),
    },
    {
      title: "2. Safe Isolation and Inspection",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 Correct procedure for safe isolation"
            path="/apprentices/study-materials/city-guilds/level-3/304/2.1"
            description="Step-by-step process for safely isolating electrical installations."
          />
          <SectionContent 
            title="2.2 Visual inspection procedures"
            path="/apprentices/study-materials/city-guilds/level-3/304/2.2"
            description="Conducting and recording visual inspections before testing."
          />
        </div>
      ),
    },
    {
      title: "3. Testing Procedures",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.1 Dead Testing"
            path="/apprentices/study-materials/city-guilds/level-3/304/3.1"
            description="Continuity, insulation resistance, and polarity tests."
          />
          <SectionContent 
            title="3.2 Live Testing"
            path="/apprentices/study-materials/city-guilds/level-3/304/3.2"
            description="Earth fault loop impedance, PFC, and RCD testing."
          />
        </div>
      ),
    },
    {
      title: "4. Sequence of Testing",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="4.1 Correct testing sequence"
            path="/apprentices/study-materials/city-guilds/level-3/304/4.1"
            description="From visual inspection through to functional testing."
          />
        </div>
      ),
    },
    {
      title: "5. Certification and Documentation",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="5.1 Forms and certificates"
            path="/apprentices/study-materials/city-guilds/level-3/304/5.1"
            description="Completing EICs, Minor Works Certificates, and test schedules."
          />
          <SectionContent 
            title="5.2 Recording inspection and test results"
            path="/apprentices/study-materials/city-guilds/level-3/304/5.2"
            description="Properly documenting all test findings and observations."
          />
        </div>
      ),
    },
    {
      title: "6. Commissioning the Installation",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="6.1 Final checks and client handover"
            path="/apprentices/study-materials/city-guilds/level-3/304/6.1"
            description="Functional testing and client instructions."
          />
          <SectionContent 
            title="6.2 Maintenance requirements"
            path="/apprentices/study-materials/city-guilds/level-3/304/6.2"
            description="Explaining ongoing maintenance needs to clients."
          />
        </div>
      ),
    }
  ],
};
