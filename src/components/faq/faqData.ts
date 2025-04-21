
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  category: string;
  questions: FAQItem[];
}

export interface FAQItemType {
  section: string;
  icon: React.ReactNode;
  questions: {
    id: string;
    question: string;
    answer: string;
  }[];
}

export const faqItems: FAQSection[] = [
  {
    title: "General Questions",
    category: "general",
    questions: [
      {
        question: "What is Elec-Mate?",
        answer: "Elec-Mate is a comprehensive platform for electrical professionals in the UK, providing resources, training, certification support, and community tools to help advance your career in the electrical industry."
      },
      {
        question: "Who can use Elec-Mate?",
        answer: "Elec-Mate is designed for apprentices, electricians, and employers in the UK electrical industry. Different subscription tiers provide access to features tailored to your specific role and career stage."
      },
      {
        question: "How do I get started with Elec-Mate?",
        answer: "Simply sign up for an account, choose your role (Apprentice, Electrician, or Employer), select a subscription plan, and start exploring the features and resources available to you."
      }
    ]
  },
  {
    title: "Apprentice Resources",
    category: "apprentices",
    questions: [
      {
        question: "What training materials are available for apprentices?",
        answer: "Apprentices have access to a comprehensive library of training materials, including video tutorials, interactive learning modules, practice tests, and study guides aligned with UK qualification standards."
      },
      {
        question: "How can I track my apprenticeship progress?",
        answer: "The platform provides a digital logbook where you can record your work experience, track completed training modules, and monitor your progress toward qualification requirements."
      },
      {
        question: "Can I find a mentor through Elec-Mate?",
        answer: "Yes, our mentorship matching system connects apprentices with experienced electricians who can provide guidance, answer questions, and offer career advice."
      }
    ]
  },
  {
    title: "Electrician Tools",
    category: "electricians",
    questions: [
      {
        question: "What professional tools does Elec-Mate offer for qualified electricians?",
        answer: "Electricians gain access to quote generators, code compliance checkers, material calculators, continued professional development resources, and industry updates to stay current with regulations."
      },
      {
        question: "How can I showcase my qualifications and experience?",
        answer: "Your professional profile allows you to display your qualifications, certifications, specialized skills, and work history, which can be shared with potential employers or clients."
      },
      {
        question: "Are there continuing education resources available?",
        answer: "Yes, we provide access to continuing education modules, webinars, and resources to help you maintain certifications and stay updated on the latest industry developments."
      }
    ]
  },
  {
    title: "Employer Features",
    category: "employers",
    questions: [
      {
        question: "How can Elec-Mate help me find qualified electricians?",
        answer: "Our platform allows employers to search for qualified professionals based on location, skills, qualifications, and availability, with verified credentials and work history."
      },
      {
        question: "Can I track my team's certifications and qualifications?",
        answer: "Yes, the team management tools allow you to monitor your employees' certifications, ensure compliance, and receive notifications when renewals are approaching."
      },
      {
        question: "What analytics are available for business owners?",
        answer: "Employers can access analytics dashboards showing team performance metrics, training completion rates, and other business insights to help optimize operations."
      }
    ]
  },
  {
    title: "Account & Billing",
    category: "account",
    questions: [
      {
        question: "How do I update my subscription?",
        answer: "You can update your subscription at any time by navigating to the 'Manage Subscription' page in your account settings, where you can upgrade, downgrade, or cancel your plan."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, we use industry-standard encryption and never store your complete payment details. All payments are processed securely through our trusted payment provider."
      },
      {
        question: "Can I switch between subscription tiers?",
        answer: "Yes, you can switch between Apprentice, Electrician, and Employer tiers as your career progresses. When upgrading, you'll immediately gain access to the additional features."
      }
    ]
  },
  {
    title: "Technical Support",
    category: "support",
    questions: [
      {
        question: "How do I contact support?",
        answer: "You can reach our support team through the help center, by email at support@elec-mate.co.uk, or through the live chat feature available during business hours."
      },
      {
        question: "What should I do if I find a bug?",
        answer: "Please report any bugs or issues through the 'Report a Problem' option in the help menu, providing as much detail as possible about what occurred."
      },
      {
        question: "Is Elec-Mate available offline?",
        answer: "Some features of Elec-Mate can be used offline, with data syncing when you reconnect to the internet. However, full functionality requires an internet connection."
      }
    ]
  },
  {
    title: "Mental Health & Wellness",
    category: "wellness",
    questions: [
      {
        question: "What mental health resources are available?",
        answer: "Elec-Mate provides anonymous access to mental health resources, including self-assessment tools, stress management techniques, and crisis support information tailored to the electrical industry."
      },
      {
        question: "How does the Wellness Score feature work?",
        answer: "Our Wellness Score feature allows you to track your work-life balance, stress levels, and overall wellbeing through confidential check-ins, providing personalized recommendations for improvement."
      },
      {
        question: "Is my mental health information kept private?",
        answer: "Absolutely. All mental health and wellness data is anonymous and encrypted. We never share this information with employers or other users."
      }
    ]
  }
];
