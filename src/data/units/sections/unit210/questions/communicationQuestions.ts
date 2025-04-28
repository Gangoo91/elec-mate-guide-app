
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const communicationQuestions: Question[] = [
  {
    id: 1,
    text: "What is one of the primary benefits of effective communication in the electrical trade?",
    options: [
      "It increases the voltage in circuits",
      "It prevents misunderstandings and mistakes",
      "It decreases the need for proper tools",
      "It eliminates the need for technical skills"
    ],
    correctAnswer: "It prevents misunderstandings and mistakes",
    explanation: "Effective communication helps prevent misunderstandings and mistakes, which is crucial for safety and efficiency in electrical work."
  },
  {
    id: 2,
    text: "When communicating with customers, what language should electricians use?",
    options: [
      "Technical jargon to demonstrate expertise",
      "Complex terminology to impress customers",
      "Simple, non-technical language they can understand",
      "Only written communication to avoid confusion"
    ],
    correctAnswer: "Simple, non-technical language they can understand",
    explanation: "Using simple, non-technical language helps customers understand what you're doing and why, building trust and ensuring their needs are met."
  },
  {
    id: 3,
    text: "What should you do if you're not sure about something on a job site?",
    options: [
      "Figure it out on your own to avoid bothering others",
      "Proceed with your best guess",
      "Ask questions to clarify",
      "Skip that part of the job"
    ],
    correctAnswer: "Ask questions to clarify",
    explanation: "Asking questions when you're unsure is a sign of professionalism, not weakness. It helps prevent mistakes and shows you're committed to doing the job correctly."
  },
  {
    id: 4,
    text: "Why is written communication important for electricians?",
    options: [
      "It's not important; verbal communication is sufficient",
      "Only for impressing clients with formal language",
      "It creates a permanent record and ensures clear understanding",
      "Only required for large commercial projects"
    ],
    correctAnswer: "It creates a permanent record and ensures clear understanding",
    explanation: "Written communication creates a permanent record of work done, decisions made, and instructions given, which is valuable for future reference and accountability."
  },
  {
    id: 5,
    text: "What is a best practice for documentation in electrical work?",
    options: [
      "Use highly technical language to sound professional",
      "Be clear, concise, and specific",
      "Only document major issues",
      "Avoid including dates and times"
    ],
    correctAnswer: "Be clear, concise, and specific",
    explanation: "Clear, concise, and specific documentation ensures that others can understand what was done, what needs to be done, and any important details about the work."
  },
  {
    id: 6,
    text: "When writing professional emails, what should you do?",
    options: [
      "Use casual language and abbreviations",
      "Write lengthy explanations to cover all possibilities",
      "Clearly state your purpose in the first paragraph",
      "Avoid mentioning timeframes"
    ],
    correctAnswer: "Clearly state your purpose in the first paragraph",
    explanation: "Stating your purpose clearly at the beginning helps the recipient understand why you're contacting them and what response or action might be needed."
  },
  {
    id: 7,
    text: "What information should be included in handover notes for other workers?",
    options: [
      "Only the work that remains to be done",
      "Only what has been completed",
      "A description of what has been completed and what still needs to be done",
      "Only technical specifications"
    ],
    correctAnswer: "A description of what has been completed and what still needs to be done",
    explanation: "Comprehensive handover notes should include both what has been completed and what still needs to be done, providing a clear picture of the project's status."
  },
  {
    id: 8,
    text: "How does good communication with your team impact job site safety?",
    options: [
      "It has no impact on safety",
      "It only impacts efficiency, not safety",
      "It ensures everyone is aware of potential hazards",
      "It only matters for supervisors"
    ],
    correctAnswer: "It ensures everyone is aware of potential hazards",
    explanation: "Good team communication ensures everyone is aware of potential hazards, safety procedures, and emergency protocols, reducing the risk of accidents."
  },
  {
    id: 9,
    text: "What should you do when a problem arises on a job site?",
    options: [
      "Try to fix it yourself without telling anyone",
      "Report it only if it's serious",
      "Report problems promptly rather than hiding them",
      "Wait until the end of the day to report all problems at once"
    ],
    correctAnswer: "Report problems promptly rather than hiding them",
    explanation: "Reporting problems promptly allows for quicker resolution, prevents issues from worsening, and demonstrates integrity and professionalism."
  },
  {
    id: 10,
    text: "Which of these is NOT a key component of effective team communication?",
    options: [
      "Listening carefully to others",
      "Sharing information about what you're doing",
      "Keeping discoveries to yourself to appear more knowledgeable",
      "Being clear about when you'll finish tasks"
    ],
    correctAnswer: "Keeping discoveries to yourself to appear more knowledgeable",
    explanation: "Effective team communication involves sharing discoveries and knowledge, not keeping them to yourself. Collaboration and information sharing lead to better outcomes for everyone."
  },
  {
    id: 11,
    text: "What approach should you take when addressing conflicts in a team?",
    options: [
      "Avoid the conflict entirely",
      "Address issues directly but respectfully",
      "Always defer to the most experienced person",
      "Escalate all conflicts to management immediately"
    ],
    correctAnswer: "Address issues directly but respectfully",
    explanation: "Addressing issues directly but respectfully allows for open discussion and resolution while maintaining professional relationships and a positive work environment."
  },
  {
    id: 12,
    text: "Why is it important to explain technical work to customers in simple terms?",
    options: [
      "To make yourself seem more approachable",
      "To build trust and ensure they understand what you're doing",
      "To comply with industry regulations",
      "To avoid having to answer technical questions"
    ],
    correctAnswer: "To build trust and ensure they understand what you're doing",
    explanation: "Explaining work in simple terms builds trust with customers and ensures they understand what you're doing, why it's necessary, and how it addresses their needs."
  },
  {
    id: 13,
    text: "What communication skill is particularly important when dealing with an upset customer?",
    options: [
      "Speaking loudly to assert authority",
      "Using technical jargon to demonstrate expertise",
      "Listening carefully to their concerns",
      "Providing quick solutions without discussion"
    ],
    correctAnswer: "Listening carefully to their concerns",
    explanation: "Listening carefully to an upset customer's concerns shows respect, helps identify the root of the problem, and is the first step toward finding an acceptable solution."
  },
  {
    id: 14,
    text: "How should you communicate time estimates to clients?",
    options: [
      "Always underestimate to please the client initially",
      "Provide vague timeframes to avoid commitment",
      "Be realistic and clear about what affects the timeline",
      "Only provide estimates when absolutely certain"
    ],
    correctAnswer: "Be realistic and clear about what affects the timeline",
    explanation: "Being realistic and clear about timeframes and what factors might affect them helps manage client expectations and builds trust through transparency."
  },
  {
    id: 15,
    text: "What is the benefit of asking clarifying questions when receiving instructions?",
    options: [
      "It shows your supervisor you're paying attention",
      "It helps ensure you understand what's expected of you",
      "It demonstrates your experience level",
      "It extends the conversation unnecessarily"
    ],
    correctAnswer: "It helps ensure you understand what's expected of you",
    explanation: "Asking clarifying questions ensures you fully understand what's expected, reducing the risk of mistakes and rework, and demonstrating your commitment to quality work."
  },
  {
    id: 16,
    text: "Which of these is most important when writing notes for other workers who might continue your work?",
    options: [
      "Using formal language",
      "Including your personal opinions",
      "Being clear about what still needs to be done",
      "Making the notes as brief as possible"
    ],
    correctAnswer: "Being clear about what still needs to be done",
    explanation: "Clear notes about what still needs to be done ensure continuity of work, prevent duplication of effort, and help the next person pick up where you left off efficiently."
  },
  {
    id: 17,
    text: "How does good communication contribute to career advancement in the electrical trade?",
    options: [
      "It's unrelated to career advancement",
      "It only matters for management positions",
      "It demonstrates professionalism and reliability",
      "It's only important for customer-facing roles"
    ],
    correctAnswer: "It demonstrates professionalism and reliability",
    explanation: "Good communication demonstrates professionalism and reliability, which are qualities valued for advancement in any career, including the electrical trade."
  },
  {
    id: 18,
    text: "What should be your approach when explaining delays or problems to a client?",
    options: [
      "Minimize the issue to avoid concern",
      "Be honest and explain the situation clearly",
      "Find someone else to deliver bad news",
      "Provide technical details only"
    ],
    correctAnswer: "Be honest and explain the situation clearly",
    explanation: "Being honest and explaining situations clearly maintains trust with clients, even when delivering news about delays or problems. It shows integrity and respect for the client."
  },
  {
    id: 19,
    text: "Which communication approach is best when working with other trades on a job site?",
    options: [
      "Communicate only through the general contractor",
      "Direct coordination and clear communication about shared spaces and timelines",
      "Minimal communication to avoid conflicts",
      "Written documentation only"
    ],
    correctAnswer: "Direct coordination and clear communication about shared spaces and timelines",
    explanation: "Direct coordination with other trades about shared spaces and timelines helps prevent conflicts, ensures efficient work flow, and contributes to a successful project."
  },
  {
    id: 20,
    text: "What is the most appropriate way to document completed electrical work?",
    options: [
      "Verbal report to the supervisor",
      "Brief notes in a personal notebook",
      "Detailed records including tests performed and materials used",
      "Photos only without written documentation"
    ],
    correctAnswer: "Detailed records including tests performed and materials used",
    explanation: "Detailed documentation of completed work, including tests performed and materials used, provides important information for future maintenance, troubleshooting, and verification of compliance with standards."
  }
];
