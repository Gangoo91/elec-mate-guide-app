
export const subscriptionPlans = [
  {
    name: "Apprentice",
    monthlyPrice: "£4.99",
    yearlyPrice: "£49.99",
    description: "Access to all apprentice resources and training tools",
  },
  {
    name: "Electrician",
    monthlyPrice: "£4.99",
    yearlyPrice: "£49.99",
    description: "Access to electrician and apprentice resources",
  },
  {
    name: "Employer",
    monthlyPrice: "£4.99",
    yearlyPrice: "£49.99",
    description: "Full access to all platform features and resources",
  },
];

export const stripePriceIds: Record<string, { monthly: string; yearly: string }> = {
  Apprentice: {
    monthly: "price_1RGIaQ2RKw5t5RAmh7lzac0R",
    yearly: "price_1RGIbj2RKw5t5RAm8xkaH5I2",
  },
  Electrician: {
    monthly: "price_1RGIdw2RKw5t5RAmEWjKbGx1",
    yearly: "price_1RGId02RKw5t5RAm2iGQJ9xU",
  },
  Employer: {
    monthly: "price_1RGIgX2RKw5t5RAma3zfsmAc",
    yearly: "price_1RGIhM2RKw5t5RAmhTfWgGLO",
  },
};
