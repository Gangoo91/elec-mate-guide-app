
import { UnitContent } from './interfaces';

export const unit302: UnitContent = {
  title: "Principles of Electrical Science",
  description: "Advanced electrical theory, including three-phase systems, motors, and complex circuit analysis.",
  sections: [
    {
      title: "Three-Phase Systems",
      content: (
        <div className="space-y-4">
          <p>Understanding three-phase power systems:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Three-phase generation and distribution</li>
            <li>Star and delta connections</li>
            <li>Phase relationships and power calculations</li>
            <li>Power factor correction</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Motors and Drives",
      content: (
        <div className="space-y-4">
          <p>Exploring electric motors and drive systems:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Motor types and characteristics</li>
            <li>Starting methods</li>
            <li>Speed control systems</li>
            <li>Protection requirements</li>
          </ul>
        </div>
      ),
    }
  ],
};
