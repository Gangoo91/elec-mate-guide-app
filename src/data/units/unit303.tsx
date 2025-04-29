
import { UnitContent } from './interfaces';
import SectionContent from "@/components/units/SectionContent";

export const unit303: UnitContent = {
  title: "Electrical Installations: Fault Diagnosis and Rectification",
  description: "Develop skills in finding and fixing electrical faults using advanced testing equipment and procedures.",
  sections: [
    {
      title: "1. Types of Electrical Faults",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="1.1 Short Circuits"
            path="/apprentices/study-materials/city-guilds/level-3/303/1.1"
          />
          <SectionContent 
            title="1.2 Open Circuits"
            path="/apprentices/study-materials/city-guilds/level-3/303/1.2"
          />
          <SectionContent 
            title="1.3 Earth Faults"
            path="/apprentices/study-materials/city-guilds/level-3/303/1.3"
          />
          <SectionContent 
            title="1.4 Overloads and Equipment Failures"
            path="/apprentices/study-materials/city-guilds/level-3/303/1.4"
          />
          <SectionContent 
            title="1.5 High Resistance Connections"
            path="/apprentices/study-materials/city-guilds/level-3/303/1.5"
          />
        </div>
      ),
    },
    {
      title: "2. Fault Diagnosis Techniques",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 Systematic Troubleshooting Methods"
            path="/apprentices/study-materials/city-guilds/level-3/303/2.1"
          />
          <SectionContent 
            title="2.2 Using Test Equipment Effectively"
            path="/apprentices/study-materials/city-guilds/level-3/303/2.2"
          />
          <SectionContent 
            title="2.3 Interpreting Test Results"
            path="/apprentices/study-materials/city-guilds/level-3/303/2.3"
          />
        </div>
      ),
    },
    {
      title: "3. Safe Working Procedures",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.1 Safe Isolation Process"
            path="/apprentices/study-materials/city-guilds/level-3/303/3.1"
          />
          <SectionContent 
            title="3.2 Risk Assessment"
            path="/apprentices/study-materials/city-guilds/level-3/303/3.2"
          />
          <SectionContent 
            title="3.3 Circuit Identification and Isolation"
            path="/apprentices/study-materials/city-guilds/level-3/303/3.3"
          />
          <SectionContent 
            title="3.4 Lock-off Devices and Warning Signs"
            path="/apprentices/study-materials/city-guilds/level-3/303/3.4"
          />
        </div>
      ),
    },
    {
      title: "4. Recording and Reporting",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="4.1 Recording Fault Diagnosis Findings"
            path="/apprentices/study-materials/city-guilds/level-3/303/4.1"
          />
          <SectionContent 
            title="4.2 Completing Required Paperwork"
            path="/apprentices/study-materials/city-guilds/level-3/303/4.2"
          />
          <SectionContent 
            title="4.3 Communication with Clients and Managers"
            path="/apprentices/study-materials/city-guilds/level-3/303/4.3"
          />
        </div>
      ),
    },
    {
      title: "5. Rectification (Fixing Faults)",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="5.1 Repair Methods for Different Faults"
            path="/apprentices/study-materials/city-guilds/level-3/303/5.1"
          />
          <SectionContent 
            title="5.2 Post-Rectification Testing"
            path="/apprentices/study-materials/city-guilds/level-3/303/5.2"
          />
        </div>
      ),
    }
  ],
};
