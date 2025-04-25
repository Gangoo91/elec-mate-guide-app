
import { UnitContent } from './interfaces';

export const unit304: UnitContent = {
  title: "Electrical Installations: Inspection, Testing and Commissioning",
  description: "Learn how to test, inspect, and certify electrical installations according to regulations.",
  sections: [
    {
      title: "Inspection Procedures",
      content: (
        <div className="space-y-4">
          <p>Conducting thorough visual inspections:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Initial verification requirements</li>
            <li>Periodic inspection methodologies</li>
            <li>Common installation defects</li>
            <li>Compliance with regulations</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Testing Techniques",
      content: (
        <div className="space-y-4">
          <p>Essential testing procedures for electrical installations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Continuity testing</li>
            <li>Insulation resistance measurement</li>
            <li>Earth fault loop impedance testing</li>
            <li>RCD performance verification</li>
            <li>Polarity checks</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Commissioning Process",
      content: (
        <div className="space-y-4">
          <p>Steps involved in commissioning electrical systems:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pre-commissioning checks</li>
            <li>Functional testing procedures</li>
            <li>System handover requirements</li>
            <li>Documentation and certification</li>
          </ul>
        </div>
      ),
    }
  ],
};
