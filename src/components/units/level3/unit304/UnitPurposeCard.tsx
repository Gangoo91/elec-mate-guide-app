
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const UnitPurposeCard: React.FC = () => {
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">
          Purpose of Unit 304
        </h2>
        <ul className="text-[#FFC900]/80 space-y-2 list-disc list-inside">
          <li>To teach you how to inspect a new or altered installation.</li>
          <li>To teach you how to test it using correct instruments.</li>
          <li>To ensure you can certify that it is safe, legal, and meets BS 7671 Wiring Regulations.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default UnitPurposeCard;
