
import { UnitContent } from './interfaces';
import SectionContent from "@/components/units/SectionContent";

export const unit308: UnitContent = {
  title: "Career Awareness in Building Services Engineering",
  description: "Explore career opportunities and professional development in electrical engineering.",
  sections: [
    {
      title: "1. Career Pathways",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="1.1 Specialist Electrical Roles"
            path="/apprentices/study-materials/city-guilds/level-3/308/1.1"
          />
          <SectionContent 
            title="1.2 Management Positions"
            path="/apprentices/study-materials/city-guilds/level-3/308/1.2"
          />
          <SectionContent 
            title="1.3 Self-employment Options"
            path="/apprentices/study-materials/city-guilds/level-3/308/1.3"
          />
        </div>
      ),
    },
    {
      title: "2. Professional Development",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 Continuing Professional Development"
            path="/apprentices/study-materials/city-guilds/level-3/308/2.1"
          />
          <SectionContent 
            title="2.2 Advanced Qualifications"
            path="/apprentices/study-materials/city-guilds/level-3/308/2.2"
          />
          <SectionContent 
            title="2.3 Professional Body Membership"
            path="/apprentices/study-materials/city-guilds/level-3/308/2.3"
          />
        </div>
      ),
    },
    {
      title: "3. Industry Awareness",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.1 Current Industry Trends"
            path="/apprentices/study-materials/city-guilds/level-3/308/3.1"
          />
          <SectionContent 
            title="3.2 Technological Developments"
            path="/apprentices/study-materials/city-guilds/level-3/308/3.2"
          />
          <SectionContent 
            title="3.3 Regulatory Changes and Sustainable Practices"
            path="/apprentices/study-materials/city-guilds/level-3/308/3.3"
          />
        </div>
      ),
    }
  ],
};
