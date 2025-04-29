
import { UnitContent } from './interfaces';
import SectionContent from "@/components/units/SectionContent";

export const unit305: UnitContent = {
  title: "Electrical Systems Design",
  description: "Design electrical installations for buildings and structures, including load calculations and circuit planning.",
  sections: [
    {
      title: "1. Design Principles",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="1.1 Electrical Installation Design Principles"
            description="Understanding how to plan circuits and choose supply arrangements"
            path="/apprentices/study-materials/city-guilds/level-3/305/1.1"
          />
        </div>
      ),
    },
    {
      title: "2. Selection of Electrical Equipment",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 Selection of Electrical Equipment"
            description="Guidelines for selecting appropriate protective devices, cables, and accessories"
            path="/apprentices/study-materials/city-guilds/level-3/305/2.1"
          />
        </div>
      ),
    },
    {
      title: "3. Cable Sizing and Protection",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.1 Cable Sizing and Protection"
            description="Methods for calculating current-carrying capacity, voltage drop, and protection"
            path="/apprentices/study-materials/city-guilds/level-3/305/3.1"
          />
        </div>
      ),
    },
    {
      title: "4. Discrimination and Coordination",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="4.1 Discrimination and Coordination"
            description="Principles of protective device coordination and nuisance tripping prevention"
            path="/apprentices/study-materials/city-guilds/level-3/305/4.1"
          />
        </div>
      ),
    },
    {
      title: "5. Earthing and Bonding",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="5.1 Earthing and Bonding"
            description="Requirements for main protective bonding and supplementary bonding"
            path="/apprentices/study-materials/city-guilds/level-3/305/5.1"
          />
        </div>
      ),
    },
    {
      title: "6. Health and Safety and Building Regulations",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="6.1 Health and Safety and Building Regulations"
            description="Regulatory requirements for electrical installations"
            path="/apprentices/study-materials/city-guilds/level-3/305/6.1"
          />
        </div>
      ),
    }
  ],
  assessment: {
    path: "/apprentices/study-materials/city-guilds/level-3/305/assessment",
    title: "Unit 305 Assessment",
    description: "Test your knowledge of electrical systems design"
  }
};

export default unit305;
