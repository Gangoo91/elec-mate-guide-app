import React from 'react';

const SystematicTroubleshooting = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Introduction to Systematic Troubleshooting</h2>
      <p>
        Systematic troubleshooting is a methodical approach to identifying and resolving electrical faults. It reduces diagnosis time and increases accuracy by following a structured process rather than random testing.
      </p>
      
      <h3 className="text-lg font-medium mt-4">The Six-Step Troubleshooting Process</h3>
      <p>
        An effective troubleshooting methodology follows these steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mt-2">
        <li><strong>Identify the problem</strong> - Gather information about symptoms and when they occur</li>
        <li><strong>Analyze the system</strong> - Review schematics and identify possible failure points</li>
        <li><strong>Isolate the fault</strong> - Narrow down to a specific circuit or component</li>
        <li><strong>Determine the cause</strong> - Identify the specific fault through testing</li>
        <li><strong>Correct the fault</strong> - Repair or replace the faulty component</li>
        <li><strong>Verify the solution</strong> - Test to ensure the fault is resolved and document the repair</li>
      </ol>
      
      <h3 className="text-lg font-medium mt-4">Gathering Information</h3>
      <p>
        Before beginning physical tests, collect important information:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>When did the problem start?</li>
        <li>Has anything changed in the system recently?</li>
        <li>Are there any error codes or unusual indicators?</li>
        <li>Is the fault intermittent or constant?</li>
        <li>Have any maintenance activities been performed recently?</li>
        <li>Are there patterns to when the fault occurs?</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Half-Split Method</h2>
      <p>
        The half-split method is an efficient troubleshooting technique:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Test at the midpoint of a circuit or system</li>
        <li>Based on results, focus on either the first or second half</li>
        <li>Continue dividing the faulty section in half until the fault is located</li>
        <li>This approach reduces diagnostic time logarithmically</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Component Substitution Method</h2>
      <p>
        When appropriate, component substitution can identify faults:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Replace suspected components one at a time with known good ones</li>
        <li>Test after each replacement to identify if the fault is resolved</li>
        <li>Useful for simple components or when testing is difficult</li>
        <li>Can be inefficient for complex systems or when multiple faults exist</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Signal Tracing Method</h2>
      <p>
        Signal tracing follows the path of electrical signals through a system:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Start at the input and follow the signal through each stage</li>
        <li>Check expected values at various test points</li>
        <li>Identify where the actual values deviate from expected values</li>
        <li>Particularly useful for complex electronic circuits</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Symptom-to-Cause Charts</h2>
      <p>
        Using experience and documentation to speed up diagnosis:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Reference manufacturer&apos;s troubleshooting guides</li>
        <li>Use fault code lookups when available</li>
        <li>Develop and maintain your own symptom-to-cause reference</li>
        <li>Share knowledge with colleagues to build a knowledge base</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Documentation and Record-Keeping</h2>
      <p>
        Maintaining records of faults and solutions improves future troubleshooting:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Record symptoms, test results, and solutions</li>
        <li>Document patterns of recurring faults</li>
        <li>Update system schematics with any modifications</li>
        <li>Track component failure rates to identify systemic issues</li>
        <li>Share findings with manufacturers when appropriate</li>
      </ul>
    </div>
  );
};

export default SystematicTroubleshooting;
