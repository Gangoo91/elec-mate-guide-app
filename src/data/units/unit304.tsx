
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
            title="What to check before you power up"
            path="/apprentices/study-materials/city-guilds/level-3/304/1.1"
            description="Ensuring compliance with BS 7671, Part 6 through proper verification."
          />
        </div>
      ),
    },
    {
      title: "2. Safe Isolation and Inspection",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="Correct procedure for safe isolation"
            path="/apprentices/study-materials/city-guilds/level-3/304/1.2"
            description="Visual inspection procedures and recording results before testing."
          />
        </div>
      ),
    },
    {
      title: "3. Testing Procedures",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="Dead Testing"
            path="/apprentices/study-materials/city-guilds/level-3/304/2.1"
            description="Continuity, insulation resistance, and polarity tests."
          />
          <SectionContent 
            title="Live Testing"
            path="/apprentices/study-materials/city-guilds/level-3/304/2.2"
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
            title="Correct testing sequence"
            path="/apprentices/study-materials/city-guilds/level-3/304/3.1"
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
            title="Forms and certificates"
            path="/apprentices/study-materials/city-guilds/level-3/304/3.2"
            description="Completing EICs, Minor Works Certificates, and test schedules."
          />
        </div>
      ),
    },
    {
      title: "6. Commissioning the Installation",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="Final checks and client handover"
            path="/apprentices/study-materials/city-guilds/level-3/304/3.3"
            description="Functional testing and client instructions."
          />
        </div>
      ),
    }
  ],
};
