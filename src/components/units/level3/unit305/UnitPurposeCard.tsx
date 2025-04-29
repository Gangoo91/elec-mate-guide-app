
import React from 'react';

const UnitPurposeCard = () => {
  return (
    <div className="bg-[#22251e] border-[#FFC900]/20 border rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">
        Purpose of Unit 305
      </h2>
      <p className="text-[#FFC900]/80 mb-4">
        This unit covers the knowledge and understanding needed to design safe and efficient electrical installations
        for domestic, commercial, and industrial environments in accordance with relevant regulations and standards.
      </p>
      <ul className="text-[#FFC900]/80 space-y-2 list-disc list-inside">
        <li>To learn how to design electrical installations for domestic, commercial, and industrial settings.</li>
        <li>To understand load calculations, cable sizing, and circuit planning.</li>
        <li>To apply regulatory requirements in electrical design processes.</li>
      </ul>
    </div>
  );
};

export default UnitPurposeCard;
