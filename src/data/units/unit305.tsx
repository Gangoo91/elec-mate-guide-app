
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
          <SectionContent 
            title="1.2 Supply Arrangements"
            description="Types of supply systems including TN-S, TN-C-S, and TT systems"
            path="/apprentices/study-materials/city-guilds/level-3/305/1.2"
          />
          <SectionContent 
            title="1.3 Circuit Design"
            description="Designing lighting, socket outlets, and special circuits"
            path="/apprentices/study-materials/city-guilds/level-3/305/1.3"
          />
        </div>
      ),
    },
    {
      title: "2. Selection of Electrical Equipment",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="2.1 Protective Devices"
            description="Selection of MCBs, RCDs, RCBOs"
            path="/apprentices/study-materials/city-guilds/level-3/305/2.1"
          />
          <SectionContent 
            title="2.2 Cables and Cable Types"
            description="Selection of T&E, SWA, MICC and other cable types"
            path="/apprentices/study-materials/city-guilds/level-3/305/2.2"
          />
          <SectionContent 
            title="2.3 Accessories and Distribution Boards"
            description="Selection of switches, sockets, junction boxes, and distribution boards"
            path="/apprentices/study-materials/city-guilds/level-3/305/2.3"
          />
          <SectionContent 
            title="2.4 Ingress Protection Ratings"
            description="Understanding and applying IP ratings in different environments"
            path="/apprentices/study-materials/city-guilds/level-3/305/2.4"
          />
        </div>
      ),
    },
    {
      title: "3. Cable Sizing and Protection",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="3.1 Current-Carrying Capacity"
            description="Calculating current-carrying capacity (Iz) for cables"
            path="/apprentices/study-materials/city-guilds/level-3/305/3.1"
          />
          <SectionContent 
            title="3.2 Voltage Drop Calculations"
            description="Calculating voltage drop and ensuring compliance with regulations"
            path="/apprentices/study-materials/city-guilds/level-3/305/3.2"
          />
          <SectionContent 
            title="3.3 Correction Factors"
            description="Applying correction factors for ambient temperature, grouping, and insulation"
            path="/apprentices/study-materials/city-guilds/level-3/305/3.3"
          />
          <SectionContent 
            title="3.4 Adiabatic Equation"
            description="Using the adiabatic equation for earth fault protection"
            path="/apprentices/study-materials/city-guilds/level-3/305/3.4"
          />
        </div>
      ),
    },
    {
      title: "4. Discrimination and Coordination",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="4.1 Principles of Discrimination"
            description="Understanding how protective devices should coordinate during faults"
            path="/apprentices/study-materials/city-guilds/level-3/305/4.1"
          />
          <SectionContent 
            title="4.2 Nuisance Tripping Prevention"
            description="Strategies for preventing nuisance tripping in electrical installations"
            path="/apprentices/study-materials/city-guilds/level-3/305/4.2"
          />
        </div>
      ),
    },
    {
      title: "5. Earthing and Bonding",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="5.1 Main Protective Bonding"
            description="Requirements and design for main protective bonding"
            path="/apprentices/study-materials/city-guilds/level-3/305/5.1"
          />
          <SectionContent 
            title="5.2 Supplementary Bonding"
            description="When and how to implement supplementary bonding"
            path="/apprentices/study-materials/city-guilds/level-3/305/5.2"
          />
          <SectionContent 
            title="5.3 Earthing Conductors Sizing"
            description="Calculations and requirements for sizing earthing conductors"
            path="/apprentices/study-materials/city-guilds/level-3/305/5.3"
          />
        </div>
      ),
    },
    {
      title: "6. Health and Safety and Building Regulations",
      content: (
        <div className="space-y-6">
          <SectionContent 
            title="6.1 BS 7671 Wiring Regulations"
            description="Compliance with the current edition of wiring regulations"
            path="/apprentices/study-materials/city-guilds/level-3/305/6.1"
          />
          <SectionContent 
            title="6.2 Building Regulations"
            description="Meeting requirements of Part P, Part L and other regulations"
            path="/apprentices/study-materials/city-guilds/level-3/305/6.2"
          />
          <SectionContent 
            title="6.3 Energy Efficiency and Fire Safety"
            description="Energy efficiency standards and fire safety regulations"
            path="/apprentices/study-materials/city-guilds/level-3/305/6.3"
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
