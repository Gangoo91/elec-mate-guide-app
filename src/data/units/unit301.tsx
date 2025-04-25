
import { UnitContent } from './interfaces';

export const unit301: UnitContent = {
  title: "Environmental Technology Systems",
  description: "Learn about renewable energy technologies, sustainable electrical installations, and environmental considerations.",
  sections: [
    {
      title: "1. Introduction to Environmental Technology",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Overview</h3>
            <p>Environmental technology in electrical installations focuses on creating sustainable and energy-efficient systems that minimize environmental impact while maximizing performance.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#FFC900] mb-3">1.1 Renewable Energy Systems</h4>
            <div className="space-y-4">
              <p>Different types of renewable energy sources and their applications:</p>
              <div className="pl-6">
                <h5 className="font-medium mb-2">Solar Photovoltaic Systems</h5>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Photovoltaic cell operation principles</li>
                  <li>Types of solar panels and their efficiency ratings</li>
                  <li>Grid-connected vs. standalone systems</li>
                  <li>Performance factors and shading effects</li>
                </ul>
              </div>
              
              <div className="pl-6">
                <h5 className="font-medium mb-2">Wind Energy Systems</h5>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Wind turbine types and components</li>
                  <li>Site assessment and wind resource evaluation</li>
                  <li>Grid integration requirements</li>
                  <li>Maintenance considerations</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#FFC900] mb-3">1.2 Energy Efficiency Measures</h4>
            <div className="space-y-4">
              <p>Key strategies for improving energy efficiency in buildings:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Building Energy Management Systems (BEMS)</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Automated control strategies</li>
                    <li>Energy monitoring and targeting</li>
                    <li>Integration with renewable systems</li>
                  </ul>
                </li>
                <li>
                  <strong>Smart Metering Technology</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Real-time energy monitoring</li>
                    <li>Load profiling and analysis</li>
                    <li>Consumer feedback systems</li>
                  </ul>
                </li>
                <li>
                  <strong>LED Lighting Systems</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Energy savings compared to traditional lighting</li>
                    <li>Control systems and dimming strategies</li>
                    <li>Installation and maintenance considerations</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2. Solar Photovoltaic Installation",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#FFC900] mb-4">System Components</h3>
            <div className="space-y-4">
              <p>Essential components of a solar PV system:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Solar Panels</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Monocrystalline vs. polycrystalline panels</li>
                    <li>Panel efficiency and power ratings</li>
                    <li>Temperature coefficients</li>
                    <li>Bypass diodes and shading effects</li>
                  </ul>
                </li>
                <li>
                  <strong>Inverters</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>String inverters vs. microinverters</li>
                    <li>Maximum power point tracking (MPPT)</li>
                    <li>Grid connection requirements</li>
                    <li>Safety features and monitoring</li>
                  </ul>
                </li>
                <li>
                  <strong>Protection Devices</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>DC isolators and circuit breakers</li>
                    <li>Surge protection devices</li>
                    <li>AC disconnection means</li>
                    <li>Earthing arrangements</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "3. Heat Pump Technologies",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Heat Pump Systems</h3>
            <div className="space-y-4">
              <p>Understanding modern heat pump technologies:</p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">3.1 Air Source Heat Pumps (ASHP)</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Operating principles and thermodynamic cycle</li>
                    <li>Coefficient of Performance (COP)</li>
                    <li>Installation requirements and considerations</li>
                    <li>Control systems and optimization</li>
                    <li>Integration with existing heating systems</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">3.2 Ground Source Heat Pumps (GSHP)</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ground loop configurations</li>
                    <li>Site assessment and geological considerations</li>
                    <li>Installation methods and best practices</li>
                    <li>Performance monitoring and maintenance</li>
                    <li>System efficiency and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    }
  ],
};
