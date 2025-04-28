
import React from 'react';

// Define the Question interface
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Communication questions for Unit 210
export const communicationQuestions: Question[] = [
  {
    question: "Why is good communication important in the electrical trade?",
    options: [
      "It's only important for senior electricians",
      "It helps prevent misunderstandings and mistakes",
      "It's required by electrical regulations",
      "It's only relevant when writing formal reports"
    ],
    correctAnswer: "It helps prevent misunderstandings and mistakes",
    explanation: "Good communication is essential for all electricians as it helps prevent misunderstandings and mistakes, which is crucial for safety and efficient work. It's not limited to senior electricians or formal reports, and while important, it's not explicitly required by electrical regulations."
  },
  {
    question: "When explaining a technical issue to a customer, you should:",
    options: [
      "Use as much technical jargon as possible to sound professional",
      "Keep explanations very brief to save time",
      "Use simple, non-technical language they can understand",
      "Avoid explanations unless specifically asked"
    ],
    correctAnswer: "Use simple, non-technical language they can understand",
    explanation: "Using simple, non-technical language helps customers understand complex electrical issues. This builds trust and ensures they can make informed decisions. Using technical jargon may confuse customers, while overly brief explanations or avoiding them altogether can lead to misunderstandings."
  },
  {
    question: "Why should you share information about your work with other trades on a job site?",
    options: [
      "To show off your technical knowledge",
      "Only when there's a problem that affects them",
      "To help coordinate work and avoid conflicts",
      "It's not necessary to communicate with other trades"
    ],
    correctAnswer: "To help coordinate work and avoid conflicts",
    explanation: "Sharing information with other trades helps coordinate work and avoid conflicts. This creates a more efficient workflow and prevents situations where different trades interfere with each other's work. Communication between trades is essential for successful project completion."
  },
  {
    question: "Which of the following is NOT a good practice for written communication?",
    options: [
      "Using standardized forms when available",
      "Including dates and times in documentation",
      "Writing detailed paragraphs with all possible information",
      "Being clear and specific about work completed"
    ],
    correctAnswer: "Writing detailed paragraphs with all possible information",
    explanation: "While written communication should be thorough, writing excessively detailed paragraphs with all possible information can make documentation difficult to read and obscure the most important information. Good written communication should be clear, concise, and focused on relevant information."
  },
  {
    question: "When working with your team, asking questions:",
    options: [
      "Shows weakness and should be avoided",
      "Is a sign of professionalism and demonstrates a commitment to quality work",
      "Should only be done privately to avoid embarrassment",
      "Is only appropriate for apprentices"
    ],
    correctAnswer: "Is a sign of professionalism and demonstrates a commitment to quality work",
    explanation: "Asking questions is a sign of professionalism and demonstrates a commitment to quality work. It helps ensure work is done correctly and safely. Even experienced electricians should ask questions when facing unfamiliar situations. Questions benefit everyone on the team."
  },
  {
    question: "What information should be included in handover notes when another electrician will continue your work?",
    options: [
      "Only major problems encountered",
      "Your personal opinions about the client",
      "A clear description of what has been completed and what still needs to be done",
      "Technical jargon to demonstrate your expertise"
    ],
    correctAnswer: "A clear description of what has been completed and what still needs to be done",
    explanation: "Handover notes should include a clear description of what has been completed and what still needs to be done. This ensures continuity and efficiency. Personal opinions are not professional, and using technical jargon unnecessarily can cause confusion."
  },
  {
    question: "When dealing with customers who are upset about an electrical issue, you should:",
    options: [
      "Defend yourself and explain why they're wrong",
      "Listen carefully to their concerns and respond professionally",
      "Tell them to calm down before you'll discuss the problem",
      "Refer them to your manager immediately"
    ],
    correctAnswer: "Listen carefully to their concerns and respond professionally",
    explanation: "When customers are upset, listening carefully to their concerns and responding professionally is the best approach. This shows respect and helps de-escalate the situation. Defensive responses or telling them to calm down usually makes the situation worse."
  },
  {
    question: "Which of the following is most likely to build trust with customers?",
    options: [
      "Using technical terms to show your expertise",
      "Finishing jobs quickly, even if quality suffers",
      "Explaining what you're doing and why in terms they understand",
      "Pointing out mistakes made by previous electricians"
    ],
    correctAnswer: "Explaining what you're doing and why in terms they understand",
    explanation: "Explaining what you're doing and why in terms customers understand builds trust. It demonstrates transparency and helps customers feel informed and respected. Technical terms can confuse customers, and rushing or criticizing others appears unprofessional."
  },
  {
    question: "When there's a conflict on a job site with another worker, the best approach is to:",
    options: [
      "Ignore the conflict and focus on your own work",
      "Complain to your supervisor immediately",
      "Address the issue directly but respectfully, focusing on the problem not the person",
      "Make sure everyone knows who is at fault"
    ],
    correctAnswer: "Address the issue directly but respectfully, focusing on the problem not the person",
    explanation: "When conflicts arise, addressing the issue directly but respectfully, focusing on the problem not the person, is the most effective approach. This promotes resolution without damaging professional relationships. Ignoring conflicts often makes them worse over time."
  },
  {
    question: "For effective email communication with clients, you should:",
    options: [
      "Use casual language and emoticons to seem friendly",
      "Keep messages extremely brief with minimal details",
      "Include professional greetings and clearly state your purpose",
      "Use all capital letters for important points"
    ],
    correctAnswer: "Include professional greetings and clearly state your purpose",
    explanation: "Professional emails should include proper greetings and clearly state your purpose. This sets a professional tone and ensures your message is understood. Casual language or emoticons may appear unprofessional, and using all capitals is considered 'shouting' in written communication."
  }
];

// Export the question type for use in other files
export type { Question };
