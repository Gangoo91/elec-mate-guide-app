
import React from 'react';
import UnitPage from './UnitPage';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { CourseContent } from '@/types/study';

const Unit201Page = () => {
  // Unit content
  const unitNumber = "201";
  const title = "Health & Safety";
  const description = "Understanding the principles of health and safety in electrical installations";
  
  const content = [
    "Legal requirements and responsibilities",
    "Risk assessment and hazard identification",
    "Safe working practices",
    "Personal protective equipment (PPE)",
    "Emergency procedures and first aid"
  ];
  
  const learningOutcomes = [
    "Know the health and safety legislation applicable to electrical installations",
    "Understand how to identify hazards and assess risks in electrical work environments",
    "Know how to apply safe working practices when carrying out electrical work",
    "Be able to select and use appropriate PPE for different electrical tasks",
    "Understand emergency procedures in electrical installations"
  ];

  // Detailed course content for the unit
  const courseContent: CourseContent = {
    key_points: [
      "Health and safety legislation forms the foundation of safe electrical work",
      "Risk assessment is a continuous process throughout electrical installation work",
      "PPE is your last line of defense against workplace hazards",
      "Safe isolation procedures should always be followed before working on electrical systems",
      "Everyone has a duty of care for health and safety in the workplace"
    ],
    main_content: [
      {
        type: "paragraph",
        content: "Health and safety is paramount in electrical installation work. As an electrician, you'll be responsible for not only your own safety but also the safety of others who may be affected by your work."
      },
      {
        type: "heading",
        content: "Legal Framework"
      },
      {
        type: "paragraph",
        content: "The Health and Safety at Work Act 1974 is the primary piece of legislation covering occupational health and safety in the UK. This act sets out the general duties that employers have towards employees and members of the public, and employees have to themselves and to each other."
      },
      {
        type: "paragraph",
        content: "The Electricity at Work Regulations 1989 specifically addresses electrical safety. These regulations place duties on employers, employees and self-employed persons to ensure that electrical systems are designed, constructed, and maintained to prevent danger."
      },
      {
        type: "list",
        content: "Key regulations include:",
        items: [
          "Health and Safety at Work Act 1974",
          "Electricity at Work Regulations 1989",
          "Management of Health and Safety at Work Regulations 1999",
          "Personal Protective Equipment at Work Regulations 1992",
          "Control of Substances Hazardous to Health (COSHH) Regulations 2002"
        ]
      },
      {
        type: "heading",
        content: "Risk Assessment"
      },
      {
        type: "paragraph",
        content: "Risk assessment is a systematic process of evaluating the potential risks that may be involved in a projected activity or undertaking. When conducting a risk assessment for electrical work, you need to:"
      },
      {
        type: "list",
        content: "Steps in risk assessment:",
        items: [
          "Identify the hazards",
          "Determine who might be harmed and how",
          "Evaluate the risks and decide on precautions",
          "Record your findings and implement them",
          "Review your assessment and update if necessary"
        ]
      },
      {
        type: "paragraph",
        content: "Common hazards in electrical work include electric shock, fire, burns, falls from height, and manual handling injuries."
      },
      {
        type: "heading",
        content: "Safe Working Practices"
      },
      {
        type: "paragraph",
        content: "Safe isolation procedures must be followed before working on electrical systems. The key steps are:"
      },
      {
        type: "list",
        content: "Safe isolation procedure:",
        items: [
          "Identify the circuit or equipment to be worked on",
          "Identify the correct point of isolation",
          "Isolate the supply",
          "Secure the isolation (lock off)",
          "Post warning notices",
          "Verify the isolation is effective",
          "Prove the test instrument on a known supply",
          "Test that equipment is dead",
          "Re-prove the test instrument on a known supply"
        ]
      }
    ],
    practical_tips: [
      "Always carry out a risk assessment before starting any electrical work",
      "Use the appropriate PPE for the task at hand",
      "Never work on live electrical equipment unless absolutely necessary and you are competent to do so",
      "Always follow safe isolation procedures",
      "Keep your work area clean and tidy to prevent trips and falls",
      "Report any hazards or near misses immediately"
    ]
  };

  return (
    <UnitPage
      unitNumber={unitNumber}
      title={title}
      description={description}
      content={content}
      learningOutcomes={learningOutcomes}
    >
      <div className="space-y-6 text-[#FFC900]/80">
        {/* Key Points */}
        <section>
          <h3 className="text-xl font-medium text-[#FFC900] mb-3">Key Points</h3>
          <ul className="list-disc pl-5 space-y-1">
            {courseContent.key_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
        
        {/* Main Content */}
        <section className="space-y-4">
          {courseContent.main_content.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index}>{block.content}</p>;
            } else if (block.type === "heading") {
              return <h4 key={index} className="text-lg font-medium text-[#FFC900] mt-4">{block.content}</h4>;
            } else if (block.type === "list" && block.items) {
              return (
                <div key={index}>
                  <p>{block.content}</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </section>
        
        {/* Practical Tips */}
        <section className="bg-[#151812] p-4 rounded-md border border-[#FFC900]/20">
          <h3 className="text-xl font-medium text-[#FFC900] mb-3">Practical Tips</h3>
          <ul className="list-disc pl-5 space-y-1">
            {courseContent.practical_tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>
        
        {/* Downloads and Resources */}
        <section className="pt-4">
          <h3 className="text-xl font-medium text-[#FFC900] mb-3">Resources</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 border-[#FFC900]/40 text-[#FFC900] hover:bg-[#FFC900]/10">
              <FileText className="h-4 w-4" />
              <span>HSE Electrical Safety Guide</span>
              <Download className="h-4 w-4 ml-auto" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 border-[#FFC900]/40 text-[#FFC900] hover:bg-[#FFC900]/10">
              <FileText className="h-4 w-4" />
              <span>Risk Assessment Template</span>
              <Download className="h-4 w-4 ml-auto" />
            </Button>
          </div>
        </section>
      </div>
    </UnitPage>
  );
};

export default Unit201Page;
