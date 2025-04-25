
import { UnitContent } from './interfaces';
import SectionContent from "@/components/units/SectionContent";

export const unit302: UnitContent = {
  title: "Principles of Electrical Science",
  description: "Advanced electrical theory, including three-phase systems, motors, and complex circuit analysis.",
  sections: [
    {
      title: "1. Three-Phase Systems",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="1.1 Three-Phase Generation and Distribution"
            path="/apprentices/study-materials/city-guilds/level-3/302/1.1"
          />
          <SectionContent 
            title="1.2 Star and Delta Connections"
            path="/apprentices/study-materials/city-guilds/level-3/302/1.2"
          />
          <SectionContent 
            title="1.3 Phase Relationships and Power Calculations"
            path="/apprentices/study-materials/city-guilds/level-3/302/1.3"
          />
        </div>
      ),
    },
    {
      title: "2. Motors and Drives",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 Motor Types and Characteristics"
            path="/apprentices/study-materials/city-guilds/level-3/302/2.1"
          />
          <SectionContent 
            title="2.2 Starting Methods and Speed Control"
            path="/apprentices/study-materials/city-guilds/level-3/302/2.2"
          />
          <SectionContent 
            title="2.3 Motor Protection Requirements"
            path="/apprentices/study-materials/city-guilds/level-3/302/2.3"
          />
        </div>
      ),
    }
  ],
};
