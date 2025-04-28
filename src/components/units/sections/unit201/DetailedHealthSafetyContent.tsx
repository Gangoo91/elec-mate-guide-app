
import React from 'react';

export const DetailedHealthSafetyContent: React.FC = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-6">Comprehensive Guide to Electrical Health and Safety</h3>
      
      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Legal Framework</h4>
        <p className="mb-4">
          Understanding the legal framework surrounding electrical work is essential for any electrician. 
          These regulations are designed to protect workers and the public from the dangers of electricity.
        </p>
        
        <div className="bg-[#22251e] p-6 rounded-lg mb-4">
          <h5 className="text-lg font-semibold mb-3">Key Legislation</h5>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Health and Safety at Work Act 1974:</strong> The overarching legislation that places duties on employers and employees</li>
            <li><strong>Electricity at Work Regulations 1989:</strong> Specific regulations covering electrical safety</li>
            <li><strong>BS 7671:</strong> The IET Wiring Regulations, currently in their 18th Edition</li>
            <li><strong>The Provision and Use of Work Equipment Regulations 1998 (PUWER):</strong> Covering the safe use of electrical equipment</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Risk Assessment Process</h4>
        <p className="mb-4">
          Risk assessment is a systematic process of evaluating the potential risks that may be involved 
          in an activity or undertaking.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Five Steps to Risk Assessment</h5>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Identify the hazards</li>
              <li>Decide who might be harmed and how</li>
              <li>Evaluate the risks and decide on precautions</li>
              <li>Record your findings and implement them</li>
              <li>Review your assessment and update if necessary</li>
            </ol>
          </div>
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">ERIC PD Hierarchy of Control</h5>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>E</strong>liminate the hazard</li>
              <li><strong>R</strong>educe the risk</li>
              <li><strong>I</strong>solate people from the hazard</li>
              <li><strong>C</strong>ontrol the risk</li>
              <li><strong>P</strong>ersonal protective equipment</li>
              <li><strong>D</strong>iscipline and training</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-4">Safe Isolation Procedure</h4>
        <p>
          Safe isolation is a critical procedure that ensures electrical systems are safely disconnected 
          before work begins:
        </p>
        <ol className="list-decimal pl-6 mt-2 space-y-2">
          <li>Identify the circuit or equipment to be worked on</li>
          <li>Identify means of isolation</li>
          <li>Isolate the supply</li>
          <li>Secure the isolation (lock-off)</li>
          <li>Verify the system is dead using a suitable voltage indicator</li>
          <li>Prove the voltage indicator is working before and after use</li>
          <li>Post warning signs</li>
        </ol>
      </section>
    </>
  );
};
