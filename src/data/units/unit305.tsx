
import { UnitContent } from './interfaces';

export const unit305: UnitContent = {
  title: "Electrical Systems Design",
  description: "Design electrical installations for buildings and structures, including load calculations and circuit planning.",
  sections: [
    {
      title: "Design Principles",
      content: (
        <div className="space-y-4">
          <p>Fundamental concepts in electrical system design:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Client requirements analysis</li>
            <li>Regulatory constraints</li>
            <li>Safety considerations</li>
            <li>Energy efficiency factors</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Load Calculations",
      content: (
        <div className="space-y-4">
          <p>Methods for determining electrical loads:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Diversity factors</li>
            <li>Maximum demand assessment</li>
            <li>Cable sizing calculations</li>
            <li>Voltage drop considerations</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Circuit Planning",
      content: (
        <div className="space-y-4">
          <p>Planning electrical distribution systems:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consumer unit arrangements</li>
            <li>Circuit segregation</li>
            <li>Protection device selection</li>
            <li>Earthing and bonding design</li>
          </ul>
        </div>
      ),
    }
  ],
};
