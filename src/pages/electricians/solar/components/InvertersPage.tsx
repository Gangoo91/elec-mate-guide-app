
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const InvertersPage = () => {
  const sections = [
    {
      title: "Types of Inverters",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li className="space-y-2">
              <span className="font-medium">String Inverters</span>
              <p>Central inverters for multiple panels in series. Cost-effective for larger installations. Typical efficiency: 96-98%.</p>
            </li>
            <li className="space-y-2">
              <span className="font-medium">Microinverters</span>
              <p>Individual inverters for each panel. Better performance in partial shading. More expensive but offers panel-level monitoring.</p>
            </li>
            <li className="space-y-2">
              <span className="font-medium">Hybrid Inverters</span>
              <p>Compatible with battery storage systems. Manages both solar generation and battery charging/discharging.</p>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Key Features",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">Maximum Power Point Tracking (MPPT)</span>
              <p>Optimizes DC input for maximum power output.</p>
            </li>
            <li>
              <span className="font-medium">Anti-Islanding Protection</span>
              <p>Safety feature to prevent backfeeding during power outages.</p>
            </li>
            <li>
              <span className="font-medium">Monitoring Capabilities</span>
              <p>Remote monitoring and performance analysis features.</p>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Installation Requirements",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">Location Requirements</span>
              <p>Indoor/outdoor rating, ventilation needs, accessibility for maintenance.</p>
            </li>
            <li>
              <span className="font-medium">Electrical Requirements</span>
              <p>DC and AC isolation, earthing arrangements, surge protection.</p>
            </li>
            <li>
              <span className="font-medium">Monitoring Setup</span>
              <p>Internet connectivity, communication wiring, display mounting.</p>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Inverters"
      description="Comprehensive guide to solar inverter types, features, and installation requirements."
      sections={sections}
    />
  );
};

export default InvertersPage;
