
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const IPRatings = () => {
  return (
    <LessonContent title="Ingress Protection (IP) Ratings">
      <p className="mb-4">
        IP ratings define the level of protection provided by electrical equipment enclosures against solid objects, 
        dust, and water. Understanding IP ratings is crucial for selecting equipment suitable for specific environments.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">IP Code Format</h4>
        <p>The IP code consists of the letters "IP" followed by two digits and optional letters:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>First digit (0-6):</strong> Protection against solid objects and dust</li>
          <li><strong>Second digit (0-9):</strong> Protection against water ingress</li>
          <li><strong>Additional letters (optional):</strong> Specific protection characteristics</li>
        </ul>
        <p className="mt-2">Example: IP65 provides total protection against dust (6) and protection against water jets (5)</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-[#FFC900]/20">
              <th className="py-2 px-3 text-left text-[#FFC900]">First Digit</th>
              <th className="py-2 px-3 text-left text-[#FFC900]">Protection Against Solid Objects</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">0</td>
              <td className="py-2 px-3 text-[#FFC900]/80">No protection</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">1</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against solid objects > 50mm (e.g., hands)</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">2</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against solid objects > 12.5mm (e.g., fingers)</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">3</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against solid objects > 2.5mm (e.g., tools)</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">4</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against solid objects > 1mm (e.g., wires)</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">5</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Dust protected (limited ingress, no harmful deposits)</td>
            </tr>
            <tr>
              <td className="py-2 px-3 text-[#FFC900]/80">6</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Dust-tight (no ingress of dust)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-[#FFC900]/20">
              <th className="py-2 px-3 text-left text-[#FFC900]">Second Digit</th>
              <th className="py-2 px-3 text-left text-[#FFC900]">Protection Against Water</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">0</td>
              <td className="py-2 px-3 text-[#FFC900]/80">No protection</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">1</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against vertically falling water drops</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">2</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against water drops deflected up to 15°</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">3</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against spraying water up to 60° from vertical</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">4</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against splashing water from any direction</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">5</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against water jets from any direction</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">6</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against powerful water jets</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">7</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against temporary immersion in water (up to 1m for 30 minutes)</td>
            </tr>
            <tr>
              <td className="py-2 px-3 text-[#FFC900]/80">8</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Protection against continuous immersion (beyond 1m, manufacturer specified)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Common IP Ratings in Electrical Installations</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>IP20:</strong> Standard indoor equipment (typical for domestic switches and sockets)</li>
          <li><strong>IP44:</strong> Splash-proof, suitable for bathrooms outside zones</li>
          <li><strong>IP55:</strong> Dust protected and protected against water jets (outdoor installations)</li>
          <li><strong>IP65:</strong> Dust-tight and protected against water jets (outdoor equipment, car parks)</li>
          <li><strong>IP66:</strong> Dust-tight and protected against powerful water jets (harsh environments)</li>
          <li><strong>IP67:</strong> Dust-tight and protected against temporary immersion (areas subject to flooding)</li>
          <li><strong>IP68:</strong> Dust-tight and protected against continuous immersion (underwater installations)</li>
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">IP Rating Selection Guidelines</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Consider the installation environment (indoor, outdoor, wet areas, dusty areas)</li>
          <li>Assess potential exposure to water and dust</li>
          <li>Review any specific regulations for special locations (bathrooms, swimming pools, agricultural buildings)</li>
          <li>Consider equipment location and accessibility</li>
          <li>Balance protection needs with cost and maintenance requirements</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export default IPRatings;
