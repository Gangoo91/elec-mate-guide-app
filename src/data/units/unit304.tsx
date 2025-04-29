
import { UnitContent } from './interfaces';
import SectionContent from "@/components/units/SectionContent";

export const unit304: UnitContent = {
  title: "Electrical Installations: Inspection, Testing and Commissioning",
  description: "Learn how to inspect, test, and certify electrical installations according to regulations.",
  sections: [
    {
      title: "1. Understand Initial Verification Procedures",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="1.1 Initial Verification Procedures"
            path="/apprentices/study-materials/city-guilds/level-3/304/1.1"
          />
        </div>
      ),
    },
    {
      title: "2. Understand How to Perform Inspection Activities",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="1.2 Visual Inspection Procedures"
            path="/apprentices/study-materials/city-guilds/level-3/304/1.2"
          />
        </div>
      ),
    },
    {
      title: "3. Understand How to Perform Testing Procedures",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 Dead Testing Procedures"
            path="/apprentices/study-materials/city-guilds/level-3/304/2.1"
          />
          <SectionContent 
            title="2.2 Live Testing Procedures"
            path="/apprentices/study-materials/city-guilds/level-3/304/2.2"
          />
        </div>
      ),
    },
    {
      title: "4. Recording Results and Documentation",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.1 Documentation and Certification"
            path="/apprentices/study-materials/city-guilds/level-3/304/3.1"
          />
        </div>
      ),
    },
    {
      title: "5. Commissioning the Installation",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.2 Commissioning Process"
            path="/apprentices/study-materials/city-guilds/level-3/304/3.2"
          />
          <SectionContent 
            title="3.3 Assessment Preparation"
            path="/apprentices/study-materials/city-guilds/level-3/304/3.3"
          />
        </div>
      ),
    }
  ],
};

