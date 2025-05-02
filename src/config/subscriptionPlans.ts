
export const subscriptionPlans = [
  {
    name: "Apprentice",
    monthlyPrice: "£3.99",
    yearlyPrice: "£39.99",
    description: "Access to all apprentice resources and training tools",
  },
  {
    name: "Electrician", 
    monthlyPrice: "£5.99",
    yearlyPrice: "£59.99",
    description: "Access to electrician and apprentice resources",
  }
];

// Update Stripe Price IDs if needed (you'll need to update these in Stripe dashboard)
export const stripePriceIds: Record<string, { monthly: string; yearly: string }> = {
  Apprentice: {
    monthly: "price_1RGIaQ2RKw5t5RAmh7lzac0R",
    yearly: "price_1RGIbj2RKw5t5RAm8xkaH5I2",
  },
  Electrician: {
    monthly: "price_1RGIdw2RKw5t5RAmEWjKbGx1",
    yearly: "price_1RGId02RKw5t5RAm2iGQJ9xU",
  }
};
