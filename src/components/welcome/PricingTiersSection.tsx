
import React from "react";
import PricingTier from "./PricingTier";

const pricingData = [
  {
    title: "Apprentice",
    price: "£3.99/mo",
    annual: "£39.99/yr",
    features: [
      "Full apprentice toolkit",
      "Access all learning features",
      "Track your progress"
    ],
    color: "border-[#FFC900]",
    highlight: false,
  },
  {
    title: "Electrician",
    price: "£5.99/mo",
    annual: "£59.99/yr",
    features: [
      "All Apprentice features",
      "Advanced tools",
      "Premium electrician resources"
    ],
    color: "border-[#FFD700]",
    highlight: true,
  },
  {
    title: "Employer",
    price: "£9.99/mo",
    annual: "£99.99/yr",
    features: [
      "All Electrician features",
      "Recruitment dashboard",
      "Unlimited job postings"
    ],
    color: "border-[#FFB300]",
    highlight: false,
    comingSoon: true
  }
];

const PricingTiersSection = () => {
  return (
    <div className="w-full flex flex-col items-center mb-8">
      <span className="inline-block px-3 py-1 rounded-full bg-[#FFC900]/20 text-[#FFC900] text-xs font-semibold uppercase mb-2 tracking-widest">
        7 days free trial • Free download
      </span>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        {pricingData.map((tier) => (
          <PricingTier
            key={tier.title}
            title={tier.title}
            price={tier.price}
            annual={tier.annual}
            features={tier.features}
            color={tier.color}
            highlight={tier.highlight}
            comingSoon={tier.comingSoon}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingTiersSection;
