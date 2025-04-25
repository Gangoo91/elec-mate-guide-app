
import { UnitContent } from './interfaces';

export const unit301: UnitContent = {
  title: "Environmental Technology Systems",
  description: "Learn about renewable energy technologies, sustainable electrical installations, and environmental considerations.",
  sections: [
    {
      title: "Introduction to Environmental Technology",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-[#FFC900]">Key Concepts</h4>
          <div className="space-y-4">
            <p>Environmental technology in electrical installations focuses on creating sustainable and energy-efficient systems. This unit covers:</p>
            <div className="pl-6 space-y-3">
              <div>
                <h5 className="font-medium">Renewable Energy Systems</h5>
                <p>Understanding different types of renewable energy sources and their applications:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Solar photovoltaic systems</li>
                  <li>Wind energy systems</li>
                  <li>Hydroelectric power</li>
                  <li>Biomass energy</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium">Energy Efficiency Measures</h5>
                <ul className="list-disc pl-6">
                  <li>Building energy management systems</li>
                  <li>Smart metering technology</li>
                  <li>LED lighting systems</li>
                  <li>Automated control systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Solar Photovoltaic Systems",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-[#FFC900]">System Components and Installation</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium">PV System Components</h5>
              <p>A comprehensive look at essential components:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Solar panels and their types</li>
                <li>Inverters (string vs. micro)</li>
                <li>Mounting systems</li>
                <li>Battery storage options</li>
                <li>Protection devices</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium">Installation Requirements</h5>
              <p>Key considerations for proper installation:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Site assessment and planning</li>
                <li>Roof structural requirements</li>
                <li>Wiring and connection methods</li>
                <li>System testing and commissioning</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Heat Pumps and Energy Storage",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-[#FFC900]">Modern Heating Technologies</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium">Heat Pump Systems</h5>
              <p>Understanding different heat pump technologies:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Air source heat pumps (ASHP)
                  <ul className="list-disc pl-6">
                    <li>Operating principles</li>
                    <li>Installation requirements</li>
                    <li>Efficiency considerations</li>
                  </ul>
                </li>
                <li>Ground source heat pumps (GSHP)
                  <ul className="list-disc pl-6">
                    <li>Ground loop systems</li>
                    <li>Installation methods</li>
                    <li>Performance factors</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium">Energy Storage Solutions</h5>
              <p>Modern energy storage technologies:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Battery storage systems</li>
                <li>Thermal storage</li>
                <li>Integration with renewable systems</li>
                <li>Control and monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    }
  ],
};
