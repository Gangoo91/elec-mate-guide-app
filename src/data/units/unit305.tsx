
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
            title="1.1 Client Requirements Analysis"
            path="/apprentices/study-materials/city-guilds/level-3/305/1.1"
          />
          <SectionContent 
            title="1.2 Regulatory Constraints"
            path="/apprentices/study-materials/city-guilds/level-3/305/1.2"
          />
          <SectionContent 
            title="1.3 Safety and Energy Efficiency Considerations"
            path="/apprentices/study-materials/city-guilds/level-3/305/1.3"
          />
        </div>
      ),
    },
    {
      title: "2. Load Calculations",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 Diversity Factors and Maximum Demand"
            path="/apprentices/study-materials/city-guilds/level-3/305/2.1"
          />
          <SectionContent 
            title="2.2 Cable Sizing Calculations"
            path="/apprentices/study-materials/city-guilds/level-3/305/2.2"
          />
          <SectionContent 
            title="2.3 Voltage Drop Considerations"
            path="/apprentices/study-materials/city-guilds/level-3/305/2.3"
          />
        </div>
      ),
    },
    {
      title: "3. Circuit Planning",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.1 Consumer Unit Arrangements"
            path="/apprentices/study-materials/city-guilds/level-3/305/3.1"
          />
          <SectionContent 
            title="3.2 Circuit Segregation"
            path="/apprentices/study-materials/city-guilds/level-3/305/3.2"
          />
          <SectionContent 
            title="3.3 Protection Device Selection"
            path="/apprentices/study-materials/city-guilds/level-3/305/3.3"
          />
        </div>
      ),
    }
  ],
};
