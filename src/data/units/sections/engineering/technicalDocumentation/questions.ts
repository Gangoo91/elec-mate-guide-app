
import { AssessmentQuestion } from "@/components/units/quiz/types";

/**
 * Technical documentation quiz questions for assessment
 */
export const technicalDocumentationQuestions: AssessmentQuestion[] = [
  {
    question: "Which document type would most likely include load calculations and protection coordination studies?",
    options: [
      "Installation documentation",
      "Design documentation",
      "Operation manual",
      "As-built records"
    ],
    correctAnswer: "Design documentation",
    explanation: "Design documentation typically includes technical calculations like load calculations and protection coordination studies, which are essential for the proper planning and design of electrical systems."
  },
  {
    question: "What is the primary purpose of technical documentation in electrical installations?",
    options: [
      "To increase project costs",
      "To provide a formal record of the system's design, installation, operation, and maintenance",
      "To avoid regulatory oversight",
      "To reduce the number of workers needed"
    ],
    correctAnswer: "To provide a formal record of the system's design, installation, operation, and maintenance",
    explanation: "Technical documentation serves as a formal record of a system's design, installation, operation, and maintenance, ensuring that all stakeholders have accurate information throughout the system lifecycle."
  },
  {
    question: "Which British Standard applies to electrical documentation practices?",
    options: [
      "BS EN 61082",
      "BS 7671",
      "BS EN 50110",
      "BS EN 12845"
    ],
    correctAnswer: "BS EN 61082",
    explanation: "BS EN 61082 is the British Standard that provides guidelines for the preparation of documents used in electrical engineering, including diagrams, drawings, and charts."
  },
  {
    question: "What does a single-line diagram typically represent?",
    options: [
      "Detailed wiring connections",
      "Simplified representation of a power system",
      "Installation schedules",
      "Cable routing plans"
    ],
    correctAnswer: "Simplified representation of a power system",
    explanation: "A single-line diagram provides a simplified representation of a power system, showing the main components and their connections without detailed wiring information."
  },
  {
    question: "Which of the following is NOT typically included in as-built documentation?",
    options: [
      "Actual cable routes",
      "Equipment locations",
      "Future system expansion plans",
      "Deviations from design"
    ],
    correctAnswer: "Future system expansion plans",
    explanation: "As-built documentation records how a system was actually installed, including any deviations from the original design. Future expansion plans would be part of separate planning documentation, not as-built records."
  },
  {
    question: "What is the primary purpose of document version control?",
    options: [
      "To track document creation dates only",
      "To identify and track changes made to documents over time",
      "To restrict access to sensitive information",
      "To reduce the number of documents needed"
    ],
    correctAnswer: "To identify and track changes made to documents over time",
    explanation: "Document version control systems are primarily used to identify and track changes made to documents over time, ensuring that users always know which version they're working with and what modifications have been made."
  },
  {
    question: "Which standard provides guidance for reference designation systems in electrical documentation?",
    options: [
      "BS EN 81346",
      "BS EN 61082",
      "BS 7671",
      "BS EN 60617"
    ],
    correctAnswer: "BS EN 81346",
    explanation: "BS EN 81346 provides principles for structuring systems and establishing reference designations, which are essential for organizing and identifying components within electrical documentation."
  },
  {
    question: "Which document would contain detailed procedures for verifying electrical system functionality?",
    options: [
      "Risk assessment",
      "Design specification",
      "Testing and commissioning procedure",
      "Method statement"
    ],
    correctAnswer: "Testing and commissioning procedure",
    explanation: "Testing and commissioning procedures contain detailed instructions for verifying that electrical systems function as intended, including test methods, acceptance criteria, and documentation requirements."
  },
  {
    question: "What is Building Information Modeling (BIM) primarily used for in documentation?",
    options: [
      "Creating paper-based archives",
      "Generating only 2D drawings",
      "Creating and managing digital representations of physical and functional characteristics of facilities",
      "Replacing all written documentation"
    ],
    correctAnswer: "Creating and managing digital representations of physical and functional characteristics of facilities",
    explanation: "BIM is used to create and manage digital representations of the physical and functional characteristics of facilities, allowing for integrated information management across the design, construction, and operation phases."
  },
  {
    question: "Which of the following is a key principle of technical writing?",
    options: [
      "Using complex language to impress readers",
      "Avoiding diagrams and visual aids",
      "Using precise and unambiguous wording",
      "Omitting technical details to simplify documents"
    ],
    correctAnswer: "Using precise and unambiguous wording",
    explanation: "Good technical writing uses precise and unambiguous wording to clearly communicate information, avoiding misinterpretation and ensuring that technical documents serve their intended purpose."
  },
  {
    question: "What is the purpose of an Electrical Installation Certificate?",
    options: [
      "To record electrical equipment purchases",
      "To verify compliance with relevant standards and regulations",
      "To document installation costs only",
      "To assign warranty responsibilities"
    ],
    correctAnswer: "To verify compliance with relevant standards and regulations",
    explanation: "An Electrical Installation Certificate verifies compliance with relevant standards and regulations, ensuring that the electrical system meets safety and performance requirements."
  },
  {
    question: "Which document would contain specific step-by-step instructions for installing electrical equipment?",
    options: [
      "Technical specification",
      "Single-line diagram",
      "Method statement",
      "Test certificate"
    ],
    correctAnswer: "Method statement",
    explanation: "A Method Statement contains specific step-by-step instructions for installing electrical equipment, providing a clear guide for installation personnel."
  },
  {
    question: "What standard covers electrical symbols used in documentation?",
    options: [
      "BS EN 60617",
      "BS 7671",
      "BS EN 61082",
      "BS EN 81346"
    ],
    correctAnswer: "BS EN 60617",
    explanation: "BS EN 60617 covers electrical symbols used in documentation, providing a standardized system for representing electrical components and systems."
  },
  {
    question: "What is the main benefit of having centralized document repositories?",
    options: [
      "Reduced document creation",
      "Improved access to the latest document versions",
      "Lower security requirements",
      "Elimination of approval processes"
    ],
    correctAnswer: "Improved access to the latest document versions",
    explanation: "Centralized document repositories provide improved access to the latest document versions, reducing the need for frequent document creation and ensuring that all stakeholders have access to the most up-to-date information."
  },
  {
    question: "What does CAD stand for in the context of technical documentation?",
    options: [
      "Computer Assisted Drafting",
      "Computer-Aided Design",
      "Complete Assembly Document",
      "Circuit Analysis Diagram"
    ],
    correctAnswer: "Computer-Aided Design",
    explanation: "CAD stands for Computer-Aided Design, a software tool used for creating and modifying technical drawings and schematics."
  },
  {
    question: "Which of these is a key element of effective document management?",
    options: [
      "Storing all documents in paper format",
      "Limiting document access to one department",
      "Implementing review and approval workflows",
      "Allowing unlimited document changes without tracking"
    ],
    correctAnswer: "Implementing review and approval workflows",
    explanation: "Effective document management involves implementing review and approval workflows to ensure that documents are accurate, complete, and up-to-date, while also limiting document access to authorized personnel."
  },
  {
    question: "What is the primary purpose of a risk assessment document?",
    options: [
      "To identify and address potential hazards",
      "To document installation costs",
      "To specify cable sizes only",
      "To record equipment serial numbers"
    ],
    correctAnswer: "To identify and address potential hazards",
    explanation: "A Risk Assessment Document identifies and addresses potential hazards, providing a systematic approach to risk management and ensuring that the electrical system is safe and reliable."
  },
  {
    question: "Which document would most likely contain complete details of electrical equipment maintenance schedules?",
    options: [
      "Installation drawing",
      "Operation and maintenance manual",
      "Single-line diagram",
      "Design specification"
    ],
    correctAnswer: "Operation and maintenance manual",
    explanation: "An Operation and Maintenance Manual contains complete details of electrical equipment maintenance schedules, providing a comprehensive guide for maintaining the system over time."
  },
  {
    question: "What is the purpose of document retention policies?",
    options: [
      "To discard documents as quickly as possible",
      "To establish how long different types of documents should be kept",
      "To restrict access to documents",
      "To avoid digital document storage"
    ],
    correctAnswer: "To establish how long different types of documents should be kept",
    explanation: "Document retention policies establish how long different types of documents should be kept, ensuring that important information is preserved and available for future reference."
  },
  {
    question: "Which of these is NOT typically part of technical writing principles?",
    options: [
      "Using consistent terminology",
      "Employing unnecessary jargon to sound technical",
      "Organizing content in a logical structure",
      "Considering the target audience"
    ],
    correctAnswer: "Employing unnecessary jargon to sound technical",
    explanation: "Good technical writing involves using consistent terminology, organizing content in a logical structure, and considering the target audience to ensure that the document is clear, concise, and effective."
  }
];

export default technicalDocumentationQuestions;
