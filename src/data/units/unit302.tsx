
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
            description="Understanding V = IR and power formulas: P = VI, P = I²R, P = V²/R"
          />
          <SectionContent 
            title="1.2 Energy Calculations"
            path="/apprentices/study-materials/city-guilds/level-3/302/1.2"
            description="Calculating energy consumption using Energy = Power × Time (kWh)"
          />
          <SectionContent 
            title="1.3 Series and Parallel Circuits"
            path="/apprentices/study-materials/city-guilds/level-3/302/1.3"
            description="How voltage, current, and resistance behave in series vs parallel circuits"
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
            description="How electricity creates magnetism and principles of electromagnets"
          />
          <SectionContent 
            title="2.2 Electromagnetic Induction"
            path="/apprentices/study-materials/city-guilds/level-3/302/2.2"
            description="How moving magnetic fields generate electricity (generators and transformers)"
          />
          <SectionContent 
            title="2.3 Applications"
            path="/apprentices/study-materials/city-guilds/level-3/302/2.3"
            description="Practical applications in motors, generators, relays, and transformers"
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
            description="Understanding how direct current behaves in electrical circuits"
          />
          <SectionContent 
            title="3.2 Batteries and DC Supplies"
            path="/apprentices/study-materials/city-guilds/level-3/302/3.2"
            description="Principles of DC power sources and their characteristics"
          />
          <SectionContent 
            title="3.3 DC Calculations"
            path="/apprentices/study-materials/city-guilds/level-3/302/3.3"
            description="Calculations for resistance, voltage drop, and current in DC circuits"
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
            description="Understanding the fundamental differences between AC and DC"
          />
          <SectionContent 
            title="4.2 Sine Waves"
            path="/apprentices/study-materials/city-guilds/level-3/302/4.2"
            description="Understanding amplitude, frequency, period and waveform characteristics"
          />
          <SectionContent 
            title="4.3 RMS Values"
            path="/apprentices/study-materials/city-guilds/level-3/302/4.3"
            description="Root Mean Square values and calculations (Vrms = 0.707 × Vpeak)"
          />
          <SectionContent 
            title="4.4 Phase Relationships"
            path="/apprentices/study-materials/city-guilds/level-3/302/4.4"
            description="Understanding voltage and current phase relationships in AC circuits"
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
            description="How capacitors store electric charge and their construction"
          />
          <SectionContent 
            title="5.2 Capacitor Behavior"
            path="/apprentices/study-materials/city-guilds/level-3/302/5.2"
            description="Charging and discharging of capacitors in circuits"
          />
          <SectionContent 
            title="5.3 Capacitor Calculations"
            path="/apprentices/study-materials/city-guilds/level-3/302/5.3"
            description="Using formulas like Q = CV for capacitance calculations"
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
            description="How coils store energy in magnetic fields and inductor construction"
          />
          <SectionContent 
            title="6.2 Inductance in AC Circuits"
            path="/apprentices/study-materials/city-guilds/level-3/302/6.2"
            description="Effects of inductance on alternating current circuits"
          />
          <SectionContent 
            title="6.3 Types of Inductance"
            path="/apprentices/study-materials/city-guilds/level-3/302/6.3"
            description="Understanding self-inductance and mutual inductance principles"
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
            description="True Power (Watts), Reactive Power (VARs), Apparent Power (VA)"
          />
          <SectionContent 
            title="7.2 Power Factor"
            path="/apprentices/study-materials/city-guilds/level-3/302/7.2"
            description="Understanding power factor and its calculation (True Power ÷ Apparent Power)"
          />
          <SectionContent 
            title="7.3 Power Factor Correction"
            path="/apprentices/study-materials/city-guilds/level-3/302/7.3"
            description="Methods and importance of improving power factor in electrical systems"
          />
        </div>
      ),
    }
  ],
  assessment: {
    path: "/apprentices/study-materials/city-guilds/level-3/302/assessment",
    title: "Unit 302 Assessment",
    description: "Test your knowledge of electrical science principles"
  }
};
