
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const SolarPanelsPage = () => {
  const sections = [
    {
      title: "Types of Solar Panels",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Main Types:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="space-y-2">
              <span className="font-medium">Monocrystalline Panels</span>
              <p>Made from a single crystal structure, these offer the highest efficiency (15-22%) and sleek black appearance. Best for limited space installations.</p>
            </li>
            <li className="space-y-2">
              <span className="font-medium">Polycrystalline Panels</span>
              <p>Made from multiple crystal fragments, offering good efficiency (13-17%) at a lower cost. Distinctive blue color and good performance in varied conditions.</p>
            </li>
            <li className="space-y-2">
              <span className="font-medium">Thin-Film Panels</span>
              <p>Flexible and lightweight, ideal for unusual installations. Lower efficiency (10-12%) but excellent in low-light conditions.</p>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Performance Characteristics",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">Power Rating (Wp)</span>
              <p>Typical residential panels range from 250W to 400W per panel</p>
            </li>
            <li>
              <span className="font-medium">Efficiency Ratings</span>
              <p>Modern panels typically achieve 15-22% efficiency</p>
            </li>
            <li>
              <span className="font-medium">Temperature Coefficient</span>
              <p>Typically -0.3% to -0.5% per °C increase above 25°C</p>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Installation Considerations",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">Weight and Structural Load</span>
              <p>Typical weight: 18-20kg per panel. Roof structure must be assessed.</p>
            </li>
            <li>
              <span className="font-medium">Orientation and Tilt</span>
              <p>Optimal orientation: South-facing (Northern Hemisphere). Tilt angle typically equal to latitude.</p>
            </li>
            <li>
              <span className="font-medium">Shading Analysis</span>
              <p>Critical to avoid partial shading which significantly impacts performance.</p>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Solar Panels"
      description="Detailed guide to solar panel types, characteristics, and installation considerations."
      sections={sections}
    />
  );
};

export default SolarPanelsPage;
