
import { UnitContent } from './interfaces';
import SectionContent from "@/components/units/SectionContent";

export const unit301: UnitContent = {
  title: "Environmental Technology Systems",
  description: "Learn about renewable energy technologies, sustainable electrical installations, and environmental considerations.",
  sections: [
    {
      title: "1. Introduction to Environmental Technology",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="1.1 Renewable Energy Systems"
            path="/apprentices/study-materials/city-guilds/level-3/301/1.1"
          />
          <SectionContent 
            title="1.2 Energy Efficiency Measures"
            path="/apprentices/study-materials/city-guilds/level-3/301/1.2"
          />
          <SectionContent 
            title="1.3 Sustainability in Electrical Installations"
            path="/apprentices/study-materials/city-guilds/level-3/301/1.3"
          />
        </div>
      ),
    },
    {
      title: "2. Solar Photovoltaic Installation",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 System Components Overview"
            path="/apprentices/study-materials/city-guilds/level-3/301/2.1"
          />
          <SectionContent 
            title="2.2 Installation Requirements"
            path="/apprentices/study-materials/city-guilds/level-3/301/2.2"
          />
          <SectionContent 
            title="2.3 Maintenance and Troubleshooting"
            path="/apprentices/study-materials/city-guilds/level-3/301/2.3"
          />
        </div>
      ),
    },
    {
      title: "3. Heat Pump Technologies",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.1 Air Source Heat Pumps (ASHP)"
            path="/apprentices/study-materials/city-guilds/level-3/301/3.1"
          />
          <SectionContent 
            title="3.2 Ground Source Heat Pumps (GSHP)"
            path="/apprentices/study-materials/city-guilds/level-3/301/3.2"
          />
          <SectionContent 
            title="3.3 Electrical Requirements for Heat Pumps"
            path="/apprentices/study-materials/city-guilds/level-3/301/3.3"
          />
        </div>
      ),
    },
    {
      title: "4. Wind Energy Systems",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="4.1 Small-Scale Wind Turbine Technologies"
            path="/apprentices/study-materials/city-guilds/level-3/301/4.1"
          />
          <SectionContent 
            title="4.2 Electrical Integration of Wind Systems"
            path="/apprentices/study-materials/city-guilds/level-3/301/4.2"
          />
        </div>
      ),
    },
    {
      title: "5. Energy Storage Systems",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="5.1 Battery Storage Technologies"
            path="/apprentices/study-materials/city-guilds/level-3/301/5.1"
          />
          <SectionContent 
            title="5.2 Integration with Renewable Sources"
            path="/apprentices/study-materials/city-guilds/level-3/301/5.2"
          />
        </div>
      ),
    }
  ],
};
