
import { UnitContent } from './interfaces';

export const unit301: UnitContent = {
  title: "Environmental Technology Systems",
  description: "Learn about renewable energy technologies, sustainable electrical installations, and environmental considerations.",
  sections: [
    {
      title: "Introduction to Environmental Technology",
      content: (
        <div className="space-y-4">
          <p>This unit introduces you to various environmental technologies used in modern electrical installations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Renewable energy systems</li>
            <li>Energy efficiency measures</li>
            <li>Sustainable installation practices</li>
            <li>Environmental impact assessment</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Solar Photovoltaic Systems",
      content: (
        <div className="space-y-4">
          <p>Understanding solar PV systems and their integration into electrical installations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>PV system components</li>
            <li>Installation requirements</li>
            <li>System sizing and design</li>
            <li>Integration with existing electrical systems</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Heat Pumps and Energy Storage",
      content: (
        <div className="space-y-4">
          <p>Exploring heat pump technologies and energy storage solutions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Air source heat pumps</li>
            <li>Ground source heat pumps</li>
            <li>Battery storage systems</li>
            <li>System integration and control</li>
          </ul>
        </div>
      ),
    }
  ],
};
