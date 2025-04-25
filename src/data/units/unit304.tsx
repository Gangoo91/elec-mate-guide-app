
import { UnitContent } from './interfaces';
import SectionContent from "@/components/units/SectionContent";

export const unit304: UnitContent = {
  title: "Electrical Installations: Inspection, Testing and Commissioning",
  description: "Learn how to test, inspect, and certify electrical installations according to regulations.",
  sections: [
    {
      title: "1. Inspection Procedures",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="1.1 Initial Verification Requirements"
            path="/apprentices/study-materials/city-guilds/level-3/304/1.1"
          />
          <SectionContent 
            title="1.2 Periodic Inspection Methodologies"
            path="/apprentices/study-materials/city-guilds/level-3/304/1.2"
          />
          <SectionContent 
            title="1.3 Common Installation Defects"
            path="/apprentices/study-materials/city-guilds/level-3/304/1.3"
          />
        </div>
      ),
    },
    {
      title: "2. Testing Techniques",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 Continuity and Insulation Resistance Testing"
            path="/apprentices/study-materials/city-guilds/level-3/304/2.1"
          />
          <SectionContent 
            title="2.2 Earth Fault Loop Impedance Testing"
            path="/apprentices/study-materials/city-guilds/level-3/304/2.2"
          />
          <SectionContent 
            title="2.3 RCD Testing and Polarity Checks"
            path="/apprentices/study-materials/city-guilds/level-3/304/2.3"
          />
        </div>
      ),
    },
    {
      title: "3. Commissioning Process",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.1 Pre-commissioning Checks"
            path="/apprentices/study-materials/city-guilds/level-3/304/3.1"
          />
          <SectionContent 
            title="3.2 Functional Testing Procedures"
            path="/apprentices/study-materials/city-guilds/level-3/304/3.2"
          />
          <SectionContent 
            title="3.3 Documentation and Certification"
            path="/apprentices/study-materials/city-guilds/level-3/304/3.3"
          />
        </div>
      ),
    }
  ],
};
