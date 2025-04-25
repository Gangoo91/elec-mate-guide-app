
import { UnitContent } from './interfaces';

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
        </div>
      ),
    }
  ],
};
