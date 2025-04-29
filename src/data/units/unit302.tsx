
import { UnitContent } from './interfaces';
import SectionContent from "@/components/units/SectionContent";

export const unit302: UnitContent = {
  title: "Principles of Electrical Science",
  description: "Advanced electrical theory, including electrical fundamentals, electromagnetic principles, DC/AC theory, capacitance, inductance, and power calculations.",
  sections: [
    {
      title: "1. Basic Electrical Theory",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="1.1 Ohm's Law and Power Formulas"
            path="/apprentices/study-materials/city-guilds/level-3/302/1.1"
          />
          <SectionContent 
            title="1.2 Energy Calculations"
            path="/apprentices/study-materials/city-guilds/level-3/302/1.2"
          />
          <SectionContent 
            title="1.3 Series and Parallel Circuits"
            path="/apprentices/study-materials/city-guilds/level-3/302/1.3"
          />
        </div>
      ),
    },
    {
      title: "2. Electromagnetic Effects",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 Magnetism and Electromagnetism"
            path="/apprentices/study-materials/city-guilds/level-3/302/2.1"
          />
          <SectionContent 
            title="2.2 Electromagnetic Induction"
            path="/apprentices/study-materials/city-guilds/level-3/302/2.2"
          />
          <SectionContent 
            title="2.3 Applications"
            path="/apprentices/study-materials/city-guilds/level-3/302/2.3"
          />
        </div>
      ),
    },
    {
      title: "3. DC Theory",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.1 DC Circuit Behavior"
            path="/apprentices/study-materials/city-guilds/level-3/302/3.1"
          />
          <SectionContent 
            title="3.2 Batteries and DC Supplies"
            path="/apprentices/study-materials/city-guilds/level-3/302/3.2"
          />
          <SectionContent 
            title="3.3 DC Calculations"
            path="/apprentices/study-materials/city-guilds/level-3/302/3.3"
          />
        </div>
      ),
    },
    {
      title: "4. AC Theory",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="4.1 AC vs DC"
            path="/apprentices/study-materials/city-guilds/level-3/302/4.1"
          />
          <SectionContent 
            title="4.2 Sine Waves"
            path="/apprentices/study-materials/city-guilds/level-3/302/4.2"
          />
          <SectionContent 
            title="4.3 RMS Values"
            path="/apprentices/study-materials/city-guilds/level-3/302/4.3"
          />
          <SectionContent 
            title="4.4 Phase Relationships"
            path="/apprentices/study-materials/city-guilds/level-3/302/4.4"
          />
        </div>
      ),
    },
    {
      title: "5. Capacitance",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="5.1 Capacitor Principles"
            path="/apprentices/study-materials/city-guilds/level-3/302/5.1"
          />
          <SectionContent 
            title="5.2 Capacitor Behavior"
            path="/apprentices/study-materials/city-guilds/level-3/302/5.2"
          />
          <SectionContent 
            title="5.3 Capacitor Calculations"
            path="/apprentices/study-materials/city-guilds/level-3/302/5.3"
          />
        </div>
      ),
    },
    {
      title: "6. Inductance",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="6.1 Inductor Principles"
            path="/apprentices/study-materials/city-guilds/level-3/302/6.1"
          />
          <SectionContent 
            title="6.2 Inductance in AC Circuits"
            path="/apprentices/study-materials/city-guilds/level-3/302/6.2"
          />
          <SectionContent 
            title="6.3 Types of Inductance"
            path="/apprentices/study-materials/city-guilds/level-3/302/6.3"
          />
        </div>
      ),
    },
    {
      title: "7. Power in AC Circuits",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="7.1 Power Types"
            path="/apprentices/study-materials/city-guilds/level-3/302/7.1"
          />
          <SectionContent 
            title="7.2 Power Factor"
            path="/apprentices/study-materials/city-guilds/level-3/302/7.2"
          />
          <SectionContent 
            title="7.3 Power Factor Correction"
            path="/apprentices/study-materials/city-guilds/level-3/302/7.3"
          />
        </div>
      ),
    }
  ],
};
