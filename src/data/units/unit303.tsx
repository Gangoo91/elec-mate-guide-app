
import { UnitContent } from './interfaces';
import SectionContent from "@/components/units/SectionContent";

export const unit303: UnitContent = {
  title: "Electrical Installations: Fault Diagnosis and Rectification",
  description: "Develop skills in finding and fixing electrical faults using advanced testing equipment and procedures.",
  sections: [
    {
      title: "1. Fault Diagnosis Techniques",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="1.1 Systematic Troubleshooting Methods"
            path="/apprentices/study-materials/city-guilds/level-3/303/1.1"
          />
          <SectionContent 
            title="1.2 Using Test Equipment Effectively"
            path="/apprentices/study-materials/city-guilds/level-3/303/1.2"
          />
          <SectionContent 
            title="1.3 Interpreting Test Results"
            path="/apprentices/study-materials/city-guilds/level-3/303/1.3"
          />
        </div>
      ),
    },
    {
      title: "2. Common Electrical Faults",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 Open Circuit Conditions"
            path="/apprentices/study-materials/city-guilds/level-3/303/2.1"
          />
          <SectionContent 
            title="2.2 Short Circuits and Earth Faults"
            path="/apprentices/study-materials/city-guilds/level-3/303/2.2"
          />
          <SectionContent 
            title="2.3 High Resistance Connections"
            path="/apprentices/study-materials/city-guilds/level-3/303/2.3"
          />
        </div>
      ),
    },
    {
      title: "3. Fault Rectification Procedures",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.1 Isolation and Lock-off Procedures"
            path="/apprentices/study-materials/city-guilds/level-3/303/3.1"
          />
          <SectionContent 
            title="3.2 Component Replacement Techniques"
            path="/apprentices/study-materials/city-guilds/level-3/303/3.2"
          />
          <SectionContent 
            title="3.3 System Restoration and Post-repair Testing"
            path="/apprentices/study-materials/city-guilds/level-3/303/3.3"
          />
        </div>
      ),
    }
  ],
};
